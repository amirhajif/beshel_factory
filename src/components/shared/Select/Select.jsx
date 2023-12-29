import React from 'react'
import Label from '../Label'

const Select = ({
    parentClassName,
    labelClassName,
    forValue,
    text,
    selectClassName,
    selectId,
    options,
    isOrder = false
}) => {
    return (
        <div div className={parentClassName} >
            <Label className={labelClassName} forValue={forValue} text={text} />
            <div className="relative">
                <select className={selectClassName} id={selectId}>
                    {options.map((option) => (
                        <option key={option.id} value={option.id}>{isOrder ? option.order_number : option.title}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </div >
    )
}

export default Select
