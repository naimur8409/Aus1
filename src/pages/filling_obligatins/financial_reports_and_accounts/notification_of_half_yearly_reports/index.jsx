import React from 'react'
import {Helmet} from "react-helmet";
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import { ContentContainer } from '../../../../utils/globalStyle';
const NotificationOfHalfYearlyReports = () => {
    const cardContent =
        [
            {
            title : "Company Details",
            content: "    ABN/ACN reference number      Company Name "
            },
            {
            title : " Applicant  ",
            content: "Details of all the applicant."
            },
            {
            title : " Declaration ",
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
            content: "Late fee is imposed after 75 days of changes"
            },
            {
            title : "Price",
            content: "Lodgement fee $39"
            },
            
        ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Submission of half-yearly financial reports $39</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Submission of half-yearly financial reports $39" 
            text = "You can notify ASIC of the declaration of your half-yearly financial report submission. A disclosing local entity must prepare the financial report following Chapter 2M of the corporation Act. You have to submit the report to ASIC within 75 days of the half-year end to avoid the penalty. If you want to notify ASIC about your company’s half-yearly financial report, please click the following button and fill the form online: "
            subheader = "Submit of half-yearly Financial report Online"
            button = "Order Now"
            link="/notification-of-half-yearly-reports-form"
        />
        <p style={{textAlign:'center'}}>What is the requirement/procedure to submit the half-yearly financial report of an Australian company? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
        </ContentContainer>
     );
}
 
export default NotificationOfHalfYearlyReports;