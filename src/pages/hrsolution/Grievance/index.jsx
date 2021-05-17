
import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import Questions from '../../../component/questions';
import { ContentContainer } from '../../../utils/globalStyle';
const GrievancePolicy = () => {
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
            ques: "1. Why is Grievance Policy important for a company? ",
            text: "A formal grievance procedure provides the method of addressing complaints properly. It also communicates the consequences of unacceptable behaviour by an employee to another employee in the workplace. Thus it minimizes the risk of disputes or claims that may impact adversely on your workplace productivity or the Company's reputation. ",
           },
        {
            ques: "2. How to help a startup company to deal with workplace Grievance?  ",
            text: "Workplace grievances require attention and well record keeping. A grievance can distress an employee's role, their workplace or even coworkers. Here are the five steps to deal with workplace grievance:",
            list: [
                {listItem: "Find out the grievance policy; also mention the person in charge to whom you raise the grievance, the processes it encompasses, and the timeline for each stage of processes. "},
                {listItem: "Investigate the grievance thoroughly, mention the approximate time it may take, and include if any informal session needed."},
                {listItem: "Arrange a grievance hearing; it is a formal meeting where the employee will express their grievance and show any evidence to support their case."},
                {listItem: "Plan your decision and notify the employee. You may decide to defend the staff member's grievance entirely or partially, or you may reject it."},
                {listItem: "If the employee or staff member is not satisfied, they may appeal again. "},
                  ],
               } ,
        {
            ques: "3. What are the elements of Grievance Policy? ",
            text: "Formal Grievance Policy has the following elements/characteristics:",
            list: [
                {listItem: "Confidentiality – The issue is only discussed with those that have a genuine need to know. These individuals may include the parties directly involved in the incident, witnesses, those who may decide on potential disciplinary action, and those involved in the investigation. "},
                {listItem: "Fairness – Grievances will be impartially and objectively examined to get a fair outcome for all parties."},
                {listItem: "Sensitivity – Some grievances may comprise personal information about the persons involved. These must be dealt with delicately."},
                {listItem: "No Victimization – All parties to a formal grievance will be recommended that any form of victimization or retaliation against any other party will result in instantaneous disciplinary action, which may include termination of the employment."},
                
                  ],
        },
        {
            ques: "4. How to implement a Grievance Policy? ",
            text: "Here is a list of ten steps we recommend implementing Grievance Policy:",
            list: [
                {listItem: "Be equipped – draft an easy to understand and comprehensive grievance procedure. "},
                {listItem: "Make sure this procedure is available beforehand to all employees."},
                {listItem: "Train up your administrators so they can deal with grievances and conduct fair grievance hearings."},
                {listItem: "Recommend employees to settle things informally. Chatting through issues informally can often resolve the situation without it needing to move into more formal procedures. "},
                {listItem: "If you get a formal grievance claim, deal with it punctually."},
                {listItem: "Arrange a meeting with the employee in person, discuss the grievance claim and take meeting notes.  Provide the employee with a copy of these notes afterwards preferably via official email."},
                {listItem: "Keep In mind, employees have the legal right to bring along a 'companion/friend' at the meetings. Companions can be a union representative or a co-worker. "},
                {listItem: "Hearings should be led by someone who has not been involved in the case so far, i.e. not the person who directed the investigation, although this is not always possible in a small business."},
                {listItem: "After any hearing or meeting, inform the employee of your decision in writing as to the next step/appropriate action. An employee can appeal against the decision, and if they do, you should supervise an appeal hearing. Preferably, the appeal should be heard by a more senior manager or a different manager if this is not possible – the main point is they have not been involved in the case before. "},
                {listItem: "1And lastly, follow your grievance process provided in the policy and record the whole process. "},
                
                  ], },
        {
            ques: "5. How to conduct a Grievance Meeting?",
            text: "Upon receiving a formal grievance, the employer must convene a meeting with the employee to discuss the grievance. After the meeting, the employer should carry out any required investigations and cautiously reflect its response to the grievance. For instance, the employer should investigate the background to the grievance and check what action has been taken in any like cases.The Acas Code of Practice recommends the following:",
            list: [
                {listItem: "Employers should organize a grievance meeting without arbitrary delay (e.g. in five working days of receiving the written grievance).  "},
                {listItem: "Employers, employees and their affiliates should make every endeavour to join the meeting."},
                {listItem: "Employees should be permitted to express their grievance and how they feel it should be settled."},
                {listItem: "Special consideration should be given to postponing the meeting for any enquiry that may be essential. "},
               
                  ], },
       
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>Grievance Policy $99</title>
                <meta name="description" content="Foreign Company Registration in Australia | e-company" 
                />
            </Helmet>
            <ContentHeader 
                header = "What is the Grievance Policy? " 
                text = "A grievance policy defines a business's processes and guidelines for recording and managing an official complaint concerning workplace, employment and coworker disputes. A clear grievance policy is in place conveys the Company's commitment to delivering a safe and harmonious working environment. It also helps the management team to understand how to investigate and resolve workplace issues."
                subheader = "Get a Grivance Policy for Yor Business at Just $99"
                button = "Order Now"
                link="/grievance-policy-form"
            />
            {/* <HowItWorks data = {cardContent} title = "How We Process Your Company Registration" /> */}
            <Questions data = {questions} title="Questions" />
        </ContentContainer>
     );
}
 
export default GrievancePolicy;