
import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import Questions from '../../../component/questions';
import { ContentContainer } from '../../../utils/globalStyle';
const HarassmetBullyingPolicy = () => {
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
            ques: "1. Why is harassment & bullying policy important for a start-up company? ",
            text:'Well-drafted bullying and harassment policy can go far to minimising bullying and harassment incidents in the workplace. '
            },
        {
            ques: "2. What are the elements of harassment & bullying policy?",
            text: "Primarily, the average Harassment and Bullying Policy should include the followings:",
            list: [
                {listItem: "Coverage"},
                {listItem: "Objective"},
                {listItem: "Scope"},
                {listItem: "Definitions"},
                {listItem: "Cases"},
                {listItem: "Declaration of Company Policy"},
                {listItem: "References to appropriate legislature and resources"},
                {listItem: "A publicised internal and external complaints/grievance procedure"},
                {listItem: "Disciplining and response method"},
                {listItem: "Summary of stakeholders' roles and responsibilities"},
          ],
               } ,
        {
            ques: "3. Is harassment & bullying policy necessary for a business to be efficient and successful?",
            text: "Harassment and bullying in the workplace can unsettle an employee's overall emotional wellbeing and security. When hostility is not addressed, disputes between workers can lead to a crisis. A proper policy implementation promotes a respectful working environment.",
         
        },
        {
            ques: "4. How to prevent harassment & bullying practice from an environment?",
            text: "We recommend taking these two steps to avoid harassment and bullying in the workplace mentioned bellow:",
            list: [
                {listItem: "Draft a policy for harassment and bullying."},
                {listItem: "Deliver training for members of staff on work-ethics, problem-solving, emotional intelligence, and management. "},
                
            ], },
        {
            ques: "5. What is the impact of harassment & bullying policy in the workplace?",
            text: "Harassment and bullying can cause numerous harmful effects on the workers and the business; they include:",
            list: [
                {listItem: "low self-worth and poor employee relations"},
                {listItem: "reduced employee output and revenues"},
                {listItem: "increased absence and low turnover of staffs"},
                {listItem: "undesirable influence on the status and public image"},
                {listItem: "stress-related complaints, absenteeism, and claims"},
                {listItem: "exposure to grievance/lawsuits"},
                ],   },
        {
            ques: "6. What is the difference between harassment & bullying?",
            text: "Harassment is any undesirable behaviour with the intent or consequence of violating or making an intimidating, hostile, belittling, dishonouring, or vicious environment for them. Alternatively, bullying is violent, threatening, malicious, or rude behaviour, mistreatment, or ill-usage of power through means that undermine, humiliate, damage, or upset the receiver. Bullying can be physical and verbal.",
               },
        
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Harassment & Bullying Policy $89</title>
                <meta name="description" content="Foreign Company Registration in Australia | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "What is harassment & bullying policy?" 
                text = "A Harassment and Bullying Policy explains the process of raising complaints related to any instances of harassment and bullying at the workplace. It also sets out consequences or penalties for any such abuses. Most importantly a Harassment and Bullying Policy explains what Harassment and Bullying are and their different natures and forms so that your employees understand what bullying or harassment may look like and their part in promoting a respectful working environment."
                subheader = "Get a Harassment and Bullying Policy for Your Business at Just $89"
                button = "Order Now"
                link="/harassmet-bullying-policy-form"
            />
            {/* <HowItWorks data = {cardContent} title = "How We Process Your Company Registration" /> */}
            <Questions data = {questions} title="Questions" />
        </ContentContainer>
     );
}
 
export default HarassmetBullyingPolicy;