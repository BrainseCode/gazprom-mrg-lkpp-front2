import React from 'react'
import styles from './users.module.css'
import classNames from 'classnames'

export default function Users() {
    const createGroupe = () => {
        alert('Создаем группу')
    }

    let users = [
        { id: 1, group: 'Администраторы', user: 'Администратор' },
        { id: 2, group: 'Специалисты', user: 'Специалист Иванов' },
        { id: 3, group: 'Пользователи', user: '32334223' },
        { id: 4, group: 'Еще кто-то', user: 'Д6' },
        { id: 5, group: 'Еще кто-то', user: 'Д6' },
        { id: 6, group: 'Еще кто-то', user: 'Д6' },
    ]

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
                Пользователи
            </div>
            <div className="ml-4 mr-4">
                <div className="mt-1 mb-5">
                    <div className={classNames(styles.scrollTable)}>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-left text-xg font-bold">
                                        Пользователь
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-center text-xg font-bold">
                                        Группа
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-1 text-right text-xg font-bold">
                                        Действия
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td className="px-6 text-left whitespace-nowrap text-sm font-medium text-gray-900">
                                            {user.user}
                                        </td>
                                        <td className="px-6 text-center whitespace-nowrap text-sm text-gray-500">
                                            {user.group}
                                        </td>
                                        <td className="px-6 text-right whitespace-nowrap text-sm font-medium">
                                            <button
                                                className={classNames(
                                                    styles.btn,
                                                    styles.btnBlue,
                                                    'mt-2',
                                                    'mb-2',
                                                    styles.gazpromButton,
                                                )}>
                                                Редактировать
                                            </button>
                                            <button
                                                className={classNames(
                                                    styles.btn,
                                                    styles.btnRed,
                                                    'mt-2',
                                                    'mb-2',
                                                    styles.gazpromButton,
                                                )}>
                                                Удалить
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-end mt-2">
                    <div className="mr-2">
                        <button
                            className={classNames(
                                styles.btn,
                                styles.btnBlue,
                                'mt-2',
                                'mb-2',
                                styles.gazpromButton,
                            )}>
                            Создать пользователя
                        </button>
                    </div>
                    <div>
                        <button
                            className={classNames(
                                styles.btn,
                                styles.btnBlue,
                                'mt-2',
                                'mb-2',
                                'mr-5',
                                styles.gazpromButton,
                            )}>
                            Задать пароль
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
