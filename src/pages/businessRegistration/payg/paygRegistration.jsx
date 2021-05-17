import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../component/contentHeader';
import Questions from '../../../component/questions';
import HowItWorks from '../../../component/howItWorks';
import { ContentContainer } from '../../../utils/globalStyle';

const PAYGRegiContent = () => {
    const questions = [
        {
            ques: "Who Needs to Resister?",
            list : [
                {listItem : "Have employees."},
                {listItem : "Have other workers (including contractors) "},
                {listItem : "Have other workers (including contractors) "},
            ],
            text: "You may be exempted from withholding income if your business is a sole trader or partnership structure"
           
        },
    ]
    const cardContent1 =
    [
        {
            title : "Step-1: Fill The Form",
            content: "Fill out our simple and easy to understand form"
            },
            {
            title : "Step-2: Review",
            content: "Our experts will review the form before submitting the application."
            },
            {
            title : "Step-3: Delivery",
            content: "Lastly, we will deliver the PAYG registration Letter to your dashboard . You will be notified by an email.  "
            },
    ]
    return ( 
        <ContentContainer>
            <Helmet> 
                <title>PAYG Registration  | e-company</title>
                <meta name="description" content="It has never been simpler to register your PAYG account. With e-company PAYG registration has become easy. Contact Us to get your PAYG account today!" 
                />
            </Helmet>
            <ContentHeader 
                header = "PAYG Registration From $59" 
                text = "As an employer, you are legally required to withhold taxes from employee’s salary/wage to pay the taxes directly to the Australian Taxation Office on behalf of the employee or contractor.  Pay As You Go (PAYG) is the name of that withholding system. If you are required to register for PAYG, please click the following button and register PAYG online:"
                subheader = "Register Your PAYG Online $59"
                button = "Order Now"
                // ques  = {questions}
                link = "/payg-registration-form"
            />
        <Questions data = {questions} title="Answers will only appear by clicking on the question " />
            <HowItWorks data = {cardContent1} title = "How It Works" />
        </ContentContainer>
     );
}
 
export default PAYGRegiContent;