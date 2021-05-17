import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const NameChangeOfOfficeholder = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number"
        },
        {
        title : "Name Details ",
        content: "Name, date & place of birth and residential address."
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
        content: "3 Minutes"
        },
        {
        title : "Late fee",
        content: "Late fee is imposed after 28 days of the change"
        },
        {
        title : "Price",
        content: " Lodgement fee $39 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Change of Name: Officeholder or Member $39</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Change of Name: Officeholder or Member $39" 
            text = "This service is used to correct/change the name of the existing officeholder. The need to change the officeholder’s name can arise from the name change by deed poll or marriage or spelling mistakes. If you need to change the name of an existing officeholder, please click on the following button and fill the online form to change the name: "
            subheader = "Get Name Change of Officeholder Online"
            button = "Order Now"
            link = "/name-change-of-officeholder-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to change the name of the officeholder of an Australian company? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
export default NameChangeOfOfficeholder;