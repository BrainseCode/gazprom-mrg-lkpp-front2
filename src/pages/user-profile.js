import React from 'react'
import TableProfile from '@/components/userProfile/TableProfile'
import LegalInfo from '@/components/userProfile/LegalInfo'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

export default function UserProfile() {
    return (
        <AppLayout>
            <Head>
                <title>Профиль потребителя</title>
            </Head>
            <div className="content">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 2xl:col-span-6">
                        <TableProfile />
                    </div>
                    <div className="col-span-12 2xl:col-span-6">
                        <LegalInfo />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
