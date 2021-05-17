import React from 'react'
import { Helmet } from 'react-helmet'
import ContentHeader from '../../../component/contentHeader'
import HowItWorks from '../../../component/howItWorks'
import { ContentContainer } from '../../../utils/globalStyle'
const TFNContent = () => {
    const questions = [
        {
            ques: "Business TFN Registration $79",
            text: "Choosing a unique, attractive business name is a crucial part of developing a brand. It helps your business stand out in the marketplace to reach your target customers/clients and grow faster."
           
        },
    ]
    const cardContent1 =
    [
        {
            title : "Business Details",
            list : [
                {listItem : "For 1 year $59"},
                {listItem : "For 3 years $119"},
            ]
            },
            {
            title : "Business Activity",
            list : [
                {listItem : "Details of main business activities  "},
                {listItem : "Contact details of the business"},
            ]
            },
            {
            title : "Associated Persons ",
            list : [
                {listItem : "Details of all the associated "},
                {listItem : "persons in the business and their addresses."},
            ]
            },
    ]
    const cardContent2 =
    [
        {
            title : "This form duration",
            content: "5-8 Minutes"
            },
            {
            title : "Business Name delivery",
            content: "Up to 48 hours"
            },
            {
            title : "Price",
            content: "$79"
            },
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>TFN Registration | e-company</title>
                <meta name="description" content="It has never been simpler to register your business TFN. With e-company, TFN registration has become very convenient & easy. Contact Us to get your TFN today!" 
                />
            </Helmet>
            <ContentHeader
                header = "Business TFN Registration $79" 
                text = "It has never been simpler to register your business TFN. With e-company, TFN registration has become very convenient & easy. Contact Us to get your TFN today!"
                button = "Order Now"
                link = "/tfn-registration-form"
            />
            <HowItWorks data = {cardContent1} title = "Information needed" />
            <HowItWorks data = {cardContent2} title = "What to expect" />
        {/* <Questions data = {questionsMain} title="Answers will only appear by clicking on the question " /> */}
        </ContentContainer>
     );
}
 
export default TFNContent;