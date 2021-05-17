
import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React from 'react'
import Form from '../../../../component/formItem/formValidator';
import { DarkBtn } from '../../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText } from '../../../../utils/globalStyle';
import Review from './review'
import Billing from './billing';



const getSteps = () => {
    return ['Step-1','Step-2','Review','PayBill'];
}
class AppointUsAsYourLocalAgentForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            Cname:'',
            Bname:'',
            arbn: '',
            address:'',
            
           
        },
        data2:{
            designation:'',
            document:'',
            gname:'',
            lname:'',
            number:'',
        },
        
        errors: {}
    }
    schema1 = {
        Cname:Joi.string().label("This field"),
        Bname:Joi.allow().label("This field"),
        arbn: Joi.allow().label("This field"),
        address:Joi.allow().label("This field"),
        
        

        
    };
    schema2 = {
        gname:Joi.string().required().label("This field"),
        lname:Joi.string().required().label("This field"),
        number:Joi.string().required().label("This field"),
        designation:Joi.string().required().label("This field"), 
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
                    <SelctText>Appoint us as your Local Agent $59 Lodgement fee + $199 monthly fee</SelctText>
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
                                        {this.renderInput("Cname", "Company name", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("Bname", "Business name", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        
                                        {this.renderInput("arbn", "ARBN", 'text')}
                                        </Grid>
                                    <Grid item xs={12}>
                                    
                                        {this.renderInput("address", "Address ", 'text')}
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
                                
                                <h3>Declaration </h3>
                                <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    {this.renderFileInput("document", "I authorise e-company to manage all the legal documentation related to ASIC and submit all required documentation on behalf of my Company And I hereby appoint e-company as our Agent of the bellow mentioned Foreign Company.*", 'file')}
                                </Grid>
                                <Grid item xs={6}>
                                    <p>Name of the declarant/applicant*</p>
                                        {this.renderInput("gname", "Given Name*", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p><br></br></p>
                                        {this.renderInput("lname", "Last Name*", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        
                                        {this.renderInput("designation", "Designation within the Company*", 'text')}
                                        </Grid>
                                        <Grid item xs={12}>
                                        
                                        {this.renderInput("number", "Contact number*", 'number')}
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
                              <Review data1={data1} data2={data2} fnc2={this.handleBack} fnc1={this.handleNext} />
                            :null
                        }
                       {this.state.activeStep === 3 ?
                              <Billing data1={data1} data2={data2} fnc2={this.handleBack} fnc3={this.handleReset} />
                            :null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default AppointUsAsYourLocalAgentForm;