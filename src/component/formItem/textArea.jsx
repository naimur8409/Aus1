import { InputLabel } from '@material-ui/core'
import React from 'react'
import {TextAreaStyle} from './formStyle'
const TextArea = ({label, name, value, ...rest}) => {
    return ( 
        <>
            <InputLabel >{label}</InputLabel>
            <TextAreaStyle id={name} name={name} rows="4" cols="50" {...rest}>{value}</TextAreaStyle>
        </>
     );
}
 
export default TextArea;