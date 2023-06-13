import React, { useCallback, useEffect, useState } from "react";
import MeasuringComplex from "@/components/measuringComplex/MeasuringComplex";
import GeneralInfo from "@/components/measuringComplex/GeneralInfo";
import Value from "@/components/measuringComplex/Value";
import Head from "next/head";
import AppLayout from "@/components/Layouts/AppLayout";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";

export default function Index() {
  const { user } = useAuth();
  const [contracts, setContracts] = useState([]);
  const [indications, setIndications] = useState([]);
  const [meter, setMeter] = useState([]);
  const [pressure, setPressure] = useState([]);
  const [thermomether, setThermomether] = useState([]);
  const [calculator, setCalculator] = useState([]);
  const [powerUnit, setPowerUnit] = useState([]);



  async function initiaContractslState() {
    const response = await axios.get(`/api/users/${user.id}/contracts`);
    const newContracts = response.data.data;

    for (let contract of newContracts) {
      const response = await axios.get(
        `api/measuring-complexes/${contract?.id}`
      );
      let measuringComplex = response.data.data;

      contract.measuringComplex = measuringComplex;
    }

    return newContracts;
  }


  async function initialIndicationsState() {
    const response = await axios.get(`/api/indications`);
    const newIndications = response.data.data;

    return newIndications
  }

  async function initialMeterState() {
    const response = await axios.get(`/api/meters`);
    const newMeter = response.data.data;

    return newMeter?.[0];
  }

  async function initialPressureState() {
    const response = await axios.get(`/api/pressure-gauges`);
    const newPressure = response.data.data;

    return newPressure?.[0];
  }

  async function initialThermometherState() {
    const response = await axios.get(`/api/thermometers`);
    const newThermomether = response.data.data;

    return newThermomether?.[0]
  }

  async function initialCalculatorState() {
    const response = await axios.get(`/api/calculators`);
    const newCalculator = response.data.data;

    return newCalculator?.[0];
  }

  async function initialPowerUnitState() {
    const response = await axios.get(`/api/power-units`);
    const newPowerUnit = response.data.data;

    return newPowerUnit?.[0];
  }

  useEffect(() => {
    if (user) {
      Promise.all([
        initiaContractslState(),
        initialIndicationsState(),
        initialMeterState(),
        initialPressureState(),
        initialThermometherState(),
        initialCalculatorState(),
        initialPowerUnitState(),
      ]).then((values) => {
        const [newContracts, newIndications, newMeter, newPressure, newThermomether, newCalculator, newPowerUnit] = [...values];

        setContracts(newContracts);
        setIndications(newIndications);
        setMeter(newMeter);
        setPressure(newPressure);
        setThermomether(newThermomether);
        setCalculator(newCalculator);
        setPowerUnit(newPowerUnit);

      }).catch((error) => {
        // обработка ошибок (нужно сделать какой то popup или что то такое для демонстрации пользователю об олшибке)
        throw new Error(error);
      });

    }
    return () => { };
  }, [user]);

  return (
    <AppLayout>
      <Head>
        <title>Измерительные комплексы</title>
      </Head>
      <div className="content">
        <div className="col-span-12 2xl:col-span-12">
          <MeasuringComplex contracts={contracts} />
        </div>
        <div className="col-span-12 2xl:col-span-12 pt-2">
          <GeneralInfo
            meter={meter}
            pressure={pressure}
            thermomether={thermomether}
            calculator={calculator}
            powerUnit={powerUnit}
          />
        </div>
        <div className="col-span-12 2xl:col-span-12 pt-2">
          <Value indications={indications} />
        </div>
      </div>
    </AppLayout>
  );
}
