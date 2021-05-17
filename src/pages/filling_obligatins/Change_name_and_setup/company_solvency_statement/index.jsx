import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const CompanySolvencyStatement = () => {
    const cardContent =
    [
        {
        title : "Applicant Details",
        content: " Details of the person       applying for reservation."
        },
        {
        title : "Solvency Resolution",
        content: "Indicate company solvency status"
        },
        {
        title : "  Declaration ",
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
        content: "Up to 24 business hours"
        },
        {
        title : "Price",
        content: "      Lodgement fee $99  "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Company solvency statement $99</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Company solvency statement $99" 
            text = "You must notify ASIC within seven days when a negative solvency resolution is passed. If you pass a positive resolution, you do not need to inform ASIC, but keep the record with you. It means you need to pass solvency resolution in either case within seven days of the annual review date. If you need to notify about the passing of a negative solvency statement, please click on the following button and fill the form online: "
            subheader = "Submit Company Solvency Resolution Online"
            button = "Order Now"
            link = "/company-solvency-statement-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/ procedure to submit the solvency resolution of an Australian company?</p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default CompanySolvencyStatement;