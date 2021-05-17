
import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React from 'react'
import Form from '../../../../component/formItem/formValidator';
import { DarkBtn } from '../../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText } from '../../../../utils/globalStyle';
import Review from './review'
import Billing from './billing';



const getSteps = () => {
    return ['Step-1','Step-2','Step-3','Review','PayBill'];
}
class DeregistrationoOfCompanyForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            Cname:'',
            abn:'',
            asci: '',
            report:'',
            gname:'',
            fname:'',
            position:'',
            unit:'',
            street:'',
            Suburb:'',
            state:'',
            postcode:'',
            country:'',  
           
        },
        data2:{
            deregistration:'', 
            business:'', 
            assets:'', 
            payable:'', 
            liabilities:'', 
            proceeding:'', 
            legal:'', 
        },
        data3:{
          name:'',
          email:'',
          mail:'',
        },
        
        errors: {}
    }
    schema1 = {
        Cname:Joi.string().allow().label("This field"),
        abn:Joi.string().allow().label("This field"), 
        asci: Joi.allow('').label("This field"),
        report:Joi.allow('').label("This field"),
        gname: Joi.allow('').label("This field"),
        fname:Joi.allow('').label("This field"),
        position:Joi.allow('').label("This field"),
        unit:Joi.allow('').label("This field"),
        street:Joi.allow('').label("This field"),
        Suburb:Joi.allow('').label("This field"),
        state:Joi.allow('').label("This field"),
        postcode:Joi.allow('').label("This field"),
        country:Joi.allow('').label("This field"),
   
        
   

        
    };
    schema2 = {
        deregistration:Joi.allow('').label("This field"),
        business:Joi.allow('').label("This field"),
        assets:Joi.allow('').label("This field"),
        payable:Joi.allow('').label("This field"),
        liabilities:Joi.allow('').label("This field"),
        proceeding:Joi.allow('').label("This field"),
        legal:Joi.allow('').label("This field"),
   

        
    };
    schema3={
        name:Joi.string().allow('').label("This field"),
        email:Joi.allow('').label("This field"),
        mail:Joi.string().allow('').label("This field"),
    };
    pname = [
        { value: 'yes', label: 'YES' },
        { value: 'no', label: 'NO' },
        { value: 'do not know', label: 'Do Not Know' },
      ];
    report= [
        { value: 'yes $89', label: 'YES $89 ' },
        { value: 'no ', label: 'NO ' },
         ];
      position = [
        { value: 'Company secretary', label: 'Company secretary' },
        { value: 'Director', label: 'Director' },
        
        
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
    NewPerson=()=>{
    return(<div>
        <Grid item xs={12}><p>add new form</p></Grid>
    </div>)
    }
    render() { 
        const steps = getSteps();
        const  {data1,data2,data3} = this.state;
        console.log(data1)
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>Apply to Deregister Your Company $139</SelctText>
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
                                
                                <h3>Company Details </h3>
                                <Grid container spacing={1}>

                                    
                                <Grid item xs={6}>
                                        {this.renderInput("Cname", "Name of the Company", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("abn", "ABN or ACN ", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderSelect("asci", "Do you have an outstanding Balance to ASIC",this.pname)}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderSelect("report", "Do you want to apply for a debt report for your company? ",this.report)}
                                    </Grid>

                                   <Grid item xs={12}> <h3 style={{textAlign:'center'}}>Applicant Details</h3></Grid>
                                    <Grid item xs={6}>
                                        <p>Name of the applicant </p>
                                        {this.renderInput("gname", "Given name", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        <p><br></br></p>
                                        {this.renderInput("fname", "Family name", 'text')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("position", "Position/designation in the company",this.position)}
                                    </Grid>
                                    
                                    <Grid item xs={12} sm={4}>
                                    <p>Address of the applicant</p>
                                        {this.renderInput("unit", "Unit/ house number", 'text')}
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <p><br></br></p>
                                        {this.renderInput("street", "Street number and name", 'text')}
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <p><br></br></p>
                                        {this.renderInput("Suburb", "Suburb", 'text')}
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                    
                                        {this.renderInput("state", "State/Territory", 'text')}
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        
                                        {this.renderInput("postcode", "Postcode", 'text')}
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        
                                        {this.renderInput("country", "Country", 'text')}
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
                            
                            <FormContainer>
                                
                                <h3>Declaration </h3>
                                <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    {this.renderCheckInput('deregistration','All members of the company agree to the deregistration.' )}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderCheckInput('business','The company is not carrying on business.' )}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderCheckInput('assets','The company assets are worth less than $1000.' )}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderCheckInput('payable','The company has paid all fees and penalties payable under this Act.' )}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderCheckInput('liabilities','The company has no outstanding liabilities.' )}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderCheckInput('proceeding',' The company is not a party to any legal proceedings' )}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderCheckInput('legal','I authorise e-company to manage all the legal documentation related to ASIC and submit all required documentation on behalf of my company.' )}
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
                                
                                <h3>Notice  </h3>
                                <Grid container spacing={1}>
                               <Grid item xs={12}> <p>List down the additional persons to receive the deregistration notice</p></Grid>
                                <Grid item xs={12} sm={4}>
                                    
                                    {this.renderInput("name", "Name", 'text')}
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                       
                                        {this.renderInput("email", "Email", 'email')}
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        {this.renderInput("mail", "Mail Address", 'text')}
                                    </Grid>
                                    
                                   <Grid item xs={12}> <DarkBtn type="button" style={{float:'left', padding: '10px 16px'}} onClick={this.NewPerson}>Add another person</DarkBtn></Grid>
                                    <p style={{color:'red'}}>If add another person is selected, add another above box again</p>
                                    
                                    
                                    
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
                              <Review data1={data1} data2={data2} fnc2={this.handleBack} fnc1={this.handleNext} />
                            :null
                        }
                       {this.state.activeStep === 4 ?
                              <Billing data1={data1} data2={data2} fnc2={this.handleBack} fnc3={this.handleReset} />
                            :null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default DeregistrationoOfCompanyForm;