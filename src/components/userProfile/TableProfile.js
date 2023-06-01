import React from 'react'
import classNames from 'classnames'
import styles from './TableProfile.module.css'

export default function TableProfile() {
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
                styles.gazHeing,
            )}>
            <div
                className={classNames(
                    'w-full',
                    'flex',
                    'justify-center',
                    'rounded-t-lg',
                    styles.gazpromHead,
                )}>
                Профиль
            </div>
            <div className="ml-4 mr-4">
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Наименование контрагента
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="agent"
                            id="agent"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Полное название
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Ответственно лицо
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="face"
                            id="face"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Общий телефон
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Телефон ответственного
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="phoneuser"
                            id="phoneuser"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Эл почта
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="mail"
                            id="mail"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Юр. адрес
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="legal"
                            id="legal"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Физ. адрес
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="phyadress"
                            id="phyadress"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex">
                    <button
                        className={classNames(
                            styles.btn,
                            styles.btnBlue,
                            'mt-2',
                            'mb-2',
                            styles.mt148,
                            styles.gazpromButton,
                        )}>
                        Подать заявку на редактирование
                    </button>
                </div>
            </div>
        </div>
    )
}
