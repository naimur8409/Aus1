import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import Questions from '../../../component/questions';
import { ContentContainer } from '../../../utils/globalStyle';

const AgentServiceContent = () => {
    const cardContent =
    [
        {
            title : "Step 1",
            content: "Fill out our simple form. Our experts will review the information provided by you. "
            },
            {
            title : "Step 2",
            content: "Once Completed, Registered Agent Service will be added to your Account.  "
            },
            {
            title : "Step 3",
            list: [
                {listItem: "We will notify you of any upcoming lodgement date."},
                {listItem: "Let us know of any changes to your company details. We will lodge appropriate forms to ASIC to reflect the changes."},
            ],
            },
    ]
    const questions = [
        {
            ques: "Facilities of our Registered Agent Service, ",
            list: [
                {listItem: "We will lodge your company's Annual Review Statement each year (with consultation)."},
                {listItem: "We will draft & lodge your director's solvency resolution each year (with consultation)."},
                {listItem: "We will update ASIC on any changes to your company details."},
                {listItem: "We connect with ASIC's database in real-time to update your company details through EDGE compliant software."},
                {listItem: "We will notify you on your filling obligation with ASIC."},
                {listItem: "You will get access to our client dashboard on our website, where all your documents will be stored securely. "},

            ],
        },
        {
            ques: "Why do you need a Registered Agent Service?",
            list: [
                {listItem: "All your important documents will be kept in your dashboard, thus no chance of misplacing a document again."},
                {listItem: "We will take care of your ASIC compliance responsibilities to reduce your administrative burden so that you can focus on your business concern."},
                {listItem: "Registered Agent Service will help you avoid ASIC late fees and penalties."},
            ],
            },
    ]
    const questionsMain = [
        {
            ques: "1.	Why should I use a Registered Agent Service?",
            text: "We will take care of your ASIC compliance responsibilities to reduce your administrative burden so that you can focus on your business concern. Registered Agent Service will help you avoid ASIC late fees and penalties."
        },
        {
            ques: "2.	Is there a limit to the number in changing the company details per year?",
            text: "No. With our Registered Agent Service subscription, you will have an unlimited number of ASIC lodgements related to changes to your company details.  You do not have to pay our Agency Filling fee.  "
        },
        {
            ques: "3.	What are the ASIC lodgements covered by Registered Agent Service?",
            list: [
                {listItem: "Change of company addresses"},
                {listItem: "Appointment and cessation of company officeholders"},
                {listItem: "Changing share structure"},
                {listItem: "Appointing or ceasing members"},
                {listItem: "Changes to officeholder details"},
                {listItem: "Company resolutions, e.g. change of company name"},
                {listItem: "Changes to shareholder details"},
            ],
        },
        {
            ques: "4.	What is the Annual Statement?",
            text: "Each year, ASIC sends every company an annual statement immediately after the company's registration anniversary.  An annual statement contains the following:",
            list: [
                {listItem: "a statement of your company's current details,"},
                {listItem: "a statement of your company's current details,"},
                {listItem: "your company's corporate key"},
            ],
        },
        {
            ques: "5.	What to do with the Annual Statement?",
            text: "You need do the following in order to keep your company registered.",
            list: [
                {listItem: "Pass a solvency resolution."},
                {listItem: "Check your company details. Update your company details if needed. "},
                {listItem: "Pay an annual company review fee."},
            ],
        },
        {
            ques: "6.	What is company solvency resolution? ",
            text: "A solvency resolution is a resolution prepared by the directors of a company to confirm whether or not; a company will be able to pay back its debts when they are due.The directors need to have a reasonable basis for their opinion, where the resolution is passed by a majority. The resolution can be either positive or negative.",
            list: [
                {listItem: "Positive solvency resolution indicates that the company will be able to pay its debts when they are due."},
                {listItem: "Negative solvency resolution indicates that the company will not be able to pay its debts when they are due. In this case, the company has to notify ASIC if the directors pass a negative resolution."},
            ],
        },
        
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Registered Agent Service | e-company</title>
                <meta name="description" content="Registered Agent Service | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "Registered Agent Service, $249 annually " 
                text = "In Our Registered Agent Service, we will take care of your ASIC related documentation so that you can focus on your business concerns. Our Registered Agent Service is an annual subscription-based service suitable for those companies that wish to farm out their ASIC compliance responsibilities. "
                subheader = "Get registered Agent service Online $249 annually"
                button = "Order Now"
                ques  = {questions}
                link = "/agent-service-registration-form"
            />
            <HowItWorks data = {cardContent} title = "How It Works" />
            <Questions data = {questionsMain} title="Answers will only appear by clicking on the question " />
        </ContentContainer>
     );
}
 
export default AgentServiceContent;