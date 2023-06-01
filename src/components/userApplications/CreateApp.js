import { useState } from 'react'
import styles from './createApp.module.css'
import classNames from 'classnames'

export default function CreateApp() {
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
                Создание заявок
            </div>
            <div className="mt-1 mb-1 ml-4">
                <div className="flex mb-2 items-center">
                    <button
                        className={classNames(
                            styles.btn,
                            styles.btnBlue,
                            styles.gazpromButton,
                        )}>
                        Создать
                    </button>
                    <span className="ml-2">
                        Заявка о заключении договора ТП
                    </span>
                </div>
                <div className="flex mb-2 items-center">
                    <button
                        className={classNames(
                            styles.btn,
                            styles.btnBlue,
                            styles.gazpromButton,
                        )}>
                        Создать
                    </button>
                    <span className="ml-2">
                        Заявка на изменение годового объема
                    </span>
                </div>
                <div className="flex mb-2 items-center">
                    <button
                        className={classNames(
                            styles.btn,
                            styles.btnBlue,
                            styles.gazpromButton,
                        )}>
                        Создать
                    </button>
                    <span className="ml-2">Заявка на вызов метролога</span>
                </div>
                <div className="flex mb-2 items-center">
                    <button
                        className={classNames(
                            styles.btn,
                            styles.btnBlue,
                            styles.gazpromButton,
                        )}>
                        Создать
                    </button>
                    <span className="ml-2">Другая тема</span>
                </div>
            </div>
        </div>
    )
}
