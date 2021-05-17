import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import { ContentContainer } from '../../../../utils/globalStyle';
const NotificationofDissolutionofCompany = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number      Company Name "
        },
        {
        title : "Liquidator",
        content: "Details of all the liquidator if one is appointed. "
        },
        {
        title : "Local Agent",
        content: "You must appoint us as your Local Agent if you haven’t already. "
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
        content: "Late fee is imposed after 7 days of change of name, 1 month of change of constitution and powers of directors resident in Australia."
        },
        {
        title : "Price",
        content: " Included in the Local Agent service "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Dissolution, winding up or cessation of a foreign company or registered Australian body </title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Dissolution, winding up or cessation of a foreign company or registered Australian body " 
            text = "If your company has started winding up proceedings in its place of origin, you will be required to lodge this form with ASIC twice. The first form is lodged at the commencement of winding up proceeding to notify the liquidator's appointment. The second form is lodged when the company has been dissolved. You must notify ASIC Within seven days of ceasing to carry on business in Australia or within one month of winding up or dissolution/deregistration in its place of origin. However, If you decide to dissolve your foreign company in Australia, please fill the form online: "            
            subheader = "Deregister your company Online"
            button = "Order Now"
            link="/notification-of-dissolution-of-company-form"
        />
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
 </ContentContainer>
     );
}
 
export default  NotificationofDissolutionofCompany;