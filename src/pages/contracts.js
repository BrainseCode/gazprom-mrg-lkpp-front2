import React, {useEffect, useState} from 'react'
import TableContracts from '@/components/contracts/TableContracts'
import InformationContract from '@/components/contracts/InformationСontract'
import ActionContract from '@/components/contracts/ActionСontract'
import GasConsumingEquipment from '@/components/contracts/GasConsumingEquipment'
import SeparationGazEquipment from '@/components/contracts/SeparationGazEquipment'
import Indications from '@/components/contracts/Indications'
import MeasuringComplex from '@/components/contracts/MeasuringComplex'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import axios from "@/lib/axios"
import { useAuth } from '@/hooks/auth'


export default function Contracts() {
    const { user } = useAuth()
    const [contracts, setContracts] = useState([])
    const [measuringComplexes, setMeasuringComplexes] = useState([])
    async function initiaContractslState() {
        const response = await axios.get(`/api/users/${user.id}/contracts`)
        const newContracts = response.data.data
        setContracts(newContracts)
        let newMeasuringComplexes = []
        for (let contract of newContracts){
            const response = await axios.get(`api/measuring-complexes/${contract?.id}`)
            const newMeasuringComplex = response.data.data
            newMeasuringComplexes.push(newMeasuringComplex)
        }
        setMeasuringComplexes(newMeasuringComplexes)
    }
    useEffect(() => {
        if (user) {
            initiaContractslState()
        }
        //вот тут мы их вызываем
        //так же тут можно записывать это все в global state (ReduxToolkit)
        return () => {}
    }, [user])
    return (
        <AppLayout>
            <Head>
                <title>Договоры</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
                    <TableContracts contracts={contracts}/>
                </div>
                <div className="grid grid-cols-12 gap-6 pt-2">
                    <div className="col-span-12 2xl:col-span-6">
                        <InformationContract />
                    </div>
                    <div className="col-span-12 2xl:col-span-6">
                        <ActionContract contracts={contracts}/>
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
