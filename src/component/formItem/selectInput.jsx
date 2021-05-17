import React from 'react'
import Select from 'react-select';
import styled from 'styled-components';
import { InputError, InputLabel } from './formStyle';
const customStyles = {
    menuList: (styles) => ({
      ...styles,
      background: "papayawhip",
    }),
    input: (provided, state) => ({
      padding: "10px",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused
        ? "hsla(291, 64%, 42%, 0.5)"
        : isSelected
        ? "hsla(291, 64%, 42%, 1)"
        : undefined,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.9 : 1;
      const transition = "opacity 300ms";
  
      return { ...provided, opacity, transition };
    },
  };

  

  const InputWrapper = styled.div`
    margin : 0px 0px;
    display: flex;
    flex-direction: column;
`;


  const Label = styled.label`
    font-size: 14px;
    color: #646464;
`;
const SelectInput = ({label,value,error, options,focus,multi, ...rest}) => {
    return ( 
        <>
            <InputWrapper>
                {error ? <InputError>{error}</InputError> : <InputLabel>{label}</InputLabel>}
                <Select options={options} value={value} autoFocus={focus} isMulti={multi} styles={customStyles} {...rest} />
            </InputWrapper>
        </>
     );
}
 
export default SelectInput;