import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const CommenceSpecialPurposeCompanyStatus = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number    "
        },
        {
        title : " Special Purpose  ",
        content: "Type of special purpose company. "
        },
        {
        title : "Address details",
        content: "Authorise us to manage you ASIC related documentations."
        },
        
    ]
    const cardContent1 =
    [
        {
        title : "This form duration",
        content: "2 Minutes"
        },
        {
        title : "Delivery",
        content: "Up to 24 business hours"
        },
        {
        title : "Price",
        content: "Lodgement fee $39   "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Commence Special Purpose Status $39</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Commence Special Purpose Status $39" 
            text = "Use this service to notify ASIC to commence special-purpose status. You must notify ASIC within 28 days of changes; otherwise, a late fee will be imposed. If you need to inform about the commencement of a special purpose, please fill the form online: "
            subheader = "Commence Special Purpose Status Online "
            button = "Order Now"
            link = "/commence-special-purpose-company-status-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/ procedure to have a special purpose status of an Australian company?</p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default CommenceSpecialPurposeCompanyStatus;