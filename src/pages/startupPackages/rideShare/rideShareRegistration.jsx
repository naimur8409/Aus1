import React from 'react'
import { Helmet } from 'react-helmet';
import ContentHeader from '../../../component/contentHeader';
import HowItWorks from '../../../component/howItWorks';
import { ContentContainer } from '../../../utils/globalStyle';

const RideShareContent = () => {
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
                    {listItem: "PAYG"},
                    {listItem: "Registration renewal and other filing obligation reminder"},
                    {listItem: "Access to our online Client Dashboard (A virtual office to manage your business)"},
                    {listItem: "You will be able to lodge your BAS and Tax Return from your Dashboard. (additional fee applies)"},
                ],

            }
        ]
    


    return ( 
        <ContentContainer>
        <Helmet> 
            <title>Online Ride-Share/Taxi Business Package in Australia | UBER| ABN+GST| e-company</title>
            <meta name="description" content="A sole trader arrangement is one of the most popular structures for a small-scale new business. It is the simplest one-person business structure and the easiest to start. There is not much legal complexity in Sole Trader business structure; thus, it is the most affordable to run." 
            />
        </Helmet>
        <ContentHeader 
            header = "Online Ride-Share/Taxi Business Package " 
            text = "A sole trader arrangement is one of the most popular structures for a small-scale new business. It is the simplest one-person business structure available and most comfortable to start. There is not much legal complexity in Sole Trader business structure; thus, it is the most affordable to run. You do not need a separate business TFN for this structure, and you will use your personal TFN for taxation purpose. Usually, a sole trader is not required to register for GST until his/her business income is over $75,000; however, the regulatory requirement is different for taxi and rideshare drivers. Rideshare drivers need to register for GST irrespective of their level of income. It’s essential to note that unlike a company, Sole Trader is not a separate legal entity that essentially means that you and the business are the same entity. You will be personally liable for any business debt and liability."
            text = "A sole trader arrangement is one of the most popular structures for a small-scale new business. It is the simplest one-person business structure available and most comfortable to start. There is not much legal complexity in Sole Trader business structure; thus, it is the most affordable to run. You do not need a separate business TFN for this structure, and you will use your personal TFN for taxation purpose. Usually, a sole trader is not required to register for GST until his/her business income is over $75,000; however, the regulatory requirement is different for taxi and rideshare drivers. Rideshare drivers need to register for GST irrespective of their level of income. It’s essential to note that unlike a company, Sole Trader is not a separate legal entity that essentially means that you and the business are the same entity. You will be personally liable for any business debt and liability."
            subheader = "Register Your Business Online $69"
            button = "Order Now"
            ques  = {questions}
            link = "/ride-share-registration-form"

        />
        <HowItWorks data = {cardContent} title = "How It Works" />
        </ContentContainer>
     );
}
 
export default RideShareContent;