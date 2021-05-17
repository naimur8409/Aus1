import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React, { Component } from 'react'
import Form from '../../../component/formItem/formValidator';
import { DarkBtn } from '../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText } from '../../../utils/globalStyle';

import VirtualBilling from './../virtualOffice/virtualBilling';
const getSteps = () => {
    return ['Step-1', 'Step-2','Review'];
}
class AgentServiceform extends Form {
    state = {  
        activeStep: 0,
        data1: {
            company_name: '',
            acn: '',
            
        },
        data2: {
            declarant_name: '',
            destination: '',
            contact:'',
            authorise:true,
            
        }, 
        errors: {}
    }
    schema1 = {
        company_name: Joi.string().required().label("This field"),
        acn: Joi.string().allow('').label("This field"),
        
    };
    schema2 = {
        declarant_name: Joi.string().required().label("This field"),
        destination: Joi.string().required().label("This field"),
        contact:Joi.string().required().label('This Feild'),
        authorise:Joi.allow('').label("This field"),
        
    };
    handleNext = () => {
        if(this.state.activeStep === 0 ){
            const errors = this.validateStep1();
            this.setState({ errors: errors || {} });
        
        if (errors) return;}
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
        const  {data1,data2} = this.state;
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>Registered Agent Service $269 annually </SelctText>
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
                                    <Grid item xs={12}>
                                        {this.renderInput("company_name", "Name of the company", 'text', 'true')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("acn", "ACN/ABN", 'text')}
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
                           <h3>Declaration</h3>
                           <p></p>
                           <Grid container spacing={1}>
                               <Grid item xs={12}>
                                   {this.renderInput("declarant_name", "Declarant Name* ", 'text')}
                               </Grid>
                               <Grid item xs={12}>
                                   {this.renderInput("destination", "Designation within the Company*", 'text')}
                               </Grid>
                               <Grid item xs={12}>
                                   {this.renderInput("contact", "Contact number*", 'number')}
                               </Grid>
                               <Grid item xs={12}>
                                    {this.renderCheckInput("authorise", "I authorise e-company to manage all the legal documentation related to ASIC and submit all required documentation on behalf of my Company. ")}
                                </Grid>
                               
                               <Grid item xs={6}></Grid>
                               <Grid item xs={6}>
                                   <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext} >Next</DarkBtn>
                                   <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                               </Grid>
                           </Grid>
                           
                       </FormContainer>
                            : null
                        }

                        {this.state.activeStep === 2 ?
                            <VirtualBilling fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                            : null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default AgentServiceform;