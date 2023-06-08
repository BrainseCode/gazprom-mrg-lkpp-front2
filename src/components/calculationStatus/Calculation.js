import React from 'react'
import styles from './Calculation.module.css'
import classNames from 'classnames'

export default function Calculation({contracts}) {
    let count = {
        summ: '6 940.77 руб',
        table: [
            { id: 1, date: 'Апрель 2023', money: '2 313.44 руб' },
            { id: 2, date: 'Май 2023', money: '2 313.55 руб' },
            { id: 3, date: 'Июнь 2023', money: '2 313.78 руб' },
        ],
        mm: 'за июнь 2023г',
        planSumm: '1 800.00 руб',
        commitments: [
            { id: 1, text: '35% плановой стоимости', summ: '800.00 руб' },
            { id: 2, text: '50% плановой стоимости', summ: '1 000.00 руб' },
        ],
        summvdgo: '1 000.00 руб',
        tablevdgo: [
            { id: 1, date: 'Апрель 2023', money: '2 313.44 руб' },
            { id: 2, date: 'Май 2023', money: '2 313.55 руб' },
            { id: 3, date: 'Июнь 2023', money: '2 313.78 руб' },
        ],
        total: '12 323.50 руб',
        nds: '6 867.00 руб',
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
                Состояние расчетов
            </div>
            <div className="ml-4 mr-4">
                <div className="mt-1 mb-5">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-2 text-left text-xg font-bold">
                                    Обязательства по оплате фактически
                                    поставленного газа
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-2 text-right text-xg font-bold">
                                    {contracts[0]?.payTotals[0]?.pay_delivered} руб
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {contracts[0]?.payGazDelivereds?.map(payGazDelivered => (
                                <tr key={payGazDelivered?.id}>
                                    <td className="px-6 text-left whitespace-nowrap text-sm font-medium text-gray-900">
                                        Дата {payGazDelivered?.date.substring(0, 10)}
                                    </td>
                                    <td className="px-6 text-right whitespace-nowrap text-sm text-gray-500">
                                        {payGazDelivered?.summ} руб
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-1 mb-5">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-2 text-left text-xg font-bold">
                                    Обязательства по оплате плановых объемов
                                    потребления 2023г
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-2 text-right text-xg font-bold">
                                    {contracts[0]?.payTotals[0]?.pay_planned} руб
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {contracts[0]?.payGazPlanneds?.map(payGazPlanned => (
                                <tr key={payGazPlanned?.id}>
                                    <td className="px-6 text-left whitespace-nowrap text-sm font-medium text-gray-900">
                                        {payGazPlanned?.Percent}% плановой стоимости
                                    </td>
                                    <td className="px-6 text-right whitespace-nowrap text-sm text-gray-500">
                                        {payGazPlanned?.summ} руб
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-1 mb-5">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-2 text-left text-xg font-bold">
                                    Обязательства по оплате ТОВДГО
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-2 text-right text-xg font-bold">
                                    {contracts[0]?.payTotals[0]?.pay_tovdgo} руб
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {contracts[0]?.payTovdgos?.map(payTovdgo => (
                                <tr key={payTovdgo?.id}>
                                    <td className="px-6 text-left whitespace-nowrap text-sm font-medium text-gray-900">
                                        Дата {payTovdgo?.date.substring(0, 10)}
                                    </td>
                                    <td className="px-6 text-right whitespace-nowrap text-sm text-gray-500">
                                        {payTovdgo?.summ} руб
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-1 mb-5">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-2 text-left text-xg font-bold">
                                    Итого
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-2 text-right text-xg font-bold">
                                    {contracts[0]?.payTotals[0]?.total} руб
                                </th>
                            </tr>
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-2 text-left text-xg font-bold">
                                    НДС
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-2 text-right text-xg font-bold">
                                    {contracts[0]?.payTotals[0]?.total_nds} руб
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}
