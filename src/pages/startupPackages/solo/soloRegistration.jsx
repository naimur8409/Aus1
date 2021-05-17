import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import { ContentContainer } from '../../../utils/globalStyle';

const SoloTreaderContent = () => {
    const cardContent =
    [
        {
        title : "Fill Out the Form",
        content: "We have taken the difficulty out of incorporating a company in Australia. We have crafted simple and easy to comprehend forms which can be filled in minutes"
        },
        {
        title : "Review",
        content: "We have an experienced team of incorporation agents and lawyers to review your application."
        },
        {
        title : "Application",
        content: "We connect in real time to ASIC to register your company in minutes."
        },
        {
        title : "Delivery",
        content: "Finally, the Company Registration Certificate & other essential legal documents will be delivered to your dashboard. You will also be notified by an email."
        },
    ]


    const questions = [

        {
            ques: "What is Included in The Package? ",
            text: "",
            list: [
                {listItem: "ABN"},
                {listItem: "GST"},
                {listItem: "PAYG"},
                {listItem: "Business Name Registration (1 Year)"},
                {listItem: "Access to our online Client Dashboard (A virtual office to manage your business)"},
                {listItem: "Registration renewal and other filing obligation reminder. You will be able to lodge your BAS and Tax Return from your Dashboard. (additional fee applies)"},
            ],

        }
    ]

    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Online Sole Trader Start-up Package in Australia | ABN+Business Name+GST+PAYG | e-company</title>
            <meta name="description" content="A sole trader arrangement is one of the most popular structures for a small-scale new business. It is the simplest one-person business structure and the easiest to start. There is not much legal complexity in Sole Trader business structure; thus, it is the most affordable to run." 
            />
        </Helmet>
        <ContentHeader 
            header = "Online Sole Trader Package " 
            text = "A sole trader arrangement is one of the most popular structures for a small-scale new business. It is the simplest one-person business structure and the easiest to start. There is not much legal complexity in Sole Trader business structure; thus, it is the most affordable to run. It is essential to note that unlike a company, Sole Trader is not a separate legal entity that essentially means that you and the business is the same entity. You will be personally liable for any business debt and liability. You do not need a separate business TFN for this structure, and you will use your personal TFN for taxation purpose."
            subheader = "Kick Start Your Business Now at $129"
            button = "Order Now"
            ques  = {questions}
            link = "/solo-trader-registration-form"
            />
        <HowItWorks data = {cardContent} title = "How It Works" />
        </ContentContainer>
     );
}
 
export default SoloTreaderContent;