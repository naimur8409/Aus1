
import React from 'react'
import { RadioLabel, Radio, InputLabel } from './formStyle';

const RadioInput = ({label,value, name, error,caption, ...rest}) => {
    return ( 
        <>
            {caption ? 
                <>
                <InputLabel>{caption}</InputLabel>
                <br/>
                </>
                :null
            }
            {error ? 
                <>
                <InputLabel>{error}</InputLabel>
                <br/>
                </>
                :null
            }
            <Radio type="radio" id={value} name={name} value={value} {...rest} />
            <RadioLabel for={name}>{label}</RadioLabel>
            {/* <InputLabel>{label}</InputLabel> */}
            {/* <Input type="text" placeholder={placeholder} /> */}
        </>
     );
}
 
export default RadioInput