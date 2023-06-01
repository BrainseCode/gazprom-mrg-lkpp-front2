import Head from 'next/head'
// import Link from 'next/link'
// import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
    // const { user } = useAuth({ middleware: 'guest' })
    const { push } = useRouter()
    useEffect(() => {
        push('/login')
    }, [])

    return (
        <>
            <Head>
                <title>Gazprom</title>
            </Head>
        </>
    )
}
