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
class ChangeNameAndDetailsOfDirectorForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            name_of_company: '',
            abn: '',
        },
        data2: {
            given_name_of_director: '',
            family_name_of_director: '',
            date_of_birth: '',
            country_of_birth: '',
            town_of_birth: '',
            given_name: '',
            family_name: '',
            date_of_change: '',
        },
        data3: {
            late_fee: '',
        },
        data4: {
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
        date_of_change: Joi.allow().label("This field"),
        given_name_of_director: Joi.allow('').label("This field"),
        family_name_of_director: Joi.allow('').label("This field"),
        date_of_birth: Joi.allow('').label("This field"),
        country_of_birth: Joi.allow('').label("This field"),
        town_of_birth: Joi.allow('').label("This field"),
        given_name: Joi.allow('').label("This field"),
        family_name: Joi.allow('').label("This field"),
    };
    schema3 = {
        late_fee: Joi.allow().label("This field"),
    };
    schema4 = {
        declaration: Joi.allow().label("This field"),
        name: Joi.allow('').label("This field"),
        designation: Joi.allow('').label("This field"),
    };
    role = [
        { value: 'Director', label: 'Director ' },
        { value: 'Secretary', label: 'Secretary' },
        { value: 'Alternate director', label: 'Alternate director ' },
    ]
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: ' No', label: ' No' },
    ];
    lateFee = [
        { value: 'Not late $00', label: 'Not late ------ $00' },
        { value: ' 1 month $82', label: ' 1 month ------ $82' },
        { value: ' More than 1 month $340', label: ' More than 1 month ------ $340' },
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
        if(this.state.activeStep === 3 ){
            const errors = this.validateStep4();
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
        const  {data1, data2, data3, data4} = this.state;
        console.log(this.state)
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>Change of Name: Directors $39</SelctText>
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
                                        <h5>Name Change Details</h5>
                                    </Grid>
                                   
                                    <Grid item xs={12}>
                                        <p>Previous name of the director</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("given_name_of_director", "Given name", 'text', 'true')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("family_name_of_director", "Family name", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("date_of_birth", "Date of birth", 'date')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("country_of_birth", "Country of birth", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("town_of_birth", "Town of birth", 'text')}
                                    </Grid>
                                   
                                    <Grid item xs={12}>
                                        <p>New name of the director</p>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("given_name", "Given name", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("family_name", "Family name", 'text')}
                                    </Grid>
                                       
                                    <Grid item xs={12}>
                                        {this.renderInput("date_of_change", "Date of appointment", 'date')}
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
                                        <h5>Late lodgement fee</h5>
                                    </Grid>

                                    
                                    <Grid item xs={12}>
                                        {this.renderSelect('late_fee','Late lodgement fee', this.lateFee, 'true')}
                                        <Note>Late fee is imposed after 28 days of changes</Note>
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
                            <FormContainer>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <h5>Declaration</h5>
                                    </Grid>

                                    
                                    <Grid item xs={12}>
                                        {this.renderCheckInput("declaration", "I authorize e-company to manage all legal documentation related to ASIC and submit all required documentations on behalf of my company.")}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("name", "Declarant Name", 'text','true')}
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
                         
                        {this.state.activeStep === 4 ?
                              <Review data1={data1} data2={data2} data3={data3} fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                        {this.state.activeStep === 5 ?
                              <Billing fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default ChangeNameAndDetailsOfDirectorForm;