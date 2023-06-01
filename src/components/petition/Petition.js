import React from 'react'
import styles from './petition.module.css'
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'

export default function UpdateApplications() {
    const tabs = [
        {
            name: 'Заявки о заключении договора ТП',
            features: [
                {
                    id: 1,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 2,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 3,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 4,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 5,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 6,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 7,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 8,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
            ],
        },
        {
            name: 'Заявки на изменение годового объема',
            features: [
                {
                    id: 1,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Ростелеком',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 2,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Ростелеком',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 3,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Ростелеком',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 4,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Ростелеком',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 5,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Ростелеком',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 6,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Ростелеком',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 7,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Ростелеком',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 8,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Ростелеком',
                    status: 'Активна',
                    action: '',
                },
            ],
        },
        {
            name: 'Заявки на вызов метролога',
            features: [
                {
                    id: 1,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао МТС',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 2,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао МТС',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 3,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао МТС',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 4,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао МТС',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 5,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао МТС',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 6,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао МТС',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 7,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао МТС',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 8,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао МТС',
                    status: 'Активна',
                    action: '',
                },
            ],
        },
        {
            name: 'Заявки на изменение данных',
            features: [
                {
                    id: 1,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Сбер',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 2,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Сбер',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 3,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Сбер',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 4,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Сбер',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 5,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Сбер',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 6,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Сбер',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 7,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Сбер',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 8,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Сбер',
                    status: 'Активна',
                    action: '',
                },
            ],
        },
        {
            name: 'Прочие заявки',
            features: [
                {
                    id: 1,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 2,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 3,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 4,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 5,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 6,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 7,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
                {
                    id: 8,
                    document: '2312',
                    dateCreate: '22.04.2023',
                    user: 'Пао Т Плюс',
                    status: 'Активна',
                    action: '',
                },
            ],
        },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
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
                Обработка заявок
            </div>
            <div className="ml-4 mr-4">
                <div className="mt-1 mb-5">
                    <div className="bg-white">
                        <section aria-labelledby="features-heading">
                            <Tab.Group as="div" className="mt-4">
                                <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                                    <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                                        <Tab.List className="-mb-px flex space-x-10">
                                            {tabs.map(tab => (
                                                <Tab
                                                    key={tab.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected
                                                                ? 'border-indigo-500 text-indigo-600'
                                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                            'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                                                        )
                                                    }>
                                                    {tab.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                </div>
                                <Tab.Panels as={Fragment}>
                                    {tabs.map(tab => (
                                        <Tab.Panel
                                            key={tab.name}
                                            className="space-y-16 pt-6">
                                            <div
                                                className={classNames(
                                                    styles.scrollTable,
                                                )}>
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead>
                                                        <tr>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-1 text-left text-xg font-bold">
                                                                Документ
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-1 text-center text-xg font-bold">
                                                                Дата создания
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-1 text-center text-xg font-bold">
                                                                Пользователь
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-1 text-center text-xg font-bold">
                                                                Статус
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                className="px-6 py-1 text-right text-xg font-bold">
                                                                Действия
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200">
                                                        {tab.features.map(
                                                            feature => (
                                                                <tr
                                                                    key={
                                                                        feature.id
                                                                    }>
                                                                    <td className="px-6 text-left whitespace-nowrap text-sm font-medium text-gray-900">
                                                                        {
                                                                            feature.document
                                                                        }
                                                                    </td>
                                                                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                                                        {
                                                                            feature.dateCreate
                                                                        }
                                                                    </td>
                                                                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                                                        {
                                                                            feature.user
                                                                        }
                                                                    </td>
                                                                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                                                        {
                                                                            feature.status
                                                                        }
                                                                    </td>
                                                                    <td className="px-6 text-right whitespace-nowrap text-sm font-medium">
                                                                        <button
                                                                            className={classNames(
                                                                                styles.btn,
                                                                                styles.btnBlue,
                                                                                'mt-2',
                                                                                'mb-2',
                                                                                styles.gazpromButton,
                                                                            )}>
                                                                            Обработать
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ),
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
