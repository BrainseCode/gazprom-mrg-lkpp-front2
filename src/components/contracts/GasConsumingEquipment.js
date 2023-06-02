import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import styles from './gasConsumingEquipment.module.css'

export default function GasConsumingEquipment() {
    let elem = [
        {
            id: 1,
            text: 'Точка подключения Лежневская 144',
            table: [
                {
                    id: 1,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 2,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 3,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 4,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 5,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 6,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
            ],
        },
        {
            id: 2,
            text: 'Точка подключения Ташкентская 1414',
            table: [
                {
                    id: 1,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 2,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 3,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 4,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 5,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 6,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
            ],
        },
        {
            id: 3,
            text: 'Точка подключения Ленина 1244',
            table: [
                {
                    id: 1,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 22,
                },
                {
                    id: 2,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 3,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 4,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 5,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
                {
                    id: 6,
                    name: 1,
                    complex: 'Д6',
                    count: 'Активный',
                    power: '10 440.00 руб.',
                    consumption: 21,
                },
            ],
        },
    ]
    return (
        <div
        className={classNames(
            'flex',
            'flex-col',
            'w-full',
            'bg-white',
            'rounded',
            styles.gazpromShadow,
            'h-73'
            )}>
      <div className={classNames(
        'w-full',
        'flex',
        'justify-center',
        'rounded-t-lg',
        styles.gazpromHead
        )}>
        Установленное газопотребляющее оборудование
      </div>
      <div className="ml-4 mr-4">
        <div className="mt-1 mb-5">
          <dl className="space-y-6 divide-y divide-gray-900/10">
            {elem.map(elem => (
              <Disclosure as="div" key={elem.text} className="pt-1">
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
                                                    styles.gazpromHead, 
                                                    'mr-2'
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
                        <span className="text-base font-semibold leading-7 ml-1">
                          {elem.text}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600 ml-5">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="px-6 py-2 text-left text-xg font-bold"
                              >
                              Наименование
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                              >
                                Измерительный комплекс
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                              >
                                Количество
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                              >
                                Мощность
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-2 text-right text-xg font-bold"
                              >
                                Расход
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {elem.table.map(tab => (
                              <tr key={tab.id}>
                                <td className="px-6 whitespace-nowrap pt-4 pb-4 text-left text-sm font-medium text-gray-900">
                                  {tab.name}
                                </td>
                                <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                  {tab.complex}
                                </td>
                                <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                  {tab.count}
                                </td>
                                <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                  {tab.power}
                                </td>
                                <td className="px-6 whitespace-nowrap pt-4 pb-4 text-right text-sm text-gray-500">
                                  {tab.consumption}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
    )
}
