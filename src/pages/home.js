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
    const [contracts, setContracts] = useState([])
    async function initialState() {
        const response = await axios.get(`/api/users/${user.id}/contracts`)
        const newContracts = response.data.data
        setContracts(newContracts)
    }

    useEffect(() => {
        if (user) {
            initialState()
        }
        //вот тут мы их вызываем
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
                        <TableProfile />
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
