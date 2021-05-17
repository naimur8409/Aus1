import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const AppointmentOfNewOfficeholder = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number"
        },
        {
        title : "New Name Details ",
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
        content: "7 business days"
        },
        {
        title : "Price",
        content: " Lodgement fee $499 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Change of company name $499</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Change of company name $499" 
            text = "This service is used to change the existing company name. The new company name must be available in the system when selecting the new name. Besides, above 75% of the vote is required to change the name of the company. If you need to change your company’s name, please click on the following button and fill the form online: "
            subheader = "Change Company Name Online"
            button = "Order Now"
            link = "/appointment-of-new-officeholder-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to change the company name in Australia? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default AppointmentOfNewOfficeholder;