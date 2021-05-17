
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
class NotificationofChangetoDirectorsForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            Cname:'',
            aprfn:'',
            arbn: '',
            nfpfrn:'',
            local_agent:'',
            local_subscription:'',
            required_services:'',
            
           
        },
        data2:{
          
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
            date_of_change:'',
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
        required_services:Joi.allow('').required().label("This field"),

        
    };
    schema2 = {
        gname:Joi.string().required().label("This field"),
        lname:Joi.string().required().label("This field"),
        gname: Joi.allow().label("This field"),
        lname: Joi.allow().label("This field"),
        date_of_birth: Joi.allow().label("This field"),
        place_of_birth: Joi.allow().label("This field"),
        country: Joi.allow().label("This field"),
        unit: Joi.allow().label("This field"),
        street_address: Joi.allow().label("This field"),
        suburb: Joi.allow().label("This field"),
        state: Joi.allow().label("This field"),
        postcode: Joi.allow().label("This field"),
        country: Joi.allow().label("This field"),
        date_of_change: Joi.allow().label("This field"),
        ngname:Joi.allow().label("This field"),
        nlname:Joi.allow().label("This field"),
        upload_link:Joi.allow().label("This field"),
        late_fee:Joi.allow().label("This field"),

   

        
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
        { value: 'Appoint a director', label: 'Appoint a director' },
        { value: 'Cease/remove/terminate a director', label: 'Cease/remove/terminate a director ' },
        { value: 'Change of a director name', label: 'Change of a director’s name ' },
        { value: 'Change of a director address', label: 'Change of a director’s address ' },
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
                    <SelctText>Change of  Directors</SelctText>
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
                                
                                <h3>Company Details</h3>
                                <Grid container spacing={1}>

                                    
                                <Grid item xs={6}>
                                        {this.renderInput("Cname", "Company name*", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("arbn", "ARBN*", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        
                                        {this.renderInput("aprfn", "Australian Passport Fund Registration Number (APFRN) ", 'text')}
                                        </Grid>
                                    <Grid item xs={6}>
                                    
                                        {this.renderInput("nfpfrn", "Notified Foreign Passport Fund Registration Number (NFPFRN)  ", 'text')}
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
                                        {this.renderSelect("required_services", "Please select your required services.", this.speed)}
                                    </Grid>

                                    
                                    
                                    
                                    
                                    
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                        :null}

                            {/* Appoint A Director */}
                        {this.state.activeStep === 1 ?
                        data1.required_services.value === 'Appoint a director'?
                            <FormContainer>
                                
                            <h3>Appoint A Director </h3>
                            <p>Details of The Appointed Director</p>
                            <Grid container spacing={1}>
                            
                            
                            <Grid item xs={6}>
                                    <p>Name </p> 
                                    {this.renderInput("gname", "Given Name*", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    <p><br></br></p>
                                    {this.renderInput("lname", "Last Name*", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    
                                    {this.renderInput("date_of_birth", "Date of birth ", 'date')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("place_of_birth", "Place of birth", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                    {this.renderInput("country", "Country", 'text')}
                                    </Grid>

                                    
                                 
                                    <Grid item xs={6}>
                                    <p>Residential Address of The Appointed Director</p>
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
                                    
                                    {this.renderInput("date_of_change", "Date of change ", 'date')}
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

                            {/* Cease/remove/terminate a director */}
                        {this.state.activeStep === 1 ?
                        data1.required_services.value === 'Cease/remove/terminate a director'?
                            <FormContainer>
                                
                            <h3>Cease A Director </h3>
                            <p>Details of The Ceased Director</p>
                            <Grid container spacing={1}>
                            <Grid item xs={6}>
                                    <p>Name </p> 
                                    {this.renderInput("gname", "Given Name*", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    <p><br></br></p>
                                    {this.renderInput("lname", "Last Name*", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    
                                    {this.renderInput("date_of_birth", "Date of birth ", 'date')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("place_of_birth", "Place of birth", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                    {this.renderInput("country", "Country", 'text')}
                                    </Grid>

                                    
                                 
                                    <Grid item xs={6}>
                                    <p>Residential Address of The Ceased Director</p>
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
                                    
                                    {this.renderInput("date_of_change", "Date of change ", 'date')}
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
                        {/* Change of a director’s name */}
                        {this.state.activeStep === 1 ?
                        data1.required_services.value === 'Change of a director name'?
                            <FormContainer>
                                
                            <h3>Change of A Director’s Name </h3>
                            
                            <Grid container spacing={1}>
                            <Grid item xs={6}>
                                    <p>Former name </p> 
                                    {this.renderInput("gname", "Given Name", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    <p><br></br></p>
                                    {this.renderInput("lname", "Last Name", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    
                                    {this.renderInput("date_of_birth", "Date of birth ", 'date')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("place_of_birth", "Place of birth", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                    {this.renderInput("country", "Country", 'text')}
                                    </Grid>

                                    
                                 
                                    <Grid item xs={6}>
                                    <p>New Name</p>
                                    {this.renderInput("ngname", "Given name", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    <p><br></br></p>
                                    {this.renderInput("nlname", "Last Name", 'text')}
                                    </Grid>
                                    
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("date_of_change", "Date of change ", 'date')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("upload_link", "Upload evidence of the change ", 'text')}
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

                            {/* Change of A Director’s Address  */}
                        {this.state.activeStep === 1 ?
                        data1.required_services.value === 'Change of a director address'?
                            <FormContainer>
                                
                            <h3>Change of A Director’s Address </h3>
                            <p>Details of The Director</p>
                            <Grid container spacing={1}>
                            <Grid item xs={6}>
                                    <p>Name </p> 
                                    {this.renderInput("gname", "Given Name*", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    <p><br></br></p>
                                    {this.renderInput("lname", "Last Name*", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    
                                    {this.renderInput("date_of_birth", "Date of birth ", 'date')}
                                    </Grid>
                                    <Grid item xs={6}>
                                    
                                    {this.renderInput("place_of_birth", "Place of birth", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                    {this.renderInput("country", "Country", 'text')}
                                    </Grid>

                                    
                                 
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
                                    
                                    {this.renderInput("date_of_change", "Date of change ", 'date')}
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
 
export default NotificationofChangetoDirectorsForm;