
import React from 'react'
import { Input, InputLabel,InputError, InputWrapper } from './formStyle';

const TextInput = ({name, label, error,focus, ...rest}) => {
   
    return ( 
        <>
        {error ?
            <InputWrapper>
                <InputError>{error}</InputError>
                <Input name={name} type="text" autoFocus={focus} {...rest}/>
            </InputWrapper>
        :
            <InputWrapper>
                <InputLabel>{label}</InputLabel>
                <Input name={name} type="text" autoFocus={focus} {...rest}/>
            </InputWrapper>
        }
        </>
     );
}
 
export default TextInput