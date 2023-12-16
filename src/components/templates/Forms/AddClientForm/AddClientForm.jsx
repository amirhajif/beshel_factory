"use client"
import { addClient } from '@/apis/sampleApi'
import Button from '@/components/shared/Button'
import InputSection from '@/components/shared/InputSection'
import React from 'react'
import sendNotif from '@/utils/sendNotif'
const AddClientForm = ({
    formClassName,
    parentClassName,
    labelClassName,
    inputClassName,
    forValue,
    text,
    name,
    id,
    placeholder
}) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        let formsElements = e.target.elements;

        let title = formsElements.namedItem('title')?.value
        const response = await addClient(title)
        response != undefined ?
            sendNotif('سفارش دهنده افزوده شد', 'success', true, 'center', 2000)
            :
            sendNotif('خطایی رخ داده است', 'error', true, 'center', 2000)

        formsElements.namedItem('title').value = ''
    }
    return (
        <form className={formClassName} onSubmit={handleSubmit}>
            < InputSection
                parentClassName={parentClassName}
                labelClassName={labelClassName}
                inputClassName={inputClassName}
                forValue={forValue}
                text={text}
                name={name}
                id={id}
                placeholder={placeholder}
            />
            <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">ثبت شرکت</Button>
            </div>
        </form>
    )
}

export default AddClientForm
