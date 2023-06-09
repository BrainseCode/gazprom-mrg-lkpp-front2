'use client'

import { useAuth } from '@/hooks/auth'
import {Fragment, useEffect, useState} from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    Bars3BottomLeftIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NavLink from '@/components/NavLink'
import axios from "@/lib/axios";

import styles from './app.module.css'
// const username = 'ООО "Ветер"'

const roleUser = 3 //1 администратор 2 менеджер 3 пользователи
// const userId = 324324

let navigation = [
    {
        id: 1,
        name: 'Главная',
        href: '/home',
        icon: HomeIcon,
        current: true,
    },
    {
        id: 2,
        name: 'Профиль потребителя',
        href: '/user-profile',
        icon: UsersIcon,
        current: false,
    },
    {
        id: 3,
        name: 'Договоры',
        href: '/contracts',
        icon: FolderIcon,
        current: false,
    },
    {
        id: 4,
        name: 'Состояние расчетов',
        href: '/calculation-status',
        icon: CalendarIcon,
        current: false,
    },
    {
        id: 5,
        name: 'Измерительные комплексы',
        href: '/measuring-complex',
        icon: InboxIcon,
        current: false,
    },
    {
        id: 6,
        name: 'Архив калорийности',
        href: '/calorie-archive',
        icon: ChartBarIcon,
        current: false,
    },
    {
        id: 7,
        name: 'Обращения и заявки',
        href: '/user-applications',
        icon: InboxIcon,
        current: false,
    },
    {
        id: 8,
        name: 'Тех.поддержка',
        href: '/technical-support',
        icon: InboxIcon,
        current: false,
    },
    {
        id: 9,
        name: 'Сменить пароль',
        href: '/settings',
        icon: InboxIcon,
        current: false,
    },
]

if (roleUser === 1) {
    navigation = [
        {
            id: 1,
            name: 'Обработка заявок',
            href: '/petitions',
            icon: InboxIcon,
            current: true,
        },
        {
            id: 2,
            name: 'Управление аккаунтами',
            href: '/management-user',
            icon: InboxIcon,
            current: true,
        },
        ...navigation,
    ]
} else if (roleUser === 2) {
    navigation = [
        {
            id: 1,
            name: 'Обработка заявок',
            href: '/petition',
            icon: InboxIcon,
            current: true,
        },
        ...navigation,
    ]
}

const userNavigation = [
    { name: 'Профиль', href: '/user-profile' },
    { name: 'Сменить пароль', href: '/settings' },
    // { name: 'Выход', href: '/logout' },
]

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const [profile, setProfile] = useState([])
    const username = profile?.short_name
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const router = useRouter()
    const { logout } = useAuth()
    useEffect(() => {
        if (user) {
            initialProfileState()
        }
        return () => {}
    }, [user])

    async function initialProfileState() {
        const response = await axios.get(`api/user-profiles/${user?.id}`)
        const newProfile = response.data.data
        setProfile(newProfile)
    }

    return (
        <div>
            <Head>
                <title>Газпром Межрегионгаз Иваново</title>
            </Head>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40 md:hidden"
                    onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full">
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0">
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }>
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex flex-shrink-0 items-center px-4">
                                    <Link href="/">
                                        <Image
                                            width={120}
                                            height={60}
                                            className="h-8 w-auto"
                                            src="/images/settingsProfile.png"
                                            alt="Газпром"
                                        />
                                    </Link>
                                </div>
                                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                                    <nav className="space-y-1 px-2">
                                        {navigation.map(item => (
                                            <NavLink
                                                key={item.name}
                                                href={item.href}
                                                active={
                                                    router.pathname ===
                                                    item.href
                                                }
                                                className={classNames(
                                                    item.current
                                                        ? 'text-gray-900'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                                                )}>
                                                <item.icon
                                                    className={classNames(
                                                        item.current
                                                            ? 'text-gray-500'
                                                            : 'text-gray-400 group-hover:text-gray-500',
                                                        'mr-4 flex-shrink-0 h-6 w-6',
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className="w-14 flex-shrink-0" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
                    <div className="flex flex-shrink-0 items-center px-4">
                        <Link href="/" className="flex items-center">
                            <Image
                                width={300}
                                height={150}
                                className="w-auto"
                                src="/images/logo2.png"
                                alt="Газпром"
                            />
                        </Link>
                    </div>
                    <div className="mt-5 flex flex-grow flex-col">
                        <nav className="flex-1 space-y-1 px-2 pb-4">
                            {roleUser < 3 && (
                                <div className="flex">
                                    <span className="ml-1">Пользователь</span>
                                    <input
                                        className="ml-1 w-28 p-0"
                                        type="text"
                                        // value={user.id}
                                    />
                                </div>
                            )}
                            {navigation.map(item => (
                                <NavLink
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                                    )}
                                    active={router.pathname === item.href}>
                                    <item.icon
                                        className={classNames(
                                            item.current
                                                ? 'text-gray-500'
                                                : 'text-gray-400 group-hover:text-gray-500',
                                            'mr-3 flex-shrink-0 h-6 w-6',
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col md:pl-64">
                <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
                    <button
                        type="button"
                        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                        onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <Bars3BottomLeftIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                        />
                    </button>
                    <div className="flex flex-1 justify-between px-4">
                        <div className="flex flex-1">
                            <div className = 'w-full flex justify-center items-center'>
                                <div className={classNames(
                                        'w-96',
                                        'flex',
                                        'justify-center',
                                        'items-center',
                                        'rounded',
                                        styles.demo,
                                        )}>ДЕМОНСТРАЦИОННЫЙ РЕЖИМ</div>
                                </div>
                            </div>
                        <div className="ml-4 flex items-center md:ml-6">
                            <span>{username}</span>

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        <Image
                                            width={120}
                                            height={60}
                                            className="h-8 w-8 rounded-full"
                                            src="/images/settingsProfile.png"
                                            alt=""
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95">
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {userNavigation.map(item => (
                                            <Menu.Item key={item.name}>
                                                {({ active }) => (
                                                    <Link
                                                        href={item.href}
                                                        className={classNames(
                                                            active
                                                                ? 'bg-gray-100'
                                                                : '',
                                                            'block px-4 py-2 text-sm text-gray-700',
                                                        )}>
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        ))}
                                        <Menu.Item key="logout">
                                            {({ active }) => (
                                                <a
                                                    onClick={logout}
                                                    className={classNames(
                                                        active
                                                            ? 'bg-gray-100'
                                                            : '',
                                                        'block px-4 py-2 text-sm text-gray-700',
                                                    )}>
                                                    Выход
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>

                <main className="flex-1">
                    <div className="pt-2 pl-3 pr-3">{children}</div>
                </main>
            </div>
        </div>
    )
}

export default AppLayout
