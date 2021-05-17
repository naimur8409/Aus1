
import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContentHeader from '../../../../component/contentHeader';
import HowItWorks from '../../../../component/howItWorks';
import Questions from '../../../../component/questions';
import { ContentContainer } from '../../../../utils/globalStyle';
const GiftDeed = () =>  {


    const questions = [

        {
            ques: "Why does a company need a constitution? ",
            text: "In some companies, it is a requirement to have a constitution, and it helps in the efficient running of a business. You develop a constitution while registering your business. The Australian Securities and Investment Commission (ASIC) necessitates that either you choose between having your customised constitution or adopt the Corporation Act's replaceable rules or a mixture of both. ",

        },

        {
            ques: "What We Include in a Shareholder Agreement",
            text: "Our agreements are customisable according to your company policy; you may include or exclude any relevant clauses in the contract.",
            list: [
                {listItem: "Organisational Structure"},
                {listItem: "Policymaking & Implementation"},
                {listItem: "Share Transferability"},
                {listItem: "Purchase and sales of stocks"},
                {listItem: "Assigning Directors"},
                {listItem: "Dividend payment"},
                {listItem: "Solving Conflict "},
                {listItem: "Developing business & financial planning "},
                {listItem: "Buying & selling of assets"},
                {listItem: "Capital expense "},
                {listItem: "Managing extra funding "},
                {listItem: "Buying Assets"},
                {listItem: "Non-compete clauses"},
                {listItem: "Non-solicitation clauses"},

            ],
        },

        {
            ques: "How to Use This Document",
            text: "Any shareholder agreement must be consistent with the constitution of the company. Before executing the agreement, a lawyer should review your company constitution to prevent any ambiguity or incompliance. A copy of the contract will be shared with each party for conformity before finalisation. An independent adult must witness the ratification of the agreement.",

        },


        {
            ques: "Applicable Law",
            text: "The companies in Australia are governed by The Corporation Act 2001 (Commonwealth). Given that there are several parties involved in a shareholder agreement, contract law is also applicable here.",

        },


    ]



return ( 
    <ContentContainer>
    <Helmet> 
        <title> Shareholder Agreement  | e-company</title>
        <meta name="description" content="A shareholder agreement is a legal contract among different parties, which outlines their duties and obligations.  It can be among various persons or enterprises. " 
        />
    </Helmet>
    <ContentHeader 
        header = "Gift Deed $99" 
        text = "A shareholder agreement is a legal contract among different parties, which outlines their duties and obligations.  It can be among various persons or enterprises. "
        subheader = "Get Your Shareholder Agreement at $139"
        button = "Order Now"
        ques  = {questions}
        link="/gift-deed-form"
        />
        {/* <HowItWorks data = {cardContent} title = "How It Works" /> */}
        </ContentContainer>
     );
}
 
export default GiftDeed;