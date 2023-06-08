import React, {useEffect, useState} from 'react'
import Calculation from '@/components/calculationStatus/Calculation'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useAuth} from "@/hooks/auth";
import axios from "@/lib/axios";

export default function CalculationStatus() {
    const { user } = useAuth()
    const [contracts, setContracts] = useState([])

    async function initiaContractslState() {
        const response = await axios.get(`/api/users/${user.id}/contracts`)
        const newContracts = response.data.data

        for (let contract of newContracts) {
            const responsePayGazDelivereds = await axios.get(`/api/contracts/${contract?.id}/pay-gas-delivereds`)
            contract.payGazDelivereds = responsePayGazDelivereds.data.data
            const responsePayGazPlanneds = await axios.get(`/api/contracts/${contract?.id}/pay-gas-planneds`)
            contract.payGazPlanneds = responsePayGazPlanneds.data.data
            const responsePayTovdgos = await axios.get(`/api/contracts/${contract?.id}/pay-tovdgos`)
            contract.payTovdgos = responsePayTovdgos.data.data
            const responsePayTotals = await axios.get(`/api/contracts/${contract?.id}/pay-totals`)
            contract.payTotals = responsePayTotals.data.data
        }
        setContracts(newContracts)
    }


    useEffect(() => {
        if (user) {
            initiaContractslState()

        }
        return () => {}
    }, [user])
    return (
        <AppLayout>
            <Head>
                <title>Состояние рассчётов</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
                    <Calculation contracts={contracts}/>
                </div>
            </div>
        </AppLayout>
    )
}
