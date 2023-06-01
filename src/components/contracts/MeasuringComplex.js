import React from 'react'
import classNames from 'classnames'
import styles from './measuringComplex.module.css'

export default function MeasuringComplex() {
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
                        <table className="min-w-full divide-y divide-gray-200 table-fixed">
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
                                        Дата
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
                                {elem.map(el => (
                                    <tr key={el.id}>
                                        <td className="px-6 text-left whitespace-nowrap text-sm font-medium text-gray-900">
                                            {el.doc}
                                        </td>
                                        <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                            {el.date}
                                        </td>
                                        <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                            {el.status}
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
                    <div className="flex justify-end mt-2">
                        <div>
                            <button
                                className={classNames(
                                    styles.btn,
                                    styles.btnBlue,
                                    'mr-10',
                                    styles.gazpromButton,
                                )}>
                                Передать показания
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
