import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import { ContentContainer } from '../../../../utils/globalStyle';
const DeregistrationOfCompany = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number      Company Name "
        },
        {
        title : " Applicant  ",
        content: "Details of all the applicant."
        },
        {
        title : "  Notice ",
        content: "Contact details of the persons need to receive the deregistration notice."
        },
        
    ]
    const cardContent1 =
    [
        {
        title : "This form duration",
        content: "5 Minutes"
        },
        {
        title : "Delivery",
        content: "Up 7 business days"
        },
        {
        title : "Price",
        content: "Lodgement fee $89"
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Deregistration of a Company $89</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Deregistration of a Company $89" 
            text = "If you decide to close your business, you can apply to deregister or dissolve your company. Usually, you cannot retrieve the company once the deregistration application is approved. If you want to deregister your company, please click the following button and fill the form online: "
            subheader = "Deregister your company Online"
            button = "Order Now"
            link="/deregistrationo-of-company-form"
        />
        {/* <p style={{textAlign:'center'}}>What is the requirement/procedure to deregister cancel the shares in an Australian company? </p> */}
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
    
        </ContentContainer>
     );
}
 
export default DeregistrationOfCompany;