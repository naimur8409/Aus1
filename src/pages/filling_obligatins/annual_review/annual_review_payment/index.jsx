import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const AnnualReviewPayment = () => {
    const cardContent =
    [
        {
        title : " Company Details",
        content: "ABN/ACN reference number"
        },
        {
        title : "Service ",
        content: "Select the appropriate service"
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
        title : "Late Fee",
        content: "Late payment is imposed after 2 months of anniversary."
        },
        {
        title : "Price",
        content: " Lodgement fee $49 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Annual Review Payment</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Annual Review Payment" 
            text = "You have to review the annual statement as a requirement of the company's registration up to date. The review date is the company's anniversary date. You must make the annual review payment within two months from the company's anniversary date to avoid the penalty. If you want to submit the annual review payment, please click the following button and fill the online form: "
            subheader = "Submit Annual Review Online "
            button = "Order Now"
            link="/"
            link = "/annual-review-payment-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to submit the annual review of an Australian company?  </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
 
export default AnnualReviewPayment;