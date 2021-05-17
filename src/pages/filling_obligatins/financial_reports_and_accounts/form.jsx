
import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React, { Component } from 'react'
import Form from '../../../component/formItem/formValidator';
import { DarkBtn } from '../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText } from '../../../utils/globalStyle';
import Notificationreview from './review'
import Notificationbill from './notification_of_half_yearly_reports/billing';



const getSteps = () => {
    return ['Step-1','Step-2','Review','PayBill'];
}
class Notificationfrom extends Form {
    state = {  
        activeStep: 0,
        data1: {
            Cname:'',
            can:'',
            from: '',
            to:'',
            late_fee:'',
           
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
        can:Joi.string().required().label("This field"), 
        from: Joi.allow('').label("This field"),
        to:Joi.allow('').label("This field"),
        late_fee:Joi.allow('').label("This field"),
   

        
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
        
        if (errors) return;}
       
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
                    <SelctText>Notification of Half-Yearly Financial Reports $39</SelctText>
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
                                        {this.renderInput("Cname", "Name of the Company*", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("can", "CAN* ", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p>Financial period </p>
                                        {this.renderInput("from", "From ", 'date')}
                                        </Grid>
                                    <Grid item xs={6}>
                                        <p><br></br></p>
                                        {this.renderInput("to", "To ", 'date')}
                                    </Grid>
                                    <h3>Late Fee</h3>
                                    <Grid item xs={12}>
                                        {this.renderSelect("late_fee", "A late fee is imposed after 14 days of changes",this.pname)}
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
                                
                                <h3>Declaration </h3>
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
                              <Notificationreview data1={data1} data2={data2} fnc2={this.handleBack} fnc1={this.handleNext} />:null
                        }
                        {this.state.activeStep === 3 ?
                              <Notificationbill data1={data1} data2={data2} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default Notificationfrom;