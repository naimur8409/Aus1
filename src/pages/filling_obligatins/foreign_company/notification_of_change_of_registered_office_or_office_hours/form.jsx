
import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React from 'react'
import Form from '../../../../component/formItem/formValidator';
import { DarkBtn } from '../../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText } from '../../../../utils/globalStyle';
import Review from './review'
import Billing from './billing';
import Paper from '@material-ui/core/Paper';


const getSteps = () => {
    return ['Step-1','Step-2','Step-3','Review','PayBill'];
}
class NotificationofChangeofRegisteredOfficeorOfficeHoursForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            Cname:'',
            aprfn:'',
            arbn: '',
            nfpfrn:'',
            local_agent:'',
            local_subscription:'',
            type_of_change:'',
            
           
        },
        data2:{
            date_of_change:'',
            new_company:'',
            insert:'',
            register:'',
            gname:'',
            lname:'',
            date_of_birth:'',
            place_of_birth:'',
            country:'',
            unit:'',
            street_address:'',
            suburb:'',
            state:'',
            postcode:'',
            country:'',
            date_of_change_address:'',
            ngname:'',
            nlname:'',
            upload_link:'',
            late_fee:'',
        },
        data3:{
            destination:'',
            Dname:'',
            document:'',
        },
        errors: {}
    }
    schema1 = {
        Cname:Joi.string().required().label("This field"),
        arbn:Joi.string().required().label("This field"),
        aprfn: Joi.allow().label("This field"),
        nfpfrn:Joi.allow().label("This field"),
        local_agent:Joi.allow().label("This field"),
        local_subscription:Joi.allow('').required().label("This field"),
        type_of_change:Joi.allow('').required().label("This field"),

        
    };
    schema2 = {
        date_of_change:Joi.allow().label("This field"),
        insert:Joi.allow().label("This field"),
        register:Joi.allow().label("This field"),
        lname:Joi.string().required().label("This field"),
        gname: Joi.allow().label("This field"),
        lname: Joi.allow().label("This field"),
        date_of_birth: Joi.allow().label("This field"),
        place_of_birth: Joi.allow().label("This field"),
        country: Joi.allow().label("This field"),
        new_company: Joi.allow().label("This field"),
        unit: Joi.allow().label("This field"),
        street_address: Joi.allow().label("This field"),
        suburb: Joi.allow().label("This field"),
        state: Joi.allow().label("This field"),
        postcode: Joi.allow().label("This field"),
        country: Joi.allow().label("This field"),
        date_of_change_address: Joi.allow().label("This field"),
        ngname:Joi.allow().label("This field"),
        nlname:Joi.allow().label("This field"),
        upload_link:Joi.allow().label("This field"),
        late_fee:Joi.allow().label("This field"),
        occupier:Joi.allow().label("This field"),

   

        
    };
    schema3={
        Dname:Joi.string().required().label("This field"),
        destination:Joi.string().required().label("This field"), 
        document:Joi.allow('').label("This field"),
        
    }
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
        
      ];
    speed= [
        { value: 'Registered office in Australia', label: 'Registered office in Australia' },
        { value: 'Office hours in Australia', label: 'Office hours in Australia' },
        { value: 'Registered office in place of origin', label: 'Registered office in place of origin' },
      ];
      fee = [
        { value: 'Not late $00', label: 'Not late $00' },
        { value: 'One month $82', label: 'One month $82' },
        { value: 'More than one month $340', label: 'More than one month $340' },
        
        
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
        const  {data1,data2,data3} = this.state;
        console.log(data1)
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>*Notification of Change of Registered Office, Office Hours and Foreign Address</SelctText>
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
                                
                                <h3>Details of Foreign Company</h3>
                                <Grid container spacing={1}>

                                    
                                <Grid item xs={6}>
                                        {this.renderInput("Cname", "Company name*", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("arbn", "ARBN*", 'text')}
                                    </Grid>
                                    
                                    <Grid item xs={12}>
                                        <p></p>
                                        {this.renderSelect("local_agent", "Have you already appointed us as your Local Agent?*", this.common)}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {data1.local_agent.value === 'Yes' ? this.renderInput("local_subscription", "Local Agent subscription number*", 'text') : null}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {data1.local_agent.value === 'No' ?<p>Please Appoint us as your Local Agent first to avail this service.</p>: null}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <p></p>
                                        {this.renderSelect("type_of_change", "Type of Change", this.speed)}
                                    </Grid>

                                    
                                    
                                    
                                    
                                    
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                        :null}

                            {/* Registered office in Australia */}
                        {this.state.activeStep === 1 ?
                        data1.type_of_change.value === 'Registered office in Australia'?
                            <FormContainer>
                                
                            <h3>Change of Registered Office in Australia</h3>
                            <p>New Address</p>
                            <Grid container spacing={1}>
                                 
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("unit", "Unit/Level (optional)", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("street_address", "Street address", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("suburb", "Suburb", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("state", "State", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("postcode", "Postcode", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("country", "Country", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                    
                                    {this.renderInput("date_of_change_address", "Date of Changing Address", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("new_company", "Is the registered office occupied by an entity other than this new company?", this.common)}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {data2.new_company.value === 'Yes' ?<p>Note: If the company does not occupy the premises where its registered office is located, the premises' occupier must agree in writing to having the company's registered office located there. A proprietary company is not required to open its registered office to the public. However, this does not affect its obligation to make documents available for inspection. We can assist with the preparation of the relevant consent to occupy the premises as a registered office.</p> : null}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("occupier", "I agree that the occupier has consented in writing to the company agreeing to the use of the premise as the businesses registered address?", this.common)}
                                    </Grid>

                                    
                                
                                
                                
                                
                                <Grid item xs={6}></Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>
                            </Grid>
                            
                        </FormContainer>
                        :null

                        
                            
                            :null
                        }

                            {/* Office hours in Australia */}
                        {this.state.activeStep === 1 ?
                        data1.type_of_change.value === 'Office hours in Australia'?
                            <FormContainer>
                                
                            <h3> Change of Office Hours in Australia </h3>
                            
                            <Grid container spacing={1}>
                            <Grid item xs={12}>
                                    <p>Name </p> 
                                    {this.renderSelect("register", "Is the registered office open to the public each business day for at least 3 hours between 9 am and 5 pm*", this.common)}
                                </Grid>
                                <Grid item xs={12}>
                                    <p><br></br></p>
                                    {this.renderInput("insert", "Insert hours open to close ", 'text')}
                                </Grid>
                                <Grid item xs={12}>
                                    
                                    {this.renderInput("date_of_change", "Date of change", 'date')}
                                    </Grid>
                                    
                                
                                
                                <Grid item xs={6}></Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>
                            </Grid>
                            
                        </FormContainer>
                        :null
                         :null
                        }
                        
                                   

                            {/* Registered office in place of origin */}
                        {this.state.activeStep === 1 ?
                        data1.type_of_change.value === 'Registered office in place of origin'?
                            <FormContainer>
                                
                            <h3>Change of Registered Office in Place of Origin</h3>
                            <p>New Address</p>
                            <Grid container spacing={1}>
                            
                                    <Grid item xs={6}>
                                    <p>New Address</p>
                                    {this.renderInput("unit", "Unit/Level (optional)", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    <p><br></br></p>
                                    {this.renderInput("street_address", "Street address", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("suburb", "Suburb", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("state", "State", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("postcode", "Postcode", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("country", "Country", 'text')}
                                    </Grid>
                                   

                                    <Grid item xs={12}>
                                        <p>Late Fee</p>
                                        {this.renderSelect("late_fee", "A late fee is imposed after one month of changes", this.fee)}
                                    </Grid>
                                    
                                
                                
                                
                                <Grid item xs={6}></Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>
                            </Grid>
                            
                        </FormContainer>
                        :null
                         :null
                        }
                         
                         
                        {this.state.activeStep === 2 ?
                              <FormContainer>
                                
                              <h3>Declaration </h3>
                              <Grid container spacing={1}>
                              <Grid item xs={12}>
                                  {this.renderFileInput("document", "I authorise e-company to manage all the legal documentation related to ASIC and submit all required documentation on behalf of my company.", 'file')}
                              </Grid>
                              <Grid item xs={12}>
                                      {this.renderInput("Dname", "Declarant/applicant Name*", 'text')}
                                  </Grid>
                                  <Grid item xs={12}>
                                      {this.renderInput("destination", "Designation/position in the company*", 'text')}
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
                        {this.state.activeStep === 3 ?
                              <Review data1={data1} data2={data2} data3={data3} fnc2={this.handleBack} fnc1={this.handleNext} />
                            :null
                        }
                       {this.state.activeStep === 4 ?
                              <Billing data1={data1} data2={data2} data3={data3} fnc2={this.handleBack} fnc3={this.handleReset} />
                            :null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default NotificationofChangeofRegisteredOfficeorOfficeHoursForm;