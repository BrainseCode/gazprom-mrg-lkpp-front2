import React from 'react'
import styles from './informationСontract.module.css'
import classNames from 'classnames'

export default function InformationContract() {
    return (
        <div
            className={classNames(
                'flex',
                'flex-col',
                'w-full',
                'bg-white',
                'rounded',
                'h-73',
                'pb-18',
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
                Информация по договору
            </div>
            <div className="ml-4 mr-4">
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Номер
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="number"
                            id="number"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Наименование
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Вид
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="view"
                            id="view"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Отчетный час
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="hour"
                            id="hour"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mb-5"
                            placeholder=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
