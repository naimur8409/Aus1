import { Link } from "react-router-dom";
import styled from "styled-components";

export const Top = styled.div`
    background-color: #0101D2;
    color: #fff;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;

    
   
    p{
        flex: 30%;
    }
    @media only screen and (max-width: 900px) {
        height: 80px;
        p{
            flex: 20%;
        }
    }
    @media only screen and (max-width: 400px) {
        height: 80px;
        p{
            display: none;
            }
        }
`;

export const Head = styled.div`
    flex: 70%;
 h5{
        background-color: #00B7D2;
        padding: 5px;
        border-radius: 5px;
        font-weight: normal;
        width: 220px;
        margin: 0px 30px;
    }
    @media only screen and (max-width: 900px) {
        flex: 30%;
    }
`;

export const Buttons = styled.div`
    flex: 13%;
    @media only screen and (max-width: 900px) {
            flex: 40%;
    }
    @media only screen and (max-width: 400px) {
        display: none;
    }
`;


// =========================Bar============

export const Bar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

export const BarItem = styled.div`
    position:relative;
    height: 60px;
    /* flex: 10%; */
    padding: 0px 5px;
    align-self: center;
    cursor: pointer;
    position: relative;
    display: inline-block;
    &:hover{
        background-color: #dbdbdb;
    }
    
`;

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: rgb(156, 156, 156);
    min-width: 330px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 0px;
    z-index: 1;
    margin: -5px; 
    :hover ${BarItem}{
        :hover{
        display: block;
        }
    }
    @media only screen and (max-width: 1200px) {
        margin-top: -20px;
    }
`;
export const DropItem = styled(Link)`
    padding: 14px 16px;
    margin: 0px;
    display: block;
    color: #ffffff;
    text-decoration: none;
    :hover{
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        background-color: #eeeeee;
        color: #000;
    }
`;
export const DropDown = styled.div`
    display: inline-block;
    &:hover ${DropdownContent} {
        display: block;
    }
    
    
`;


export const SubBarItem = styled.div`
    position: relative;
    padding: 14px 16px;
    margin: 0px;
    display: block;
    color: #ffffff;
    text-decoration: none;
    :hover{
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        background-color: #eeeeee;
        color: #000;
    }
`;
export const SubDropdownContent = styled.div`
    display: none;
    
    background-color:rgb(156, 156, 156);
    min-width: 360px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 0px;
    z-index: 1000;
    
`;
export const SubDropItem = styled(Link)`
    padding: 14px 10px;
    margin: 0px;
    display: block;
    color: #ffffff;
    text-decoration: none;
    :hover{
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        background-color: #eeeeee;
        color: #000;
    }
`;
export const SubDropDown = styled.div`
    display: block;
    &:hover ${SubDropdownContent} {
        display: inline-block;
        margin-top: -50px;
        position: absolute;
        left: 330px;
        /* top: 0px; */
    }
    
    
`;