import styled from "styled-components";


export const QuestionsContainer = styled.div`
    
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 40px 10px;
   
    background-color: #2D2DFF;
    width: 90%;
    margin: auto;
    margin-top: 30px;
    
`;

export const Header = styled.p`
    align-self: center;
    font-size: 24px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    span{
            margin : 0px 50px;
            padding: 0px 20px;
            font-size: 3px;
            background-color: #fff;
            position: relative;
            bottom: 10px;
        }
`;

export const Text = styled.p`
    align-self: center;
    font-size: 16px;
    color: #fff;
    width: 80%;
    margin: auto;
    padding-bottom: 20px;
`;

export const SubHeader = styled.p`
    margin: 10px 20px;
    align-self: flex-start;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
`;

export const List = styled.div`
    margin: 5px 20px 10px 35px;
    p{
        margin-top: 0px;
        color: #fff;
    }
    ol{
        margin-top: -15px;
    }
    li{
        color: #fff;
    }
`;