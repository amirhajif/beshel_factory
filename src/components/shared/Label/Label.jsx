import React from 'react'

const Label = ({ className, forValue, text }) => {
    let defaultClassName = 'block'
    return (
        <label className={className || defaultClassName} for={forValue} >
            {text}
        </label>
    )
}

export default Label
