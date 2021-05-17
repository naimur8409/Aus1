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
    return ['Step-1','Step-2','Step-3','Step-4','Step-5','Step-6','Review','Billing'];
}
class ServiceAgreementForm extends Form {
    state = { 
        activeStep: 0,
        data: {
            service_type: '',
                name_of_service: '',
            commencement_date: '',
            completion_date: '',
            comprehensive_description: '',
            how_delivered: '',

            name_of_receiving_service: '',
            receiving_service_type: '',
                receiving_abn: '',
            address_of_receiving_service: '',
            what_specialise: '',

            name_of_provider_service: '',
            provider_service_type: '',
                provider_abn: '',
            address_of_provider_service: '',

            how_much: '',
            describe_payment: '',
            method_of_payment: '',

            communication_service: '',
            not_agreed: '',

            want_include: '',
            want_non_solicitation: '',
            who_appoint: '',
            date_of_signed: '',

            product: '',
            speed: '',
            describe: '',
        },
        errors: {},
     }
     service_type = [
        { value: 'Bookkeeping Service', label: 'Bookkeeping Service' },
        { value: 'Cleaning service', label: 'Cleaning service' },
        { value: 'Cleaning service', label: 'Cleaning service' },
        { value: 'Consultancy service', label: 'Consultancy service' },
        { value: 'Contractor Agreement (Company)', label: 'Contractor Agreement (Company)' },
        { value: 'Contractor Agreement (Individual)', label: 'Contractor Agreement (Individual)' },
        { value: 'Sub-Contractor service', label: 'Sub-Contractor service' },
        { value: 'Credit Card Authorisation Form', label: 'Credit Card Authorisation Form' },
        { value: 'Distribution service', label: 'Distribution service' },
        { value: 'Dog Walking Service', label: 'Dog Walking Service' },
        { value: 'Employee assistance program (EAP) service', label: 'Employee assistance program (EAP) service' },
        { value: 'Graphic Design Service', label: 'Graphic Design Service' },
        { value: 'NDIS service', label: 'NDIS service' },
        { value: 'International Services Agreement', label: 'International Services Agreement' },
        { value: 'NDIS service', label: 'NDIS service' },
        { value: 'Photo Booth', label: 'Photo Booth' },
        { value: 'Plumbing Service', label: 'Plumbing Service' },
        { value: 'Software-as-a-Service (SaaS)', label: 'Software-as-a-Service (SaaS)' },
        { value: 'Training Service', label: 'Training Service' },
        { value: 'Web design service', label: 'Web design service' },
        { value: 'websites selling services', label: 'websites selling services' },
        { value: 'Wedding Photography service', label: 'Wedding Photography service' },
        { value: 'Wet Hire/construction service', label: 'Wet Hire/construction service' },
        { value: 'Yoga Instructor Service', label: 'Yoga Instructor Service' },
        { value: 'Others', label: 'Others' },
    ];
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
  
   
    company_service_type= [
        {value: 'Individual', label: 'Individual'},
        {value: 'Company', label: 'Company'},
    ]
    communication_service = [
        {value: 'Telephone', label: 'Telephone'},
        {value: 'Email', label: 'Email'},
        {value: 'Facsimile', label: 'Facsimile'},
        {value: 'Post', label: 'Post'},
        {value: 'In person', label: 'In person'},
    ]
    want_non_solicitation = [
        {value: 'Personnel', label: 'Personnel'},
        {value: 'Clients', label: 'Clients'},
    ]
    
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
            
