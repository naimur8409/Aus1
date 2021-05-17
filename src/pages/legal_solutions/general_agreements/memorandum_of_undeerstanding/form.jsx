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
    return ['Step-1','Step-2','Step-3','Step-4','Review','Billing'];
}
class MemorandumOfUndeerstandingForm extends Form {
    state = { 
        activeStep: 0,
        data: {
            name_of_first_party: '',
            acn_of_first_party: '',
            address_of_first_party: '',
            name_of_second_party: '',
            acn_of_second_party: '',
            address_of_second_party: '',

            type_of_agreement: '',
            date_of_agreement: '',
            primary_obligations_of_first_party: '',
            primary_obligations_of_second_party: '',
            mutual_obligation: '',

            is_considaration: '',
            details: '',
            restrictions: '',
            confidentiality: '',
            non_complete:'',

            product: '',
            speed: '',
            describe: '',
        },
        errors: {},
     }
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
  
   
    restrictions= [
        {value: 'Confidentiality', label: 'Confidentiality'},
        {value: 'Non-compete', label: 'Non-compete'},
        {value: 'No restrictions', label: 'No restrictions'},
    ]
    restriction_option = [
        {value: 'Three months', label: 'Three months'},
        {value: 'Six months', label: 'Six months'},
        {value: 'One year', label: 'One year'},
        {value: 'Two years', label: 'Two years'},
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
            
            <SelctText>Memorandum of Understanding $99</SelctText>
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
                                <h3>Party Details</h3>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                       <h5>First Party</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="name_of_first_party" label="What is the name of the first party?" value={data.name_of_first_party} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="acn_of_first_party" label="What is the ACN/ABN of the first party? "  value={data.acn_of_first_party} onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="address_of_first_party" label="What is the address of the first party?" value={data.address_of_first_party} onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                
                                    <Grid item xs={12}>
                                       <h5>Second Party</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="name_of_second_party" label="What is the name of the second party?" value={data.name_of_second_party} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="acn_of_second_party" label="What is the ACN/ABN of the second party? "  value={data.acn_of_second_party} onChange = {(e) => this.handleCustomChange(e)}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="address_of_second_party" label="What is the address of the second party?" value={data.address_of_second_party} onChange = {(e) => this.handleCustomChange(e)}/>
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
                                    <h5>Agreement details</h5>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="type_of_agreement" label="What type of agreement is this MOU for?" value={data.type_of_agreement} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true"/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="date_of_agreement" label="What is the date that the final written Proposed Agreement is expected to be signed? " type="date" value={data.date_of_agreement} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <h5>Obligations</h5>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="primary_obligations_of_first_party" label="What are the primary obligations of the first party?" value={data.primary_obligations_of_first_party} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="primary_obligations_of_second_party" label="What are the primary obligations of the second party? " value={data.primary_obligations_of_second_party} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="mutual_obligation" label="What are the mutual obligations for both parties?" type="date" value={data.mutual_obligation} onChange = {(e) => this.handleCustomChange(e)} />
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
                                    <h5>Consideration</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="is_considaration" label="Is there consideration for the final Proposal Agreement? " value={ data.is_considaration} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'is_considaration')} autoFocus="true" />
                                </Grid>
                                {data.is_considaration.value === 'Yes'?
                                <>
                                <TextArea name="details" label="Please describe the considerations in detail" value={data.details} onChange = {(e) => this.handleCustomChange(e)} />
                                <Note>E.g. Nathan smith will pay $ 40,000 upon completing the project in three instalments: at 25% completion rate, 50 % completion rate and 100 % completion rate.</Note>
                                </>
                                :null}
                                <Grid item xs={6}>
                                    <h5>Restrictions</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <>
                                    <SelectInput name="restrictions" label="Select Restriction" value={ data.restrictions} options={this.restrictions} onChange = {(e) => this.handleCustomSelctChange(e,'restrictions')} />
                                    {data.restrictions.value === "Confidentiality" ?
                                    <>
                                        <Note>Parties are restricted from communicating confidential information to others.</Note>
                                        <SelectInput name="confidentiality" label="Restricted Period" value={ data.confidentiality} options={this.restriction_option} onChange = {(e) => this.handleCustomSelctChange(e,'confidentiality')} />
                                    </>
                                    :null}
                                    {data.restrictions.value === "Non-compete" ?
                                    <>
                                        <Note>Parties are restricted from communicating confidential information to others.</Note>
                                        <SelectInput name="non_complete" label="Prevention Period" value={ data.non_complete} options={this.restriction_option} onChange = {(e) => this.handleCustomSelctChange(e,'non_complete')} />
                                    </>
                                    :null}
                                    </>
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


                    {this.state.activeStep === 4 ?
                        <Review data={data} fnc1={this.handleNext} fnc2={this.handleBack} />
                   : null}

                    {this.state.activeStep === 5 ?
                        <Billing fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                    : null
                    }
                </form>
                
            </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default MemorandumOfUndeerstandingForm;