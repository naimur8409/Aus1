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
class ConversionOfSharesForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            name_of_company: '',
            abn: '',
        },
        data2: {
            conversion: '',
            share_class: '',
            date_of_converstion: '',
            number_of_shares: '',
            paid_per_share: '',
            unpaid_per_share: '',
            have_resolution: '',
            want_resolution: '',
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
        conversion: Joi.allow('').label("This field"),
        share_class: Joi.allow('').label("This field"),
        date_of_converstion: Joi.allow('').label("This field"),
        number_of_shares: Joi.allow('').label("This field"),
        paid_per_share: Joi.allow('').label("This field"),
        unpaid_per_share: Joi.allow('').label("This field"),
        have_resolution: Joi.allow('').label("This field"),
        want_resolution: Joi.allow('').label("This field"),
    };
    schema3 = {
        late_fee: Joi.allow('').label("This field"),
    };
    schema4 = {
        declaration: Joi.allow().label("This field"),
        name: Joi.allow('').label("This field"),
        designation: Joi.allow('').label("This field"),
    };
    conversion = [
        { value: 'Into smaller number', label: 'Into smaller number' },
        { value: 'Into larger number', label: 'Into larger number' },
    ]
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: ' No' },
    ];
    share_class = [
        { value: 'Ordinary share', label: 'Ordinary share' },
        { value: 'A class', label: 'A class' },
        { value: 'B class', label: 'B class' },
        { value: 'c class', label: 'c class' },
        { value: 'D class', label: 'D class' },
        { value: 'E class', label: 'E class' },
        { value: 'F class', label: 'F class' },
        { value: 'G class', label: 'G class' },
        { value: 'H class', label: 'H class' },
        { value: 'I class', label: 'I class' },
        { value: 'J class', label: 'J class' },
        { value: 'K class', label: 'K class' },
        { value: 'L class', label: 'L class' },
        { value: 'M class', label: 'M class' },
        { value: 'N class', label: 'N class' },
        { value: 'O class', label: 'O class' },
        { value: 'p class', label: 'p class' },
        { value: 'Q class', label: 'Q class' },
        { value: 'R class', label: 'R class' },
        { value: 'S class', label: 'S class' },
        { value: 'T class', label: 'T class' },
        { value: 'U class', label: 'U class' },
        { value: 'V class', label: 'V class' },
        { value: 'W class', label: 'W class' },
        { value: 'X class', label: 'X class' },
        { value: 'Y class', label: 'Y class' },
        { value: 'Z class', label: 'Z class' },
        { value: 'Management', label: 'Management' },
        { value: 'life governors', label: 'life governors' },
        { value: 'Employees', label: 'Employees' },
        { value: 'Founders', label: 'Founders' },
        { value: 'Preference', label: 'Preference' },
        { value: 'Cumulative preference', label: 'Cumulative preference' },
        { value: 'Non-cumulative preference', label: 'Non-cumulative preference' },
        { value: 'Redeemable preference', label: 'Redeemable preference' },
        { value: 'Non-redeemable preference', label: 'Non-redeemable preference' },
        { value: 'Cumulative redeemable preference', label: 'Cumulative redeemable preference' },
        { value: 'Non-cumulative redeemable preference', label: 'Non-cumulative redeemable preference' },
        { value: 'Participative preference', label: 'Participative preference' },
        { value: 'Redeemable', label: 'Redeemable' },
        { value: 'Special', label: 'Special' },
    ];
    lateFee = [
        { value: 'Not late $00', label: 'Not late ------ $00' },
        { value: '1 month $82', label: '1 month ------ $82' },
        { value: 'More than 1 month $340', label: 'More than 1 month ------ $340' },
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
                    <SelctText>Conversion of Shares Into Smaller or Larger Numbers $99</SelctText>
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
                                        <h5>Share Class</h5>
                                    </Grid>
                                    
                                    <Grid item xs={6}>
                                        {this.renderSelect("conversion", "Conversion ",this.conversion, 'true')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderSelect("share_class", "Chose share class ",this.share_class)}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("date_of_converstion", "Date of conversion ", 'date')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("number_of_shares", "The total number of current shares after changes", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("paid_per_share", "The total amount paid on these shares", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("unpaid_per_share", "The total amount unpaid on these shares", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderSelect("have_resolution", "Do you have the resolution for the share consolidation/ sub-division",this.common)}
                                    </Grid>
                                    {data2.have_resolution.value === 'No' ?
                                        <Grid item xs={6}>
                                            {this.renderSelect("want_resolution", "Do you want us to prepare the resolution? ",this.common)}
                                            {data2.want_resolution.value === 'Yes' ? <Note>It will cost additional $89 </Note> : null}
                                        </Grid>
                                        :null
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
                                        <h5>Late Fee</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("late_fee", "Late Lodgement Fee", this.lateFee)}
                                        <Note>A late fee is imposed after 28 days of changes</Note>
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
                                        {this.renderInput("name", "Declarant Name", 'text', 'true' )}
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
 
export default ConversionOfSharesForm;