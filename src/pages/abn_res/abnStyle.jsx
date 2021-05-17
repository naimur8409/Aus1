import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    /* background-color: #fff; */
    /* width: 100%;
    height: auto; */
`;
export const Head = styled.div`
    height: 100vh;
    display: ${props => props.status ? 'none' : 'block'};
        h1{
            text-align: center;
            margin: 30px 0px;
            font-size: 24px;
        }
        h3{
            text-align: center;
            font-size: 20px;
        }
       
        color: #02143D;
        @media only screen and (max-width: 600px) {
            h1{
                text-align: center;
                margin: 30px 0px;
                font-size: 18px;
            }
            h3{
                text-align: center;
                font-size: 14px;
            }
        }
`;
export const Cards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        /* width: 100%; */
    }
`;
export const SelctText = styled.h4`
    align-self:center;
    color: #0101D2;
    font-size: 22px;
`;
export const Line = styled.div`
    height: 10px;
    width: 100%;
    border-bottom: 1px solid grey;
    /* background-color: #242323; */
`;

// ================form

export const FormContainer = styled.div`
    
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
    padding: 10px;
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
export const BillingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    padding: 10px;
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