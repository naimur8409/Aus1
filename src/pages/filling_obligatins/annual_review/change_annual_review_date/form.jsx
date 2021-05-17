import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React, { Component } from 'react'
import Form from '../../../../component/formItem/formValidator';
import { DarkBtn } from '../../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText, Note } from '../../../../utils/globalStyle';
import Billing from './billing';
import Review from './review'

const getSteps = () => {
    return ['Step-1','Step-2','Step-3','Review','Billing'];
}
class ChangeAnnualReviewDateForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            name_of_company: '',
            abn: '',
        },
        data2: {
            date_of_review: '',
            reason: '',
            company_name: '',
            abn: '',
            country: '',
            b_company_to_align: '',
            b_abn: '',
            b_country: '',

            c_country: '',
            give_name: '',
            c_company_to_align: '',
            c_abn: '',
            c_country: '',
        },
       
        data3: {
            declaration: true,
            name: '',
            designation: '',
        },
        errors: {}
    }
    schema1 = {
        name_of_company: Joi.allow().label("This field"),
        abn: Joi.allow('').label("This field"),
    };
    schema2 = {
        date_of_review: Joi.allow().label("This field"),
        reason: Joi.allow('').label("This field"),
        company_name: Joi.allow('').label("This field"),
        abn: Joi.allow('').label("This field"),
        country: Joi.allow('').label("This field"),
        b_company_to_align: Joi.allow('').label("This field"),
        b_abn: Joi.allow('').label("This field"),
        b_country: Joi.allow('').label("This field"),
        family_name: Joi.allow('').label("This field"),
        give_name: Joi.allow('').label("This field"),
        c_company_to_align: Joi.allow('').label("This field"),
        c_abn: Joi.allow('').label("This field"),
        c_country: Joi.allow('').label("This field"),
    };
    schema3 = {
        declaration: Joi.allow().label("This field"),
        name: Joi.allow('').label("This field"),
        designation: Joi.allow('').label("This field"),
    };
    reason = [
        {value: "A", label: "To align with or vary from the review date of your ultimate holding Company $42"},
        {value: "B", label: "To align with or vary from the review date of another company with a common ultimate holding company $42"},
        {value: "C", label: "To align with or vary from the review date of another company with a common officeholder $42"},
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
    render() { 
        const steps = getSteps();
        const  {data1, data2, data3} = this.state;
        console.log(this.state)
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>Change Annual Review Date $49</SelctText>
                    <Stepper activeStep={this.state.activeStep} alternativeLabel style={{margin: '-10px'}}>
                        {steps.map((label) => (
                            <Step key={label} style={{width: '100%', fontSize: '18px'}}>
                                <StepLabel style={{width: '100%', fontSize: '18px'}}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <form style={{width: '100%'}} >
                        {this.state.activeStep === 0 ?
                            <FormContainer>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <h5>Company details</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("name_of_company", "Name of company ", 'text', 'true')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("abn", "ABN/ ACN", 'text')}
                                    </Grid>
                                   
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                        :null}
                        {this.state.activeStep === 1 ?
                            <FormContainer>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <h5>Company details</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("date_of_review", "New review date requested", 'date', 'true')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("reason", "Select the reason for changing the review date", this.reason)}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("company_name", "Ultimate holding company name", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("abn", "ACN/ABN of the ultimate holding Company", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("country", "Country", 'text')}
                                    </Grid>
                                    {data2.reason.value==='B' ?
                                    <>
                                        <Grid item xs={12}>
                                            {this.renderInput("b_company_to_align", "Ultimate holding company name", 'text')}
                                        </Grid>
                                        <Grid item xs={12}>
                                            {this.renderInput("b_abn", "ACN/ABN of the ultimate holding Company", 'text')}
                                        </Grid>
                                        <Grid item xs={12}>
                                            {this.renderInput("b_country", "Country", 'text')}
                                        </Grid>
                                    </>
                                    :null
                                    }
                                    {data2.reason.value==='C' ?
                                    <>
                                        <Grid item xs={12}>
                                            <span>Name of the common officeholder</span>
                                        </Grid>
                                        <Grid item xs={12}>
                                            {this.renderInput("c_country", "Family", 'text')}
                                        </Grid>
                                        <Grid item xs={12}>
                                            {this.renderInput("give_name", "Given Name", 'text')}
                                        </Grid>
                                        <Grid item xs={12}>
                                            {this.renderInput("c_company_to_align", "Company to align with or vary from", 'text')}
                                        </Grid>
                                        <Grid item xs={12}>
                                            {this.renderInput("c_abn", "ACN/ABN", 'text')}
                                        </Grid>
                                        <Grid item xs={12}>
                                            {this.renderInput("c_country", "Country of incorporation (if not Australia)", 'text')}
                                        </Grid>
                                    </>
                                    :null
                                    }
                                   
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                        :null}
                        {this.state.activeStep === 2 ?
                            <FormContainer>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <h5>Declaration</h5>
                                    </Grid>

                                    
                                    <Grid item xs={12}>
                                        {this.renderCheckInput("declaration", "I authorize e-company to manage all legal documentation related to ASIC and submit all required documentations on behalf of my company.")}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("name", "Declarant Name", 'text', 'true' )}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("designation", "Designation within the Company", 'text')}
                                    </Grid>
                                    
                                    
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                    </Grid>
                                </Grid>
                            
                            </FormContainer>
                        :null}
                         
                        {this.state.activeStep === 3 ?
                              <Review data1={data1} data2={data2} data3={data3} fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                        {this.state.activeStep === 4 ?
                              <Billing fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default ChangeAnnualReviewDateForm;