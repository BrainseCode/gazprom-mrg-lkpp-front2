// import React, { useState } from 'react'
import styles from './searchCalorieArchive.module.css'
import dynamic from 'next/dynamic'
import classNames from 'classnames'

export default function SearchCalorieArchive({contracts}) {
    const archivData = contracts[0]?.calorieArchives
    let categoriesDate = []
    let dataCaloric = []

    if(archivData) {
        for (const item of archivData) {
            categoriesDate.push(item?.date)
            dataCaloric.push(item?.caloric)
        }
    }

    // const [chart, setChart] = useState(test1);
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
            name: 'Калорийность объекта',
            data: dataCaloric,
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
                Поиск в архиве
            </div>
            <div className="ml-4 mr-4">
                <div className="mt-1 mb-5">
                    <div className="flex justify-start">
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
                </div>
                <div className="mt-1 mb-5">
                    <div id="chart">
                        {typeof window !== 'undefined' && (
                            <ReactApexChart
                                type="area"
                                options={options}
                                series={series}
                                height={350}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
