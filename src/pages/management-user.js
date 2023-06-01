import React from 'react'
import GroupUser from '@/components/managementUser/GroupUser'
import Users from '@/components/managementUser/Users'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'

export default function Index() {
    return (
        <AppLayout>
            <Head>
                <title>Управление пользователями</title>
            </Head>
            <div className="content">
                <div className="grid grid-cols-1 gap-6">
                    <GroupUser />
                </div>
                <div className="grid grid-cols-1 gap-6 mt-2">
                    <Users />
                </div>
            </div>
        </AppLayout>
    )
}
