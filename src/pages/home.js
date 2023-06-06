import React, { useEffect, useState } from 'react'
import TableProfile from '@/components/home/TableProfile'
import TableContracts from '@/components/home/TableContracts'
import MeasuringComplexes from '@/components/home/MeasuringComplexes'
import Appeals from '@/components/home/Appeals'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
// import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
export default function Home() {
    const { user } = useAuth()
    const [profile, setProfile] = useState([])
    const [contracts, setContracts] = useState([])
    async function initialProfileState() {
        const response = await axios.get(`api/user-profiles/${user?.id}`)
        const newProfile = response.data.data
        setProfile(newProfile)
    }
    async function initiaContractslState() {
        const response = await axios.get(`/api/users/${user.id}/contracts`)
        const newContracts = response.data.data
        setContracts(newContracts)
    }

    useEffect(() => {
        if (user) {
            initialProfileState()
            initiaContractslState()
        }
        //вот тут мы их вызываем
        //так же тут можно записывать это все в global state (ReduxToolkit)
        return () => {}
    }, [user])

    return (
        <AppLayout>
            <Head>
                <title>Главная</title>
            </Head>
            <div className="content">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 2xl:col-span-6">
                        <TableProfile user={user} profile={profile}/>
                    </div>
                    <div className="col-span-12 2xl:col-span-6">
                        <TableContracts contracts={contracts} />
                    </div>
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <MeasuringComplexes />
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <Appeals />
                </div>
            </div>
        </AppLayout>
    )
}
