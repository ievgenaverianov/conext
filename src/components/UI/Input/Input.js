import React from "react";
import './Input.scss'

function isInvalid({valid, touched, shouldValidate, focused}) {
    return !valid && shouldValidate && touched && !focused
}

const Input = props => {

    const inputType = props.type || 'text';
    const cls = ["Input"];
    const htmlFor = `${inputType}-${Math.round(Math.random()*1000)}`

    if (isInvalid(props)) {
        cls.push("invalid")
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
            />
            {
                isInvalid(props) && !props.focused
                    ? <span>{props.errorMessage || 'Enter the correct value'}</span>
                    : null
            }
        </div>
    )
}

export default Input

