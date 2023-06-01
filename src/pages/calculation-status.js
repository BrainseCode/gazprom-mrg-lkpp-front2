import React from 'react'
import Calculation from '@/components/calculationStatus/Calculation'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

export default function CalculationStatus() {
    return (
        <AppLayout>
            <Head>
                <title>Состояние рассчётов</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
                    <Calculation />
                </div>
            </div>
        </AppLayout>
    )
}
