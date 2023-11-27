import React from 'react'
import Label from '../Label'
import TextField from '../TextField'

const InputSection = ({
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
        <div className={parentClassName}>
            <Label className={labelClassName} forValue={forValue} text={text} />
            <TextField name={name} id={id} placeholder={placeholder} className={inputClassName} />
        </div>

    )
}

export default InputSection
