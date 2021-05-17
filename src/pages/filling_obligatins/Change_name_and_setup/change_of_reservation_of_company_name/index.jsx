import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const ChangeCompanyNameReservation = () => {
    const cardContent =
    [
        {
        title : "Applicant Details",
        content: "Details of the person       applying for reservation."
        },
        {
        title : "Reservation Details ",
        content: "Reservation reference number "
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
        content: "Up to 24 business hours"
        },
        {
        title : "Price",
        content: " Lodgement fee $69"
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Change of Company Name Reservation $69</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Change of Company Name Reservation $69" 
            text = "Use this service to change the name that you reserved earlier.  Please change the name while it is still reserved (within two months). You cannot change the name once it expires (after two months). If you need to change the company’s reserved name, please click the following button and fill the form online: "
            subheader = "Change Company Name Reservation Online"
            button = "Order Now"
            link = "/change-reservation-company-name-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to change the company’s reserved name in Australia? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default ChangeCompanyNameReservation;