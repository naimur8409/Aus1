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
class IssueOfNewSharesForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            name_of_company: '',
            abn: '',
        },
        data2: {
            number_of_shares: '',
            paid_per_share: '',
            unpaid_per_share: '',
            date_of_change: '',
            is_cash: '',
            is_written_contract: '',
        },
        data3: {
            share_class: '',
            effective_date: '',
            reason: '',
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
        number_of_shares: Joi.allow('').label("This field"),
        paid_per_share: Joi.allow('').label("This field"),
        unpaid_per_share: Joi.allow('').label("This field"),
        date_of_change: Joi.allow('').label("This field"),
        is_cash: Joi.allow('').label("This field"),
        is_written_contract: Joi.allow('').label("This field"),
    };
    schema3 = {
        share_class: Joi.allow('').label("This field"),
        effective_date: Joi.allow('').label("This field"),
        reason: Joi.allow('').label("This field"),
        late_fee: Joi.allow('').label("This field"),
    };
    schema4 = {
        declaration: Joi.allow().label("This field"),
        name: Joi.allow('').label("This field"),
        designation: Joi.allow('').label("This field"),
    };
    reason = [
        { value: 'Issue of Shares', label: 'Issue of Shares' },
        { value: 'Division or conversion of a class of shares', label: 'Division or conversion of a class of shares' },
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
       
        const changeStatus = (
                <>
                    <Grid item xs={12}>
                        <h5>Change A Shareholder’s Beneficial Status $49</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Name of the Shareholder</p>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("status_given_name", "Given name", 'text', 'true')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("status_family_name", "Family name", 'text')}
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderSelect("is_holding", "Is the shareholder holding the share on behalf of another person or organisation? ", this.common1)}
                    </Grid>
                    <Grid item xs={12}>
                        <h5>Late Lodgement fee</h5>
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderSelect("status_late_fee", "A late fee is imposed after 28 days of changes",this.lateFee)}
                    </Grid>
                </>
        )
            
        
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>Change Shareholders Details $49</SelctText>
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
                                        <h5>Details of Share Issue </h5>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("number_of_shares", "The number of shares issued", 'text', 'true')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("paid_per_share", "Amount paid per share", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("unpaid_per_share", "Amount unpaid per share", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("date_of_change", "Earliest date of change", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderSelect("is_cash", "Were shares issued for other than cash?",this.common)}
                                    </Grid>
                                    {data2.is_cash.value === 'Yes' ?
                                        <Grid item xs={6}>
                                            {this.renderSelect("is_written_contract", "Are some or all of the shares issued under a written contract?",this.common)}
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
                                        <h5>Add A Share Class</h5>
                                        <p>Complete the share class details for the new share class</p>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("share_class", "Please select a share class from the list of common classes: ", this.share_class, 'true' )}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("effective_date", "Effective Date", 'date')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("reason", "Reason for a new class:", this.reason)}
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
 
export default IssueOfNewSharesForm;