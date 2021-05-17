import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import Questions from '../../../component/questions';
import { ContentContainer } from '../../../utils/globalStyle';
const AvnContent = () => {
    const cardContent =
    [
        {
        title : "Step 1",
        content: "Fill out our simple form. We have created a simple and easy online form which you can fill out in minutes."
        },
        {
        title : "Step 1",
        content: "Our experts will review the information provided by you for compliance purposes, then your application will be processed."
        },
        {
        title : "Step 2",
        content: "Finally, we will deliver the ABN Advice Letter to your dashboard. A notification email will be sent to you once your order is ready. "
        },
    ]
    const questions = [
        {
            ques: "For Sole Traders",
            list: [
                {listItem: "Full Name"},
                {listItem: "Address"},
                {listItem: "Contact Details & TFN"},
                ],
        },
        {
            ques: "For Partnerships",
            list: [
                {listItem: "Full Name"},
                {listItem: "TFN"},
                {listItem: "Address & Contact Details of Partners"},
                ],
        },
        {
            ques: "For Companies",
            list: [
                {listItem: "Full Name"},
                {listItem: "TFN"},
                {listItem: "ACN"},
                {listItem: "Address & Contact Details of Directors/Shareholders"},
                ],
        },
       
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Australian Business Number (ABN)</title>
                <meta name="description" content="Australian Business Number (ABN)" 
                />
            </Helmet>
            <ContentHeader 
                header = "Australian Business Number (ABN)" 
                text = "ABN stands for Australian Business Number consisting of 11-digit unique numbers. It is an essential element to operate a business in Australia and to identify your business in Australia. It will help if you have ABN for any form of official business dealing in a community, private and public departments such as Australian Taxation Office (ATO). If you need ABN for your business, please click the following button and register ABN online: "
                subheader = "Register your ABN Online $39"
                button = "Order Now"
                link = "/abnResFrom"
            />
            
            <Questions data = {questions} title="Information Required for ABN in Australia:" />
            <HowItWorks data = {cardContent} title = "How It Works" />
        </ContentContainer>
     );
}
 
export default AvnContent;