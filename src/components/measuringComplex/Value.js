// import { useState } from 'react'
import styles from './value.module.css'
import dynamic from 'next/dynamic'
import classNames from 'classnames'

export default function Value() {
    const ReactApexChart = dynamic(() => import('react-apexcharts'), {
        ssr: false,
    })
    const options = {
        chart: {
            height: 350,
            type: 'area',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2018-09-19T00:00:00.000Z',
                '2018-09-19T01:30:00.000Z',
                '2018-09-19T02:30:00.000Z',
                '2018-09-19T03:30:00.000Z',
                '2018-09-19T04:30:00.000Z',
                '2018-09-19T05:30:00.000Z',
                '2018-09-19T06:30:00.000Z',
            ],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
    }

    const series = [
        {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41],
        },
    ]

    let complexes = [
        {
            id: 1,
            date: '22.06.23',
            source: 'ЛК',
            volume: '746 647',
            plan: '565 323',
            status: 'Активно',
        },
        {
            id: 2,
            date: '22.06.23',
            source: 'ЛК',
            volume: '746 647',
            plan: '565 323',
            status: 'Активно',
        },
        {
            id: 3,
            date: '22.06.23',
            source: 'ЛК',
            volume: '746 647',
            plan: '565 323',
            status: 'Активно',
        },
        {
            id: 4,
            date: '22.06.23',
            source: 'ЛК',
            volume: '746 647',
            plan: '565 323',
            status: 'Активно',
        },
        {
            id: 5,
            date: '22.06.23',
            source: 'ЛК',
            volume: '746 647',
            plan: '565 323',
            status: 'Активно',
        },
        {
            id: 6,
            date: '22.06.23',
            source: 'ЛК',
            volume: '746 647',
            plan: '565 323',
            status: 'Активно',
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
        // const val = date.toLocaleDateString('en-CA')

        queryArh()
    }

    const ddArh = () => {
        const date = new Date()
        const futureDate = date.getDate() - 1
        date.setDate(futureDate)
        // const val = date.toLocaleDateString('en-CA')

        queryArh()
    }

    const valueClient = () => {
        console.log('Здесь как то передаем показания')
        alert('Здесь как то передаем показания')
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
                                    styles.gazpromButton,
                                )}
                                onClick={valueClient}>
                                Передать показания
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-5 mb-5">
                    <div className={classNames(styles.scrollTable)}>
                        <table className="min-w-full divide-y divide-gray-200 table-fixed">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-left text-xg font-bold">
                                        Дата
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-center text-xg font-bold">
                                        Источник
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-center text-xg font-bold">
                                        Объём м3
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-center text-xg font-bold">
                                        План м3
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-right text-xg font-bold">
                                        Статус
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {complexes.map(complexe => (
                                    <tr key={complexe.id}>
                                        <td className="px-6 pt-4 pb-4 text-left whitespace-nowrap text-sm font-medium text-gray-900">
                                            {complexe.date}
                                        </td>
                                        <td className="px-6 pt-4 pb-4 text-center whitespace-nowrap text-sm text-gray-500">
                                            {complexe.source}
                                        </td>
                                        <td className="px-6 pt-4 pb-4 text-center whitespace-nowrap text-sm text-gray-500">
                                            {complexe.volume}
                                        </td>
                                        <td className="px-6 pt-4 pb-4 text-center whitespace-nowrap text-sm text-gray-500">
                                            {complexe.plan}
                                        </td>
                                        <td className="px-6 pt-4 pb-4 text-right whitespace-nowrap text-sm text-gray-500">
                                            {complexe.status}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-1 mb-5">
                    <div id="chart">
                        {typeof window !== 'undefined' && (
                            <ReactApexChart
                                options={options}
                                series={series}
                                type="area"
                                height={350}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
