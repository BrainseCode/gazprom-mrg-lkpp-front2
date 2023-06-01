import React from 'react'
import SearchApp from '@/components/userApplications/SearchApp'
import CreateApp from '@/components/userApplications/CreateApp'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'

export default function UserApplications() {
    return (
        <AppLayout>
            <Head>
                <title>Обращения и заявки</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
                    <SearchApp />
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <CreateApp />
                </div>
            </div>
        </AppLayout>
    )
}
