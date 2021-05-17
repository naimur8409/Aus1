import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import { ContentContainer } from '../../../utils/globalStyle';

const PartnerTreaderContent = () =>  {
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
                    {listItem: "ABN"},
                    {listItem: "Business Name Registration (1 Year)"},
                    {listItem: "TFN"},
                    {listItem: "GST"},
                    {listItem: "PAYG"},
                    {listItem: "Partnership Agreement"},
                    {listItem: "Access to our online Client Dashboard"},
                    {listItem: "Registration renewal and other filing obligation reminder."},
                ],

            }
        ]
    


    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Online Partnership Package in Australia | ABN+TFN+GST+PAYG+ Partnership Agreement | e-company</title>
            <meta name="description" content="We have taken the difficulty out of forming a partnership business in Australia. We have created a single form to register all in the package in minutes. We connect in real-time to ASIC to register your business. " 
            />
        </Helmet>
        <ContentHeader 
            header = "Online Partnership Package" 
            text = "We have taken the difficulty out of forming a partnership business in Australia. We have created a single form to register all in the package in minutes. We connect in real-time to ASIC to register your business. "
            subheader = "Kick Start Your Enterprenurship Journey Now at $179"
            button = "Order Now"
            ques  = {questions}
            link = "/partner-trader-registration-form"

        />
        <HowItWorks data = {cardContent} title = "How It Works" />
        </ContentContainer>
     );
}
 
export default PartnerTreaderContent;