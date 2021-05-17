import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const CompanyNameReservation = () => {
    const cardContent =
    [
        {
        title : "Applicant Details",
        content: " Details of the person applying for reservation. "
        },
        {
        title : "Reservation Details ",
        content: "ABN/ACN reference number (if the reservation is for an existing company)"
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
        title : "Delivery",
        content: "Up to 24 business hours"
        },
        {
        title : "Price",
        content: " Lodgement fee $119 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Application for Reservation of Company Name $119</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Application for Reservation of Company Name $119" 
            text = "If you really like a name for your business, you can reserve the name so that no one can take the name. You can reserve the c name for two months. You can renew it before it expires. To reserve a name for the company, please click on the following button and fill the form online: "
            subheader = "Reserve a Company Name Online"
            button = "Order Now"
            link = "/reservation-company-name-form"
        />
      <p style={{textAlign:'center'}}>what is the requirement/procedure to reserve a company name in Australia?</p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
export default CompanyNameReservation;