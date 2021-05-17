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
class AnnualReviewPaymentForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            name_of_company: '',
            abn: '',
        },
        data2: {
            review_fee_duration: '',
            review_fee: '',
            have_positive_resolution: '',
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
        review_fee_duration: Joi.allow('').label("This field"),
        review_fee: Joi.allow('').label("This field"),
        have_positive_resolution: Joi.allow('').label("This field"),
    };
    schema3 = {
        late_fee: Joi.allow('').label("This field"),
    };
    schema4 = {
        declaration: Joi.allow().label("This field"),
        name: Joi.allow('').label("This field"),
        designation: Joi.allow('').label("This field"),
    };
    service = [
        { value: 'Consolidate', label: 'Consolidate' },
        { value: 'Sub-divide', label: 'Sub-divide' },
    ]
    review_fee_duration = [
        { value: 'One Year', label: 'One Year' },
        { value: 'Ten Year', label: ' Ten Year' },
    ];
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: ' No' },
        { value: 'Prepare one for us $79', label: ' Prepare one for us $79' },
    ];
    review_fee1 = [
        { value: 'A public company -- $1267', label: 'A public company -- $1267' },
        { value: 'A proprietary company -- $273', label: 'A proprietary company -- $273' },
        { value: 'A special-purpose proprietary company -- $55', label: 'A special-purpose proprietar company -- $55y ' },
        { value: 'A registered scheme or notified foreign passport -- $1267', label: 'A registered scheme or notified foreign passport -- $1267' },
        { value: 'A small transferring financial institution -- $253', label: 'A small transferring financial institution -- $253' },
        { value: 'A company in liquidation -- $00', label: 'A company in liquidation -- $00' },
        { value: 'A registered scheme that is being wound up -- $00', label: 'A registered scheme that is being wound up -- $00' },
    ];
    review_fee2 = [
        { value: 'A public company -- $9807', label: 'A public company -- $9807' },
        { value: 'A proprietary company -- $2120', label: 'A proprietary company -- $2120' },
        { value: 'A special-purpose proprietary company -- $483', label: 'A special-purpose proprietar company -- $483y ' },
        { value: 'A special-purpose public company -- $479', label: 'A special-purpose public company -- $479y ' },
        { value: 'A registered scheme or notified foreign passport -- $9807', label: 'A registered scheme or notified foreign passport -- $9807' },
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
                    <SelctText>Annual Review $49</SelctText>
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
                                        <h5>Fee Selection</h5>
                                    </Grid>
                                    
                                    <Grid item xs={12}>
                                        {this.renderSelect("review_fee_duration", "Do you want to pay your annual review fee for one year or ten years?*",this.review_fee_duration, 'true')}
                                    </Grid>
                                    {data2.review_fee_duration.value === 'One Year' ?
                                        <Grid item xs={12}>
                                            {this.renderSelect("review_fee", "Annual statement review fee for one year",this.review_fee1)}
                                        </Grid>
                                    : null
                                    }
                                    {data2.review_fee_duration.value === 'Ten Year' ?
                                        <Grid item xs={12}>
                                            {this.renderSelect("review_fee", "Annual statement review fee for one year",this.review_fee2)}
                                        </Grid>
                                    : null
                                    }
                                    <Grid item xs={12}>
                                        {this.renderSelect("have_positive_resolution", "Have you passed a positive solvency resolution?",this.common)}
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
 
export default AnnualReviewPaymentForm;