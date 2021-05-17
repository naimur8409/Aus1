import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import { ContentContainer } from '../../../utils/globalStyle';

const NameRegiContent = () => {
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
            title : "Partner’s details ",
            content: "Details of all the partners/directors linked to the ABN"
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
            title : "Business Name delivery",
            content: "Up to 48 hours"
            },
            {
            title : "Price",
            list : [
                {listItem : "For 1 year $59"},
                {listItem : "For 3 years $119"},
            ]
            },
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Business Name Registration  | e-company</title>
                <meta name="description" content="Business Name Registration  | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "Business Name Registration From $59" 
                text = "A business name is a trading name of a company. A business name is needed when a company wants to trade under a different name than their registered company name. If you need a business name, please click the following button and register online: "
                subheader = "Register Your Business Name Online $59"
                button = "Order Now"
                ques  = {questions}
                link = "/business-name-registration-form"
            />
            <HowItWorks data = {cardContent1} title = "Information needed" />
            <HowItWorks data = {cardContent2} title = "What to expect" />
        {/* <Questions data = {questionsMain} title="Answers will only appear by clicking on the question " /> */}
        </ContentContainer>
     );
}
 
export default NameRegiContent;