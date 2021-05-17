
import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import Questions from '../../../component/questions';
import { ContentContainer } from '../../../utils/globalStyle';
const DrugAlcoholPolicy = () => {
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
            ques: "1. How does a Drug & Alcohol Policy help a startup company? ",
            text: "A startup company or small-sized company should have a drug & alcohol policy incorporated to prevent its team's health & safety risk. This can prevent many unnecessary costs to the business. For instance, substance abuse can lead to high absenteeism and low productivity of the employee. Hence, there should be a drug & alcohol policy in the company with a drug testing procedure. ",
           },
        {
            ques: "2. What are the elements of the Drug & Alcohol Policy?  ",
            text: "Some of the common elements include: ",
            list: [
                {listItem: "Aim of Drug & Alcohol policy"},
                {listItem: "Purpose of the Drug & Alcohol Policy"},
                {listItem: "To whom the policy is applicable "},
                {listItem: "Outline acceptable & unacceptable conduct"},
                {listItem: "Consequences of unacceptable conducts"},
                {listItem: "The time when the policy imposed and when amended "},
                
            ],
               } ,
        {
            ques: "3. How to implement a drug and alcohol policy? ",
            text: "To implement a drug & alcohol policy in the workplace, these are the steps to follow:",
            list: [
                {listItem: "Discuss with various parties, i.e. employees, trade unions, health & safety department."},
                {listItem: "Make the policy applicable to employees of all levels"},
                {listItem: "Make acceptable and unacceptable behaviour clear"},
                {listItem: "Let everyone in the team be aware of the drug & alcohol policy "},
                
                
            ],
        },
        {
            ques: "4. How to prevent drug and alcohol abuse at the workplace? ",
            text: "Companies can take specific measures to minimize or prevent drug & alcohol abuse at the workplace:",
            list: [
                {listItem: "Employee Assistance Program (EAP) - EAPs main objective is to avoid employment loss and guarantee that staff remain in their occupations and productivity. "},
                {listItem: "Alcohol Education Program (AEP) "},
                {listItem: "Health Promotion Programs (HPP) "},
                
                
            ],
        },
        {
            ques: "5. What are the risk factors of drugs and alcohol in the workplace? ",
            text: "There are many risks of drug and alcohol abuse at the workplace; there are two major risks:",
            list: [
                {listItem: "Stress: Numerous studies have shown a significant relationship between alcohol and substance abuse and stress in work."},
                {listItem: "Isolation: Isolation refers to the worker's (broader) sense of identity has considerable consequences for general psychological health."},
                
            ],  },
       
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Drug & Alcohol Policy $79</title>
                <meta name="description" content="Foreign Company Registration in Australia | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "  What is Drug & Alcohol Policy at the Workplace?  " 
                text = "Drug & Alcohol policy is implemented to ensure there is no substance abuse in the workplace which safeguard health and safety in the workplace. Implementing drug & alcohol policy in the workplace must be consistent with individuals' right to confidentiality. It must be enforced with precaution keeping in mind legal compliance. "
                subheader = "Get Drug & Alcohol policy for Your Business $79 "
                button = "Order Now"
                link="/drug-alcohol-policy-form"
            />
            {/* <HowItWorks data = {cardContent} title = "How We Process Your Company Registration" /> */}
            <Questions data = {questions} title="Questions" />
        </ContentContainer>
     );
}
 
export default DrugAlcoholPolicy;