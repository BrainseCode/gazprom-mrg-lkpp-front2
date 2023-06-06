import './TableProfile.module.css'
import Link from 'next/link'
import classNames from 'classnames'
import styles from './TableProfile.module.css'

export default function TableProfile({user, profile}) {
    return (
        <div
            className={classNames(
                'flex',
                'flex-col',
                'w-full',
                'bg-white',
                'rounded',
                'h-73',
                styles.gazpromShadow,
            )}>
            <div
                className={classNames(
                    'w-full',
                    'flex',
                    'justify-center',
                    'rounded-t-lg',
                    styles.gazpromHead,
                )}>
                Профиль
            </div>
            <div className="ml-4 mr-4">
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-sm text-left font-medium text-gray-700">
                        Наименование контрагента
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="agent"
                            id="agent"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.short_name}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-sm text-left font-medium text-gray-700">
                        Контактное лицо
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="face"
                            id="face"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.responsible_person}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-sm text-left font-medium text-gray-700">
                        Телефон
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.shared_phone}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Эл. почта
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={user?.email}
                        />
                    </div>
                </div>
                <div className="flex">
                    <Link href="/user-profile">
                        <button
                            className={classNames(
                                styles.btn,
                                styles.btnBlue,
                                'mt-2',
                                'mb-2',
                                'text-left',
                                styles.gazpromButton,
                            )}>
                            Переход в профиль
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
