import styled from "styled-components";
export const Wrapper = styled.div`
    
    background-image: linear-gradient(to right, #F1F2FE , #FFFFFF);
`;
export const Bg1 = styled.img`
    width: 130px;
`;
export const Bg2 = styled.img`
    width: 130px;
    position: absolute;
    top: 100px;
    right: 0px;
    width: 500px;
`;

export const Head = styled.div`
    width: 40%;
    margin: 0px 20px 30px 0px;
    padding: 0px 20px;
    h1{
        color: #02143D;
        font-size: 34px;
        margin: 8px 5px;
    }
    h4{
        color: #646464;
        font-size: 24px;
        margin: 8px 5px;
    }
    h5{
        color: #646464;
        font-size: 18px;
        font-weight: normal;
        margin: 8px 5px;
    }
    button{
        margin: 40px 0px;
        width: 100%;
        padding: 18px;
        background-color: #2D2DFF;
        color: #fff;
        font-size: 24px;
        border: none;
        border-radius: 5px;
        
        :hover{
            background-color: #016BFF;
            cursor: pointer;
        }
        &:focus{
            outline: none;
        }
    }
`;

export const Content = styled.div`
    background-color: ${props => props.color === 'yes' ? '#0101D2' : '#fff'};
    height: auto;
    margin : 20px 0px; 
    padding: 20px 0px;
`;

export const ContentWrapper = styled.div`
    
    margin: 0px 50px;
    display: flex;
    justify-content: center;
`;

export const Header = styled.h1`
        color: #02143D;
        font-size: 24px;
        margin: 8px 5px;
       text-align: center;
        span{
            margin : 0px 50px;
            padding: 0px 20px;
            font-size: 3px;
            background-color: #0101D2;
            position: relative;
            bottom: 10px;
        }
` 

export const Card = styled.div`
    width: 100%;
    height: 350px;
    background-color: #0101D2;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover{
        transform: scale(1.05);
        transition: 0.2s;
    }
`;

export const CardIcon = styled.div`
    width: 100%;
    height: 30%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    
`;

export const Icon = styled.span`
    align-self: center;
    font-size: 46px;
`;
export const CardContent = styled.div`
    height: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1{
        align-self: center;
        color: #fff;
        font-size: 20px;
        margin: 10px 5px;
        font-weight: normal;
        text-align: center;
    }
    h4{
        align-self: center;
        color: #fff;
        font-size: 16px;
        margin: 10px 5px;
        font-weight: normal;
        text-align: center;
    }
    h5{
        align-self: center;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        margin: 10px 5px;
        text-align: center;
    }
`;

export const PlainCard = styled.div`
    align-self: center;
    width: 100%;
    height: 450px;
    background-color: ${props => props.color === 'yes' ? '#C9E0FF' : '#fff'};
    border-radius: 5px;
    margin : 10px;
    h1{
        margin: 10px;
        padding: 10px;
        color: #02143D;
        font-weight: normal;
        font-size: 20px;
    }
    p{
        margin: 0px 10px;
        padding: 4px 10px;
        color: #646464;
        font-size: 17px;
        span{
            font-size: 14px;
        }
    }
    
    button{
        margin: 40px 0px;
        width: 90%;
        padding: 18px;
        background-color: #2D2DFF;
        color: #fff;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        
        :hover{
            background-color: #016BFF;
            cursor: pointer;
        }
        &:focus{
            outline: none;
        }
    }
`;
export const PlainCardIcon = styled.div`
    font-size: 56px;
    margin: 10px;
    padding: 10px;
`;

export const InputBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    input{
        border-radius: 10px;
        padding: 15px 20px;
        width: 70%;
        :focus{
            outline: none;
            border-radius: 10px;
        }
    }
`;

export const Slider = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const ClipCards = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
p{
    
    margin: 0px 5px;
    span{
        background-color: #393D72;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        display: inline-block;
    }
}
`;
export const ClipCard = styled.div`
    
    width: 100%;
    height: 300px;
    background-color: #0101D2;
    clip-path: polygon(100% 1%, 100% 84%, 28% 85%, 32% 100%, 15% 85%, 0 85%, 0 0);
    display: flex;
    justify-content: center;
    h3{ 
        margin-top: -10px;
        align-self: center;
        padding: 10px;
        color: #fff;
        /* align-self: center;,. ; ,. ,.,. */
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 550px;
    background-color: #2D2DFF;
   
`;

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    h1{
        text-align:left;
    }
    p{
        /* padding: 0px 10px; */
        margin: 5px;
    }
    span{

        padding: 10px;
        font-size: 20px;
        cursor: pointer;
    }
`;