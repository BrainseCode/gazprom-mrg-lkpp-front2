import React from 'react'
import MeasuringComplex from '@/components/measuringComplex/MeasuringComplex'
import GeneralInfo from '@/components/measuringComplex/GeneralInfo'
import Value from '@/components/measuringComplex/Value'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'

export default function Index() {
    return (
        <AppLayout>
            <Head>
                <title>Измерительные комплексы</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
                    <MeasuringComplex />
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <GeneralInfo />
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <Value />
                </div>
            </div>
        </AppLayout>
    )
}
