import React, {useEffect, useState} from 'react'
import SearchApp from '@/components/userApplications/SearchApp'
import CreateApp from '@/components/userApplications/CreateApp'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import axios from "@/lib/axios";
import {useAuth} from "@/hooks/auth";

export default function UserApplications() {
    const { user } = useAuth()
    const [requests, setRequests] = useState([])
    async function initialRequestsState() {
        const response = await axios.get(`api/universal-requests/`)
        const newRequests = response.data.data
        setRequests(newRequests)
    }
    useEffect(() => {
        if (user) {
            initialRequestsState()
        }
        //вот тут мы их вызываем
        //так же тут можно записывать это все в global state (ReduxToolkit)
        return () => {}
    }, [user])
    return (
        <AppLayout>
            <Head>
                <title>Обращения и заявки</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
                    <SearchApp requests={requests}/>
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <CreateApp />
                </div>
            </div>
        </AppLayout>
    )
}
