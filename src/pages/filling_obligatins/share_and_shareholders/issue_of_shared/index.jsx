import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const IssueOfNewShares = () => {
    const cardContent =
    [
        {
        title : " Company Details",
        content: "ABN/ACN reference number"
        },
        {
        title : "Shares  ",
        content: "Details of the newly issued shares."
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
        content: "5-10 Minutes"
        },
        {
        title : "Late Fee",
        content: "Late fee is imposed after 28 days of changes."
        },
        {
        title : "Price",
        content: " Lodgement fee $149 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Issue of Shares $149</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Issue of Shares $149" 
            text = "You may need to issue shares if you need to expand the business operation or satisfy the future's financial demand. When you issue new shares, you must notify ASIC within 28 days; otherwise, ASIC will impose a penalty. If you want to notify ASIC about the issuance of new shares, please click the following button and fill the online form. "
            subheader = "Issuance of Shares Online "
            button = "Order Now"
            link = "/issue-of-shared-form"
        />
      <p style={{textAlign:'center'}}>What is the requirement to issue a new share of an Australian Company?</p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
          </ContentContainer>
     );
}
 
export default IssueOfNewShares;