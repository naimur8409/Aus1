import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import { ContentContainer } from '../../../utils/globalStyle';
const Company_Package_Content = () => {
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


        const questions = [

            {
                ques: "What is Included in The Package? ",
                text: "",
                list: [
                    {listItem: "ACN"},
                    {listItem: "ABN"},
                    {listItem: "TFN"},
                    {listItem: "GST"},
                    {listItem: "PAYG"},
                    {listItem: "Company Constitution"},
                    {listItem: "Share Certificates"},
                    {listItem: "Office Holders Consent Letters"},
                    {listItem: "Shareholders Agreement"},
                    {listItem: "Access to our online Client Dashboard"},
                    {listItem: "Registration renewal and other filing obligation reminder."},
                ],

            }
        ]
    


    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Online Company Registration Package in Australia | ACN+ABN+TFN+GST+PAYG+Company Documents | e-company</title>
            <meta name="description" content="We have transferred the way a company is registered. With e-company it is as simple as clicking a few buttons and filling easy to understand form. We have created a single form to register all in the package in minutes. We connect in real-time to ASIC to register your company. " 
            />
        </Helmet>
        <ContentHeader 
            header = "Online Company Registration Package " 
            text = "We have transferred the way a company is registered. With e-company it is as simple as clicking a few buttons and filling easy to understand form. We have created a single form to register all in the package in minutes. We connect in real-time to ASIC to register your company. "
            subheader = "Kick Start Your Enterprenurship Journey Now at $699"
            button = "Order Now"
            ques  = {questions}

        />
        <HowItWorks data = {cardContent} title = "How It Works" />
        </ContentContainer>
     );
}
 
export default Company_Package_Content;