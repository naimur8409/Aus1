
import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../component/contentHeader';
import Questions from '../../../component/questions';
import { ContentContainer } from '../../../utils/globalStyle';
const ItPolicy = () => {
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
            ques: "1. What is the role of the IT Policy? ",
            list: [
                {listItem: "To ensure that there are transparent processes in place for keeping the passwords and data secure."},
                {listItem: "To ensure how IT resources are monitored and accessed."},
                {listItem: "And lastly, it protects your business in the event of any unacceptable conduct by employees using your IT resources, including emails or social media use."},
             ] ,},
             {
                ques: "2. Why are IT Policies essential?",
                text: "Implementing IT Policies guarantees all data are kept safe in a business. Policies highlight the obligation to keep information from disclosure, unofficial access, damage, exploitation, and interfering and apply to data in both electronic and physical form. ",
             
            },
        {
            ques: "3. What are the standard IT Policies which companies should implement?",
           list: [
                {listItem: "Acceptable Use Policy - An acceptable use policy, restricts the use of a company's network and services to do unauthorised activities/usage.  It stops the unlawful activities, promises safety, and secures the status of the company."},
                {listItem: "Privacy Policy - Privacy policies protect the private data gathered from a company's participants; these are personal data used for carrying out the business need, i.e. names, addresses, banking details, etc."},
                {listItem: "Data Governance Policy - Data governance policies outline how data is managed as it circulates through business systems.   "},
                {listItem: "Disaster Recovery Policy - A disaster recovery policy outlines how a company can recover from a System mishap/tragedy. "},
                {listItem: "Social Media Policy - Social media policies supervise the team member's use of social media both in and out of the workplace. "},
               ],
               } ,
     
      
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Information Technology (IT) Policy $89</title>
                <meta name="description" content="Foreign Company Registration in Australia | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "What is meant by Information Technology (IT) Policy?  " 
                text = "IT policies regulate the guiding principles for activities related to computer data and networks of a business. IT policies set out the consequences for employees or clients in a policy violation. The proper application of IT policies may also be a basis for a defence in the event of a court case/lawsuit. "
                subheader = "Get an IT Policy for Your Business at Just $89"
                button = "Order Now"
                link="/it-policy-form"
            />
            {/* <HowItWorks data = {cardContent} title = "How We Process Your Company Registration" /> */}
            <Questions data = {questions} title="Questions" />
        </ContentContainer>
     );
}
 
export default ItPolicy;