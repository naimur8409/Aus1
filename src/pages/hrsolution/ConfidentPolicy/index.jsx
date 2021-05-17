
import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../component/contentHeader';
import Questions from '../../../component/questions';
import { ContentContainer } from '../../../utils/globalStyle';
const ConfidencialityPolicy = () => {
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
            ques: "1. Why is a confidentiality policy important for a company? ",
            text: "It is necessary to put in place a confidentiality policy in a company to safeguard its confidential business information or personal information regarding staff, clients, private contractors, or any other involved party for that matter. Disclosing any such information can be a risk for both stakeholders and clients. ",
           },
        {
            ques: "2. What are the elements of the confidentiality policy? ",
            text: "The confidentiality policy has many elements that ensure the protection of sensitive data related to the company. The following are some of the main aspects: ",
            list: [
                {listItem: "The internal financial report is not yet public."},
                {listItem: "Confidential information about stakeholders."},
                {listItem: "Information about company service or products. "},
                {listItem: "Undisclosed clients or business partner."},
                {listItem: "Strategy or forecast of the company which is internal."},
                {listItem: "Any documents classified as confidential."},
                {listItem: "Any data which gives an advantage to the business competitors."},
            ],
               } ,
        {
            ques: "3. How does a confidentiality policy improve your business operation?",
            text: "When and if your business confidential is disclosed, it can affect your business's bottom line because it may give your competitors an unfair advantage. Hence, an adequately implemented confidentiality policy safeguards the business's sensitive information.",
         
        },
        {
            ques: "4. How is Confidentiality different from Privacy?",
            text: "Confidentiality and Privacy are not synonymous concepts. Privacy is an individual's right to have some limitations over his/her personal data on how to collect, use, or disclose. On the other hand, Confidentiality is the duty to protect information that is kept secret to a certain degree.",
              },
        {
            ques: "5. What is the scope of the Confidentiality Policy?",
            text: "A confidential policy involves all staff, stockholders, dealers, board members, or even interns who may collect or access confidential information.",
                },
        {
            ques: "6. Are there any exceptions to the confidentiality policy?",
            text: "The confidential data might be disclosed under some exceptional situation, for instance:",
            list: [
                {listItem: "Demand by a regulatory body for investigation procedure"},
                {listItem: "The company reviews a partnership that requires revealing certain information within legal boundaries. "},
                
            ],     },
        {
            ques: "7. Consequences of not complying with a Confidentiality Policy?",
            text: "Any member of the company or other stakeholders who are not complying with the confidential policy may face legal action or disciplinary consequence. Any confidential data is the right of a person or enterprise; violating a right is a serious offence. ",
                  },
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Confidentiality Policy $79</title>
                <meta name="description" content="Foreign Company Registration in Australia | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "What is a confidentiality policy?  " 
                text = "The confidential policy is designed to ensure how the company's staff are expected to deal with confidential information. Working in a company entails team getting access to personal, private, or sensitive information regarding the company, clients, employees, etc. This policy prevents the risk of unauthorized disclosure of any confidential or sensitive information by anyone handling such data. If you are looking for a confidentiality Policy for your Australian business/organization, please fill the online form by clicking the following button and Order Online."
                subheader = "Get Your Confidentiality Policy Online $79"
                button = "Order Now"
                link="/confidentiality-policy-from"
            />
            {/* <HowItWorks data = {cardContent} title = "How We Process Your Company Registration" /> */}
            <Questions data = {questions} title="Questions" />
        </ContentContainer>
     );
}
 
export default ConfidencialityPolicy;