import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
from {
  transform: scale(.25);
  opacity: 0;
}

to {
  transform: scale(1);
  opacity: 1;
}
`;

const fadeOut = keyframes`
from {
  transform: scale(1);
  opacity: 0;
}

to {
  transform: scale(.25);
  opacity: 1;
}
`;
export const ContentContainer = styled.div`
    margin: 10px;
    padding: 10px;
`;
export const RegistrationContainer = styled.div`
    margin: 10px 10px 0px 10px;
    padding: 10px 10px 30px 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #dddddd;
    min-height: 100%;
`;
export  const FormWrapper = styled.div`
    align-self: center;
    width: 80%;
    
    min-height: 500px;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    padding: 5px 20px;
    background-color: #fff;
    
    box-shadow: 10px 8px 25px 0px #9b9a9a;
    margin-top: 0px;
    h5{
        margin: 0px 0px 10px 0px;
        display: inline=block;
        font-size: 16px;
        text-transform: uppercase;
        text-align: center;
    }

    @media only screen and (max-width: 400px) {
        width: 90%;
    }
  `;

export const FormContainer = styled.div`
padding: 0px 15px ;
    h3{
        text-align: center;
    }
`;

export const PreviewContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    
    h3{
        text-align: center;
        margin: 5px;
        padding: 0px 10px;
    }
    h4{
        text-align: center;
        margin: 5px;
        color: #0101D2;
        padding: 0px 10px;
    }
    p{
        margin: 5px;
        padding: 0px 10px;
    }
`;
export const BillingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    padding: 10px 0px;
    border: 1px solid #0101D2;
    border-radius: 5px;
    h3{
        text-align: center;
        margin: 5px;
    }
    h4{
        text-align: center;
        margin: 5px;
        color: #0101D2;
    }
    p{
        margin: 5px;
    }
`;
export const Line = styled.div`
    height: 10px;
    width: 100%;
    border-bottom: 1px solid grey;
    /* background-color: #242323; */
`;
export const SelctText = styled.h4`
    align-self:center;
    color: #0101D2;
    font-size: 22px;
    margin: 10px;
    text-transform: uppercase;
`;

export const TableContainer = styled.table`
    background-color: #3389FF;
    align-self: center;
    width: 70%;
    border-collapse: collapse;
   
    thead{
        padding: 5px;
        border: 1px solid #fff;
        
    }
    th{
        color: #1000ee;
        padding: 10px;
        border: 1px solid #fff;
    }
    td{
        text-align: center;
        font-size: 24px;
        color: #ffffff;
        font-weight: bold;
        padding: 10px;
        border: 1px solid #fff;
    }
`;

export const Note = styled.p`
    font-size: 12px;
    color: #4674b9;
    margin: 5px 0px;
`;