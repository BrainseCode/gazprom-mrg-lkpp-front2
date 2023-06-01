import Head from 'next/head'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Газпром Межрегионгаз Иваново</title>
            </Head>
            <main className="flex-1">
                <div className="pt-2 pl-3 pr-3">{children}</div>
            </main>
        </div>
    )
}

export default GuestLayout
