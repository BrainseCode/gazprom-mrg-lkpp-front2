import React from 'react'
import styles from './generalInfo.module.css'
import classNames from 'classnames'

export default function GeneralInfo({meter, pressure, thermomether, calculator, powerUnit}) {
    let complexes = {
        meterName: 'Крутой счётчик',
        meterNumber: 'Т64',
        meterType: 'blank',
        meterDate: '22.09.2023',

        manometerName: 'Крутой Манометр',
        manometerNumber: 'ИЛ-76',
        manometerType: 'blank',
        manometerDate: '22.09.2023',

        thermometerName: 'Крутой Термометр',
        thermometerNumber: 'Т64',
        thermometerType: 'blank',
        thermometerDate: '22.09.2023',

        calculatorName: 'Крутой вычислитель',
        calculatorNumber: 'Т64y',
        calculatorType: 'blanku',
        calculatorDate: '22.09.2023',

        powerName: 'Крутой БП',
        powerNumber: 'Т64x',
        powerType: 'blank2',
        powerDate: '22.08.2023',
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
                Общая информация
            </div>
            <div className="ml-4 mr-4">
                <div className="mt-2 mb-2">
                    <div className="flex justify-between flex-wrap">
                        <div
                            className={classNames(
                                'w-96',
                                'mt-2',
                                'mb-2',
                                'rounded-lg',
                                styles.gazpromShadow,
                            )}>
                            <div
                                className={classNames(
                                    'flex',
                                    'justify-center',
                                    'rounded',
                                    'mb-2',
                                    styles.gazpromHead,
                                )}>
                                Счётчик
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
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
                                        defaultValue={meter?.name}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                                <label
                                    htmlFor="email"
                                    className="block text-left  text-sm font-medium text-gray-700">
                                    Номер
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="number"
                                        id="number"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        defaultValue={meter?.number}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                                <label
                                    htmlFor="email"
                                    className="block text-left text-sm font-medium text-gray-700">
                                    Типоразмер
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="type"
                                        id="type"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        defaultValue={meter?.type}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2 pb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-left text-sm font-medium text-gray-700">
                                    Дата поверки
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="date"
                                        id="date"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        defaultValue={meter?.verification_date?.substring(0, 10)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className={classNames(
                                'w-96',
                                'mt-2',
                                'mb-2',
                                'rounded-lg',
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
                                Манометр
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
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
                                        defaultValue={pressure?.name}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
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
                                        defaultValue={pressure?.number}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                                <label
                                    htmlFor="email"
                                    className="block text-left text-sm font-medium text-gray-700">
                                    Типоразмер
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="type"
                                        id="type"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        defaultValue={pressure?.type}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2 pb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-left text-sm font-medium text-gray-700">
                                    Дата поверки
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="date"
                                        id="date"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        defaultValue={pressure?.verification_date?.substring(0, 10)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className={classNames(
                                'w-96',
                                'mt-2',
                                'mb-2',
                                'rounded-lg',
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
                                Термометр
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
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
                                        defaultValue={thermomether?.name}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
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
                                        defaultValue={
                                            thermomether?.number
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                                <label
                                    htmlFor="email"
                                    className="block text-left text-sm font-medium text-gray-700">
                                    Типоразмер
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="type"
                                        id="type"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        defaultValue={thermomether?.type}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2 pb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-left text-sm font-medium text-gray-700">
                                    Дата поверки
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="date"
                                        id="date"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        defaultValue={thermomether?.verification_date?.substring(0, 10)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className={classNames(
                                'w-96',
                                'mt-2',
                                'mb-2',
                                'rounded-lg',
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
                                Вычислитель
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
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
                                        defaultValue={calculator?.name}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
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
                                        defaultValue={
                                            calculator?.number
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                                <label
                                    htmlFor="email"
                                    className="block text-left text-sm font-medium text-gray-700">
                                    Типоразмер
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="type"
                                        id="type"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        defaultValue={calculator?.type}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2 pb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-left text-sm font-medium text-gray-700">
                                    Дата поверки
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="date"
                                        id="date"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        defaultValue={calculator?.verification_date?.substring(0, 10)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div
                            className={classNames(
                                'w-96',
                                'mt-2',
                                'mb-2',
                                'rounded-lg',
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
                                Блок питания
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
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
                                        defaultValue={powerUnit?.name}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
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
                                        defaultValue={powerUnit?.number}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2">
                                <label
                                    htmlFor="email"
                                    className="block text-left text-sm font-medium text-gray-700">
                                    Типоразмер
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="type"
                                        id="type"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        defaultValue={powerUnit?.type}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-1 pl-2 pr-2 pb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-left text-sm font-medium text-gray-700">
                                    Дата поверки
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="date"
                                        id="date"
                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        defaultValue={powerUnit?.verification_date?.substring(0, 10)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
