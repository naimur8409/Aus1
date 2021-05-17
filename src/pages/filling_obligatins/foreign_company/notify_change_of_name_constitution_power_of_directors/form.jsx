
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
class NotifyChangeofNameConstitutionPowerofDirectorsForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            Cname:'',
            aprfn:'',
            arbn: '',
            nfpfrn:'',
            local_agent:'',
            local_subscription:'',
            
            
           
        },
        data2:{
            reservation:'',
            lodged:'',
            new_forigen_company:'',
            require_service:'',
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
            business_name:'',
            state_number:'',    
            Territory:true,    },
        data3:{
            destination:'',
            Dname:'',
            document:'',
            upload_link:'',
            late_fee:'',
            authorise:true,
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
       

        
    };
    schema2 = {
        Territory:Joi.allow().label("This field"),
        state_number:Joi.allow().label("This field"),
        business_name:Joi.allow().label("This field"),
        reservation:Joi.allow().label("This field"),
        lodged:Joi.allow().label("This field"),
        new_forigen_company:Joi.allow().label("This field"),
        require_service: Joi.allow().label("This field"),
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
        authorise:Joi.required().label("This field"),
        upload_link:Joi.allow('').label("This field"),
        late_fee:Joi.allow().label("This field"),
        Dname:Joi.string().required().label("This field"),
        destination:Joi.string().required().label("This field"), 
        document:Joi.allow('').label("This field"),
        
    }
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
        
      ];
    required= [
        { value: 'Change of name', label: 'Change of name' },
        { value: 'Change to powers to Australian resident directors of a foreign company', label: 'Change to powers to Australian resident directors of a foreign company  ' },
        { value: 'Change of constitution ', label: 'Change of constitution' },
        
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
                    <SelctText>Change of Name, Constitution, Powers of Directors of A Foreign Company</SelctText>
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
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                        :null}

                        
                

                        {this.state.activeStep === 1 ?
                        
                            <FormContainer>
                                
                            <h3>Change Details </h3>
                           
                            <Grid container spacing={1}>
                            <Grid item xs={12}>
                                   
                                    {this.renderSelect("require_service", "Select the required service ", this.required)}
                                </Grid>
                              
                                    <Grid item xs={12}>
                                    
                                    {this.renderInput("date_of_change", "Date of change ", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                       { data2.require_service.value === 'Change of name'? <p>Name Change </p>:null}
                                        {data2.require_service.value === 'Change of name' ? this.renderInput("new_forigen_company", "New foreign company name", 'text') : null}
                                    </Grid>
                                    <Grid item xs={12}>
                                        
                                        {data2.require_service.value === 'Change of name' ? this.renderSelect("lodged", "Has a name reservation been lodged to reserve the body's name?", this.common) : null}
                                    </Grid>
                                    <Grid item xs={12}>
                                        
                                        {data2.lodged.value === 'Yes' ? this.renderInput("reservation", "Provide name reservation number", 'text') : null}
                                    </Grid>
                                    <Grid item xs={12}>
                                        
                                        {data2.lodged.value === 'No' ? this.renderSelect("business_name", "Is the proposed name identical to a registered business name(s) in Australia?", this.common) : null}
                                    </Grid>
                                    <Grid item xs={12}>
                                        
                                        {data2.business_name.value === 'Yes' ? this.renderInput("state_number", "Provide state/territory business number ", 'number') : null}
                                    </Grid>
                                    <Grid item xs={12}>
                                        
                                        {data2.business_name.value === 'Yes' ? this.renderCheckInput("Territory", "State/Territory of registration and I declare that I own or am registering the registered body name for the owner(s) of the identical business name(s), the registration details of which are listed above.") : null}
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
                         
                         
                        {this.state.activeStep === 2 ?
                              <FormContainer>
                                
                              <h3>Upload</h3>
                              <Grid container spacing={1}>

                              <Grid item xs={12}>
                                    
                                    {this.renderFileInput("upload_link", "Upload  relevant documents", 'file')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        
                                        {this.renderSelect("late_fee", "Late lodgement fee", this.fee)}
                                        <p>A late fee is imposed after Fourteen days of the name change, one month of the change in the constitution, and one month of the change to the resident directors' power. </p>
                                    </Grid>

                             <h3 style={{alignSelf:'center'}}>Declaration</h3>
                              <Grid item xs={12}>
                                  {this.renderCheckInput("authorise", "I authorise e-company to manage all the legal documentation related to ASIC and submit all required documentation on behalf of my company.*.", 'file')}
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
export default NotifyChangeofNameConstitutionPowerofDirectorsForm;