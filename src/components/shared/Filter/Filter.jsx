"use client"
import React, { useState } from 'react'
import Button from '../Button';
import Select from '../Select';
import StatusOptions from '@/constants/StatusOptions';
import { MachineOptions } from '@/constants/MachineOptions';
import FilterFields from '@/models/FilterFields';

import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import Gregorian from 'react-date-object/calendars/gregorian'
import Gregorian_en from 'react-date-object/locales/gregorian_en'
import "react-multi-date-picker/styles/colors/red.css"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Label from '../Label';

const Filter = () => {
    const searchParams = useSearchParams()

    const { replace } = useRouter();
    const pathname = usePathname();

    let [startedAt, setStartedAt] = useState('')
    let [finishedAt, setFinishedAt] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
        let formsElements = e.target.elements;
        let status = formsElements.namedItem(
            FilterFields?.status?.title
        )?.value;

        let machine = formsElements.namedItem(
            FilterFields?.machine?.title
        )?.value

        console.log(status, machine)

        const params = new URLSearchParams(searchParams)
        status != '' ? params.set('status', status) : params.delete('status')
        startedAt != '' ? params.set('startedAt', startedAt.convert(Gregorian, Gregorian_en).format("YYYY-MM-DD")) : params.delete('startedAt')
        finishedAt != '' ? params.set('finishedAt', finishedAt.convert(Gregorian, Gregorian_en).format("YYYY-MM-DD")) : params.delete('finishedAt')
        machine != '' ? params.set('machine', machine) : params.delete('machine')
        replace(`${pathname}?${params}`);
    }


    return (
        <form className="w-full flex flex-wrap -mx-3 mb-6 pt-4 px-6 " onSubmit={onSubmit}>
            <Select
                parentClassName="w-full md:w-1/5 px-3 mb-6 md:mb-0"
                labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                forValue="status"
                text="وضعیت"
                selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                selectId="status"
                options={StatusOptions}
            />
            <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="startDate" text="تاریخ شروع" />
                <DatePicker
                    style={{ cursor: 'pointer', padding: '20px' }}
                    value={startedAt}
                    onChange={setStartedAt}
                    calendar={persian}
                    locale={persian_fa}
                    className="red"
                />
            </div>
            <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="finishedAt" text="تاریخ پایان" />
                <DatePicker
                    style={{ cursor: 'pointer', padding: '20px' }}
                    value={finishedAt}
                    onChange={setFinishedAt}
                    calendar={persian}
                    locale={persian_fa}
                    minDate={startedAt}
                    className="red"
                />
            </div>
            <Select
                parentClassName="w-full md:w-1/5 px-3 mb-6 md:mb-0"
                labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                forValue="machine"
                text="ماشین"
                selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                selectId="machine"
                options={MachineOptions}
            />
            <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">فیلتر</Button>
            </div>
        </form>

    )
}

export default Filter
