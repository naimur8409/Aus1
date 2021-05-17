import styled from "styled-components";


export const HowItWorksContainer = styled.div`
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 40px 10px;
   
    width: 90%;
    margin: auto;
    margin-top: 30px;
`;

export const Header = styled.p`
    align-self: center;
    font-size: 24px;
    color: #02143D;
    font-weight: bold;
    text-align: center;
    span{
            margin : 0px 50px;
            padding: 0px 20px;
            font-size: 3px;
            background-color: #0101D2;
            position: relative;
            bottom: 10px;
        }
`;

export const Text = styled.p`
    align-self: center;
    font-size: 16px;
    color: #646464;
    width: 80%;
    margin: auto;
    padding-bottom: 20px;
`;

export const SubHeader = styled.p`
    align-self: center;
    font-size: 18px;
    color: #02143D;
    font-weight: bold;
`;

export const HowCard = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    height: 350px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    
`;
export const HowCardHeader = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    width: 100%;
    height: 20%;
    background-color: #0101D2;
    border-radius: 10px 10px 0px 0px;
    p{
        align-self: center;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
    }
`;
export const HowCardBody = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    p{
        align-self: center;
        padding: 10px;
        text-align: justify-content;
    }
`;