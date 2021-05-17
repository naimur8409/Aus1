
import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import Questions from '../../../component/questions';
import { ContentContainer } from '../../../utils/globalStyle';
const PerformanceManagementPolicy = () => {
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
            ques: "1. Why is Performance Management Policy employed in a company? ",
            text: "Performance Management Policy is used to make all the employees aware of the importance of performance expected of them as per their employment contracts. ",
           },
        {
            ques: "2. What does the Performance Management Policy cover? ",
            list: [
                {listItem: "Managing performance of employees in the organization;"},
                {listItem: "Managing insufficient performance;"},
                {listItem: "Penalizing/corrective action in case of any abuse. "},
                   ],
               } ,
        {
            ques: "3. What is performance management?",
            text: "Performance Management is a comprehensive method of creating a working environment in which people can perform to the best of their abilities. It is not just crucial on current performance but is a broader system that strengthens the employment cycle.",
         
        },
        {
            ques: "4. What are the benefits of Performance Management?",
            text: "Performance management has all-inclusive benefits for employees and bosses, as well as for the company. If a company can efficiently create an atmosphere of engagement where customers are likewise engaging with the employees, the business of any type can have better advancement.",
              },
        {
            ques: "5. What are the Performance management process steps?",
            list: [
                {listItem: "Planning – It is defining the phases, i.e. feedback stage, approval stage."},
                {listItem: "Coaching – Coaching is tremendously important; it must be irregular and timely."},
                {listItem: "Reviewing – annually review is highly recommended, it’s also known as performance appraisal"},
                {listItem: "Action – The last phase is action, which is giving proper compensation and credit."},
                   ],     },
        {
            ques: "6. What are the elements in a Performance Management policy? ",
           list: [
                {listItem: "The employee performs a self-evaluation."},
                {listItem: "The self-evaluation is then presented to the director before the review meeting."},
                {listItem: "Managers put in their assessment comments for the meeting."},
                {listItem: "The employee and managers meet to discuss the results, performance, future aims, and progression requirements. "},
                
            ],     },
        {
            ques: "7. Does Performance Management policy have other names?",
            text: "Performance Management Policy is typically categorized with other expressions such as:",
            list: [
                {listItem: "Review of Performance Policy; "},
                {listItem: "Performance Review Policy."},
                  ],       },
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Performance Management policy $89</title>
                <meta name="description" content="Foreign Company Registration in Australia | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "What is Performance Management Policy? " 
                text = "Performance management is ongoing planning, response, and assessment procedure, led by organized communication between the directors and their assistants."
                subheader = "Get Performance Management Policy for Your Business Online $89 "
                button = "Order Now"
                link="/performance-management-form"
            />
            {/* <HowItWorks data = {cardContent} title = "How We Process Your Company Registration" /> */}
            <Questions data = {questions} title="Questions" />
        </ContentContainer>
     );
}
 
export default PerformanceManagementPolicy;