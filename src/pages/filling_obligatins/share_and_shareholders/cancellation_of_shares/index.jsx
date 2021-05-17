import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const CancellationOfShares = () => {
    const cardContent =
    [
        {
        title : " Company Details",
        content: "ABN/ACN reference number"
        },
        {
        title : "Shares  ",
        content: "Cancellation details and reason."
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
        content: " Lodgement fee $149 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Cancellation of Shares $149</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Cancellation of Shares $149" 
            text = "You have the right to cancel the preference share, which is issued on redeemable terms.  Usually, redeemable shares are cancelled when the company has sufficient capital. If you cancel the redeemable shares, you have to notify ASIC within 28 days to avoid penalty. If you need to notify ASIC to cancel the shares, please click the following button and fill the online form:  "
            subheader = "Cancesllation of Shares Online "
            button = "Order Now"
            link = "/cancellation-of-shares-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to cancel the shares in an Australian company? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default CancellationOfShares;