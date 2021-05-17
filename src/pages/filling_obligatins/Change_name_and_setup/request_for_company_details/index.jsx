import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const RequestCompanyDetails = () => {
    const cardContent =
    [
        {
        title : "Applicant Details",
        content: " Details of the person       applying for reservation. "
        },
        {
        title : " Declaration  ",
        content: "Authorise us to manage you ASIC related lodgement.   "
        },
        
        
    ]
    const cardContent1 =
    [
        {
        title : "This form duration",
        content: "1 Minutes"
        },
        {
        title : "Delivery",
        content: "Up to 24 business hours"
        },
        {
        title : "Price",
        content: "      Lodgement fee $35  "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Request company details $35</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Request company details $35" 
            text = "You can request a copy of the company details by using this service. The company details show the shareholders name, address, share structure, business address, officeholders name and address. If you need the company details, please click on the following button and fill the form online:  "
            subheader = "Request Company Details Online"
            button = "Order Now"
            link = "/request-for-company-details-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to request the company details in Australia? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
export default RequestCompanyDetails;