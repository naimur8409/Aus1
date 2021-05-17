import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import { ContentContainer } from '../../../../utils/globalStyle';
const NotificationofChangetoDirectors = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number      Company Name "
        },
        {
        title : " Director Details  ",
        content: "Details of all the director"
        },
        {
        title : "Address details",
        content: "Residential Address of the director"
        },
        
    ]
    const cardContent1 =
    [
        {
        title : "This form duration",
        content: "5 Minutes"
        },
        {
        title : "Late Fee",
        content: "Late fee is imposed after 30 days of change."
        },
        {
        title : "Price",
        content: "   Included in the Local Agent service"
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Change of  Directors</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Change to directors or directors' particulars" 
            text = "You may need to change the existing directors to advance the operations of your foreign company in Australia. You must notify ASIC if the current directors' name or address changes within 30 days to avoid penalty.  Under this service, you can notify ASIC of the following changes: "
            
            subheader = "Change Directors or Particulars Online"
            button = "Order Now"
            link="/notification-of-change-to-directors-form"
        />
        <p style={{textAlign:'center'}}>What is the requirement/procedure to appoint an agent of a foreign company in an Australian company?</p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
       
     </ContentContainer>
     );
}
 
export default NotificationofChangetoDirectors;