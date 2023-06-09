import React from 'react'
import styles from './userSettings.module.css'
import classNames from 'classnames'

export default function UserSettings() {
    const pass = ()=>{alert("Недоступно в демо режиме");}
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
                Сменить пароль
            </div>
            <div className="ml-4 mr-4">
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Текущий пароль
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="lkName"
                            id="lkName"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="******"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Новый пароль
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="lkPass"
                            id="lkPass"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="******"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-between mt-1">
                    <label
                        htmlFor="email"
                        className="block text-left text-sm font-medium text-gray-700">
                        Повторите новый пароль
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="lkPass2"
                            id="lkPass2"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="******"
                        />
                    </div>
                </div>
                <div className="flex">
                    <button
                        onClick={pass}
                        className={classNames(
                            styles.btn,
                            styles.btnBlue,
                            'mt-2',
                            'mb-2',
                            styles.gazpromButton,
                        )}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    )
}
