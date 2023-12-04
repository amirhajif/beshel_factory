"use client"
import Select from '@/components/shared/Select'
import React, { useState } from 'react'

import DatePicker, { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import Gregorian from 'react-date-object/calendars/gregorian'
import Gregorian_en from 'react-date-object/locales/gregorian_en'
import "react-multi-date-picker/styles/colors/red.css"

import Button from "@/components/shared/Button";
import Label from "@/components/shared/Label";
import TextField from "@/components/shared/TextField";
import AddOrderFormFields from '@/models/AddOrderFormFields'

const AddOrderForm = ({
    formClassName,
    selects
}) => {
    let [start, setStart] = useState(new DateObject())
    let [finish, setFinish] = useState(new DateObject())
    const handleSubmit = async (e) => {
        e.preventDefault()
        let formsElements = e.target.elements;

        let productName = formsElements.namedItem(
            AddOrderFormFields?.productName?.title
        )?.value;
        let companyName = formsElements.namedItem(
            AddOrderFormFields?.companyName?.title
        )?.value;
        let count = formsElements.namedItem(
            AddOrderFormFields?.count?.title
        )?.value

        console.log(productName, companyName, count)
        console.log(start.convert(Gregorian, Gregorian_en).format("YYYY-MM-DD"))
        console.log(finish.convert(Gregorian, Gregorian_en).format("YYYY-MM-DD"))

    }

    return (
        <form className={formClassName} onSubmit={handleSubmit}>
            {selects.map(select => (
                <Select
                    key={select.text}
                    parentClassName={select.parentClassName}
                    labelClassName={select.labelClassName}
                    forValue={select.forValue}
                    text={select.text}
                    selectClassName={select.selectClassName}
                    selectId={select.selectId}
                    options={select.options}
                />
            ))}
            {/* start date */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="startDate" text="تاریخ شروع" />
                <DatePicker
                    style={{ cursor: 'pointer', padding: '20px' }}
                    value={start}
                    onChange={setStart}
                    calendar={persian}
                    locale={persian_fa}
                    className="red"

                />
            </div>
            {/* finish date */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="finishDate" text="تاریخ پایان" />
                <DatePicker
                    style={{ cursor: 'pointer', padding: '20px' }}
                    value={finish}
                    onChange={setFinish}
                    calendar={persian}
                    locale={persian_fa}
                    className="red"
                    minDate={finish}
                />
            </div>

            {/* count */}
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <Label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" forValue="count" text="تعداد قطعه" />
                <TextField name="count" id="count" placeholder="۱۵" className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
            </div>
            <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">ثبت سفارش</Button>
            </div>
        </form>
    )
}

export default AddOrderForm
