import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const AppointmentOfAlternateDirector = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number"
        },
        {
        title : "Directors Details   ",
        content: "Details of alternate director and conditions of appointment. "
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
        title : "Late fee",
        content: "Late fee is imposed after 30 days of the change"
        },
        {
        title : "Price",
        content: " Lodgement fee $49 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Appointment of An Alternate Director $49</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Appointment of An Alternate Director $49" 
            text = "If any current director needs a break from his responsibility for a specific period, an alternate director needs to be appointed to replace him during the absence. You need to notify ASIC of the appointment of an alternate director by a director in his absence. If you want to notify appointing an alternate director, please click on the following button and fill the online form: "
            subheader = "Appointment of An Alternate Director Online"
            button = "Order Now"
            link = "/appointment-of-alternate-director-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/ procedure to appoint an alternative director in an Australian company?</p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default AppointmentOfAlternateDirector;