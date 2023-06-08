import React from 'react'
import classNames from 'classnames'
import styles from './measuringComplex.module.css'

export default function MeasuringComplex({measuringComplexes}) {
    let elem = [
        {
            id: 1,
            doc: 'Заявка на перерасчёт',
            date: '01.06.2023',
            status: 'Активный',
            action: '',
        },
        {
            id: 2,
            doc: 'Заявка на перерасчёт',
            date: '01.06.2023',
            status: 'Активный',
            action: '',
        },
        {
            id: 3,
            doc: 'Заявка на перерасчёт',
            date: '01.06.2023',
            status: 'Активный',
            action: '',
        },
        {
            id: 4,
            doc: 'Заявка на перерасчёт',
            date: '01.06.2023',
            status: 'Активный',
            action: '',
        },
        {
            id: 5,
            doc: 'Заявка на перерасчёт',
            date: '01.06.2023',
            status: 'Активный',
            action: '',
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
                Измерительные комплексы
            </div>
            <div className="ml-4 mr-4">
                <div className="mt-1 mb-5">
                    <div className={classNames(styles.scrollTable)}>
                        <table className="min-w-full divide-y divide-gray-200">
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
                            {measuringComplexes?.map(complexe => (
                                <tr key={complexe?.id}>
                                    <td className="px-6 text-left whitespace-nowrap text-sm font-medium text-gray-900">
                                        {complexe?.address}
                                    </td>
                                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                        {complexe?.pribor}
                                    </td>
                                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                        {complexe?.number}
                                    </td>
                                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                        {complexe?.value}
                                    </td>
                                    <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                        {complexe?.plan}
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
            </div>
        </div>
    )
}
