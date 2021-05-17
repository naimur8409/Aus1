import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const DivisionOrConversionOfClassShares = () => {
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
        content: "Late fee is imposed after 14 days of changes."
        },
        {
        title : "Price",
        content: " Lodgement fee $99 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Divide or convert a class of shares $99</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Divide or convert a class of shares $99" 
            text = "You can change the current share class to another class or convert or increase it to more classes from the current form. Once you change the share class, you have to notify ASIC of converting a class of share within 14 days. If you have changed your ordinary class of shares to different classes and want to notify ASIC, please click the following button and fill the online form:  "
            subheader = "Divide your share class Online"
            button = "Order Now"
            link = "/division-or-conversion-of-class-shares-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement for the division or conversion of a share class in an Australian company?</p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default DivisionOrConversionOfClassShares;