import Button from '@/components/shared/Button'
import InputSection from '@/components/shared/InputSection'
import React from 'react'

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
    return (
        <form className={formClassName} >
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
