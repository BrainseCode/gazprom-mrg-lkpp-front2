import React, {useEffect, useState} from 'react'
import Calorie from '@/components/calorieArchive/Calorie'
import SearchCalorieArchive from '@/components/calorieArchive/SearchCalorieArchive'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import {useAuth} from "@/hooks/auth";
import axios from "@/lib/axios";

export default function CalorieArchive() {
    const { user } = useAuth()
    const [contracts, setContracts] = useState([])

    async function initiaContractslState() {
        const response = await axios.get(`/api/users/${user.id}/contracts`)
        const newContracts = response.data.data

        for (let contract of newContracts) {
            const responseCalorieArchives = await axios.get(`/api/contracts/${contract?.id}/calorie-archives`)
            contract.calorieArchives = responseCalorieArchives.data.data
        }
        setContracts(newContracts)
    }

    useEffect(() => {
        if (user) {
            initiaContractslState()
        }
        //так же тут можно записывать это все в global state (ReduxToolkit)
        return () => {}
    }, [user])
    return (
        <AppLayout>
            <Head>
                <title>Архив калорийности</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
                    <Calorie contracts={contracts}/>
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <SearchCalorieArchive contracts={contracts}/>
                </div>
            </div>
        </AppLayout>
    )
}
