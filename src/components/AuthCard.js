import Image from 'next/image'
import styles from './authCard.module.css'
import classNames from 'classnames'

const AuthCard = ({ children }) => (
    <div className={classNames(
        'min-h-screen',
        'flex',
        'flex-col',
        'sm:justify-center',
        'items-center',
        'pt-6',
        'sm:pt-0',
            styles.gazpromBaground,
        )}>
        <div>
            <Image
                width={360}
                height={360}
                className="w-auto"
                src="/images/login.png"
                alt="Газпром"
            />
        </div>

        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden rounded">
            {children}
        </div>
    </div>
)

export default AuthCard
