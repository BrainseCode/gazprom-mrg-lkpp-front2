import React from 'react'
import './legalInfo.module.css'
import classNames from 'classnames'
import styles from '@/components/userProfile/TableProfile.module.css'

export default function LegalInfo({profile}) {
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
                styles.gazHeing,
            )}>
            <div
                className={classNames(
                    'w-full',
                    'flex',
                    'justify-center',
                    'rounded-t-lg',
                    styles.gazpromHead,
                )}>
                Юридическая информация
            </div>
            <div className="ml-4 mr-4">
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        ИНН
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="agent"
                            id="agent"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.inn}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        КПП
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.kpp}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        ОГРН
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="face"
                            id="face"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.ogrn}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        ОКПО
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.okpo}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        ОКФС
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="phoneuser"
                            id="phoneuser"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.okfs}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        ОКАТО
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="mail"
                            id="mail"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.okato}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        ОКОПФ
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="legal"
                            id="legal"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.okopf}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        ОКТМО
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="phyadress"
                            id="phyadress"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.oktmo}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        ОКВЭД
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="phyadress"
                            id="phyadress"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.okved}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        ОКОГУ
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="phyadress"
                            id="phyadress"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder=""
                            value={profile?.okogu}
                        />
                    </div>
                </div>
                <div className="flex">
                    <button
                        className={classNames(
                            styles.btn,
                            styles.btnBlue,
                            'mt-4',
                            'mb-2',
                            styles.gazpromButton,
                        )}>
                        Подать заявку на редактирование
                    </button>
                </div>
            </div>
        </div>
    )
}
