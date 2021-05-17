import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import { ContentContainer } from '../../../../utils/globalStyle';
const RequestCompanyDebtReport = () => {
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
            title : " Declaration ",
            content: "Authorise us to manage you ASIC related documentations."
            },
            
        ]
        const cardContent1 =
        [
            {
            title : "This form duration",
            content: "2 Minutes"
            },
            {
            title : "Delivery",
            content: "Up to 48 business hours"
            },
            {
            title : "Price",
            content: "Lodgement fee $89"
            },
            
        ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Request Company Debt Report $89</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Request Company Debt Report $89" 
            text = "Use this service to request ASIC to issue a debt report of your company. The report shows the total outstanding debt of the company along with the company’s name and ACN. If you need the company’s debt report, please click on the following button and fill the form online: "
            subheader = "Get your company Debt Report Online"
            button = "Order Now"
            link="/request-company-debt-report-form"
        />
       <p style={{textAlign:'center'}}>What is the requirement/procedure to request a debt report of an Australian company? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
        
       </ContentContainer>
     );
}
 
export default RequestCompanyDebtReport;