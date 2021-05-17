
import React from 'react'
import { Input, InputLabel,InputError, InputWrapper } from './formStyle';

const FileInput = ({name, label, error, ...rest}) => {
    // console.log(error)
    return ( 
        <>
        {error ?
            <InputWrapper>
                <InputError>{error}</InputError>
                <Input name={name} type="file" {...rest}/>
            </InputWrapper>
        :
            <InputWrapper>
                <InputLabel>{label}</InputLabel>
                <Input name={name} type="file" {...rest}/>
            </InputWrapper>
        }
        </>
     );
}
 
export default FileInput