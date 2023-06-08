import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import styles from './login.module.css'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/home',
    })

    const [email, setEmail] = useState('admin@admin.com')
    const [inn, setInn] = useState('1234567898')
    const [password, setPassword] = useState('admin')
    const [password2, setPassword2] = useState('123456')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                }>
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                <form onSubmit={submitForm}>
                    {/* Demo Inn */}
                    <div>
                        <Label htmlFor="text">ИНН</Label>

                        <Input
                            id="text"
                            type="text"
                            value={inn}
                            defaultValue='1234567898'
                            className="block mt-1 w-full"
                            onChange={event => setInn(event.target.value)}
                            required
                            autoFocus
                            disabled
                        />

                        <InputError messages={errors.inn} className="mt-2" />
                    </div>

                    {/* DemoPassword */}
                    <div className="mt-4">
                        <Label htmlFor="password">Пароль</Label>

                        <Input
                            id="password2"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword2(event.target.value)}
                            required
                            autoComplete="current-password"
                            defaultValue='******'
                            disabled
                        />

                        <InputError
                            messages={errors.password2}
                            className="mt-2"
                        />
                    </div>

                    {/* Email Address */}
                    <div className={classNames( styles.dnone )}>
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            defaultValue='admin@admin.com'
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                            
                        />

                        <InputError messages={errors.email} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className={classNames( 'mt-4', styles.dnone )}>
                        <Label htmlFor="password">Пароль</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
                            defaultValue='admin'
                            
                        />

                        <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="block mt-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                className="rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                onChange={event =>
                                    setShouldRemember(event.target.checked)
                                }
                            />

                            <span className="ml-2 text-sm text-gray-600">
                                Запомнить
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {/* <Link
                            href="/forgot-password"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            "Это демо режим"
                        </Link> */}
                        <div className={styles.demo}><i><b>Демо режим</b></i></div>

                        <Button className="ml-3">Войти</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Login
