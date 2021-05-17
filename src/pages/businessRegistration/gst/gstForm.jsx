import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react'
import { DarkBtn } from '../../../utils/button';
import {RegistrationContainer,SelctText,  FormContainer, FormWrapper } from '../../../utils/globalStyle';
import Form from '../../../component/formItem/formValidator';
import Joi from 'joi-browser';
import GSTReview from './gstReview';
import GSTBilling from './gstBilling';


const getSteps = () => {
    return ['Step-1', 'Step-2', 'Step-3', 'Step-4', 'Step-5'];
  }
  


class GstRegForm extends Form {

    state = { 
        activeStep: 0,
        data1: {
            business_structure: '',
            abn : '',
            business_name : '',
            applicant_given_name:'',      
            applicant_family_name:'', 
            applicant_email:'', 
            applicant_phone:'', 
            applicant_dob:'', 
            unit:'',      
            street_address:'',      
            subrub:'',      
            state:'',      
            postCode:'',
        },
        data2: {
            estimated_turn_over: '',
            gst_res: '',
            tax_report: '',
            commence_date: '',
            goods_service: '',
        },
        data3: {
            have_employee: '',
            sign_up: '',
            when_commence: '',
            employee_pay: '',
            working_holiday: '',
            payment_each_year: '',
            summary_report: '',
            provide_paymnet_summary: '',
            pay_royalties: '',
            primary_industry: '',
            business_activity: '',

            declarant_given_name: '',
            declarant_family_name: '',
            designation: '',
            final_declaration: '',
        },
        errors: {},
     }

    schema1 = {
        business_structure: Joi.alternatives().try([ Joi.object(),Joi.string().label("This field")]).required(),
        abn: Joi.allow('').label("This field"),
        business_name: Joi.allow('').label("This field"),
        applicant_given_name: Joi.allow('').label("This field"),
        applicant_family_name: Joi.allow('').label("This field"),
        applicant_email: Joi.allow('').label("This field"),
        applicant_phone: Joi.allow('').label("This field"),
        applicant_dob: Joi.allow('').label("This field"),
        unit: Joi.allow('').label("This field"),
        street_address: Joi.allow('').label("This field"),
        subrub: Joi.allow('').label("This field"),
        state: Joi.allow('').label("This field"),
        postCode: Joi.allow('').label("This field"),
    };
    schema2 = {
        estimated_turn_over : Joi.allow('').label("This field"),
        gst_res : Joi.allow('').label("This field"),
        tax_report : Joi.allow('').label("This field"),
        commence_date : Joi.allow('').label("This field"),
        goods_service : Joi.allow('').label("This field"),
    };
    schema3 = {
        have_employee : Joi.allow('').label("This field"),
        sign_up : Joi.allow('').label("This field"),
        when_commence : Joi.allow('').label("This field"),
        employee_pay : Joi.allow('').label("This field"),
        payment_each_year : Joi.allow('').label("This field"),
        working_holiday : Joi.allow('').label("This field"),
        summary_report : Joi.allow('').label("This field"),
        provide_paymnet_summary : Joi.allow('').label("This field"),
        pay_royalties : Joi.allow('').label("This field"),
        primary_industry : Joi.allow('').label("This field"),
        business_activity : Joi.allow('').label("This field"),
        declarant_given_name : Joi.allow('').label("This field"),
        declarant_family_name : Joi.allow('').label("This field"),
        designation : Joi.allow('').label("This field"),
        final_declaration : Joi.allow('').label("This field"),
    // .options({language: {string: {regex: { base: "Use atleast 8 character and dont use space" },},},}),
    };

