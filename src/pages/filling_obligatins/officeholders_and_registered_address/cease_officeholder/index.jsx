import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const CeaseOfficeholder = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number"
        },
        {
        title : "Cessation Details  ",
        content: "Name, date & place of birth of the ceased officeholder."
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
            <title>Cease Officeholder $39</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Cease Officeholder $39" 
            text = "You may need to cease the officeholder depending on the company's necessity. Please click on the following button and fill the form online to terminate your company's existing officeholder. "
            subheader = "Cease Officeholder Online"
            button = "Order Now"
            link = "/chease-officeholder-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to cease officeholder of your company in Australia? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
export default CeaseOfficeholder;