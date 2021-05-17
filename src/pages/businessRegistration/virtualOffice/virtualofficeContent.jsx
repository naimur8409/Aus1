import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import Questions from '../../../component/questions';
import { ContentContainer } from '../../../utils/globalStyle';

const VirtualOffice = () => {
    const cardContent =
    [
        {
            title : "Step 1",
            content: "Fill out our simple form."
            },
            {
            title : "Step 1",
            content: "Our experts will review the information provided by you. We will then change your registered address by submitting an application form to ASIC. "
            },
            {
            title : "Step 2",
            content: "Your future correspondences will be sent to your dashboard. You will get a notification email, every time we will upload the updated document to your account. "
            },
    ]
    const questions = [
        {
            ques: "In our Virtual Office Service, you will get",
            list: [
                {listItem: "It is legal requirement to have a registered address of your business.  "},
                {listItem: "Registered business address"},
                {listItem: "A Client Dashboard on our website, where all your documents will be stored securely."},
            ],
        },
        {
            ques: "Why do you need a Virtual Office?",
            list: [
                {listItem: "It is legal requirement to have a registered address of your business.  "},
                {listItem: "All your important documents will be kept in your dashboard, thus no chance of misplacing a document gain. "},
            ],
            },
    ]
    const questionsMain = [
        {
            ques: "1.	Why should I use a virtual office service?",
            text: "With Virtual Office, you are never going to miss necessary government and business mails. Most importantly, all of your important documents will be stored securely in your client dashboard. You have access your dashboard from anywhere in the world, simply by logging into your account."
        },
        {
            ques: "2.	What is the maximum limit to the number of documents per month?",
            text: "You will get ten documents for free with this standard subscription. We charge $9 for any additional documents. If you expect more than ten documents per month, contact us for a custom package. "
        },
        {
            ques: "3.	Do you send an original document on request?",
            text: "Yes. With an additional cost of $19 per document."
        },
        {
            ques: "4.	How long do you keep the original documents?",
            text: "We keep your documents for six months. If you need an original document, you must make the request within the six months.  "
        },
        {
            ques: "5.	What if my business is not registered in your State (Victoria)?",
            text: "You still can use virtual office service. Principal place of business & registered office address are two different things, and they can be in two different states. "
        },
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Virtual Office Registration | e-company</title>
                <meta name="description" content="Virtual Office, $420 annually | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "Virtual Office, $420 annually " 
                text = "Virtual office service is perfect for start-ups and entrepreneurs who are always on the go. With Virtual Office, you are never going to miss necessary government and business mails. Most importantly, we will secure all your essential documents in your dashboard. You have access your dashboard from anywhere in the world, only by logging into your account. "
                subheader = "Get your virtual Office Online $420 annually"
                button = "Order Now"
                ques  = {questions}
                link = '/virtual-office-registration-form'
            />
            <HowItWorks data = {cardContent} title = "How It Works" />
            <Questions data = {questionsMain} title="Answers will only appear by clicking on the question " />
        </ContentContainer>
     );
}
 
export default VirtualOffice;