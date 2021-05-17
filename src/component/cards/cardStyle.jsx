import styled from "styled-components";

export const Container = styled.div`
    display: ${props => props.status ? 'flex' : 'none'};
    width: 250px;
    height: 180px;
    /* display: flex; */
    flex-direction:column;
    justify-content: center;
    padding: 5px;
    /* box-shadow: 0 4px 8px 0 rgba(45, 45, 255, 0.349), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    border-radius: 5px;
    /* border: 1px solid #0101D2; */
    margin: ${props => props.status ? '50px 20px' : '0px 0px'};
    text-align: center;
    cursor: pointer;
    background-color: #fff;
    @media only screen and (max-width: 900px) {
        /* flex-direction: row;
        width: 100%; */
        width: 450px;
        height: 150px;
        margin: ${props => props.status ? '10px 20px' : '0px 0px'};
    }
    @media only screen and (max-width: 600px) {
        width: 250px;
        height: 100px;
        margin: ${props => props.status ? '10px 20px' : '0px 0px'};
    }
    &:hover{
        box-shadow: 0 4px 8px 0 rgba(45, 45, 255, 0.349), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        transform: scale(1.1);
    }
    transition: 0.3s all;
    p{
        align-self: center;
        color: #646464;
        font-size: 18px;
    }
`;

export const Logo = styled.div`
    align-self: center;
    padding: 10px;
`;