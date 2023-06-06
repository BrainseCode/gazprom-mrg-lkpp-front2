import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import styles from "./separationGazEquipment.module.css";

export default function SeparationGazEquipment({connectionPoints}) {

  let summIndicationQuarters = {
    quarter_1: 0,
    quarter_2: 0,
    quarter_3: 0,
    quarter_4: 0,
    january: 0,
    april: 0,
    july: 0,
    october: 0,
    february: 0,
    may: 0,
    august: 0,
    november: 0,
    march: 0,
    june: 0,
    september: 0,
    december: 0,
    year: 0,
  }

  for (let connectionPoint of connectionPoints) {
    summIndicationQuarters.quarter_1 += Number(connectionPoint?.indicationQuarters[0].quarter_1)
    summIndicationQuarters.quarter_2 += Number(connectionPoint?.indicationQuarters[0].quarter_2)
    summIndicationQuarters.quarter_3 += Number(connectionPoint?.indicationQuarters[0].quarter_3)
    summIndicationQuarters.quarter_4 += Number(connectionPoint?.indicationQuarters[0].quarter_4)
    summIndicationQuarters.january += Number(connectionPoint?.indicationQuarters[0].january)
    summIndicationQuarters.april += Number(connectionPoint?.indicationQuarters[0].april)
    summIndicationQuarters.july += Number(connectionPoint?.indicationQuarters[0].july)
    summIndicationQuarters.october += Number(connectionPoint?.indicationQuarters[0].october)
    summIndicationQuarters.february += Number(connectionPoint?.indicationQuarters[0].february)
    summIndicationQuarters.may += Number(connectionPoint?.indicationQuarters[0].may)
    summIndicationQuarters.august += Number(connectionPoint?.indicationQuarters[0].august)
    summIndicationQuarters.november += Number(connectionPoint?.indicationQuarters[0].november)
    summIndicationQuarters.march += Number(connectionPoint?.indicationQuarters[0].march)
    summIndicationQuarters.june += Number(connectionPoint?.indicationQuarters[0].june)
    summIndicationQuarters.september += Number(connectionPoint?.indicationQuarters[0].september)
    summIndicationQuarters.december += Number(connectionPoint?.indicationQuarters[0].december)
    summIndicationQuarters.year += Number(connectionPoint?.indicationQuarters[0].year)
  }

  let elem = [
    {
      id: 1,
      text: "Точка подключения Лежневская 144",
      block1: "360.00 руб",
      block2: "1 123,64 руб",
      block3: "360.00 руб",
      block4: "360.00 руб",
      january: "360.00 руб",
      april: "360.00 руб",
      july: "360.00 руб",
      october: "360.00 руб",
      february: "360.00 руб",
      may: "360.00 руб",
      august: "360.00 руб",
      november: "360.00 руб",
      march: "360.00 руб",
      june: "360.00 руб",
      september: "360.00 руб",
      december: "360.00 руб",
      year: "21 212.34 руб",
    },
    {
      id: 2,
      text: "Точка подключения Ташкентская 1414",
      block1: "360.00 руб",
      block2: "1 123,64 руб",
      block3: "360.00 руб",
      block4: "360.00 руб",
      january: "360.00 руб",
      april: "360.00 руб",
      july: "360.00 руб",
      october: "360.00 руб",
      february: "360.00 руб",
      may: "360.00 руб",
      august: "360.00 руб",
      november: "360.00 руб",
      march: "360.00 руб",
      june: "360.00 руб",
      september: "360.00 руб",
      december: "360.00 руб",
      year: "24 212.34 руб",
    },
    {
      id: 3,
      text: "Точка подключения Ленина 1244",
      block1: "360.00 руб",
      block2: "1 123,64 руб",
      block3: "360.00 руб",
      block4: "360.00 руб",
      january: "360.00 руб",
      april: "360.00 руб",
      july: "360.00 руб",
      october: "360.00 руб",
      february: "360.00 руб",
      may: "360.00 руб",
      august: "360.00 руб",
      november: "360.00 руб",
      march: "360.00 руб",
      june: "360.00 руб",
      september: "360.00 руб",
      december: "360.00 руб",
      year: "22 212.34 руб",
    },
    {
      id: 4,
      text: "Суммарно по всем точкам",
      block1: "360.00 руб",
      block2: "1 123,64 руб",
      block3: "360.00 руб",
      block4: "360.00 руб",
      january: "360.00 руб",
      april: "360.00 руб",
      july: "360.00 руб",
      october: "360.00 руб",
      february: "360.00 руб",
      may: "360.00 руб",
      august: "360.00 руб",
      november: "360.00 руб",
      march: "360.00 руб",
      june: "360.00 руб",
      september: "360.00 руб",
      december: "360.00 руб",
      year: "22 212.34 руб",
    },
  ];
  return (
    <div
      className={classNames(
        "flex",
        "flex-col",
        "w-full",
        "bg-white",
        "rounded",
        "h-73",
        styles.gazpromShadow
      )}
    >
      <div
        className={classNames(
          "w-full",
          "flex",
          "justify-center",
          "rounded-t-lg",
          styles.gazpromHead
        )}
      >
        Разбивка объёма газа по месяцам и квартальная
      </div>
      <div className="ml-4 mr-4">
        <div className="mt-1 mb-5">
          <dl className="space-y-6 divide-y divide-gray-900/10">
            {connectionPoints.map(connectionPoint => (
              <Disclosure as="div" key={connectionPoint?.address} className="pt-1">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button
                        className={classNames(
                          "flex",
                          "w-full",
                          "items-start",
                          "justify-left",
                          "text-left",
                          "text-gray-900",
                          styles.gazpromTabHead,
                          "mr-2",
                          "rounded"
                        )}
                      >
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
                          {connectionPoint?.address}
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
                                1ый квартал
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                              >
                                {connectionPoint?.indicationQuarters[0].quarter_1}
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                              >
                                2ой квартал
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                              >
                                {connectionPoint?.indicationQuarters[0].quarter_2}
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                              >
                                3й квартал
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                              >
                                {connectionPoint?.indicationQuarters[0].quarter_3}
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                              >
                                4ый квартал
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-2 text-right text-xg font-bold"
                              >
                                {connectionPoint?.indicationQuarters[0].quarter_4}
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-left text-sm font-medium text-gray-900">
                                Январь
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                {connectionPoint?.indicationQuarters[0].january}
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                Апрель
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                {connectionPoint?.indicationQuarters[0].april}
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                Июль
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                {connectionPoint?.indicationQuarters[0].july}
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                Октябрь
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-right text-sm text-gray-500">
                                {connectionPoint?.indicationQuarters[0].october}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-left text-sm font-medium text-gray-900">
                                Февраль
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                {connectionPoint?.indicationQuarters[0].february}
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                Май
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                {connectionPoint?.indicationQuarters[0].may}
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                Август
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                {connectionPoint?.indicationQuarters[0].august}
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                Ноябрь
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-right text-sm text-gray-500">
                                {connectionPoint?.indicationQuarters[0].november}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-left text-sm font-medium text-gray-900">
                                Март
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                {connectionPoint?.indicationQuarters[0].march}
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                Июнь
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                {connectionPoint?.indicationQuarters[0].june}
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                Сентябрь
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                                {connectionPoint?.indicationQuarters[0].september}
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                                Декабрь
                              </td>
                              <td className="px-6 whitespace-nowrap pt-4 pb-4 text-right text-sm text-gray-500">
                                {connectionPoint?.indicationQuarters[0].december}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="flex ml-6 mt-2">
                          <span className="font-bold">Годовой объём</span>
                          <input
                            type="text"
                            className="p-0.5 ml-4"
                            value={connectionPoint?.indicationQuarters[0].year}
                          />
                        </div>
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}

            <Disclosure as="div" key="summ" className="pt-1">
              {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button
                          className={classNames(
                              "flex",
                              "w-full",
                              "items-start",
                              "justify-left",
                              "text-left",
                              "text-gray-900",
                              styles.gazpromTabHead,
                              "mr-2",
                              "rounded"
                          )}
                      >
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
                          Суммарно по всем точкам
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
                              1ый квартал
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                            >
                              {summIndicationQuarters.quarter_1}
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                            >
                              2ой квартал
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                            >
                              {summIndicationQuarters.quarter_2}
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                            >
                              3й квартал
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                            >
                              {summIndicationQuarters.quarter_3}
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-center text-xg font-bold"
                            >
                              4ый квартал
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-2 text-right text-xg font-bold"
                            >
                              {summIndicationQuarters.quarter_4}
                            </th>
                          </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-left text-sm font-medium text-gray-900">
                              Январь
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                              {summIndicationQuarters.january}
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                              Апрель
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                              {summIndicationQuarters.april}
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                              Июль
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                              {summIndicationQuarters.july}
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                              Октябрь
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-right text-sm text-gray-500">
                              {summIndicationQuarters.october}
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-left text-sm font-medium text-gray-900">
                              Февраль
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                              {summIndicationQuarters.february}
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                              Май
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                              {summIndicationQuarters.may}
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                              Август
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                              {summIndicationQuarters.august}
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                              Ноябрь
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-right text-sm text-gray-500">
                              {summIndicationQuarters.november}
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-left text-sm font-medium text-gray-900">
                              Март
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                              {summIndicationQuarters.march}
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                              Июнь
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                              {summIndicationQuarters.june}
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                              Сентябрь
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm text-gray-500">
                              {summIndicationQuarters.september}
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-center text-sm font-medium text-gray-900">
                              Декабрь
                            </td>
                            <td className="px-6 whitespace-nowrap pt-4 pb-4 text-right text-sm text-gray-500">
                              {summIndicationQuarters.december}
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <div className="flex ml-6 mt-2">
                          <span className="font-bold">Годовой объём</span>
                          <input
                              type="text"
                              className="p-0.5 ml-4"
                              value={summIndicationQuarters.year}
                          />
                        </div>
                      </p>
                    </Disclosure.Panel>
                  </>
              )}
            </Disclosure>
          </dl>
          <div className="flex justify-end mt-2">
            <div className="mr-2">
              <button
                className={classNames(
                  styles.btn,
                  styles.btnBlue,
                  "mt-2",
                  "mb-2",
                  styles.gazpromButton
                )}
              >
                Редактировать план
              </button>
            </div>
            <div className="mr-8">
              <button
                className={classNames(
                  styles.btn,
                  styles.btnBlue,
                  "mt-2",
                  "mb-2",
                  "mr-2",
                  styles.gazpromButton
                )}
              >
                Согласовать неравномерность
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
