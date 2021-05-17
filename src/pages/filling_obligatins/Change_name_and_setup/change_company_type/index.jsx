import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const CompanySetup = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number"
        },
        {
        title : "Company type Details  ",
        content: "A special resolution for the changing the company name."
        },
        {
        title : "Declaration ",
        content: "Authorise us to manage you ASIC related documentations."
        },
        
    ]
    const cardContent1 =
    [
        {
        title : "This form duration",
        content: "5 Minutes"
        },
        {
        title : "Delivery",
        content: "Up to 24 business hours"
        },
        {
        title : "Price",
        content: " Lodgement fee $149"
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Change Company Type $149</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Change Company Type $149" 
            text = "Use this service to change the existing company type. To change the company type, the board must pass a special resolution. You must notify ASIC within 14 days of changes; otherwise, a late fee will be imposed. If you want to notify about changing your company type, please click on the following button and fill the form online:"
            subheader = "Change Company Type Online"
            button = "Order Now"
            link = "/change-company-type-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement to change the company type in Australia? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default CompanySetup;