import React from 'react'
import styles from './actionСontract.module.css'
import classNames from 'classnames'

export default function ActionContract({contracts}) {
    const contract = contracts[0]
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
                Действия по договору
            </div>
            <div className="ml-4 mr-4">
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Дата регистрации
                    </label>
                    <div className="mt-1">
                        <input
                            type="date"
                            name="regis"
                            id="regis"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={contract?.registration_date.substring(0, 10)}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Дата начала договора
                    </label>
                    <div className="mt-1">
                        <input
                            type="date"
                            name="start"
                            id="start"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={contract?.start_date.substring(0, 10)}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Дата завершения
                    </label>
                    <div className="mt-1">
                        <input
                            type="date"
                            name="stop"
                            id="stop"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={contract?.end_date.substring(0, 10)}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Скан
                    </label>
                    <div className="mt-1">
                        <img
                            className="cursor-pointer"
                            src="/images/contr.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
