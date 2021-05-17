import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import { ContentContainer } from '../../../../utils/globalStyle';
const AppointUsAsYourLocalAgent = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number      Company Name "
        },
        {
        title : " Appointor  ",
        content: "Details of all the partner/director/ Authorised person who is appointing us as Local Agent"
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
        content: "3 Minutes"
        },
        {
        title : "Late Fee",
        content: "Late fee is imposed after 30 days of change."
        },
        {
        title : "Price",
        content: "      Lodgement fee $59      &      Monthly fee $199 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Appoint us as your local Agent (Lodgement fee $59, monthly payment $199)</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Appoint us as your local Agent (Lodgement fee $59, monthly payment $199)" 
            text = "Every foreign company must appoint a Local Agent under the CA and, in many respects. Local Agent’s duties and responsibilities are similar to those of a company secretary under CA. Most importantly, a local agent is responsible for lodging documents with the Australian Securities and Investments Commission (ASIC) and can represent the company during sign up.Once your application is accepted.we will give you an identification number for future lodgement. In the case of a rejection, we will provide you with a full refund with the rejection reason.  Please fill in the following information to authorise us to act as a local Agent of your company. Once you approve us, we can submit all your necessary documents to ASIC legally "
            subheader = "Appoint Us as Local Agent Online"
            button = "Order Now"
            link="/appoint-us-your-local-agent-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement/procedure to appoint an agent of a foreign company in an Australian company?</p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default AppointUsAsYourLocalAgent;