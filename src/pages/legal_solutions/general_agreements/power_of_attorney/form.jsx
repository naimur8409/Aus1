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
    return ['Step-1','Step-2','Step-3','Step-4','Step-5','Review','Billing'];
}
class PowerOfAttorneyForm extends Form {
    state = { 
        activeStep: 0,
        data: {
            when_aigned: '',
            name_of_principal : '',
            principal_address: '',

            number_of_attorney: '',
            attorney_name: '',
            attorney_address: '',

            number_of_alternate_attorney: '',
            alternate_attorney_name: '',
            alternate_attorney_address: '',

            how_attorney_operate: '',
            when_effect: '',
                date: '',
                occasion: '',

            product: '',
            speed: '',
            describe: '',
        },
        attorney: [],
        alternate_attorney: [],
        errors: {},
     }
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    number = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
    ];
    number1 = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '0', label: 'Do not appoint' },
    ];
  
   
    operate= [
        {value: 'All attorney must agree before taking any action', label: 'All attorney must agree before taking any action.'},
        {value: 'The attorneys are free to act independently', label: 'The attorneys are free to act independently. '},
    ]
    effect = [
        { value: 'Immediately', label: 'Immediately' },
        { value: 'On a selected date', label: 'On a selected date ' },
        { value: 'On a specific occasion', label: 'On a specific occasion' },
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
            if(e.target.name === 'declaration'){
                data[e.target.name] = e.target.checked;
            }
            else if(e.target.name === 'final_declaration'){
                data[e.target.name] = e.target.checked;
            }
            else{
                data[e.target.name] = e.target.value; 
            }
            
            this.setState({ data: data});
            
    }
    handleCustomSelctChange = async (e, name) => {
            const data = { ...this.state.data };
            data[name] = e;
            this.setState({ data : data});
            if(name === 'number_of_attorney'){
                let attorney = [];
                let current = e.value;
                let prev = this.state.data.number_of_attorney.value;
                let obj =   {
                    name: '',
                    type:'',
                        acn: '',
                    address:'',
                    }
                    
                    
                    if(prev < current ){
                        attorney = [...this.state.attorney]
                        for (let i = prev; i < current ; i++){
                            attorney.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        attorney = [...this.state.attorney]
                        for (let i = prev; i > current ; i--){
                            attorney.pop() 
                        } 
                    }else{
                        attorney = [...this.state.attorney]
                        for (let i = 0; i < current ; i++){
                            attorney.push({...obj}) 
                        } 
                    }
                    this.setState({attorney: [...attorney]});
            }
            if(name === 'number_of_alternate_attorney'){
                let alternate_attorney = [];
                let current = e.value;
                let prev = this.state.data.number_of_alternate_attorney.value;
                let obj =   {
                    name: '',
                    type:'',
                        acn: '',
                    address:'',
                    }
                    
                    
                    if(prev < current ){
                        alternate_attorney = [...this.state.alternate_attorney]
                        for (let i = prev; i < current ; i++){
                            alternate_attorney.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        alternate_attorney = [...this.state.alternate_attorney]
                        for (let i = prev; i > current ; i--){
                            alternate_attorney.pop() 
                        } 
                    }else{
                        alternate_attorney = [...this.state.alternate_attorney]
                        for (let i = 0; i < current ; i++){
                            alternate_attorney.push({...obj}) 
                        } 
                    }
                    
                    this.setState({alternate_attorney: [...alternate_attorney]});
            }
            

    }
    handleMultiChange = async (e,to) => {
        if(to === 'number_of_attorney'){
            let attorney = [ ...this.state.attorney];
            let index = e.target.id;
            attorney[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
            this.setState({ attorney : [...attorney] });
        }
        if(to === 'number_of_alternate_attorney'){
            let landlords = [ ...this.state.landlords];
            let index = e.target.id;
            landlords[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
            this.setState({ landlords : [...landlords] });
        }
       
    }
    handleMultiSelctChange = async (e, name, id, to) => {
        if(to === 'number_of_attorney'){
            let attorney = [...this.state.attorney]
            let index = id;
            attorney[parseInt(index, 10) - 1 ][name] = e;
            this.setState({ attorney : [...attorney] });
        }
        if(to === 'number_of_alternate_attorney'){
            let alternate_attorney = [...this.state.alternate_attorney]
            let index = id;
            alternate_attorney[parseInt(index, 10) - 1 ][name] = e;
            this.setState({ alternate_attorney : [...alternate_attorney] });
        }
    }

    render() { 
        const steps = getSteps();
        const  {data,attorney,alternate_attorney} = this.state;
       
        let value1 = [];
        let value2 = [];
        for(let i = 1 ; i<= data.number_of_attorney.value ; i++){
            value1.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Attorney - {i}</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput name="attorney_name"  id = {i} label="What is the attorney’s name? " value={ attorney[i-1].attorney_name} onChange = {(e) => this.handleMultiChange(e,'number_of_attorney')} />
                        <Note>Note: the person receiving the power</Note>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput name="attorney_address"  id = {i} label="What is the address of the attorney? " value={ attorney[i-1].attorney_address} onChange = {(e) => this.handleMultiChange(e,'number_of_attorney')} />
                    </Grid>
                  
                </Grid>
            )
        }
        for(let i = 1 ; i<= data.number_of_alternate_attorney.value ; i++){
            value2.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Alternate attorney - {i}</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput name="alternate_attorney_name"  id = {i} label="What is the alternate attorney’s name?" value={ alternate_attorney[i-1].alternate_attorney_name} onChange = {(e) => this.handleMultiChange(e,'number_of_alternate_attorney')} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput name="alternate_attorney_address"  id = {i} label="What is the address of the alternate attorney?" value={ alternate_attorney[i-1].alternate_attorney_address} onChange = {(e) => this.handleMultiChange(e,'number_of_alternate_attorney')} />
                    </Grid>
                  
                </Grid>
            )
        }
        console.log(this.state)
        return ( 
            <RegistrationContainer>
            <FormWrapper > 
            
            <SelctText>General Power of Attorney $99</SelctText>
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
                                       <h5>Principal's Details</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="when_aigned" label="When will the document be signed? " value={data.when_aigned} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="name_of_principal" label="What is the name of the principal?"  value={data.name_of_principal} onChange = {(e) => this.handleCustomChange(e)}/>
                                        <Note>Note: the person giving the power </Note>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="principal_address" label="What is the principal’s address?" value={data.principal_address} onChange = {(e) => this.handleCustomChange(e)}/>
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
                                    <h5>Attorney’s Details</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="number_of_attorney" label="Please provide the number of attorneys you want to appoint?" value={ data.number_of_attorney} options={this.number} onChange = {(e) => this.handleCustomSelctChange(e,'number_of_attorney')} autoFocus="true" />
                                </Grid>
                                {value1}
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
                        <Grid container spacing={1}>
                                
                        <Grid item xs={12}>
                            <h5>Alternate Attorney</h5>
                        </Grid>
                        <Grid item xs={12}>
                            <SelectInput name="number_of_alternate_attorney" label="Do you want to appoint alternate attorney’s? If so, how many?" value={ data.number_of_alternate_attorney} options={this.number1} onChange = {(e) => this.handleCustomSelctChange(e,'number_of_alternate_attorney')} autoFocus="true" />
                        </Grid>
                        {value2}
                        <Grid item xs={6}>

                        </Grid>
                        <Grid item xs={6}>
                            <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                            <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                        </Grid>
                    </Grid>
                    : null}
                    {this.state.activeStep === 3 ?
                        <FormContainer>
                            <Grid container spacing={1}>
                               
                                <Grid item xs={12}>
                                    <h5>Agreement Details</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="how_attorney_operate" label="How will your attorneys operate? " value={ data.how_attorney_operate} options={this.operate} onChange = {(e) => this.handleCustomSelctChange(e,'how_attorney_operate')}  autoFocus="true"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="when_effect" label="When will this Power of Attorney come into effect?" value={ data.when_effect} options={this.effect} onChange = {(e) => this.handleCustomSelctChange(e,'when_effect')} />
                                </Grid>
                                {data.when_effect.value === 'On a selected date' ?
                                        <TextInput name="date" label="Date" type="date" value={data.date} onChange = {(e) => this.handleCustomChange(e)}/>
                                :null}
                                {data.when_effect.value === 'On a specific occasion' ?
                                        <TextArea name="occasion" label="Occasion"  value={data.occasion} onChange = {(e) => this.handleCustomChange(e)} />
                                :null}
                               
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
                                    <h5>Product Details</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="product" label="Select your product" value={ data.product} options={this.product} onChange = {(e) => this.handleCustomSelctChange(e,'product')}  autoFocus="true"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="speed" label="Service speed" value={ data.speed} options={this.speed} onChange = {(e) => this.handleCustomSelctChange(e,'speed')} />
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


                    {this.state.activeStep === 5 ?
                        <Review data={data} fnc1={this.handleNext} fnc2={this.handleBack} />
                   : null}

                    {this.state.activeStep === 6 ?
                        <Billing fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                    : null
                    }
                </form>
                
            </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default PowerOfAttorneyForm;