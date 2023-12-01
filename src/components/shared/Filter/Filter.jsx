"use client"
import React from 'react'
import Button from '../Button';
import Select from '../Select';
import StatusOptions from '@/constants/StatusOptions';
import DateOptions from '@/constants/DateOptions';
import { MachineOptions } from '@/constants/MachineOptions';
import FilterFields from '@/models/FilterFields';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Filter = () => {
    const searchParams = useSearchParams()

    const { replace } = useRouter();
    const pathname = usePathname();

    const onSubmit = async (e) => {
        e.preventDefault();
        let formsElements = e.target.elements;
        let status = formsElements.namedItem(
            FilterFields?.status?.title
        )?.value;

        let date = formsElements.namedItem(
            FilterFields?.date?.title
        )?.value

        let machine = formsElements.namedItem(
            FilterFields?.machine?.title
        )?.value

        console.log(status, date, machine)

        const params = new URLSearchParams(searchParams)
        status != '' ? params.set('status', status) : params.delete('status')
        date != '' ? params.set('date', date) : params.delete('date')
        machine != '' ? params.set('machine', machine) : params.delete('machine')
        replace(`${pathname}?${params}`);
    }


    return (
        <form className="w-full flex flex-wrap -mx-3 mb-6 pt-4 px-6 " onSubmit={onSubmit}>
            <Select
                parentClassName="w-full md:w-1/4 px-3 mb-6 md:mb-0"
                labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                forValue="status"
                text="وضعیت"
                selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                selectId="status"
                options={StatusOptions}
            />
            <Select
                parentClassName="w-full md:w-1/4 px-3 mb-6 md:mb-0"
                labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                forValue="date"
                text="تاریخ"
                selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                selectId="date"
                options={DateOptions}
            />
            <Select
                parentClassName="w-full md:w-1/4 px-3 mb-6 md:mb-0"
                labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                forValue="machine"
                text="ماشین"
                selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                selectId="machine"
                options={MachineOptions}
            />
            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">فیلتر</Button>
            </div>
        </form>

    )
}

export default Filter
