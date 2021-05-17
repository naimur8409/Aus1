import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React from 'react'
import Form from '../../../component/formItem/formValidator';
import { DarkBtn } from '../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText } from '../../../utils/globalStyle';
import Billing from '../ConfidentPolicy/billing';
import Review from '../ConfidentPolicy/review';
const getSteps = () => {
    return ['Step-1','Step-2','Step-3','Review','Billing'];
}
class GrievancePolicyFrom extends Form {
    state = {  
        activeStep: 0,
        data1: {
            Gpolicy:'',
            employee_no:'',
            authority:'',
            Gpolicy_limit:'',
            role:'',
            Gprocess:'',
            hrprovide:'',
            claim:'',
            refered:'',
            discipline:'',
            complaints:'',
            withdrawn:'',
        },
        data2:{
            aprogram:'',
            eap:'',
            can_eap:'',
        },
        data3:{
        
            product: '',
            Sspreed:'',
            Sjurisdiction:'',
            incorporate:true,
            total:'',
        },
        
        errors: {}
    }
    schema1 = {
            Gpolicy : Joi.allow('').label("This field"),
            employee_no: Joi.allow('').label("This field"),
            authority: Joi.allow('').label("This field"),
            Gpolicy_limit: Joi.allow('').label("This field"),
            role: Joi.allow('').label("This field"),
            Gprocess: Joi.allow('').label("This field"),
            hrprovide: Joi.allow('').label("This field"),
            claim: Joi.allow('').label("This field"),
            refered: Joi.allow('').label("This field"),
            discipline: Joi.allow('').label("This field"),
            complaints: Joi.allow('').label("This field"),
            withdrawn: Joi.allow('').label("This field"),
    };
    schema2={
        aprogram: Joi.allow('').label("This field"),
        eap:Joi.allow('').label("This field"),
        can_eap:Joi.allow('').label("This field"),
    }
    schema3 = {
        
        product: Joi.allow('').label("This field"),
        Sspreed:Joi.allow('').label("This field"),
        Sjurisdiction:Joi.allow('').label("This field"),
        incorporate:Joi.allow('').label("This field"),
        total:Joi.string().allow('').label("This field"),

        
    };
    pname = [
        { value: 'Standard policy $99 ', label: 'Standard Policy $99' },
        { value: 'Customised Policy:$699', label: 'Customised Policy: Consultation with a lawyer over the phone $699' },
      ];
    Gpolicy = [
        { value: 'yes', label: 'YES' },
        { value: 'no', label: 'NO' },
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
        if(this.state.activeStep === 1 ){
            const errors = this.validateStep2();
            this.setState({ errors: errors || {} });
        
        if (errors) return;}
        if(this.state.activeStep === 2 ){
            const errors = this.validateStep3();
            this.setState({ errors: errors || {} });
        
        if (errors) return;}
        if(this.state.activeStep === 3 ){
            const errors = this.validateStep4();
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
        const  {data1,data2,data3} = this.state;
        console.log(data2)
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>Grievance Policy $99</SelctText>
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
                                
                                <h3>Policy Details</h3>
                                <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    {this.renderSelect("Gpolicy", "Is the Grievance Policy available in matters of discrimination, workplace bullying and harassment of victimisation?  ", this.Gpolicy)}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderSelect("employee_no", "If two or more employees think they have an identical/common problem, can they take action together?", this.Gpolicy)}
                                </Grid>
                               
                                <Grid item xs={6}>
                                    {this.renderSelect("Gpolicy_limit", "Do the Grievance Policy procedures pre-empt, limit, or delay the concurrent pursuit in other avenues of resolution?   ", this.Gpolicy)}
                                </Grid>
                               

                                <Grid item xs={6}>
                                    {this.renderSelect("Gprocess", "Can the supervisor involve HR for consultation or in the grievance process?  ", this.Gpolicy)}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderSelect("hrprovide", "Will HR provide advice to the mangers and the employees involved in the grievance process?", this.Gpolicy)}
                                </Grid>
                                
                                    


                                    <Grid item xs={6}>
                                        {this.renderSelect("discipline", "Does the Company have a Discipline Policy and Guidelines?  ",this.Gpolicy)}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderSelect("complaints", "Will HR have responsibilities regarding Grievance complaints? ",this.Gpolicy)}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("withdrawn", "If grievance complaint is withdrawn, who will advise the relevant parties of the withdrawal? ",'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    {this.renderInput('authority','Who has the primary authority over the Grievance Policy? ' )}
                                     </Grid>
                                     <Grid item xs={6}>
                                        {this.renderInput("refered", "What is the person's role to whom the issue will be referred to if it is unresolved at stage 1 and 2?    ", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("claim", "Who should be notified should the claim be unresolved, and referred to the next stage?   ", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("role", "What is the role of the complainant's immediate supervisor? ", 'text')}
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
                                
                                <h3>EAP</h3>
                                <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    {this.renderSelect("aprogram", "Is there an Employment Assistant Program?  ", this.Gpolicy)}
                                </Grid>
                                <Grid item xs={12}>
                                    {data2.aprogram.value==='yes' ? this.renderInput("eap", "What is the name of the person who the employee will contact for more information about the EAP? ", 'text'):null}
                                </Grid>
                                <Grid item xs={12}>
                                    {data2.aprogram.value==='yes' ? this.renderInput("can_eap"," What is the contact number of the person the employee can contact for more information about the EAP? ", 'text'):null}
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
                                <h3>Product Details</h3>
                                
                                <Grid container spacing={1}>
                                   
                                    <Grid item xs={12}>
                                        {this.renderSelect("product", "Select your product",this.pname)}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("Sspreed", "Service speed",this.speed)}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("Sjurisdiction", "Select your jurisdiction",this.juris)}
                                    </Grid>
                                    <Grid item xs={12}>
                                    {this.renderCheckInput('incorporate','Describe if you have any other specific need that you want us to incorporate in the policy' )}
                                     </Grid>

                                    <Grid item xs={12}>
                                        {this.renderInput("total", "Total", 'text')}
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
                            <Review data1={data1} fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
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
 
export default GrievancePolicyFrom;