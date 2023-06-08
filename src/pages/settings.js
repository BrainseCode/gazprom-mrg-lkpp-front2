import React from 'react'
import UserSettings from '@/components/settings/UserSettings'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'

export default function Settings() {
    return (
        <AppLayout>
            <Head>
                <title>Настройки</title>
            </Head>
            <div className="content">
                <div className="grid grid-cols-1 gap-6">
                    <UserSettings />
                </div>
            </div>
        </AppLayout>
    )
}