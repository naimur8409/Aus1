import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const ChangeCompanyConstitution = () => {
    const cardContent =
    [
        {
        title : "Applicant Details",
        content: "Details of the person who is      applying for changing the constitution."
        },
        {
        title : "New Constitution Details",
        content: "You need to describe what do you wish to add or remove from the current Constitution"
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
        title : "Delivery",
        content: "Up to 24 business hours"
        },
        {
        title : "Price",
        content: " Lodgement fee $49 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Change of company constitution $49</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Change of company constitution $49" 
            text = "This service is used to change the constitution of an existing company. You need to pass a special resolution to change the constitution of the company. Once you change the company constitution, you must notify ASIC within the stipulated time to avoid penalty. If you need to notify about changing  your company’s constitution, please click on the following button and fill the form Online: "
            subheader = "Change of company constitution Online"
            button = "Order Now"
            link = "/change-company-constitution-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to change the company’s constitution in Australia? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default ChangeCompanyConstitution;