import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react'
import Form from '../../../../component/formItem/formValidator';
import SelectInput from '../../../../component/formItem/selectInput';
import TextArea from '../../../../component/formItem/textArea';
import TextInput from '../../../../component/formItem/textInput';
import { DarkBtn } from '../../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText, Note} from '../../../../utils/globalStyle';
import Billing from './billing';
import Review from './review';
const getSteps = () => {
    return ['Step-1','Step-2','Step-3','Review','Billing'];
}
class GiftDeedForm extends Form {
    state = { 
        activeStep: 0,
        data: {
            donors_name: '',
            donors_address: '',
            donees_name: '',
            donees_address: '',
            date_of_agreement: '',
            date_of_transfer: '',
            good_beign_donated: '',

            product: '',
            speed: '',
            jurisdiction: '',
            describe2: '',
        },
        errors: {},
     }
    
   
    product = [
        { value: 'Standard contract $99', label: 'Standard contract $99' },
        { value: 'Customised contract: Consultation with a lawyer over the phone $399', label: 'Customised contract: Consultation with a lawyer over the phone $399' },
    ]
    speed = [
        { value: 'Regular: 3 business days $00', label: 'Regular: 3 business days $00' },
        { value: 'Express: 1 business day add $69', label: 'Express: 1 business day add $69' },
        { value: 'Urgent: by the next four business hours add $ 99', label: 'Urgent: by the next four business hours add $ 99' },
    ]
    jurisdiction = [
        { value: 'ACT', label: 'ACT' },
        { value: 'NSW', label: 'NSW' },
        { value: 'VIC', label: 'VIC' },
        { value: 'WA', label: 'WA' },
        { value: 'QLD', label: 'QLD' },
        { value: 'TAS', label: 'TAS' },
        { value: 'SA', label: 'SA' },
        { value: 'NT', label: 'NT' },
    ]



   
    handleNext = () => {
        this.setState({activeStep :this.state.activeStep + 1});
        
    };
    handleBack = () => {
        this.setState({activeStep :this.state.activeStep - 1});
    };
    handleReset = () => {
        this.setState({activeStep :0});
    };
    
    handleCustomChange = async (e) => {

            const data = { ...this.state.data };
            data[e.target.name] = e.target.value; 
            this.setState({ data: data});
            
    }
    handleCustomSelctChange = async (e, name) => {
            const data = { ...this.state.data };
            data[name] = e;
            this.setState({ data : data});
    }

    render() { 
        const steps = getSteps();
        const  {data} = this.state;
       
        console.log(this.state)
        return ( 
            <RegistrationContainer>
            <FormWrapper > 
            
            <SelctText>Gift Deed $99</SelctText>
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
                                       <span>Donor’s Details</span>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="donors_name" label="Name of the donor " value={data.donors_name} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="donors_address" label="Donor’s address" value={data.donors_address} onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                       <span>Recipient’s Details </span>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <>
                                            <TextInput name="donees_name" label="What is the donee’s name? " value={data.donees_name} onChange = {(e) => this.handleCustomChange(e)}/>
                                            <Note>Note: The donee is the person receiving the goods or property</Note>
                                        </>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="donees_address" label="What is the donee’s address? " value={data.donees_address} onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                       <span>Agreement Details</span>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="date_of_agreement" type="date" label="On what date is this document being made?" value={data.date_of_agreement} onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <>
                                            <TextInput name="date_of_transfer" type="date" label="On what date will the property be transferred? " value={data.date_of_transfer} onChange = {(e) => this.handleCustomChange(e)}/>
                                            <Note>Note: This is the date that the property moves from the donor to donee</Note>
                                        </>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <>
                                            <TextInput name="good_beign_donated" label="What are the goods being donated?" value={data.good_beign_donated} onChange = {(e) => this.handleCustomChange(e)}/>
                                            <Note>Note:  If there are multiple products, separate each of them</Note>
                                        </>
                                    </Grid>
                                
                                    <Grid item xs={6}>

                                    </Grid>
                                    <Grid item xs={6}>
                                        
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                            
                    : null}
                    {this.state.activeStep === 1 ?
                        <FormContainer>
                            <Grid container spacing={1}>
                               
                                <Grid item xs={12}>
                                    <h5>Product Details</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="product" label="Select your product" value={ data.product} options={this.product} onChange = {(e) => this.handleCustomSelctChange(e,'product')}  autoFocus="true"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="speed" label="Service speed" value={ data.speed} options={this.speed} onChange = {(e) => this.handleCustomSelctChange(e,'speed')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="jurisdiction" label="Select your jurisdiction" value={ data.jurisdiction} options={this.jurisdiction} onChange = {(e) => this.handleCustomSelctChange(e,'jurisdiction')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextArea name="describe" label="Describe if you have any other specific need that you want us to incorporate in the contract"  value={data.describe} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid> 
                               
                                <Grid item xs={6}>

                                </Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>
                            </Grid>
                        </FormContainer>
                    : null}


                    {this.state.activeStep === 2 ?
                        <Review data={data} fnc1={this.handleNext} fnc2={this.handleBack} />
                   : null}

                    {this.state.activeStep === 3 ?
                        <Billing fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                    : null
                    }
                </form>
                
            </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default GiftDeedForm;