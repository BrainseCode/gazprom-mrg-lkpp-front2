import React from 'react'
import styles from '@/components/technicalSupport/technicalSupport.module.css'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import classNames from 'classnames'
// import faq from '../../assets/images/faq.png'

const faqs = [
    {
        question: 'Авторизация',
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: 'Главная страницы web приложения',
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: 'Профиль учетной записи',
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: 'Лицевые счета',
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: 'Приборы учета',
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: 'Создание заявки',
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
]

export default function TechnicalSupport() {
    return (
        <AppLayout>
            <Head>
                <title>Техническая поддержка</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
                    <div
                        className={classNames(
                            'flex',
                            'flex-col',
                            'w-full',
                            'bg-white',
                            'rounded',
                            'h-73',
                            styles.gazpromShadow,
                        )}>
                        <div
                            className={classNames(
                                'w-full',
                                'flex',
                                'justify-center',
                                'rounded-t-lg',
                                styles.gazpromHead,
                            )}>
                            Часто задаваемые вопросы
                        </div>
                        <div className="ml-4 mr-4 mt-5">
                            <div className="mt-1 mb-5">
                                <dl className="space-y-6 divide-y divide-gray-900/10">
                                    {faqs.map(faq => (
                                        <Disclosure
                                            as="div"
                                            key={faq.question}
                                            className="pt-1">
                                            {({ open }) => (
                                                <>
                                                    <dt>
                                                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 gazprom-head ml-2 mr-2">
                                                            <span className="text-base font-semibold leading-7 ml-2">
                                                                {faq.question}
                                                            </span>
                                                            <span className="ml-6 flex h-7 items-center mr-5">
                                                                {open ? (
                                                                    <PlusSmallIcon
                                                                        className="h-6 w-6"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <MinusSmallIcon
                                                                        className="h-6 w-6"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </dt>
                                                    <Disclosure.Panel
                                                        as="dd"
                                                        className="mt-2 pr-12">
                                                        <p className="text-base leading-7 text-gray-600 ml-5">
                                                            {faq.answer}
                                                        </p>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <div
                        className={classNames(
                            'flex',
                            'flex-col',
                            'w-full',
                            'bg-white',
                            'rounded',
                            'h-73',
                            styles.gazpromShadow,
                        )}>
                        <div
                            className={classNames(
                                'w-full',
                                'flex',
                                'justify-center',
                                'rounded-t-lg',
                                styles.gazpromHead,
                            )}>
                            Документация
                        </div>
                        <div className="ml-4 mr-4 mt-5">
                            <div className="mt-1 mb-5">
                                <div className="flex items-center ml-2">
                                    <img src="/images/faq.png" alt="" />
                                    <span className="ml-2">
                                        Подключение к веб приложению
                                    </span>
                                </div>
                                <div className="flex mt-4 items-center ml-2">
                                    <img src="/images/faq.png" alt="" />
                                    <span className="ml-2">
                                        Руководство пользователя
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-end mt-2">
                                <div>
                                    <button
                                        className={classNames(
                                            styles.btn,
                                            styles.btnBlue,
                                            'mt-2',
                                            'mb-2',
                                            styles.gazpromButton,
                                        )}>
                                        Обратиться в тех поддержку
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
