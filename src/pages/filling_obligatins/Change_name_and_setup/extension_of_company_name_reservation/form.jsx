import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React, { Component } from 'react'
import Form from '../../../../component/formItem/formValidator';
import { DarkBtn } from '../../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText, Note } from '../../../../utils/globalStyle';
import Billing from './billing';
import Review from './review'

const getSteps = () => {
    return ['Step-1','Step-2','Review','Billing'];
}
class ExtensionCompanyNameReservationform extends Form {
    state = {  
        activeStep: 0,
        data1: {
            proposed_name: '',
            reserved_number: '',
            legal_elements: '',
            acn_type: '',
            proposed_extended_date: '',
        },
       
        data2: {
            declaration: true,
            name: '',
            designation: '',
        },
        errors: {}
    }
    schema1 = {
        proposed_name: Joi.allow().label("This field"),
        reserved_number: Joi.allow().label("This field"),
        legal_elements: Joi.allow('').label("This field"),
        acn_type: Joi.allow('').label("This field"),
        proposed_extended_date: Joi.allow('').label("This field"),
    };
    
    schema2 = {
        declaration: Joi.allow().label("This field"),
        name: Joi.allow('').label("This field"),
        designation: Joi.allow('').label("This field"),
    };
    common1 = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
        { value: 'I do not know', label: 'I do not know' },
    ];
    acn_type = [
        { value: 'A.C.N.', label: 'A.C.N.' },
        { value: 'ACN', label: 'ACN' },
        { value: 'Australian Company Number', label: 'Australian Company Number' },
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
        const  {data1, data2} = this.state;
        console.log(this.state)
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>Extension of Company Name Reservation $119</SelctText>
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
                                        <h5>Extension Details</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("proposed_name", "Proposed company name", 'text', 'true')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("reserved_number", "Provide company name reservation number", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("legal_elements", "Select the legal elements that you wish to apply to the company name.",this.legal_elements)}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("acn_type", "Select ACN types",this.acn_type)}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("proposed_extended_date", "Proposed extended date", 'date')}
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
                                        <h5>Declaration</h5>
                                    </Grid>

                                    
                                    <Grid item xs={12}>
                                        {this.renderCheckInput("declaration", "I authorize e-company to manage all legal documentation related to ASIC and submit all required documentations on behalf of my company.")}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("name", "Declarant Name", 'text', 'true')}
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
                         
                        {this.state.activeStep === 2 ?
                              <Review data1={data1} data2={data2} fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                        {this.state.activeStep === 3 ?
                              <Billing fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default ExtensionCompanyNameReservationform;