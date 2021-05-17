
import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React from 'react'
import Form from '../../../../component/formItem/formValidator';
import { DarkBtn } from '../../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText } from '../../../../utils/globalStyle';
import Review from './review'
import Billing from './billing';



const getSteps = () => {
    return ['Step-1','Step-2','Review','PayBill'];
}
class NotificationofDissolutionofCompanyForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            local_subscription:'',
            local_agent:'',
            Cname:'',
            arbn:'',
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
            effective:'',
            late_fee:'',
           
        },
        data2:{
            document:'',
            Dname:'',
            destination:'',
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
        late_fee:Joi.allow('').label("This field"),
        effective:Joi.allow('').label("This field"),
        local_subscription:Joi.allow('').label("This field"),
        local_agent:Joi.allow('').label("This field"),
        Cname:Joi.string().allow().label("This field"),
        arbn:Joi.string().allow().label("This field"), 
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
        document:Joi.allow('').label("This field"),
        Dname:Joi.allow('').label("This field"),
        destination:Joi.allow('').label("This field"),
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
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
        
      ];
    pname = [
        { value: 'yes', label: 'YES' },
        { value: 'no', label: 'NO' },
        { value: 'do not know', label: 'Do Not Know' },
      ];
    report= [
        { value: 'yes $89', label: 'YES $89 ' },
        { value: 'no ', label: 'NO ' },
         ];
         fee = [
            { value: 'Not late $00', label: 'Not late $00' },
            { value: 'One month $82', label: 'One month $82' },
            { value: 'More than one month $340', label: 'More than one month $340' },
            
            
          ];
      position = [
        { value: 'The registered Australian body ceased to carry on business', label: 'The registered Australian body ceased to carry on business' },
        { value: 'The foreign company ceased to carry on business in Australia.', label: 'The foreign company ceased to carry on business in Australia.' },
        { value: 'The foreign company was dissolved/deregistered in its place of origin.', label: 'The foreign company was dissolved/deregistered in its place of origin.' },
        { value: 'Proceedings commenced to wind up the foreign company in its place of origin.', label: 'Proceedings commenced to wind up the foreign company in its place of origin.' },
        { value: 'A liquidator was appointed', label: 'A liquidator was appointed' },
        
        
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
                    <SelctText>Notification of Dissolution, Winding Up or Cessation of A Foreign Company or Registered Australian Body</SelctText>
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
                                
                                <h3>Details of The Foreign Company </h3>
                                <Grid container spacing={1}>

                                    
                                <Grid item xs={6}>
                                        {this.renderInput("Cname", "Company Name*", 'text')}
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


                                   

                                   <Grid item xs={12}> <h3 style={{textAlign:'center'}}>Details of The Event</h3></Grid>
                                   
                                    <Grid item xs={12}>
                                        {this.renderSelect("position", "Please select one of the following events",this.position)}
                                    </Grid>
                                    
                                    <Grid item xs={12}>
                                        {this.renderInput("effective", "The effective date of the selected event", 'date')}
                                    </Grid>
                                    
                                    <Grid item xs={12}> <h3 style={{textAlign:'center'}}></h3>{data1.position.value === 'A liquidator was appointed'?<p>Details of The Liquidator</p>:null}</Grid>
                                    <Grid item xs={6}>
                                    {data1.position.value === 'A liquidator was appointed'?<p>Full name of the liquidator </p> :null}
                                    {data1.position.value === 'A liquidator was appointed'? this.renderInput("gname", "Given Name*", 'text'):null}
                                </Grid>
                                <Grid item xs={6}>
                                {data1.position.value === 'A liquidator was appointed'? <p><br></br></p>:null}
                                    {data1.position.value === 'A liquidator was appointed'?this.renderInput("lname", "Family Name*", 'text'):null}
                                </Grid>

                                    
                                    <Grid item xs={12} sm={4}>
                                    {data1.position.value === 'A liquidator was appointed'? <p>Address of the liquidator</p>:null}
                                        {data1.position.value === 'A liquidator was appointed'? this.renderInput("unit", "Unit/Level(optional)", 'text'):null}
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <p><br></br></p>
                                        {data1.position.value === 'A liquidator was appointed'? this.renderInput("street", "Street Address", 'text'):null}
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <p><br></br></p>
                                        {data1.position.value === 'A liquidator was appointed'? this.renderInput("Suburb", "Suburb", 'text'):null}
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                    
                                        {data1.position.value === 'A liquidator was appointed'? this.renderInput("state", "State/Territory", 'text'):null}
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        
                                        {data1.position.value === 'A liquidator was appointed'? this.renderInput("postcode", "Postcode", 'text'):null}
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        
                                        {data1.position.value === 'A liquidator was appointed'? this.renderInput("country", "Country", 'text'):null}
                                    </Grid>
                                    <Grid item xs={12}>
                                    {data1.position.value === 'A liquidator was appointed'? <p>Late Fee</p>:null}
                                    {data1.position.value === 'A liquidator was appointed'?this.renderSelect("late_fee", "A late fee is imposed after one month of changes", this.fee):null}
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
                     
                         
                        {this.state.activeStep === 2 ?
                              <Review data1={data1} data2={data2} fnc2={this.handleBack} fnc1={this.handleNext} />
                            :null
                        }
                       {this.state.activeStep === 3 ?
                              <Billing data1={data1} data2={data2} fnc2={this.handleBack} fnc3={this.handleReset} />
                            :null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default NotificationofDissolutionofCompanyForm;