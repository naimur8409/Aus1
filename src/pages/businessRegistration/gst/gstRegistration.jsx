import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import { ContentContainer } from '../../../utils/globalStyle';

const GSTRegiContent = () => {
    const questions = [
        {
            ques: "Why do you need to register for a business name?",
            text: "Choosing a unique, attractive business name is a crucial part of developing a brand. It helps your business stand out in the marketplace to reach your target customers/clients and grow faster."
           
        },
    ]
    const cardContent1 =
    [
        {
            title : "ABN details",
            content: "ABN reference numberIf you don’t have an ABN, you can apply one through this application."
            },
            {
            title : "GST",
            list: [
                {listItem: "Estimated turn-over"},
                {listItem: "GST commence date"},
            ],
            },
            {
            title : "Address details",
            content: "An Australian address."
            },
    ]
    const cardContent2 =
    [
        {
            title : "This form duration",
            content: "5 Minutes"
            },
            {
            title : "Delivery",
            content: "Same day"
            },
            {
            title : "Price",
            list : [
                {listItem : "For 1 year $39"},
            ]
            },
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>GST Registration  | e-company</title>
                <meta name="description" content="GST Registration  | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "GST Registration From $59" 
                text = "Goods and Services Tax is a tax of 10 per cent on the sale of most goods and services in Australia, also known as GST. You must register for GST if your business has a GST turnover of $75 000 or more.  If you need to register GST for your business, please click the following button and register GST online:  "
                subheader = "Register Your GST Online $59"
                button = "Order Now"
                ques  = {questions}
                link = "/gst-registration-form"
            />
            <HowItWorks data = {cardContent1} title = "Information needed" />
            <HowItWorks data = {cardContent2} title = "What to expect" />
        {/* <Questions data = {questionsMain} title="Answers will only appear by clicking on the question " /> */}
        </ContentContainer>
     );
}
 
export default GSTRegiContent;