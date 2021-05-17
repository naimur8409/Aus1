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
class SaleOfGoodsAgreementForm extends Form {
    state = { 
        activeStep: 0,
        data: {
            sellers_name: '',
            sellers_address: '',
            buyers_name: '',
            buyers_address: '',
            date_of_agreement: '',
            minimum_number: '',

            type: '',
            delivered_address: '',
            payment_type: '',
            specify: '',
            if_fails: '',
            indicator_rate: '',
            when_pass: '',
            describe1: '',
            total_price: '',

            product: '',
            speed: '',
            jurisdiction: '',
            describe2: '',
        },
        errors: {},
     }
     
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
    type = [
        { value: 'Picked-up', label: 'Picked-up' },
        { value: 'Delivered', label: 'Delivered' },
    ];
    payment_type = [
        { value: 'Credit card', label: 'Credit card' },
        { value: 'Electronic fund transfer', label: 'Electronic fund transfer' },
        { value: 'Cash', label: 'Cash' },
        { value: 'Cheque', label: 'Cheque' },
        { value: 'PayPal', label: 'PayPal' },
        { value: 'Others', label: 'Others' },
    ];
   
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
            
            <SelctText>Sale of Goods Agreement $99</SelctText>
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
                                       <span>Seller’s Details</span>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="sellers_name" label="Provide the Seller’s name" value={data.sellers_name} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="sellers_address" label="Provide the Seller’s address" value={data.sellers_address} onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                       <span>Buyer's Details</span>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="buyers_name" label="Provide the Buyer’s name" value={data.buyers_name} onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="buyers_address" label="Provide the Buyer’s address" value={data.buyers_address} onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                       <span>Agreement Details</span>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="date_of_agreement" type="date" label="On what date will this agreement come into effect?" value={data.date_of_agreement} onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextArea name="minimum_number" label="What is the minimum number of days the Buyer must provide between their order and their requested delivery date?" onChange = {(e) => this.handleCustomChange(e)}/>
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
                                    <h5>Payment Details</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="type" label="Will the goods be picked up or delivered? " value={ data.type} options={this.type} onChange = {(e) => this.handleCustomSelctChange(e,'type')} autoFocus="true"/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="delivered_address" label="Where will the goods be delivered?" value={data.delivered_address} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="payment_type" label="How will the Buyer make payment for the goods purchased from the Seller?" value={ data.payment_type} options={this.payment_type} onChange = {(e) => this.handleCustomSelctChange(e,'payment_type')} />
                                </Grid>
                                {data.payment_type.value === 'Others' ?
                                <Grid item xs={6}>
                                    <TextInput name="specify" label="Please specify" value={data.specify} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                :null}
                                <Grid item xs={12}>
                                    <TextArea name="if_fails" label="What if the Buyer fails to make the payment by the due date, interest will be added onto the amount owing. According to which bank’s business" onChange = {(e) => this.handleCustomChange(e)}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="indicator_rate" label="Indicator rate will interest be calculated from?" value={data.indicator_rate} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <>
                                    <TextInput name="when_pass" label="When will the title of the goods be passed from the Seller to the Buyer?" value={data.what_specialise} onChange = {(e) => this.handleCustomChange(e)} />
                                    <Note>Note: This means when the legal ownership of the goods will pass from the Seller to Buyer. </Note>
                                    </>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextArea name="describe1" label="Please describe the goods in detail" value={data.describe1} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="total_price" label="Please provide the total price of the goods being sold" value={data.total_price} onChange = {(e) => this.handleCustomChange(e)} />
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


                    {this.state.activeStep === 3 ?
                        <Review data={data} fnc1={this.handleNext} fnc2={this.handleBack} />
                   : null}

                    {this.state.activeStep === 4 ?
                        <Billing fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                    : null
                    }
                </form>
                
            </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default SaleOfGoodsAgreementForm;