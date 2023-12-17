"use client"
import Select from '@/components/shared/Select'
import React, { useEffect, useState } from 'react'

import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import Gregorian from 'react-date-object/calendars/gregorian'
import Gregorian_en from 'react-date-object/locales/gregorian_en'
import "react-multi-date-picker/styles/colors/red.css"

import Button from "@/components/shared/Button";
import Label from "@/components/shared/Label";
import TextField from "@/components/shared/TextField";
import AddOrderFormFields from '@/models/AddOrderFormFields'
import { getAllParts, getAllClients, addOrder } from '@/apis/sampleApi'
import sendNotif from '@/utils/sendNotif'

const AddOrderForm = ({
    formClassName
}) => {
    let [started_at, setStarted_at] = useState('')
    let [ended_at, setEnded_at] = useState('')
    const [parts, setParts] = useState([])
    const [companies, setCompanies] = useState([])

    const resetForm = () => {
        const form = document.getElementById('form')
        form.reset()
        setStarted_at('')
        setEnded_at('')
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let formsElements = e.target.elements;

        let part = formsElements.namedItem(
            AddOrderFormFields?.productName?.title
        )?.value;
        let client = formsElements.namedItem(
            AddOrderFormFields?.companyName?.title
        )?.value;
        let count = formsElements.namedItem(
            AddOrderFormFields?.count?.title
        )?.value

        const response = await addOrder({
            'count': count,
            'started_at': started_at.convert(Gregorian, Gregorian_en).format("YYYY-MM-DD"),
            'ended_at': ended_at.convert(Gregorian, Gregorian_en).format("YYYY-MM-DD"),
            "part": part,
            "client": client
        })

        response != undefined ?
            sendNotif('سفارش ثبت شد', 'success', true, 'center', 2000)
            :
            sendNotif('در ثبت سفارش شما مشکلی پیش آمده', 'error', true, 'center', 2000)

        resetForm()
    }

    useEffect(() => {
        // getParts
        const cachedParts = getAllParts()
        cachedParts.then((res) => {
            setParts(res.data.data)
        })

        // get Companies(clients)
        const cachedCompanies = getAllClients()
        cachedCompanies.then((res) => {
            setCompanies(res.data.data)
        })

    }, [])

    return (
        <form className={formClassName} onSubmit={handleSubmit} id='form' >
            {/* part */}
            <Select
                parentClassName="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                forValue="partName"
                text=" نام قطعه"
                selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                selectId="partName"
                options={parts}
            />
            {/* client */}
            <Select
                parentClassName="w-full md:w-1/2 px-3 mb-6 md:mb-0"
                labelClassName="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                forValue="companyName"
                text="نام شرکت"
                selectClassName="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                selectId="companyName"
                options={companies}
            />

            {/* start date */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="startDate" text="تاریخ شروع" />
                <DatePicker
                    style={{ cursor: 'pointer', padding: '20px' }}
                    value={started_at}
                    onChange={setStarted_at}
                    calendar={persian}
                    locale={persian_fa}
                    className="red"

                />
            </div>
            {/* end date */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="finishDate" text="تاریخ پایان" />
                <DatePicker
                    style={{ cursor: 'pointer', padding: '20px' }}
                    value={ended_at}
                    onChange={setEnded_at}
                    calendar={persian}
                    locale={persian_fa}
                    className="red"
                    minDate={started_at}
                />
            </div>

            {/* count */}
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="count" text="تعداد قطعه" />
                <TextField name="count" id="count" placeholder="۱۵" className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded" >ثبت سفارش</Button>
            </div>
        </form >
    )
}

export default AddOrderForm
