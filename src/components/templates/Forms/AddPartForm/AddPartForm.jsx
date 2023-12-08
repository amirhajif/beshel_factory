"use client"
import { AddPart } from '@/apis/sampleApi'
import { useRouter } from 'next/navigation';
import Button from '@/components/shared/Button'
import InputSection from '@/components/shared/InputSection'
import React from 'react'
import Swal from 'sweetalert2'


const AddPartForm = ({
    formClassName,
    parentClassName,
    labelClassName,
    inputClassName,
    forValue,
    text,
    name,
    id,
    placeholder,
}) => {

    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault()
        let formsElements = e.target.elements;

        let title = formsElements.namedItem('title')?.value
        // const res = await AddPart(title)
        const response = await AddPart(title)
        // console.log(response)
        response != undefined ?
            Swal.fire({
                title: 'قطعه افزوده شد',
                text: `قطعه شما با شناسه ${response.id} با موفقیت افزوده شد`,
                icon: 'success'
            })
            :
            Swal.fire({
                title: 'قطعه افزوده نشد',
                text: `در افزودن قطعه ${title} مشکلی پیش آمده`,
                icon: 'error'
            })
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
                <Button className="bg-transparent hover:bg-green-500 w-full text-green-700 font-semibold hover:text-white mt-6  py-3 px-4 border border-green-500 hover:border-transparent rounded">ثبت قطعه</Button>
            </div>
        </form>
    )
}

export default AddPartForm
