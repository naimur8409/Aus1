import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import { ContentContainer } from '../../../../utils/globalStyle';
const NotificationofChangeofRegisteredOfficeorOfficeHours = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number      Company Name "
        },
        {
        title : " Address details",
        content: "Address of the company in Australia"
        },
        {
        title : "Address details",
        content: "Address of the company in place of origin."
        },
        
    ]
    const cardContent1 =
    [
        {
        title : "This form duration",
        content: "2-5 Minutes"
        },
        {
        title : "Late Fee",
        content: "Late fee is imposed after 7 days of change."
        },
        {
        title : "Price",
        content: " Included in the Local Agent service "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Change the Registered Office or Office Hours </title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Change the Registered Office or Office Hours " 
            text = "Suppose you change your business office address or office hours of your company in Australia or the country of origin, you must notify ASIC within seven days to avoid penalty. Please click the following button and fill the form online: "
            subheader = " Change your Register Office address or Office hour Online "
            button = "Order Now"
            link="/notification-of-change-of-registered-office-or-office-hours-form"
        />
        <p style={{textAlign:'center'}}>What is the requirement/procedure to appoint an agent of a foreign company in an Australian company?</p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
       </ContentContainer>
     );
}
 
export default NotificationofChangeofRegisteredOfficeorOfficeHours;