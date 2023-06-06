import React, {useEffect, useState} from 'react'
import MeasuringComplex from '@/components/measuringComplex/MeasuringComplex'
import GeneralInfo from '@/components/measuringComplex/GeneralInfo'
import Value from '@/components/measuringComplex/Value'
import Head from 'next/head'
import AppLayout from '@/components/Layouts/AppLayout'
import {useAuth} from "@/hooks/auth";
import axios from "@/lib/axios";

export default function Index() {
    const { user } = useAuth()
    const [contracts, setContracts] = useState([])
    const [indications, setIndications] = useState([])
    const [meter, setMeter] = useState([])
    const [pressure, setPressure] = useState([])
    const [thermomether, setThermomether] = useState([])
    const [calculator, setCalculator] = useState([])
    const [powerUnit, setPowerUnit] = useState([])

    async function initiaContractslState() {
        const response = await axios.get(`/api/users/${user.id}/contracts`)
        const newContracts = response.data.data

        for (let contract of newContracts) {
            const response = await axios.get(`api/measuring-complexes/${contract?.id}`)
            let measuringComplex = response.data.data

            contract.measuringComplex = measuringComplex
        }
        setContracts(newContracts)
    }
    async function initialIndicationsState() {
        const response = await axios.get(`/api/indications`)
        const newIndications = response.data.data
        setIndications(newIndications)
    }

    async function initialMeterState() {
        const response = await axios.get(`/api/meters`)
        const newMeter = response.data.data
        setMeter(newMeter?.[0])
    }

    async function initialPressureState() {
        const response = await axios.get(`/api/pressure-gauges`)
        const newPressure = response.data.data
        setPressure(newPressure?.[0])
    }

    async function initialThermometherState() {
        const response = await axios.get(`/api/thermometers`)
        const newThermomether = response.data.data
        setThermomether(newThermomether?.[0])
    }

    async function initialCalculatorState() {
        const response = await axios.get(`/api/calculators`)
        const newCalculator = response.data.data
        setCalculator(newCalculator?.[0])
    }

    async function initialPowerUnitState() {
        const response = await axios.get(`/api/power-units`)
        const newPowerUnit = response.data.data
        setPowerUnit(newPowerUnit?.[0])
    }

    useEffect(() => {
        if (user) {
            initiaContractslState()
            initialIndicationsState()
            initialMeterState()
            initialPressureState()
            initialThermometherState()
            initialCalculatorState()
            initialPowerUnitState()
        }
        //вот тут мы их вызываем
        //так же тут можно записывать это все в global state (ReduxToolkit)
        return () => {}
    }, [user])
    return (
        <AppLayout>
            <Head>
                <title>Измерительные комплексы</title>
            </Head>
            <div className="content">
                <div className="col-span-12 2xl:col-span-12">
                    <MeasuringComplex contracts={contracts}/>
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <GeneralInfo meter={meter} pressure={pressure} thermomether={thermomether} calculator={calculator} powerUnit={powerUnit}/>
                </div>
                <div className="col-span-12 2xl:col-span-12 pt-2">
                    <Value indications={indications}/>
                </div>
            </div>
        </AppLayout>
    )
}
