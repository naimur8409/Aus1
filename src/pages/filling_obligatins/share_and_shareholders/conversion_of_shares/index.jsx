import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const ConversionOfShares = () => {
    const cardContent =
    [
        {
        title : " Company Details",
        content: "ABN/ACN reference number"
        },
        {
        title : "Shares  ",
        content: "Total number of current shares after changes."
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
        title : "Late Fee",
        content: "Late fee is imposed after 28 days of changes."
        },
        {
        title : "Price",
        content: " Lodgement fee $99 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Convert shares into smaller or larger numbers $99</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Convert shares into smaller or larger numbers $99" 
            text = "It is a standard practice to increase or decrease the number of shares while keeping the share capital same. For example, suppose your current number of shares is 1000 with $2 per value, but you want to increase the number of shares to 1500 due to the addition of new shareholders or other reasons while keeping the share capital the same. Once you change the share amount, you have to notify ASIC within 28 days to avoid penalty. If you have changed the share amount and want to notify ASIC, please click on the following button and fill the online form:"
            subheader = "Convert your Shares Online "
            button = "Order Now"
            link = "/conversion-of-shares-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to change the company’s constitution in Australia? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default ConversionOfShares;