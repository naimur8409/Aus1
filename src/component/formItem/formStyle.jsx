import styled from "styled-components";

export const InputWrapper = styled.div`
    padding: 0px 0px;
`;

export const InputLabel = styled.label`
    font-size: 14px;
    color: #646464;
`;
export const InputError = styled.label`
    font-size: 14px;
    color: #da1414;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    /* margin: 8px 0; */
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    :focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(1, 1, 210, 0.8);
    }
`;
export const Select = styled.select`
    width: 100%;
    padding: 12px 20px;
    /* margin: 8px 0; */
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    :focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(1, 1, 210, 0.8);
    }
`;
export const Radio = styled.input`
    display: inline;
    background-color: reds;
 
`;
export const RadioLabel = styled.label`
    padding: 10px;
`;

export const TextAreaStyle = styled.textarea`
 width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(1, 1, 210, 0.8);
    }

`;