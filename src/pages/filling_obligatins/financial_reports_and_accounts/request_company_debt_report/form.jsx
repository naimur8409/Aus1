
import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React, { Component } from 'react'
import Form from '../../../../component/formItem/formValidator';
import { DarkBtn } from '../../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText } from '../../../../utils/globalStyle';
import Review from './review';


import Billing from './billing';



const getSteps = () => {
    return ['Step-1','Step-2','Review','PayBill'];
}
class RequestCompanyDebtReportForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            Cname:'',
            acn:'',
            abn: '',
           
           
        },
        data2:{
            destination:'',
            Dname:'',
            document:'',
        },
        
        errors: {}
    }
    schema1 = {
        Cname:Joi.string().required().label("This field"),
        acn:Joi.string().required().label("This field"), 
        abn:Joi.allow().label("This field"),
       
   

        
    };
    schema2 = {
        Dname:Joi.string().required().label("This field"),
        destination:Joi.string().required().label("This field"), 
        document:Joi.allow('').label("This field"),
        
   

        
    };
    pname = [
        { value: 'No late $00', label: 'No late $00' },
        { value: 'One Month $82', label: 'One Month $82' },
        { value: 'More than One Month $340', label: 'More than One Month $340' },
      ];
    speed= [
        { value: 'Regular: 2 business days $00', label: 'Regular: 2 business days $00 ' },
        { value: 'Express: 1 business day $69 ', label: 'Express: 1 business day $69 ' },
        { value: 'Urgent: by the next four business hours $99', label: 'Urgent: by the next four business hours $99' },
      ];
      juris = [
        { value: 'ACT', label: 'ACT' },
        { value: ' NSW', label: ' NSW' },
        { value: 'VIC', label: 'VIC' },
        { value: 'WA', label: 'WA' },
        { value: 'QLD', label: 'QLD' },
        { value: 'TAS', label: 'TAS' },
        { value: 'SA', label: 'SA' },
        { value: ' NT', label: ' NT' },
        
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
        const  {data1,data2} = this.state;
        console.log(data1)
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>Request Company Debt Report $89</SelctText>
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
                                
                                <h3>Company Details</h3>
                                <Grid container spacing={1}>

                                    
                                <Grid item xs={12}>
                                        {this.renderInput("Cname", "Name of the Company*", 'text', 'true')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("acn", "Provide the ACN*", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("abn", "Provide the ABN", 'text')}
                                    </Grid>
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                        :null}
                        {this.state.activeStep === 1 ?
                            
                            <FormContainer>
                                
                                <h3>Declaration</h3>
                                <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    {this.renderFileInput("document", "I authorise e-company to manage all the legal documentation related to ASIC and submit all required documentation on behalf of my Company.*", 'file')}
                                </Grid>
                                <Grid item xs={12}>
                                        {this.renderInput("Dname", "Declarant Name*", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("destination", "Designation within the Company*", 'text')}
                                    </Grid>

                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                            :null
                        }
                         
                        {this.state.activeStep === 2 ?
                              <Review data1={data1} data2={data2} fnc2={this.handleBack} fnc1={this.handleNext} />:null
                        }
                        {this.state.activeStep === 3 ?
                              <Billing data1={data1} data2={data2} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default RequestCompanyDebtReportForm;