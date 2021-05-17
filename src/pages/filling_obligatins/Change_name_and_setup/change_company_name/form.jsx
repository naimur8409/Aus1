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
class CompanyNameAndSetupform extends Form {
    state = {  
        activeStep: 0,
        data1: {
            name_of_company: '',
            abn: '',
        },
        data2: {
            have_resolution: '',
            resolution: '',
            want_resolution: '',
            date_of_resolution: '',
            is_identical: '',
            proposed_company_name: '',
            legal_elements: '',
            required_manual_review: '',
        },
        data3: {
            declaration: '',
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
        have_resolution: Joi.allow().label("This field"),
        resolution: Joi.allow('').label("This field"),
        want_resolution: Joi.allow('').label("This field"),
        date_of_resolution: Joi.allow('').label("This field"),
        is_identical: Joi.allow('').label("This field"),
        proposed_company_name: Joi.allow('').label("This field"),
        legal_elements: Joi.allow('').label("This field"),
        required_manual_review: Joi.allow('').label("This field"),
    };
    schema3 = {
        declaration: Joi.allow().label("This field"),
        name: Joi.allow('').label("This field"),
        designation: Joi.allow('').label("This field"),
    };
    
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    common1 = [
        { value: 'Yes', label: 'Yes' },
        { value: ' No', label: ' No' },
        { value: 'I do not know', label: 'I do not know' },
    ];
    legal_elements = [
        { value: 'PTY LTD', label: 'PTY LTD' },
        { value: 'PTY. LTD.', label: 'PTY. LTD.' },
        { value: 'PTY. LIMITED', label: 'PTY. LIMITED' },
        { value: 'PTY LIMITED', label: 'PTY LIMITED' },
        { value: 'PROPRIETARY LTD', label: 'PROPRIETARY LTD' },
        { value: 'PROPRIETARY', label: 'PROPRIETARY' },
    ];
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
                    <SelctText>Change of company name $499</SelctText>
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
                                        <h5>New Name Details</h5>
                                    </Grid>

                                    <Grid item xs={6}>
                                        {this.renderSelect("have_resolution", "Do you have resolution for the changing of the company name ",this.common)}
                                    </Grid>
                                    {data2.have_resolution.value === 'Yes' ?
                                        <Grid item xs={6}>
                                            {this.renderInput("resolution", "Upload the resolution for changing the company name", 'file')}
                                        </Grid>
                                        : null   
                                    }
                                    {data2.have_resolution.value === 'No' ?
                                        <Grid item xs={6}>
                                            {this.renderSelect("want_resolution", "Do you want us to prepare the resolution on your behalf? ",this.common)}
                                            <Note>It will cost extra $49</Note>
                                        </Grid>
                                        : null   
                                    }
                                    <Grid item xs={6}>
                                        {this.renderInput("date_of_resolution", "Date of the Resolution", 'date')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderSelect("is_identical", "Is the proposed name identical to a registered company name(s)? ",this.common1)}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("proposed_company_name", "Provide the new proposed company name", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderSelect("legal_elements", "Select the legal elements that you prefer to use",this.legal_elements)}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderSelect("required_manual_review", "Do you require manual review of your proposed change of company name? ",this.common)}
                                        <Note>It will cost extra $49</Note>
                                    </Grid>
                                    
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                    
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
                                        {this.renderInput("name", "Declarant Name", 'text')}
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
 
export default CompanyNameAndSetupform;