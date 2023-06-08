import React, {useEffect, useState} from 'react'
import TableProfile from '@/components/userProfile/TableProfile'
import LegalInfo from '@/components/userProfile/LegalInfo'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {useAuth} from "@/hooks/auth";
import axios from "@/lib/axios";

export default function UserProfile() {
    const { user } = useAuth()
    const [profile, setProfile] = useState([])

    async function initialProfileState() {
        const response = await axios.get(`api/user-profiles/${user?.id}`)
        const newProfile = response.data.data
        setProfile(newProfile)
    }
    useEffect(() => {
        if (user) {
            initialProfileState()
        }
        return () => {}
    }, [user])

    return (
        <AppLayout>
            <Head>
                <title>Профиль потребителя</title>
            </Head>
            <div className="content">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 2xl:col-span-6">
                        <TableProfile user={user} profile={profile}/>
                    </div>
                    <div className="col-span-12 2xl:col-span-6">
                        <LegalInfo profile={profile}/>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
