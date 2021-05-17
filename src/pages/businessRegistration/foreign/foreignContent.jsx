import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import Questions from '../../../component/questions';
import { ContentContainer } from '../../../utils/globalStyle';
const ForeignCompany = () => {
    const cardContent =
        [
            {
            title : "Fill Out the Form",
            content: "We have crafted simple and easy to comprehend forms which can be filled in minutes."
            },
            {
            title : "Upload",
            content: "Upload the required documents."
            },
            {
            title : "Review",
            content: "We have an experienced team of incorporation agents and lawyers to review your application."
            },
            {
            title : "Application",
            content: "Once we have received everything we need from you, we will then submit the application to ASIC. "
            },
            {
            title : "Delivery",
            content: "Finally, the Company Registration Certificate & other essential legal documents will be delivered to your dashboard. You will also be notified by an email."
            },
        ]
    const questions = [
        {
            ques: "1. What are the requirements to register a Foreign company (branch) in Australia?",
            text: "To be eligible for this registration, you must:",
            list: [
                {listItem: "Provide the certified copy of the Certificate of Incorporation or Registration and a Certified copy of the body's Constitution (not more than three months old)."},
                {listItem: "A list of Directors. "},
                {listItem: "Must appoint ppoint a local agent. "},
                {listItem: "A memorandum asserting the powers of certain directors (Optional). "},
            ],
            note: "Note: If any documents are not in English, it is required to translate it into English."
        },
        {
            ques: "2. Does a foreign company need a local agent in Australia",
            text: "Yes, a foreign company must appoint a Local Agent under the CA and, in many respects. Local Agent's duties and responsibilities are similar to those of a company secretary under CA. Most importantly, a local agent is responsible for lodging documents with ASIC and can sign on behalf of the company.",
            note: `We assist companies in meeting the above requirements; Please Contact Us for further details regarding Local Agent services`
        },
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Foreign Company Registration in Australia | e-company</title>
                <meta name="description" content="Foreign Company Registration in Australia | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "Foreign Company Registration in Australia " 
                text = "If you are looking to expand your business in Australia, you have come to the right place. There are two different ways a Foreign Company can operate in Australia. To carry on a business in Australia, you must incorporate your business in Australia either as a local subsidiary company (partly or wholly owned) or a branch office. If you decide to operate your business in Australia, please click the following button to register your foreign company online"
                subheader = "Register  your Foreign Company Online $1190"
                button = "Order Now"
                link="/foreign-company-registration-form"
            />
            <HowItWorks data = {cardContent} title = "How We Process Your Company Registration" />
            <Questions data = {questions} title="Other information on Foreign Company Registration in Australia:" />
        </ContentContainer>
     );
}
 
export default ForeignCompany;