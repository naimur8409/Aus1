import React from 'react'

const CheckInput = ({label, name, value, ...rest}) => {
    return ( 
        <>
        <input type="checkbox" id={name} name={name} checked={value} {...rest} />
        <label for={name}> {label}</label>
        </>
     );
}
 
export default CheckInput;