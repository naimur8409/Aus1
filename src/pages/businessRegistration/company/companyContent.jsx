import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import { ContentContainer } from '../../../utils/globalStyle';
const CompanyContent = () => {
    const cardContent =
        [
            {
            title : "Fill Out the Form",
            content: "We have taken the difficulty out of incorporating a company in Australia. We have crafted simple and easy to comprehend forms which can be filled in minutes"
            },
            {
            title : "Review",
            content: "We have an experienced team of incorporation agents and lawyers to review your application."
            },
            {
            title : "Application",
            content: "We connect in real time to ASIC to register your company in minutes."
            },
            {
            title : "Delivery",
            content: "Finally, the Company Registration Certificate & other essential legal documents will be delivered to your dashboard. You will also be notified by an email."
            },
        ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Online Company Registration in Australia | e-company</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Online Company Registration" 
            text = "We have designed an effortless company registration service for Australian entrepreneurs. You can get your company registered in a few minutes. You need to fill a simple form to register your company online. Please click the following button to register your company online:"
            subheader = "Register Your Company Now $39+506 (gov. fee)"
            button = "Order Now"
        />
        <HowItWorks data = {cardContent} title = "How We Process Your Company Registration" />
        </ContentContainer>
     );
}
 
export default CompanyContent;