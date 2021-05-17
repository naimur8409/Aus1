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
class UpdateBusinessAddressForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            name_of_company: '',
            abn: '',
        },
        data2: {
            
            date_of_change: '',
            unit: '',
            street: '',
            suburb: '',
            state: '',
            post_code: '',
            country: '',
            address_type: '',
            does_occupy: '',
            occupier: '',
            has_premises: '',
            
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
        address_type: Joi.allow('').label("This field"),
        does_occupy: Joi.allow('').label("This field"),
        occupier: Joi.allow('').label("This field"),
        has_premises: Joi.allow('').label("This field"),
        unit: Joi.allow('').label("This field"),
        street: Joi.allow('').label("This field"),
        suburb: Joi.allow('').label("This field"),
        state: Joi.allow('').label("This field"),
        post_code: Joi.allow('').label("This field"),
        country: Joi.allow('').label("This field"),
    };
    schema3 = {
        late_fee: Joi.allow().label("This field"),
    };
    schema4 = {
        declaration: Joi.allow().label("This field"),
        name: Joi.allow('').label("This field"),
        designation: Joi.allow('').label("This field"),
    };
    address_type = [
        { value: 'Registered address', label: 'Registered address  ' },
        { value: 'Principle place of business', label: 'Principle place of business ' },
        { value: 'Officeholder’s address', label: 'Officeholder’s address ' },
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
                    <SelctText>Change your business address $39</SelctText>
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
                                        <h5>Business Address</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("date_of_change", "Date of change", 'date','true')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <p>New address</p>
                                    </Grid>
                                    <Grid item xs={4}>
                                        {this.renderInput("unit", "Unit/ house number", 'text')}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {this.renderInput("street", "Street number and name", 'text')}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {this.renderInput("suburb", "Suburb", 'text')}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {this.renderInput("state", "State/Territory", 'text')}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {this.renderInput("post_code", "Post code", 'text')}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {this.renderInput("country", "Country", 'text')}
                                    </Grid>

                                    <Grid item xs={12}>
                                        {this.renderSelect("address_type", "Address type",this.address_type,'false','true')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("does_occupy", "Does the company occupy this premises?",this.common)}
                                    </Grid>
                                   
                                    {data2.does_occupy.value === 'Yes' ?
                                        <>
                                            <Grid item xs={6}>
                                                {this.renderInput("occupier", "Provide name of the occupier", 'text')}
                                            </Grid>
                                            <Grid item xs={6}>
                                                {this.renderSelect("has_premises", "Has the occupier of the premises consented in writing to the use this address?",this.common)}
                                            </Grid>
                                        </>
                                        : null   
                                    }

                                    

                                    
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
 
export default UpdateBusinessAddressForm;