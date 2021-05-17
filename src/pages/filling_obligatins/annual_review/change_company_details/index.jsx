import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const ChangeCompanyDetails = () => {
    const cardContent =
    [
        {
        title : " Company Details",
        content: "ABN/ACN reference number"
        },
        {
        title : " Change Details  ",
        content: "Select the appropriate service and insert details of the change you want to update. "
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
        content: "10 Minutes"
        },
        {
        title : "Late Fee",
        content: "Late fee is imposed after 28 days of changes."
        },
        {
        title : "Price",
        content: " Lodgement fee $39 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Change company details in response to your company annual statement</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Change company details in response to your company annual statement" 
            text = "If you need to need to change/update company details in response to your company annual statement, please click the button and fill the form online: "
            subheader = "Change Company Details Online "
            button = "Order Now"
            link = "/change-company-details-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement to change the company details in response to an Australian Company's annual statement? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default ChangeCompanyDetails;