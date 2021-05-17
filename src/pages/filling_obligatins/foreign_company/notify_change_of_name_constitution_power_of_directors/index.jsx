import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import { ContentContainer } from '../../../../utils/globalStyle';
const NotifyChangeofNameConstitutionPowerofDirectors = () => {
    const cardContent =
    [
        {
        title : "Company Details",
        content: "    ABN/ACN reference number      Company Name "
        },
        {
        title : " Name Change",
        content: "Name reservation number"
        },
        {
        title : "Upload Documents",
        content: "Upload relevant documents"
        },
        
    ]
    const cardContent1 =
    [
        {
        title : "This form duration",
        content: "5 Minutes"
        },
        {
        title : "Late Fee",
        content: "Late fee is imposed after 14 days of change of name, 1 month of change of constitution and powers of directors resident in Australia."
        },
        {
        title : "Price",
        content: " Included in the Local Agent service "
        },
        
    ]
    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Change of name/constitution/ powers of directors of a foreign company</title>
            <meta name="description" content="Online Company Registration 
                We have designed an effortless company registration service for Australian entrepreneurs.
                 You can get your company registered in a few minutes. You need to fill 
                 a simple form to register your company online. Please click the 
                 following button to register your company online" 
            />
        </Helmet>
        <ContentHeader 
            header = "Change of name/constitution/ powers of directors of a foreign company" 
            text = "Suppose you change the foreign company's name or constitution or change to the powers of the Australian resident 'Board' of directors of the foreign company, you must notify ASIC within 14 days to avoid penalty. If you want to notify changing name/constitution/ powers of directors of a foreign company in Australia, please click on the following button and fill the form Online: "
            subheader = "Change  particulars of directors Online"
            button = "Order Now"
            link="/notify-change-of-name-constitution-power-of-directors-form"
        />
        <h3 >What is the requirement/procedure to appoint an agent of a foreign company in an Australian company?</h3>
        <p>The following supporting documents needs to be attached as part of this lodgement per your service selection.</p>
        <ul><li>For changing name </li><ul><li>Provide a certified copy of the current Certificate or a document of similar effect, evidencing the name's change. The certification must be dated back to within three months of the date of our receiving it.</li></ul></ul>
        <ul><li>For Changing constitution </li><ul><li>o	Provide a certified copy of the current constitution or a copy of the instrument affecting the change. The certification must be dated back to within three months of the date of our receiving it.</li></ul></ul>
        <h3>In both cases, copies must be certified either by:  </h3>
        <ul><li>The governing authority (ASIC's equivalent) in its original place registration or </li>
        <li>Endorsed by Notary public or </li>
        <li>An affidavit (duly witnessed) by a director (or equivalent) or secretary of the foreign company</li></ul>
        <ul><li>For Changing directors' powers  </li><ul><li>You need to provide an endorsed memorandum executed by the foreign company affirming the powers of the resident Australian directors, being members of an Australian board of directors of the foreign company, as altered.</li></ul></ul>
        <p><b>Note:</b> If a document is not in English, the document and a certified translation of that document into English must be lodged. The translation must be certified. </p>
        <HowItWorks data = {cardContent} title = "Information needed" />
        <HowItWorks data = {cardContent1} title = "What to expect" />

       </ContentContainer>
     );
}
 
export default NotifyChangeofNameConstitutionPowerofDirectors;