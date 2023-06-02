import React from 'react'
import styles from './Appeals.module.css'
import classNames from 'classnames'

export default function Appeals() {
    let complexes = [
        {
            id: 1,
            address: 'Город Иваново, улица ленинина дом 54 корпус 2',
            device: 'Д6',
            contract: 'Активный',
            volume: '10 440.00 руб.',
            plan: '2323',
        },
        {
            id: 2,
            address: 1,
            device: 'Д6',
            contract: 'Активный',
            volume: '10 440.00 руб.',
            plan: '2323',
        },
        {
            id: 3,
            address: 1,
            device: 'Д6',
            contract: 'Активный',
            volume: '10 440.00 руб.',
            plan: '2323',
        },
        {
            id: 4,
            address: 1,
            device: 'Д6',
            contract: 'Активный',
            volume: '10 440.00 руб.',
            plan: '2323',
        },
        {
            id: 5,
            address: 1,
            device: 'Д6',
            contract: 'Активный',
            volume: '10 440.00 руб.',
            plan: '2323',
        },
        {
            id: 6,
            address: 1,
            device: 'Д6',
            contract: 'Активный',
            volume: '10 440.00 руб.',
            plan: '2323',
        },
    ]
    return (
        <div
            className={classNames(
                'flex',
                'flex-col',
                'w-full',
                'bg-white',
                'rounded',
                'rounded-md',
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
                Обращения и заявки
            </div>
            <div className="ml-4 mr-4">
                <div className="mt-1 mb-5">
                    <div className={classNames(styles.scrollTable)}>
                        <table className="min-w-full divide-y divide-gray-200 table-fixed">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-left text-xg font-bold">
                                        Адрес
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-center text-xg font-bold">
                                        Прибор учета
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-center text-xg font-bold">
                                        Договор
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-center text-xg font-bold">
                                        Объём
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-center text-xg font-bold">
                                        План
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-right text-xg font-bold">
                                        Действия
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {complexes.map(complexe => (
                                    <tr key={complexe.id}>
                                        <td className="px-6 text-left whitespace-nowrap text-sm font-medium text-gray-900">
                                            {complexe.address}
                                        </td>
                                        <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                            {complexe.device}
                                        </td>
                                        <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                            {complexe.contract}
                                        </td>
                                        <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                            {complexe.volume}
                                        </td>
                                        <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                            {complexe.plan}
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
                                                Подробнее
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-end mt-2 mr-5">
                    <div className="mr-2">
                        <button
                            className={classNames(
                                styles.btn,
                                styles.btnBlue,
                                'mt-2',
                                'mb-2',
                                styles.gazpromButton,
                            )}>
                            Создать обращение
                        </button>
                    </div>
                    <div>
                        <button
                            className={classNames(
                                styles.btn,
                                styles.btnBlue,
                                'mt-2',
                                'mb-2',
                                'mr-5',
                                styles.gazpromButton,
                            )}>
                            Создать заявку
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
