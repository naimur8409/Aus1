import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const ReIssueAnnualReviewPayment = () =>  {
    const cardContent =
    [
        {
        title : " Company Details",
        content: "ABN/ACN reference number"
        },
        {
        title : "   Applicant  ",
        content: "Details of the applicant"
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
        content: "2 Minutes"
        },
        {
        title : "Delivery",
        content: "Up to 48 business hours"
        },
        {
        title : "Price",
        content: " Lodgement fee $39 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Re-issue Annual Statement $39</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Re-issue Annual Statement $39" 
            text = "If the annual statement issued by ASIC is lost or not received by you, you can request ASIC to re-issue another copy of the annual statement. You have to look at the annual statement's information before you lodge to avoid a potential penalty.  If you need another copy of the annual statement, please click the following button and fill the form online: "
            subheader = "Re-issue of Annual Statement Online "
            button = "Order Now"
            link = "/re-issue-annual-review-payment-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to re-issue an annual statement of an Australian company?  </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default ReIssueAnnualReviewPayment;