            <SelctText>Service Agreement $99</SelctText>
                <Stepper activeStep={this.state.activeStep} alternativeLabel style={{margin: '-10px'}}>
                    {steps.map((label) => (
                        <Step key={label} style={{width: '100%', fontSize: '18px'}}>
                        <StepLabel style={{width: '100%', fontSize: '18px'}}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <form style={{width: '100%'}} >
                    {
                        this.state.activeStep === 0 ?
                            <FormContainer>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                       <h5>Service Details</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectInput name="service_type" label="Please select a service type for the agreement" value={ data.service_type} options={this.service_type} onChange = {(e) => this.handleCustomSelctChange(e,'service_type')} autoFocus="true" />
                                    </Grid>
                                    {data.service_type.value === 'Others' ?
                                    <Grid item xs={12}>
                                        <TextInput name="name_of_service" label="Name of the service" value={data.name_of_service} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true" />
                                    </Grid>
                                    :null}
                                    <Grid item xs={12}>
                                        <TextInput name="commencement_date" type="date" label="What is the commencement date of the services? " value={data.commencement_date} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="completion_date" type="date" label="What is the completion date of the services?"  value={data.completion_date} onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextArea name="comprehensive_description" label="Please provide a comprehensive description of the services" onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextArea name="how_delivered" label="How are the services going to be delivered" value={data.how_delivered} onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                
                                    <Grid item xs={6}>

                                    </Grid>
                                    <Grid item xs={6}>
                                        
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                            
                        : null
                    }
                    {this.state.activeStep === 1 ?
                        <FormContainer>
                            
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h5>Recipient’s Details</h5>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="name_of_receiving_service" label="Name of the party receiving the services " value={data.name_of_receiving_service} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="receiving_service_type" label="Is the recipient of the services an individual or company?" value={ data.receiving_service_type} options={this.company_service_type} onChange = {(e) => this.handleCustomSelctChange(e,'receiving_service_type')} />
                                </Grid>
                                {data.receiving_service_type.value === 'Company' ?
                                <Grid item xs={6}>
                                    <TextInput name="receiving_abn" label="What is the ABN or ACN of the party receiving the services?" value={data.receiving_abn} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                :null}
                                <Grid item xs={6}>
                                    <TextInput name="address_of_receiving_service" label="What is the address of the party receiving the services?" value={data.address_of_receiving_service} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="what_specialise" label="What does the recipient specialise in?" value={data.what_specialise} onChange = {(e) => this.handleCustomChange(e)} />
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
                        <FormContainer>
                            
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h5>The Provider</h5>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="name_of_provider_service" label="Name of the party providing the services" value={data.name_of_provider_service} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="provider_service_type" label="Is the provider of the services an individual or company?" value={ data.provider_service_type} options={this.company_service_type} onChange = {(e) => this.handleCustomSelctChange(e,'provider_service_type')} />
                                </Grid>
                                {data.provider_service_type.value === 'Company' ?
                                <Grid item xs={6}>
                                    <TextInput name="provider_abn" label="What is the ABN or ACN of the party providing the service?" value={data.provider_abn} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                :null}
                                <Grid item xs={6}>
                                    <TextInput name="address_of_provider_service" label="What is the address of the party providing the services?" value={data.address_of_provider_service} onChange = {(e) => this.handleCustomChange(e)} />
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
                    {this.state.activeStep === 3 ?
                        <FormContainer>
                            <Grid container spacing={1}>

                                <Grid item xs={12}>
                                    <h5>provider</h5>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="how_much" label="How much is the recipient paying the provider for providing the services?" value={data.how_much} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true"/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="describe_payment" label="Please describe the payment arrangement" value={data.describe_payment} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="method_of_payment" label="What is the method of payment?" value={data.method_of_payment} onChange = {(e) => this.handleCustomChange(e)} />
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
                    {this.state.activeStep === 4 ?
                        <FormContainer>
                            <Grid container spacing={1}>
                               
                                <Grid item xs={12}>
                                    <h5>Communication</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="communication_service" label="What are the agreed forms of communication between the provider of the services and the receiver?" value={ data.communication_service} options={this.communication_service} onChange = {(e) => this.handleCustomSelctChange(e,'communication_service')}  autoFocus="true" multiple="true"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="not_agreed" label="What are forms of communication not agreed to be used?" value={ data.not_agreed} options={this.communication_service} onChange = {(e) => this.handleCustomSelctChange(e,'not_agreed')} multiple="true" />
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
                    {this.state.activeStep === 5 ?
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
                                <Grid item xs={6}>
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


                    {this.state.activeStep === 6 ?
                        <Review data={data} fnc1={this.handleNext} fnc2={this.handleBack} />
                   : null}

                    {this.state.activeStep === 7 ?
                        <Billing fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                    : null
                    }
                </form>
                
            </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default ServiceAgreementForm;