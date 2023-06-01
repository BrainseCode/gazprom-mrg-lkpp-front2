import React from 'react'
import TableContracts from '@/components/contracts/TableContracts'
import InformationContract from '@/components/contracts/InformationСontract'
import ActionContract from '@/components/contracts/ActionСontract'
import GasConsumingEquipment from '@/components/contracts/GasConsumingEquipment'
import SeparationGazEquipment from '@/components/contracts/SeparationGazEquipment'
import Indications from '@/components/contracts/Indications'
import MeasuringComplex from '@/components/contracts/MeasuringComplex'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'

export default function Contracts() {
    return (
        <AppLayout>
            <Head>
                <title>Договоры</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
                    <TableContracts />
                </div>
                <div className="grid grid-cols-12 gap-6 pt-2">
                    <div className="col-span-12 2xl:col-span-6">
                        <InformationContract />
                    </div>
                    <div className="col-span-12 2xl:col-span-6">
                        <ActionContract />
                    </div>
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <GasConsumingEquipment />
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <SeparationGazEquipment />
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <Indications />
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <MeasuringComplex />
                </div>
            </div>
        </AppLayout>
    )
}
