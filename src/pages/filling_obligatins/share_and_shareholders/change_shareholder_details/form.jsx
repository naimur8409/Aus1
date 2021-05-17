import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React, { Component } from 'react'
import Form from '../../../../component/formItem/formValidator';
import { DarkBtn } from '../../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText, Note } from '../../../../utils/globalStyle';
import Billing from './billing';
import Review from './review'

const getSteps = () => {
    return ['Step-1','Step-2','Step-3','Review','Billing'];
}
class ChangeShareholderDetailsForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            name_of_company: '',
            abn: '',
            required_changes : '',
        },
        data2: {
            given_name_shareholder: '',
            family_name_shareholder: '',
            when_added: '',
            share_class: '',
            number_of_shares: '',
            total_paid: '',
            total_unpaid: '',
            are_beneficially_held: '',
            is_unchanged: '',
            late_fee: '',

            given_name_ceased_shareholder: '',
            family_name_ceased_shareholder: '',
            date_of_cessation: '',
            cease_share_class: '',
            cease_number_of_shares: '',
            cease_total_paid: '',
            cease_total_unpaid: '',
            cease_are_beneficially_held: '',
            cease_is_unchanged: '',
            cease_late_fee: '',

            replace_former_given_name: '',
            replace_former_family_name: '',
            replace_new_given_name: '',
            replace_new_family_name: '',
            date_of_replacement: '',
            replace_share_class: '',
            replace_number_of_shares: '',
            replace_total_paid: '',
            replace_total_unpaid: '',
            replace_are_beneficially_held: '',
            replace_is_unchanged: '',
            replace_late_fee: '',

            change_former_given_name: '',
            change_former_family_name: '',
            change_new_given_name: '',
            change_new_family_name: '',
            date_of_change: '',
            change_late_fee: '',


            address_given_name: '',
            address_family_name: '',
            date_of_change: '',
            old_unit: '',
            old_street: '',
            old_subrub: '',
            old_state: '',
            old_post_code: '',
            old_country: '',
            new_unit: '',
            new_street: '',
            new_subrub: '',
            new_state: '',
            new_post_code: '',
            new_country: '',

            
            status_given_name: '',
            status_family_name: '',
            is_holding: '',
            status_late_fee: '',
        },
        data3: {
            declaration: '',
            name: '',
            designation: '',
        },
        errors: {}
    }
    schema1 = {
        name_of_company: Joi.allow().label("This field"),
        abn: Joi.allow('').label("This field"),
        required_changes: Joi.allow('').label("This field"),
    };
    schema2 = {
        given_name_shareholder: Joi.allow().label("This field"),
        family_name_shareholder: Joi.allow().label("This field"),
        when_added: Joi.allow('').label("This field"),
        share_class: Joi.allow('').label("This field"),
        number_of_shares: Joi.allow('').label("This field"),
        total_paid: Joi.allow('').label("This field"),
        total_unpaid: Joi.allow('').label("This field"),
        are_beneficially_held: Joi.allow('').label("This field"),
        late_fee: Joi.allow('').label("This field"),
        is_unchanged: Joi.allow('').label("This field"),
        
        given_name_ceased_shareholder: Joi.allow().label("This field"),
        family_name_ceased_shareholder: Joi.allow().label("This field"),
        date_of_cessation: Joi.allow('').label("This field"),
        cease_share_class: Joi.allow('').label("This field"),
        cease_number_of_shares: Joi.allow('').label("This field"),
        cease_total_paid: Joi.allow('').label("This field"),
        cease_total_unpaid: Joi.allow('').label("This field"),
        cease_are_beneficially_held: Joi.allow('').label("This field"),
        cease_late_fee: Joi.allow('').label("This field"),
        cease_is_unchanged: Joi.allow('').label("This field"),
        
        replace_former_given_name: Joi.allow().label("This field"),
        replace_former_family_name: Joi.allow().label("This field"),
        replace_new_given_name: Joi.allow().label("This field"),
        replace_new_family_name: Joi.allow().label("This field"),
        date_of_replacement: Joi.allow('').label("This field"),
        replace_share_class: Joi.allow('').label("This field"),
        replace_number_of_shares: Joi.allow('').label("This field"),
        replace_total_paid: Joi.allow('').label("This field"),
        replace_total_unpaid: Joi.allow('').label("This field"),
        replace_are_beneficially_held: Joi.allow('').label("This field"),
        replace_late_fee: Joi.allow('').label("This field"),
        replace_is_unchanged: Joi.allow('').label("This field"),
        
        change_former_given_name: Joi.allow().label("This field"),
        change_former_family_name: Joi.allow().label("This field"),
        change_new_given_name: Joi.allow().label("This field"),
        change_new_family_name: Joi.allow().label("This field"),
        date_of_change: Joi.allow('').label("This field"),
        change_late_fee: Joi.allow('').label("This field"),
        
        address_given_name: Joi.allow('').label("This field"),
        address_family_name: Joi.allow('').label("This field"),
        date_of_change: Joi.allow('').label("This field"),
        old_unit: Joi.allow('').label("This field"),
        old_street: Joi.allow('').label("This field"),
        old_subrub: Joi.allow('').label("This field"),
        old_state: Joi.allow('').label("This field"),
        old_post_code: Joi.allow('').label("This field"),
        old_country: Joi.allow('').label("This field"),
        new_unit: Joi.allow('').label("This field"),
        new_street: Joi.allow('').label("This field"),
        new_subrub: Joi.allow('').label("This field"),
        new_state: Joi.allow('').label("This field"),
        new_post_code: Joi.allow('').label("This field"),
        new_country: Joi.allow('').label("This field"),
    
        status_given_name: Joi.allow('').label("This field"),
        status_family_name: Joi.allow('').label("This field"),
        status_late_fee: Joi.allow('').label("This field"),
        is_holding: Joi.allow('').label("This field"),
        
    };
    schema3 = {
        declaration: Joi.allow().label("This field"),
        name: Joi.allow('').label("This field"),
        designation: Joi.allow('').label("This field"),
    };
    
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: ' No', label: ' No' },
    ];
    common1 = [
        { value: 'Yes', label: 'Yes (not beneficially held)'},
        { value: ' No', label: ' No 	No (beneficially held)'},{ value: 'I do not know', label: 'I do not know' },
    ];
    required_changes = [
        { value: 'Add shareholder', label: 'Add new a shareholder $49' },
        { value: 'Cease shareholder', label: 'Cease a shareholder $49' },
        { value: 'Replace shareholder', label: 'Replace an existing shareholder $49 ' },
        { value: 'Change name', label: 'Change a shareholder’s name $49' },
        { value: 'Change address', label: 'Change a shareholder’s address $49' },
        { value: 'Change status', label: 'Change a shareholder’s beneficial status $49' },
    ]
    
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
        const  {data1, data2, data3} = this.state;
        // console.log(this.state)
        const newShareholder = (
                <>
                    <Grid item xs={12}>
                        <h5>Add New Shareholders $49 </h5>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Name of the new shareholder</p>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("given_name_shareholder", "Given name", 'text', 'true')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("family_name_shareholder", "Family name", 'text')}
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderInput("when_added", "When was the shareholder added?", 'date')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("share_class", "Share class", 'text')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("number_of_shares", "Number of shares ", 'number')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("total_paid", "The total amount paid", 'number')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("total_unpaid", "The total amount unpaid", 'number')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderSelect("are_beneficially_held", "Are the shares beneficially held?",this.common)}
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderSelect("is_unchanged", "Is this an unchanged shareholder whom you wish to add to the top 20 shareholding list for this class?",this.common)}
                    </Grid>
                    <Grid item xs={12}>
                        <h5>Late Lodgement fee</h5>
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderSelect("late_fee", "A late fee is imposed after 28 days of changes",this.lateFee)}
                    </Grid>
                </>
        )
        const ceaseShareholder = (
                <>
                    <Grid item xs={12}>
                        <h5>Cease A Shareholder $49</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Name of the ceased shareholder</p>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("given_name_ceased_shareholder", "Given name", 'text', 'true')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("family_name_ceased_shareholder", "Family name", 'text')}
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderInput("date_of_cessation", "Date of cessation", 'date')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("cease_share_class", "Share class", 'text')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("cease_number_of_shares", "Number of shares ", 'number')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("cease_total_paid", "The total amount paid", 'number')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("cease_total_unpaid", "The total amount unpaid", 'number')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderSelect("cease_are_beneficially_held", "Are the shares beneficially held?",this.common)}
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderSelect("cease_is_unchanged", "Is this an unchanged shareholder whom you wish to add to the top 20 shareholding list for this class?",this.common)}
                    </Grid>
                    <Grid item xs={12}>
                        <h5>Late Lodgement fee</h5>
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderSelect("cease_late_fee", "A late fee is imposed after 28 days of changes",this.lateFee)}
                    </Grid>
                </>
        )
        const replaceShareholder = (
                <>
                    <Grid item xs={12}>
                        <h5>Replace An Existing Shareholder $49</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Name of the existing shareholder</p>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("replace_former_given_name", "Given name", 'text', 'true')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("replace_former_family_name", "Family name", 'text')}
                    </Grid>
                    <Grid item xs={12}>
                        <p>Name of the new shareholder</p>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("replace_new_given_name", "Given name", 'text')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("replace_new_family_name", "Family name", 'text')}
                    </Grid>

                    <Grid item xs={12}>
                        {this.renderInput("date_of_replacement", "Date of replacement ", 'date')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("replace_share_class", "Share class", 'text')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("replace_number_of_shares", "Number of shares ", 'number')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("replace_total_paid", "The total amount paid", 'number')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("replace_total_unpaid", "The total amount unpaid", 'number')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderSelect("replace_are_beneficially_held", "Are the shares beneficially held?",this.common)}
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderSelect("replace_is_unchanged", "Is this an unchanged shareholder whom you wish to add to the top 20 shareholding list for this class?",this.common)}
                    </Grid>
                    <Grid item xs={12}>
                        <h5>Late Lodgement fee</h5>
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderSelect("replace_late_fee", "A late fee is imposed after 28 days of changes",this.lateFee)}
                    </Grid>
                </>
        )
        const changeName = (
                <>
                    <Grid item xs={12}>
                        <h5>Change A Shareholder Name $49</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Former name</p>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("change_former_given_name", "Given name", 'text', 'true')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("change_former_family_name", "Family name", 'text')}
                    </Grid>
                    <Grid item xs={12}>
                        <p>New Name</p>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("change_new_given_name", "Given name", 'text')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("change_new_family_name", "Family name", 'text')}
                    </Grid>

                    <Grid item xs={12}>
                        {this.renderInput("date_of_change", "Date of Change", 'date')}
                    </Grid>
                   
                    <Grid item xs={12}>
                        <h5>Late Lodgement fee</h5>
                    </Grid>
                    <Grid item xs={12}>
                        {this.renderSelect("change_late_fee", "A late fee is imposed after 28 days of changes",this.lateFee)}
                    </Grid>
                </>
        )
        const changeAddress = (
                <>
                    <Grid item xs={12}>
                        <h5>Change A Shareholder’s Address $49</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Name of the Shareholder</p>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("address_given_name", "Given name", 'text', 'true')}
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderInput("address_family_name", "Family name", 'text')}
                    </Grid>

                    <Grid item xs={12}>
                        <p>Existing address</p>
                    </Grid>
                    <Grid item xs={4}>
                        {this.renderInput("old_unit", "Unit/ house number", 'text')}
                    </Grid>
                    <Grid item xs={4}>
                        {this.renderInput("old_street", "Street number and name", 'text')}
                    </Grid>
                    <Grid item xs={4}>
                        {this.renderInput("old_subrub", "Suburb", 'text')}
                    </Grid>
                    <Grid item xs={4}>
                        {this.renderInput("old_state", "State/Territory", 'text')}
                    </Grid>
                    <Grid item xs={4}>
                        {this.renderInput("old_post_code", "Postcode", 'text')}
                    </Grid>
                    <Grid item xs={4}>
                        {this.renderInput("old_country", "Country", 'text')}
                    </Grid>
                    <Grid item xs={12}>
                        <p>New Address</p>
                    </Grid>
                    <Grid item xs={4}>
                        {this.renderInput("new_unit", "Unit/ house number", 'text')}
                    </Grid>
                    <Grid item xs={4}>
                        {this.renderInput("new_street", "Street number and name", 'text')}
                    </Grid>
                    <Grid item xs={4}>
                        {this.renderInput("new_subrub", "Suburb", 'text')}
                    </Grid>
                    <Grid item xs={4}>
                        {this.renderInput("new_state", "State/Territory", 'text')}
                    </Grid>
                    <Grid item xs={4}>
                        {this.renderInput("new_post_code", "Postcode", 'text')}
                    </Grid>
                    <Grid item xs={4}>
                        {this.renderInput("new_country", "Country", 'text')}
                    </Grid>
                   

                    <Grid item xs={12}>
                        {this.renderInput("date_of_change", "Date of change", 'date')}
                    </Grid>
                   
                </>
        )
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
                                    <Grid item xs={12}>
                                        {this.renderSelect("required_changes", "Please select your required changes",this.required_changes, 'false', 'true')}
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
                                    
                                    {data1.required_changes ? data1.required_changes.map(item => {
                                        if(item.value=== 'Add shareholder'){
                                            return newShareholder
                                        }
                                        if(item.value=== 'Cease shareholder'){
                                            return ceaseShareholder
                                        }
                                        if(item.value=== 'Replace shareholder'){
                                            return replaceShareholder
                                        }
                                        if(item.value=== 'Change name'){
                                            return changeName
                                        }
                                        if(item.value=== 'Change address'){
                                            return changeAddress
                                        }
                                        if(item.value=== 'Change status'){
                                            return changeStatus
                                        }
                                    }) : null}
                                    
                                    
                                    
                                    
                                    
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
                         
                        {this.state.activeStep === 3 ?
                              <Review data1={data1} data2={data2} data3={data3} fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                        {this.state.activeStep === 4 ?
                              <Billing fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default ChangeShareholderDetailsForm;