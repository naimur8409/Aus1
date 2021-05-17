import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const ReIssueAnnualReviewPayment = () => {
    const cardContent =
    [
        {
        title : " Company Details",
        content: "ABN/ACN reference number"
        },
        {
        title : "New Review Date",
        content: "Details of the ultimate holding company or Details of the common Officeholder. "
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
        content: "Up to 10 business days"
        },
        {
        title : "Price",
        content: " Lodgement fee $49 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Change annual review date $49</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Change annual review date $49" 
            text = "You can change the current annual review date to a preferred one. It will be comfortable to have the same annual review date when you have more than one company. If you need to change the current annual review date, please click the following button and fill the form online: "
            subheader = "  Change Annual Review Date Online"
            button = "Order Now"
            link = "/change-annual-review-date-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to change the annual review date of an Australian company? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default ReIssueAnnualReviewPayment;