import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React, { Component } from 'react'
import Form from '../../../../component/formItem/formValidator';
import { DarkBtn } from '../../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText, Note } from '../../../../utils/globalStyle';
import Billing from './billing';
import Review from './review'

const getSteps = () => {
    return ['Step-1','Step-2','Step-3','Step-4','Review','Billing'];
}
class RequestCompanyDetailsForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            name_of_company: '',
            abn: '',
        },
    
        errors: {}
    }
    schema1 = {
        name_of_company: Joi.allow().label("This field"),
        abn: Joi.allow('').label("This field"),
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
        console.log(this.state)
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>Request for company details $35</SelctText>
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
                              <Review data1={data1} fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                        {this.state.activeStep === 2 ?
                              <Billing fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default RequestCompanyDetailsForm;