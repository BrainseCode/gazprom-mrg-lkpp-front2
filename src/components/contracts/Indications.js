import React from 'react'
import styles from './indications.module.css'
import classNames from 'classnames'

export default function Indications() {
    let elem = [
        {
            id: 1,
            date: '01.06.2023',
            day: '180.00',
            maxday: '220.00',
            factday: '155.00',
            overspending: '0.0',
        },
        {
            id: 2,
            date: '02.06.2023',
            day: '180.00',
            maxday: '220.00',
            factday: '155.00',
            overspending: '0.0',
        },
        {
            id: 3,
            date: '03.06.2023',
            day: '180.00',
            maxday: '220.00',
            factday: '155.00',
            overspending: '0.0',
        },
        {
            id: 4,
            date: '04.06.2023',
            day: '180.00',
            maxday: '220.00',
            factday: '155.00',
            overspending: '0.0',
        },
        {
            id: 5,
            date: '05.06.2023',
            day: '180.00',
            maxday: '220.00',
            factday: '155.00',
            overspending: '0.0',
        },
        {
            id: 6,
            date: '06.06.2023',
            day: '180.00',
            maxday: '220.00',
            factday: '155.00',
            overspending: '0.0',
        },
        {
            id: 7,
            date: '07.06.2023',
            day: '180.00',
            maxday: '220.00',
            factday: '155.00',
            overspending: '0.0',
        },
    ]

    const date = new Date()
    const futureDate = date.getDate() - 1
    date.setDate(futureDate)
    const defaultValue = date.toLocaleDateString('en-CA')

    const queryArh = () => {
        console.log('Запрос архива с бэка')
        alert('Запрос архива с бэка')
    }

    const mmArh = () => {
        queryArh()
    }

    const nnArh = () => {
        const date = new Date()
        const futureDate = date.getDate() - 7
        date.setDate(futureDate)
        const val = date.toLocaleDateString('en-CA')

        queryArh()
    }

    const ddArh = () => {
        const date = new Date()
        const futureDate = date.getDate() - 1
        date.setDate(futureDate)
        const val = date.toLocaleDateString('en-CA')

        queryArh()
    }

    const akt = () => {
        console.log('Сформировать акт')
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
                Показания
            </div>
            <div className="ml-4 mr-4">
                <div className="mt-1 mb-5">
                    <div className={classNames(styles.scrollTable)}>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-left text-xg font-bold">
                                        Дата
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-center text-xg font-bold">
                                        Договорной объём
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-center text-xg font-bold">
                                        Максимальный договорной объём
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-center text-xg font-bold">
                                        Фактический объём
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-center text-xg font-bold">
                                        Перерасход газа
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {elem.map(el => (
                                    <tr key={el.id}>
                                        <td className="px-6 whitespace-nowrap pt-4 pb-4 text-left text-sm font-medium text-gray-900">
                                            {el.date}
                                        </td>
                                        <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                            {el.day}
                                        </td>
                                        <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                            {el.maxday}
                                        </td>
                                        <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                            {el.factday}
                                        </td>
                                        <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                            {el.overspending}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div className="flex">
                            <div>
                                <input
                                    type="date"
                                    name="date1"
                                    id="date1"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    defaultValue={defaultValue}
                                />
                            </div>
                            <div className="ml-2">
                                <input
                                    type="date"
                                    name="date2"
                                    id="date2"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    defaultValue={defaultValue}
                                />
                            </div>
                            <div className="ml-2">
                                <button
                                    className={classNames(
                                        styles.btn,
                                        styles.btnBlue,
                                        styles.gazpromButton,
                                    )}
                                    onClick={ddArh}>
                                    День
                                </button>
                            </div>
                            <div className="ml-2">
                                <button
                                    className={classNames(
                                        styles.btn,
                                        styles.btnBlue,
                                        styles.gazpromButton,
                                    )}
                                    onClick={nnArh}>
                                    Неделя
                                </button>
                            </div>
                            <div className="ml-2">
                                <button
                                    className={classNames(
                                        styles.btn,
                                        styles.btnBlue,
                                        styles.gazpromButton,
                                    )}
                                    onClick={mmArh}>
                                    Месяц
                                </button>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="ml-2">
                                <button
                                    className={classNames(
                                        styles.btn,
                                        styles.btnBlue,
                                        'mr-10',
                                        'mb-2',
                                        styles.gazpromButton,
                                    )}
                                    onClick={akt}>
                                    Сформировать акт
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
