import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';

const AddNewRoleToOfficeholder = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number"
        },
        {
        title : "New Role Details  ",
        content: "Details of new roles, date and terms of appointment"
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
        content: "Late fee is imposed after 28 days of the change"
        },
        {
        title : "Price",
        content: " Lodgement fee $39 "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Add a new role to existing officeholder $39</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Add a new role to existing officeholder $39" 
            text = "Use this service to change or add a new role to the existing officeholder. You need to confirm whether the officeholder will act as a company's internal secretary or an alternate director. If there is a requirement to add a new role to the existing officeholder, please click the following and fill the form online:"
            subheader = "Add new role to officeholder Online"
            button = "Order Now"
            link = "/add-new-role-to-existing-officeholder-form"
        />
        <p style={{textAlign:'center'}}>What is the requirement/ procedure to add a new role to an Australian company's existing officeholder?</p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />
        </ContentContainer>
     );
}
 
export default AddNewRoleToOfficeholder;