
import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import Questions from '../../../component/questions';
import { ContentContainer } from '../../../utils/globalStyle';
const ReturntoWorkPolicy = () => {
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
            ques: "1. Why do you need a Return to Work Policy? ",
            text: "It is essential to inform your employees about the procedures of returning to work from an injury.",
           },
        {
            ques: "2. What does this Policy cover?",
            list: [
                {listItem: "employee statement of injuries."},
                {listItem: "employee injury management."},
                {listItem: "employee return to work. "},
                {listItem: "discretion"},
              ],
               } ,
        {
            ques: "3. What are the benefits to the employer by having a Return-to-Work policy? ",
            list: [
                {listItem: "Injured employees who continue at home for an extended period may become discouraged and leave the company. Skilled employees can be retained by returning them to work as soon as they are physically able."},
                {listItem: "A business can avoid the cost of hiring and training temporary workers by getting injured staff back to work as soon as possible. "},
                {listItem: "When a company makes an effective RTW program, you feel that you care about your employees and their welfare."},
                {listItem: "Lesser Workers Compensation Costs. "},
              ],
        },
        {
            ques: "4. How is Confidentiality different from Privacy?",
            list: [
                {listItem: "Financial Safety - Workers will earn more by returning to work."},
                {listItem: "Skills Retaining - A Return-to-Worker program can help injured workers uphold valuable talents. "},
                {listItem: "Better Self-worth - Your employees may feel more secured about their occupations if they know there is a set procedure to return to work after an injury."},
                {listItem: "Societal Networks - Injured employees who return to the workplace on time can hold their societal networks."},
              ],},
       
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Return to Work Policy $89</title>
                <meta name="description" content="Foreign Company Registration in Australia | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "Return to Work Policy $89 " 
                text = "Return to work policy is a crucial HR document of a business that sets out the procedures of how an injured employee can return to work."
                subheader = "Get Return to Work Policy for Your Business Online $89"
                button = "Order Now"
                link="/return-to-work-policy-form"
            />
            <p style={{textAlign:'center'}}>If you require a Return to Work Policy From COVID-19/Pandemic Please contact us </p>
            <p style={{textAlign:'center'}}>If you require a Working From Home Policy Please contact us </p>
            {/* <HowItWorks data = {cardContent} title = "How We Process Your Company Registration" /> */}
            <Questions data = {questions} title="Questions" />
        </ContentContainer>
     );
}
 
export default ReturntoWorkPolicy;