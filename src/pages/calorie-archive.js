import React from 'react'
import Calorie from '@/components/calorieArchive/Calorie'
import SearchCalorieArchive from '@/components/calorieArchive/SearchCalorieArchive'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'

export default function CalorieArchive() {
    return (
        <AppLayout>
            <Head>
                <title>Архив калорийности</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
                    <Calorie />
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <SearchCalorieArchive />
                </div>
            </div>
        </AppLayout>
    )
}
