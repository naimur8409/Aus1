import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React, { Component } from 'react'
import Form from '../../../component/formItem/formValidator';
import { DarkBtn } from '../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText } from '../../../utils/globalStyle';
import VirtualBilling from './virtualBilling';
const getSteps = () => {
    return ['Step-1', 'Step-2'];
}
class VirtualOfficeForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            company_name: '',
            acn: '',
            abn : '',
            name : '',
            designation: '',
            diclaration: true,
        }, 
        errors: {}
    }
    schema1 = {
        company_name: Joi.string().required().label("This field"),
        acn: Joi.string().allow('').label("This field"),
        abn: Joi.string().allow('').label("This field"),
        name: Joi.string().allow('').label("This field"),
        designation: Joi.string().allow('').label("This field"),
        diclaration : Joi.allow('').label("This field"),
    };
    handleNext = () => {
        if(this.state.activeStep === 0 ){
            const errors = this.validateStep1();
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
        const  {data1} = this.state;
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>Virtual Office $420 annually</SelctText>
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
                                <h3>Company details</h3>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        {this.renderInput("company_name", "Name of company", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("acn", "ACN", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("abn", "ABN", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("name", "Your Name", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("designation", "Your Company Designation ", 'text')}
                                    </Grid>
                                    
                                    <Grid item xs={12}>
                                            {this.renderCheckInput('diclaration','I authorize e-company to manage all legal documentation related to ASIC & ATO and submit all required documentations on behalf of me.' )}
                                    </Grid>
                                    
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                        :null}
                        {this.state.activeStep === 1 ?
                            <VirtualBilling fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                            : null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default VirtualOfficeForm;