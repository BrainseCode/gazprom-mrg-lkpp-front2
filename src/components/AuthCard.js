import Image from 'next/image'

const AuthCard = ({ children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <Image
                width={360}
                height={360}
                className="h-8 w-auto"
                src="/images/login.png"
                alt="Газпром"
            />
        </div>

        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            {children}
        </div>
    </div>
)

export default AuthCard
