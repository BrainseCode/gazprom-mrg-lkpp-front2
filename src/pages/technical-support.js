import React from 'react'
import styles from '@/components/technicalSupport/technicalSupport.module.css'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import classNames from 'classnames'
// import faq from '../../assets/images/faq.png'

const faqs = [
    {
        question: 'Авторизация',
        answer:
            "Авторизация — предоставление определённому лицу или группе лиц прав на выполнение определённых действий; а также процесс проверки (подтверждения) данных прав при попытке выполнения этих действий. В другом источнике указано что Авторизация (фр. autorisation) — разрешение, полномочие, даваемое на какие-нибудь действия. На начало XX столетия Авторизация, уполномочие на какое-либо действие; дозволение от автора (например, на право перевода). Часто можно услышать выражение, что какой-то человек «авторизован» для выполнения данной операции — это значит, что он имеет на неё право. Авторизацию не следует путать с аутентификацией — процедурой проверки легальности пользователя или данных, например, проверки соответствия введённого пользователем пароля к учётной записи паролю в базе данных, или проверка цифровой подписи письма по ключу шифрования, или проверка контрольной суммы файла на соответствие заявленной автором этого файла. Авторизация же производит контроль доступа к различным ресурсам системы в процессе работы легальных пользователей после успешного прохождения ими аутентификации.",
    },
    {
        question: 'Главная страницы web приложения',
        answer:
            "Главная страница — самая первая страница, которая появляется при заходе на сайт. Главная страница есть у всех сайтов, от солидных интернет-магазинов до популярных форумов. Основная функция главной страницы – это привлечение внимания целевой аудитории и конвертации пользователей в реальных клиентов.",
    },
    {
        question: 'Профиль учетной записи',
        answer:
            "Профиль пользователя — это набор параметров и сведений, связанных с пользователем. Он содержит важную информацию, которая используется для идентификации человека, такую как его имя, возраст, портретная фотография и индивидуальные характеристики, такие как знания или опыт.",
    },
    {
        question: 'Лицевые счета',
        answer:
            "Лицевой счёт — бухгалтерский счёт для ведения учёта расчетов с физическими и юридическими лицами.",
    },
    {
        question: 'Приборы учета',
        answer:
            "Приборы учета — совокупность устройств, обеспечивающих измерение и учет газа.",
    },
    {
        question: 'Создание заявки',
        answer:
            "Заблаговременно заявленное в письменной форме намерение, желание потребителя.",
    },
]

export default function TechnicalSupport() {
    return (
        <AppLayout>
            <Head>
                <title>Техническая поддержка</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
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
                            Часто задаваемые вопросы
                        </div>
                        <div className="ml-4 mr-4 mt-5">
                            <div className="mt-1 mb-5">
                                <dl className="space-y-6 divide-y divide-gray-900/10">
                                    {faqs.map(faq => (
                                        <Disclosure
                                            as="div"
                                            key={faq.question}
                                            className="pt-1">
                                            {({ open }) => (
                                                <>
                                                    <dt>
                                                        <Disclosure.Button className={classNames(
                                                    'flex',
                                                    'w-full',
                                                    'items-start',
                                                    'justify-left',
                                                    'text-left',
                                                    'text-gray-900', 
                                                    styles.gazpromTabHead,
                                                    'mr-2',
                                                    'rounded'
                                                )}>
                                                            <span className="ml-1 flex h-7 items-center">
                                                                {open ? (
                                                                    <ChevronDownIcon
                                                                        className="h-6 w-6"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <ChevronRightIcon
                                                                        className="h-6 w-6"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                            <span className="text-base font-semibold leading-7 ml-2">
                                                                {faq.question}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </dt>
                                                    <Disclosure.Panel
                                                        as="dd"
                                                        className="mt-2 pr-12">
                                                        <p className="text-base font-semibold leading-7 ml-1">
                                                            {faq.answer}
                                                        </p>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
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
                            Документация
                        </div>
                        <div className="ml-4 mr-4 mt-5">
                            <div className="mt-1 mb-5">
                                <div className="flex items-center ml-2">
                                    <img src="/images/faq.png" alt="" />
                                    <span className="ml-2">
                                        Подключение к веб приложению
                                    </span>
                                </div>
                                <div className="flex mt-4 items-center ml-2">
                                    <img src="/images/faq.png" alt="" />
                                    <span className="ml-2">
                                        Руководство пользователя
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-end mt-2">
                                <div>
                                    <button
                                        className={classNames(
                                            styles.btn,
                                            styles.btnBlue,
                                            'mt-2',
                                            'mb-2',
                                            styles.gazpromButton,
                                        )}>
                                        Обратиться в тех поддержку
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}