    business_structure = [
    { value: 'Sole trader/Individual', label: 'Sole trader/Individual' },
    { value: 'Partnership', label: 'Partnership' },
    { value: 'Company', label: 'Company' },
    { value: 'Trust', label: 'Trust' },
    ];
    common = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
    ];
    industry_sector = [
    { value: 'Agriculture, Forestry, Fishing', label: 'Agriculture, Forestry, Fishing' },
    { value: 'Mining', label: 'Mining' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'Electricity, Gas, Water, Waste Services', label: 'Electricity, Gas, Water, Waste Services' },
    { value: 'Construction', label: 'Construction' },
    { value: 'Wholesale Trade', label: 'Wholesale Trade' },
    { value: 'Retail Trade', label: 'Retail Trade' },
    { value: 'Accommodation and Food Services', label: 'Accommodation and Food Services' },
    { value: 'Transport, Postal and Warehousing', label: 'Transport, Postal and Warehousing' },
    { value: 'Information Media and Telecommunications', label: 'Information Media and Telecommunications' },
    { value: 'Financial and Insurance Services', label: 'Financial and Insurance Services' },
    { value: 'Rental, Hiring and Real Estate Services', label: 'Rental, Hiring and Real Estate Services' },
    { value: 'Professional, Scientific, Technical Services', label: 'Professional, Scientific, Technical Services' },
    { value: 'Administrative and Support Services', label: 'Administrative and Support Services' },
    { value: 'Public Administration and Safety', label: 'Public Administration and Safety' },
    { value: 'Education and Training', label: 'Education and Training' },
    { value: 'Health Care and Social Assistance', label: 'Health Care and Social Assistance' },
    { value: 'Arts and Recreation Services', label: 'Arts and Recreation Services' },
    { value: 'Other Services', label: 'Other Services' },
    ]
    turn_over  = [
        { value: '$0 - $74,999  ', label: '$0 - $74,999  ' },
        { value: '$75,000 - $149,999', label: '$75,000 - $149,999' },
        { value: '$150,000 – $1,999,999', label: '$150,000 – $1,999,999' },
        { value: '$2,000,000 and over', label: '$2,000,000 and over' },
        
    ]
    gst_res = [
    { value: 'When I receive the cash ', label: 'When I receive the cash ' },
    { value: 'When I issue the invoice', label: 'When I issue the invoice' },
    ]
    tax_report = [
    { value: 'Monthly ', label: 'Monthly ' },
    { value: 'Quarterly ', label: 'Quarterly ' },
    ]
    summary_report = [
    { value: 'Electronically ', label: 'Electronically ' },
    { value: 'Paper form', label: 'Paper form' },
    { value: 'Both', label: 'Both' },
    ]
    provide_paymnet_summary = [
    { value: 'Create your own payment summaries', label: 'Create your own payment summaries' },
    { value: 'Use payment summaries supplied by ATO', label: 'Use payment summaries supplied by ATO' },
    { value: 'Both', label: 'Both' },
    ]
   
    handleNext = () => {
        if(this.state.activeStep === 0 ){
            const errors = this.validateStep1();
            this.setState({ errors: errors || {} });
            if (errors) return;
        }
        if(this.state.activeStep === 1 ){
            const errors = this.validateStep2();
            this.setState({ errors: errors || {} });
            if (errors) return;
        }
        if(this.state.activeStep === 2 ){
            const errors = this.validateStep3();
             this.setState({ errors: errors || {} });
            if (errors) return;
        }
       
        this.setState({activeStep :this.state.activeStep + 1});
        
    };
    handleBack = () => {
        this.setState({activeStep :this.state.activeStep - 1});
    };
    handleReset = () => {
        this.setState({activeStep :0});
    };
    handleBusinessStructure = (value) => {
        console.log(value)
        const data = { ...this.state.data2}
        data.business_structure = value;
        this.setState({data2: data})
    };

    render() { 
        const steps = getSteps();
        const  {data1, data2, data3} = this.state;
      
    console.log(this.state)
    // console.log(this.state.multiple)
    // console.log(this.state.multipleErr)
    // console.log(this.state.errors)
        return ( 
            <RegistrationContainer>
            <FormWrapper > 
            
            <SelctText>GST registration $39</SelctText>
                <Stepper activeStep={this.state.activeStep} alternativeLabel style={{margin: '-10px'}}>
                    {steps.map((label) => (
                        <Step key={label} style={{width: '100%', fontSize: '18px'}}>
                        <StepLabel style={{width: '100%', fontSize: '18px'}}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <form style={{width: '100%'}} >
                    {
                        this.state.activeStep === 0 ?
                            <FormContainer>
                            
                                <h3>Business Details</h3>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        {this.renderSelect("business_structure", "Please select your business structure* ", this.business_structure)}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("abn", "Provide your ABN*", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("business_name", "Provide your business name*", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <h5>Applicant’s contact details</h5>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("applicant_given_name", "Given name*", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("applicant_family_name", "Family name*", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("applicant_email", "Email address*", 'text')}
                                    </Grid>
                                    
                                    <Grid item xs={6}>
                                        {this.renderInput("applicant_phone", "Phone number*", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("applicant_dob", "Date of birth", 'date')}
                                    </Grid>

                                    <Grid item xs={12}>
                                        <h5>Business address</h5>
                                    </Grid>

                                    <Grid item xs={4}>
                                        {this.renderInput("unit", "Unit/Level (optional)", 'text')}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {this.renderInput("street_address", "Street address", 'text')}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {this.renderInput("subrub", "Suburb", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("state", "State", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("postCode", "Postcode", 'text')}
                                    </Grid>


                                    <Grid item xs={6}>

                                    </Grid>
                                    <Grid item xs={6}>
                                        
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                            
                        : null
                    }

 
                    {this.state.activeStep === 1 ?
                        <FormContainer>
                            
                            <h3>GST registration details</h3>
                            <Grid container spacing={1}>
                               
                                <Grid item xs={12}>
                                    {this.renderSelect('estimated_turn_over','Estimated turn-over', this.turn_over)}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderSelect('gst_res','When will you send GST result to the ATO(?)', this.gst_res)}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderSelect('tax_report','How often would you like to report to the Tax Office?', this.tax_report)}
                                </Grid>
                                
                                <Grid item xs={12}>
                                    {this.renderInput("commence_date", "GST account commence date", 'date')}
                                </Grid>
                                
                                <Grid item xs={12}>
                                    {this.renderSelect('goods_service','Do you import goods and services into Australia ?', this.common)}
                                </Grid>
                                

                                
                                <Grid item xs={6}>

                                </Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>
                            </Grid>
                        </FormContainer>
                    : null}
                    {this.state.activeStep === 2 ?
                        <FormContainer>
                            
                            <h3>PAYG</h3>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    {this.renderSelect('have_employee','Does your business have employees?', this.common)}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderSelect('sign_up','Do you want to sign up for PAYG through us ?', this.common)}
                                </Grid>
                            {this.state.data3.sign_up.value === 'Yes' ?
                            <>  
                                <Grid item xs={12}>
                                    {this.renderInput("when_commence", "When do you want to commence", 'date')}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderInput("employee_pay", "How many employees are you going to pay", 'text')}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderInput("payment_each_year", "How much do you expect to withhold from the payments each year? ", 'text')}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderSelect('working_holiday','Are you employing any working holiday makers?', this.common)}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderSelect('summary_report','How are you going to provide your PAYG withholding payment annual summary report to the ATO?', this.summary_report)}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderSelect('provide_paymnet_summary','How will you provide payment summaries to your payees?', this.provide_paymnet_summary)}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderSelect('pay_royalties','Will you pay royalties, dividends or interest to non-residents?', this.common)}
                                </Grid>
                                
                                <Grid item xs={12}>
                                    {this.renderInput("primary_industry", "What is the primary industry that you operate in?", 'text')}
                                </Grid>
                                
                                <Grid item xs={12}>
                                    {this.renderInput("business_activity", "Describe your business activity?", 'text')}
                                </Grid>
                            </>: null}
                                <Grid item xs={12}>
                                    <h4>Declaration</h4>
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("declarant_given_name", "Given Name", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("declarant_family_name", "Family Name ", 'text')}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderInput("designation", "Designation within the business", 'text')}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderCheckInput('final_declaration', 'I declare that the information I have given in this application is accurate, full and true.')}
                                </Grid>

                                <Grid item xs={6}>

                                </Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>
                            </Grid>
                        </FormContainer>
                    : null}


                    {this.state.activeStep === 3 ?
                        <GSTReview data1={data1} data2={data2} data3={data3} fnc1={this.handleNext} fnc2={this.handleBack} />
                   : null}

                    {this.state.activeStep === 4 ?
                     <GSTBilling fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                    : null
                    }
                </form>
                
            </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default GstRegForm;