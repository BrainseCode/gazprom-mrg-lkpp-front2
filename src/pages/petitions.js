import React from 'react'
import Petition from '@/components/petition/Petition'
import CreateInfo from '@/components/petition/CreateInfo'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import {useAuth} from "@/hooks/auth";

export default function Petitions() {
    const { user } = useAuth()
    return (
        <AppLayout>
            <Head>
                <title>Обработка заявок</title>
            </Head>
            <div className="content">
                <div className="grid grid-cols-1 gap-6">
                    <Petition />
                </div>
                <div className="grid grid-cols-1 gap-6 mt-2">
                    <CreateInfo />
                </div>
            </div>
        </AppLayout>
    )
}