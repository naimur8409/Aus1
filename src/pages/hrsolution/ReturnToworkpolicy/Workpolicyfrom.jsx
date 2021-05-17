
import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React from 'react'
import Form from '../../../component/formItem/formValidator';
import { DarkBtn } from '../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText } from '../../../utils/globalStyle';
import Review from './review';
import Billing from './billing';





const getSteps = () => {
    return ['Step-1','Review','Billing'];
}
class ReturnTOWorkPolicyfrom extends Form {
    state = {  
        activeStep: 0,
        data1: {
            registered:'',
            injuries:'',
            responsible:'',
            reviewed:'',
            approve:'',
            approve_policy:'',
            product: '',
            Sspreed:'',
            Sjurisdiction:'',
            incorporate:true,
            total:'',
        },
        
        errors: {}
    }
    schema1 = {
        registered:Joi.allow().label("This field"),
        injuries:Joi.string().allow().label("This field"),
        responsible: Joi.allow('').label("This field"),
        reviewed: Joi.allow('').label("This field"),
        approve: Joi.allow('').label("This field"), 
        approve_policy:Joi.allow('').label("This field"),
        product: Joi.allow('').label("This field"),
        Sspreed:Joi.allow('').label("This field"),
        Sjurisdiction:Joi.allow('').label("This field"),
        incorporate:Joi.allow('').label("This field"),
        total:Joi.string().allow('').label("This field"),

        
    };
    pname = [
        { value: 'Standard Policy $89', label: 'Standard Policy $89' },
        { value: 'Customised Policy:$599', label: 'Customised Policy: Consultation with a lawyer over the phone $599' },
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
        const  {data1} = this.state;
        console.log(data1)
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>Return to Work Policy $89</SelctText>
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
                                <Grid item xs={6}>
                                        {this.renderSelect("registered", "In what state is your business or Company registered? ",this.juris)}
                                    </Grid>
                                <Grid item xs={6}>
                                        {this.renderInput("injuries", "Who is the person responsible for managing injuries at the Company? ", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("responsible", "What is the contact number of the person responsible for managing injuries at the Company? ", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("reviewed", "How often will the companies return to work policy be reviewed each year?", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("approve", "What is the name of the person who approved this Policy? ", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("approve_policy", "What date was this Policy approved? ", 'date')}
                                    </Grid>

                                    <Grid item xs={6}>
                                        {this.renderSelect("product", "Select your product",this.pname)}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderSelect("Sspreed", "Service speed",this.speed)}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderSelect("Sjurisdiction", "Select your jurisdiction",this.juris)}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("total", "Total", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                    {this.renderCheckInput('incorporate','Describe if you have any other specific need that you want us to incorporate in the policy' )}
                                     </Grid>

                                    
                                    
                                    
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                        :null}
                         
                        {this.state.activeStep === 1 ?
                            <Review data1={data1} fnc1={this.handleNext} fnc2={this.handleBack} />:null
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
 
export default ReturnTOWorkPolicyfrom;