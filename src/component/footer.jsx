import { Grid } from '@material-ui/core';
import React from 'react'
import { FaAngleRight, FaFacebookSquare, FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import styled from 'styled-components';
import CLogo from './logo.PNG'
const FooterContainer = styled.div`
    width: 100%;
    height: 550px;
    background-color: #2D2DFF;
   
`;

const FooterWrapper = styled.div`
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
const Footer = () => {
    return ( 
        <FooterContainer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290"><path fill="#DDDDDD" fill-opacity="1" d="M0,160L60,181.3C120,203,240,245,360,250.7C480,256,600,224,720,186.7C840,149,960,107,1080,122.7C1200,139,1320,213,1380,250.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            <Grid container spacing={0}>
                <Grid item sm={3} xs={6}>
                <FooterWrapper>
                    <img src={CLogo} alt="" width="130" style={{alignSelf: 'center'}} />
                    <br/>
                    <p style={{textAlign: 'center'}}>You focus on your business concerns, we will take</p>
                </FooterWrapper>
                </Grid>

                <Grid item sm={3} xs={6}>
                <FooterWrapper>
                    <h1>Contact Us</h1>
                    <p> <FaMapMarkerAlt /> 30 Commercial Road Fratton, Australia</p>
                    <p> <FaPhoneAlt /> 0423577489</p>
                </FooterWrapper>
                </Grid>

                <Grid item sm={3} xs={6}>
                <FooterWrapper>
                    <h1> Useful Links</h1>
                    <p>  <FaAngleRight /> Company</p>
                    <p>  <FaAngleRight /> FAQs</p>
                    <p>  <FaAngleRight /> Terns & Conditions</p>
                    <p>  <FaAngleRight /> Privacy</p>
                </FooterWrapper>
                </Grid>
                <Grid item sm={3} xs={6}>
                    <h1 style={{textAlign: 'left', color: '#fff'}}> Connect us</h1>
                <FooterWrapper style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    
                    
                    <span><FaFacebookSquare /></span>
                    <span><FaTwitterSquare /></span>
                    <span><FaInstagramSquare /></span>
                    <span><FaYoutubeSquare /></span>
                </FooterWrapper>
                </Grid>
            </Grid>

        </FooterContainer>
     );
}
 
export default Footer;