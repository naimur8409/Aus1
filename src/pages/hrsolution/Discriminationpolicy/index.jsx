
import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import Questions from '../../../component/questions';
import { ContentContainer } from '../../../utils/globalStyle';
const DiscriminationPolicy = () => {
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
            ques: "1. Why is discrimination policy important for a company? ",
            text: "As the business expands, it encounters challenges which small firms do not usually face. A large firm can also mean many workers from various backgrounds, i.e. gender, race, colour, faith, ethnicity, age, incapacity, or sexuality. To safeguard that the team's rights against discrimination, it is essential to stand by the anti-discrimination policy.",
           },
        {
            ques: "2. How does a discrimination policy help a startup company?",
            text: "A discrimination policy instructs all business members about the different types of discrimination or harassment based on race, creed, colour, national origin, nationality, lineage, pregnancy, sexual orientation, gender identity, disability, familial status, marital status, genetic information, age, etc. Executing discrimination policy makes it clear that any types of inappropriate annotations based on these aspects will not be accepted and they are considered offensive or unacceptable. Implementing such policies can avoid inappropriate, discriminatory behaviour. Additionally, it also gives the company a favourable position if an employee plans to bring a lawsuit against the company and/or its administration.",
            
               } ,
        {
            ques: "3. What are the elements of discrimination policy?",
            text: "It is unlawful to discriminate based on numerous protected traits in Australia, including age, incapacity, race, gender, and sexual orientation in certain public living areas, including education and employment. Each state and territory has anti-discrimination regulation. Individuals can file grievances regarding discrimination, harassment and bullying at the state and territory level conditional upon the grievance's situations with the applicable agency in that state or territory.",
         
        },
        {
            ques: "4. How to prevent discrimination in the workplace?  ",
            text: "There can be numerous phases taken to avoid or lessen discrimination at work; they may comprise:",
            list: [
                {listItem: "Diversify your labour force, letting different origins and racial backgrounds be present at your workplace and promote neutral behaviours through implementing a fair policy."},
                {listItem: "Educate your personnel by training them on the nature of discriminations and consequences. Let everyone understand why diversity is an asset, not a liability."},
                {listItem: "Review anti-discrimination policy which sets anti-discriminatory behaviour norms for all staff members, and what violates such standards. "},
                {listItem: "Organize group sessions for team members for getting to know one another better; it will encourage everyone to get along effectively. "},
                
                
                 
            ],
            
                
        },
        {
            ques: "Factors to consider in a Discrimination Policy",
             list: [
                
                    {listItem: "Age "},
                    {listItem: "Incapacity"},
                    {listItem: "Sexuality"},
                    {listItem: "Parent status"},
                    {listItem: "Religious staus "},
                    {listItem: "Ethnicity "},
                    {listItem: "Pregnancy"},
                    {listItem: "Race, Color, and Gender"},
                    {listItem: "Vengeance / Retribution "},  
            ], 
        },
        {
            ques: "5. Different treatment vs discrimination",
            text: "Different treatment based on specific distinctions, such as talents, knowledge, and expertise, is not discriminatory. When employees are treated differently or remunerated with incentives, based on performances is not considered as discrimination. Some staffs and some occupations are more creative than others, reflecting various skills, experiences, and aptitudes. This leads to different incomes, and it is reasonable.",
                },
        {
            ques: "6. Why is it essential to eliminate discrimination?",
            text: "Discrimination yields inequalities in the labour force and partial deterrents. The development of human resources and their self-worth thrive in the absence of workplace discrimination. ",
                  },
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Discrimination Policy $79</title>
                <meta name="description" content="Foreign Company Registration in Australia | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "What is the discrimination policy?" 
                text = "A discrimination policy is a policy document which states your policies regarding discrimination in hiring employees and management culture."
                subheader = "Get Discrimination Policy for Your Business $79"
                button = "Order Now"
                link="/discrimination-policy-form"
            />
            {/* <HowItWorks data = {cardContent} title = "How We Process Your Company Registration" /> */}
            <Questions data = {questions} title="Questions" />
        </ContentContainer>
     );
}
 
export default DiscriminationPolicy;