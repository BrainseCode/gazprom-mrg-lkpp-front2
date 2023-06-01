import { useState } from 'react'
import styles from './createInfo.module.css'
import classNames from 'classnames'

export default function CreateInfo() {
    const createApp = () => {
        alert('Создать оповещение')
    }
    const createInfo = () => {
        alert('Создать уведомление')
    }

    return (
        <div className="flex flex-col w-full bg-white rounded gazprom-shadow h-73">
            <div className="w-full flex justify-center rounded-t-lg gazprom-head">
                Создание уведомлений
            </div>
            <div className="mt-4 mb-1 ml-4">
                <div className="flex mb-2 items-center">
                    <button
                        className={classNames(
                            styles.btn,
                            styles.btnBlue,
                            styles.gazpromButton,
                        )}
                        onClick={createApp}>
                        Создать
                    </button>
                    <span className="ml-2">Оповещение для пользователя</span>
                </div>
                <div className="flex mb-2 items-center mt-4">
                    <button
                        className={classNames(
                            styles.btn,
                            styles.btnBlue,
                            styles.gazpromButton,
                        )}
                        onClick={createInfo}>
                        Создать
                    </button>
                    <span className="ml-2">
                        Уведомление о прекращении поставки газа (работы ГТО
                        и/или ГРО)
                    </span>
                </div>
            </div>
        </div>
    )
}
