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
class CancellationOfSharesForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            name_of_company: '',
            abn: '',
        },
        data2: {
            number_of_shares: '',
            paid_cancelled_share: '',
            date_of_cancellation: '',
            reason: '',
            section_reference: '',
            description: '',
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
        number_of_shares: Joi.allow('').label("This field"),
        paid_cancelled_share: Joi.allow('').label("This field"),
        date_of_cancellation: Joi.allow('').label("This field"),
        reason: Joi.allow('').label("This field"),
        section_reference: Joi.allow('').label("This field"),
        description: Joi.allow('').label("This field"),
    };
    schema3 = {
        late_fee: Joi.allow('').label("This field"),
    };
    schema4 = {
        declaration: Joi.allow().label("This field"),
        name: Joi.allow('').label("This field"),
        designation: Joi.allow('').label("This field"),
    };
    
    reason = [
        { value: 'S.254J Redeemable preference shares redeemed out of profits', label: 'S.254J Redeemable preference shares redeemed out of profits' },
        { value: 'S.254J Redeemable preference shares redeemed out of a fresh issue of shares', label: 'S.254J Redeemable preference shares redeemed out of a fresh issue of shares' },
        { value: 'S.256A-S.256E Capital reduction - single shareholder company', label: 'S.256A-S.256E Capital reduction - single shareholder company' },
        { value: 'S.256A-S.256E Capital reduction - multiple shareholder company', label: 'S.256A-S.256E Capital reduction - multiple shareholder company' },
        { value: 'S.257H(3) Share buyback - Minimum holding buyback only', label: 'S.257H(3) Share buyback - Minimum holding buyback only' },
        { value: 'S.257H(3) Share buyback - Other buyback types', label: 'S.257H(3) Share buyback - Other buyback types' },
        { value: 'S.257H(3) Share buyback - Other buyback types', label: 'S.257H(3) Share buyback - Other buyback types' },
        { value: 'S.258E(2) and (3) Shares returned to the Company, under section 651C, 742(2), 737 or 738', label: 'S.258E(2) and (3) Shares returned to the Company, under section 651C, 742(2), 737 or 738' },
        { value: 'ss.258E(2) and (3) Shares returned to the Company, under section 1325A (court order)', label: 'ss.258E(2) and (3) Shares returned to the Company, under section 1325A (court order)' },
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
                    <SelctText>Cancellation of Shares $149</SelctText>
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
                                        <h5>Cancellation Details </h5>
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("number_of_shares", "The number of shares  cancelled", 'text', 'true')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("paid_cancelled_share", "Amount paid for cancelled shares (cash or otherwise)", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("date_of_cancellation", "The effective date of cancellation", 'date')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <h5>Reason of Cancelation</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("reason", "Please select one",this.reason)}
                                    </Grid>
                                    {data2.reason.value === 'S.256A-S.256E Capital reduction - multiple shareholder company' ?
                                        <Grid item xs={12}>
                                            <Note>Note: A form 2560 must be lodged before capital reduction takes place. We will send you the form 2560 to fill-up and send back to us. </Note>
                                        </Grid>
                                        :null
                                    }
                                    {data2.reason.value === 'S.257H(3) Share buyback - Other buyback types' ?
                                        <Grid item xs={12}>
                                            <Note>Note: A form 280 or 281 must be lodged at least 14 days and no more than one year before the share buyback can take place. We will send you the required form to fill-up and send it back to us. </Note>
                                        </Grid>
                                        :null
                                    }
                                    <Grid item xs={12}>
                                        <p>Other reason for the cancellation</p>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("section_reference", "Section reference", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderTextArea("description", "Description")}
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
                                        {this.renderSelect("late_fee", "Late Lodgement Fee", this.lateFee, 'true')}
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
 
export default CancellationOfSharesForm;