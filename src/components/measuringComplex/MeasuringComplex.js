import React from 'react'
import styles from './measuringComplex.module.css'
import classNames from 'classnames'

export default function MeasuringComplex() {
    let complexes = [
        {
            id: 1,
            address: 'Улица Ленина 43',
            device: '8232',
            contract: '№746647',
            volume: '565.00',
            plan: '565.00',
        },
        {
            id: 2,
            address: 'Улица Пушкина 43',
            device: '8020',
            contract: '№746647',
            volume: '565.00',
            plan: '565.00',
        },
        {
            id: 3,
            address: 'Улица Достоевского 43',
            device: '7200',
            contract: '№746647',
            volume: '565.00',
            plan: '565.00',
        },
        {
            id: 4,
            address: 'Улица Ленина 43',
            device: '8232',
            contract: '№746647',
            volume: '565.00',
            plan: '565.00',
        },
        {
            id: 5,
            address: 'Улица Пушкина 43',
            device: '8020',
            contract: '№746647',
            volume: '565.00',
            plan: '565.00',
        },
        {
            id: 6,
            address: 'Улица Достоевского 43',
            device: '7200',
            contract: '№746647',
            volume: '565.00',
            plan: '565.00',
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
                        <table
                            className={classNames(
                                'min-w-full',
                                'divide-y',
                                'divide-gray-200',
                                'table-fixed',
                            )}>
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-left text-xg font-bold">
                                        Адрес
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-center text-xg font-bold">
                                        Прибор учёта
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-center text-xg font-bold">
                                        Договор
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-center text-xg font-bold">
                                        Объем м3
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-2 text-right text-xg font-bold">
                                        План
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {complexes.map(complexe => (
                                    <tr key={complexe.id}>
                                        <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">
                                            {complexe.address}
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                            {complexe.device}
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                            {complexe.contract}
                                        </td>
                                        <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                            {complexe.volume}
                                        </td>
                                        <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                            {complexe.plan}
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
