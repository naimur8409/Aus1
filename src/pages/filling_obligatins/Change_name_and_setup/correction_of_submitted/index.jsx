import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const CorrectionofSubmitted = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number  "
        },
        {
        title : " Correction Details ",
        content: "Name and number of the submitted form and the corrections. "
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
        content: "5 Minutes"
        },
        {
        title : "Delivery",
        content: "Up to 24 business hours"
        },
        {
        title : "Price",
        content: "      Lodgement fee $39  "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Correction of Submitted Form $39</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Correction of Submitted Form $39" 
            text = "Use this service to amend/update the information provided to ASIC earlier. If the provided information to ASIC is inconsistent with that of the company, ASIC will impose a penalty. You also may face serious consequences such as imprisonment depending on the offence of misinformation. If you need to correct any submitted form, please click on the following button and fill the form online:"
            subheader = "Amend Information of a Submitted Form"
            button = "Order Now"
            link = "/correction-of-submitted-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/ procedure to amend a submitted form of an Australian company? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default CorrectionofSubmitted;