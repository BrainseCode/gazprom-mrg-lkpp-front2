import React, {useEffect, useState} from 'react'
import MeasuringComplex from '@/components/measuringComplex/MeasuringComplex'
import GeneralInfo from '@/components/measuringComplex/GeneralInfo'
import Value from '@/components/measuringComplex/Value'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import {useAuth} from "@/hooks/auth";
import axios from "@/lib/axios";

export default function Index() {
    const { user } = useAuth()
    const [contracts, setContracts] = useState([])
    const [indications, setIndications] = useState([])
    async function initiaContractslState() {
        const response = await axios.get(`/api/users/${user.id}/contracts`)
        const newContracts = response.data.data

        for (let contract of newContracts) {
            const response = await axios.get(`api/measuring-complexes/${contract?.id}`)
            let measuringComplex = response.data.data

            contract.measuringComplex = measuringComplex
        }
        setContracts(newContracts)
    }
    async function initialIndicationsState() {
        const response = await axios.get(`/api/indications`)
        const newIndications = response.data.data
        setIndications(newIndications)
    }

    useEffect(() => {
        if (user) {
            initiaContractslState()
            initialIndicationsState()
        }
        //вот тут мы их вызываем
        //так же тут можно записывать это все в global state (ReduxToolkit)
        return () => {}
    }, [user])
    return (
        <AppLayout>
            <Head>
                <title>Измерительные комплексы</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
                    <MeasuringComplex contracts={contracts}/>
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <GeneralInfo />
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <Value indications={indications}/>
                </div>
            </div>
        </AppLayout>
    )
}
