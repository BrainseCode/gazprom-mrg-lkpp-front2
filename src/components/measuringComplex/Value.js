// import { useState } from 'react'
import styles from './value.module.css'
import dynamic from 'next/dynamic'
import classNames from 'classnames'
import React from "react";

export default function Value({indications}) {
    let categoriesDate = []
    let dataPlan = []
    let dataVolume = []

    if(indications) {
        for (const item of indications) {
            categoriesDate.push(item?.date)
            dataPlan.push(item?.plan)
            dataVolume.push(item?.volume)
        }
    }

    const ReactApexChart = dynamic(() => import('react-apexcharts'), {
        ssr: false,
    })
    const options = {
        chart: {
            height: 350,
            type: 'area',
            defaultLocale: 'ru',
            locales: [{
                name: 'ru',
                options: {
                months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
                shortMonths: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
                days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                toolbar: {
                    download: 'Download SVG',
                    selection: 'Selection',
                    selectionZoom: 'Selection Zoom',
                    zoomIn: 'Zoom In',
                    zoomOut: 'Zoom Out',
                    pan: 'Panning',
                    reset: 'Reset Zoom',
                }
                }
            }]
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            type: 'datetime',
            categories: categoriesDate,
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm',
            },
        },
    }

    const series = [
        {
            name: 'Договорной объём',
            data: dataPlan,
        },
        {
            name: 'Фактический объём',
            data: dataVolume,
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
                                <th
                                    scope="col"
                                    className="px-6 py-2 text-center text-xg font-bold">
                                    Статус
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {indications.map(indication => (
                                <tr key={indication?.id}>
                                    <td className="px-6 whitespace-nowrap pt-4 pb-4 text-left text-sm font-medium text-gray-900">
                                        {indication?.date.substring(0, 10)}
                                    </td>
                                    <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                        {indication?.plan}
                                    </td>
                                    <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                        {indication?.plan}
                                    </td>
                                    <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                        {indication?.volume}
                                    </td>
                                    <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                        {(indication?.volume - indication?.plan > 0)?indication?.volume - indication?.plan:0}
                                    </td>
                                    <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                        {indication?.status}
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
