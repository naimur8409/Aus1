import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0px 0px 40px 0px;
    margin: 0px;
    /* width: 100%; */
    margin: auto;
    border: 1px solid #2D2DFF;
    
`;

export const Header = styled.p`
    align-self: center;
    font-size: 24px;
    color: #02143D;
    font-weight: bold;
    border-bottom: 1px solid #02143D;
    width: 70%;
    padding-bottom: 15px;
    text-align: center;
`;

export const Text = styled.p`
    align-self: center;
    font-size: 16px;
    color: #646464;
    width: 70%;
    margin: auto;
    padding-bottom: 20px;
`;

export const SubHeader = styled.p`
    align-self: center;
    font-size: 18px;
    color: #02143D;
    font-weight: bold;
`;

export const Button = styled.button`
    align-self: center;
    background-color: #0101D2;
    padding: 14px 16px;
    border: none;
    color: #fff;
    border-radius: 5px;
    margin: 5px;
    width: 150px;
    font-weight: bold;
    &:hover{
        background-color: #2D2DFF;
        cursor: pointer;
    }
`;

export const List = styled.div`
    margin: 0px 20px 10px;
    align-self: center;
    p{
        color: #646464;
    }
    ul{
    }
    li{
        color: #646464;
    }
`;