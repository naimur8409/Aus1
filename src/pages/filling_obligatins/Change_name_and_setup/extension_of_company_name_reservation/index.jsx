import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const ExtensionCompanyNameReservation = () =>{
    const cardContent =
    [
        {
        title : "Applicant Details",
        content: " Details of the person       applying for reservation. "
        },
        {
        title : "Reservation Details  ",
        content: "Reservation reference number  "
        },
        {
        title : "Address details",
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
        content: "      Lodgement fee $119  "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Extension of Company Name Reservation $119</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Extension of Company Name Reservation $119" 
            text = "Use this service to extend the reservation period to continue holding the company name if you need additional time to incorporate the company. You must extend the period within two months of the reservation as it expires after two months. If you need to extend the reservation time, please click the following button and fill the form online:   "
            subheader = "Extent Company Name Reservation Online "
            button = "Order Now"
            link = "/extension-company-name-reservation-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to extend the company name reservation in Australia? </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default ExtensionCompanyNameReservation;