
import React from 'react'
import { Input, InputLabel,InputError, InputWrapper } from './formStyle';

const MultiTextInput = ({name, label, error, ...rest}) => {
    // console.log(error ? error[name] : null)
    return ( 
        <>
        {error ?
            <InputWrapper>
                <InputError>{error}</InputError>
                <Input name={name} type="text" {...rest}/>
            </InputWrapper>
        :
            <InputWrapper>
                <InputLabel>{label}</InputLabel>
                <Input name={name} type="text" {...rest}/>
            </InputWrapper>
        }
        </>
     );
}
 
export default MultiTextInput