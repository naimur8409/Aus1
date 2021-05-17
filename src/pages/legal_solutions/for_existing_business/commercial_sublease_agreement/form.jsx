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
class CommercialSubleaseAgreementForm extends Form {
    state = { 
        activeStep: 0,
        data: {
            date_of_sublease: '',
            end_date_for_sublease: '',
                end_date: '',
            effective_date: '',
            is_renewable:'',
                renewal: '',
            property_type:'',      
                specify1:'',
            area_of_sublet: '',
            address_of_property:'',      
            size_of_property:'',
            will_attach:'',
        
            number_of_landlords: '',
            number_of_subLandlords: '',
            number_of_subtenants : '',
            when_signed: '',
            will_attached: '',
            has_consent: '',

            how_much_payment: '',
            date_of_payment: '',
            frequency_type: '',
            specify2: '',
            payment_details: '',
            bond_amount: '',
            deposit_date: '',
        
            will_responsible: '',
                what_responsible: '',
                what_percentage: '',
            will_allowed: '',
        
            product: '',
            speed: '',
            jurisdiction: '',
            describe: '',
        },
        errors: {},
        landlords: [],
        subLandlords: [],
        subtenants: [],
     }
     number = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        ];
    end_date_for_sublease = [
        { value: 'Ends on a specific date', label: 'Ends on a specific date ' },
        { value: 'Has no end date', label: 'Has no end date' },
    ];
    renewal = [
        { value: 'Automatic Renewal', label: 'Automatic Renewal' },
        { value: 'Upon request', label: 'Upon request' },
    ];
    property_type = [
        { value: 'Office ', label: 'Office ' },
        { value: 'Retail Store', label: 'Retail Store' },
        { value: 'Restaurant', label: 'Restaurant' },
        { value: 'Building', label: 'Building' },
        { value: 'Industrial', label: 'Industrial' },
        { value: 'Warehouse', label: 'Warehouse' },
        { value: 'Others', label: 'Others' },
    ];
    type = [
        { value: 'Individual', label: 'Individual' },
        { value: 'Company', label: 'Company' },
    ]
    frequency_type = [
        { value: 'Week', label: 'Week' },
        { value: 'Month', label: 'Month' },
        { value: 'Year', label: 'Year' },
        { value: 'Others', label: 'Others' },
    ]
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    what_responsible = [
        { value: 'Rates and taxes', label: 'Rates and taxes' },
        { value: 'Increase in rates and taxes', label: 'Increase in rates and taxes' },
        { value: 'Electricity and gas', label: 'Electricity and gas' },
        { value: 'Common area maintenance', label: 'Common area maintenance' },
        { value: 'Gardening', label: 'Gardening' },
        { value: 'Management costs', label: 'Management costs' },
        { value: 'Lessor\'s insurance', label: 'Lessor\'s insurance' },
        { value: 'Waste charges', label: 'Waste charges' },
        { value: 'Water charges', label: 'Water charges' },
    ];
    will_allowed = [
        { value: 'Yes, with the sublandlord\'s written consent', label: 'Yes, with the sublandlord\'s written consent' },
        { value: 'No', label: 'No' },
    ];
    
    product = [
        { value: 'Standard Agreement $129', label: 'Standard Agreement $129' },
        { value: 'Customised Agreement: Consultation with a lawyer over the phone $399', label: 'Customised Agreement: Consultation with a lawyer over the phone $399' },
    ]
    speed = [
        { value: 'Regular: 3 business days $00', label: 'Regular: 3 business days $00' },
        { value: 'Express: 1 business day add $69', label: 'Express: 1 business day add $69' },
        { value: 'Urgent: by the next four business hours add $99', label: 'Urgent: by the next four business hours add $99' },
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
        // if(this.state.activeStep === 0 ){
        //     const errors = this.validateStep1();
        //     this.setState({ errors: errors || {} });
        //     if (errors) return;
        // }
        // if(this.state.activeStep === 1 ){
        //     const errors = this.validateStep2();
        //     this.setState({ errors: errors || {} });
        //     if (errors) return;
        // }
        // if(this.state.activeStep === 2 ){
        //     const errors = this.validateStep3();
        //      this.setState({ errors: errors || {} });
        //     if (errors) return;
        // }
        // if(this.state.activeStep === 3 ){
        //     const errors = this.validateStep4();
        //      this.setState({ errors: errors || {} });
        //     if (errors) return;
        // }
       
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
            console.log(name)
            this.setState({ data : data});
            if(name === 'number_of_landlords'){
                let landlords = [];
                let current = e.value;
                let prev = this.state.data.number_of_landlords.value;
                let obj =   {
                    name: '',
                    type:'',
                        acn: '',
                    address:'',
                    }
                    
                    
                    if(prev < current ){
                        landlords = [...this.state.landlords]
                        for (let i = prev; i < current ; i++){
                            landlords.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        landlords = [...this.state.landlords]
                        for (let i = prev; i > current ; i--){
                            landlords.pop() 
                        } 
                    }else{
                        landlords = [...this.state.landlords]
                        for (let i = 0; i < current ; i++){
                            landlords.push({...obj}) 
                        } 
                    }
                    console.log(landlords)
                    this.setState({landlords: [...landlords]});
            }
            if(name === 'number_of_subLandlords'){
                let subLandlords = [];
                let current = e.value;
                let prev = this.state.data.number_of_subLandlords.value;
                let obj =   {
                    name: '',
                    type:'',
                        acn: '',
                    address:'',
                    }
                    
                    
                    if(prev < current ){
                        subLandlords = [...this.state.subLandlords]
                        for (let i = prev; i < current ; i++){
                            subLandlords.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        subLandlords = [...this.state.subLandlords]
                        for (let i = prev; i > current ; i--){
                            subLandlords.pop() 
                        } 
                    }else{
                        subLandlords = [...this.state.subLandlords]
                        for (let i = 0; i < current ; i++){
                            subLandlords.push({...obj}) 
                        } 
                    }
                    
                    this.setState({subLandlords: [...subLandlords]});
            }
            if(name === 'number_of_subtenants'){
                let subtenants = [];
                let current = e.value;
                let prev = this.state.data.number_of_subtenants.value;
                let obj =   {
                    name: '',
                    type:'',
                        acn: '',
                    address:'',
                    }
                    
                    
                    if(prev < current ){
                        subtenants = [...this.state.subtenants]
                        for (let i = prev; i < current ; i++){
                            subtenants.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        subtenants = [...this.state.subtenants]
                        for (let i = prev; i > current ; i--){
                            subtenants.pop() 
                        } 
                    }else{
                        subtenants = [...this.state.subtenants]
                        for (let i = 0; i < current ; i++){
                            subtenants.push({...obj}) 
                        } 
                    }
                    
                    this.setState({subtenants: [...subtenants]});
            }
            

    }
    handleMultiChange = async (e,to) => {
        if(to === 'number_of_landlords'){
            let landlords = [ ...this.state.landlords];
            let index = e.target.id;
            landlords[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
            this.setState({ landlords : [...landlords] });
        }
        if(to === 'number_of_subLandlords'){
            let landlords = [ ...this.state.landlords];
            let index = e.target.id;
            landlords[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
            this.setState({ landlords : [...landlords] });
        }
        if(to === 'number_of_subtenants'){
            let landlords = [ ...this.state.landlords];
            let index = e.target.id;
            landlords[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
            this.setState({ landlords : [...landlords] });
        }
       
    }
    handleMultiSelctChange = async (e, name, id, to) => {
        if(to === 'number_of_landlords'){
            let landlords = [...this.state.landlords]
            let index = id;
            landlords[parseInt(index, 10) - 1 ][name] = e;
            this.setState({ landlords : [...landlords] });
        }
        if(to === 'number_of_subLandlords'){
            let subLandlords = [...this.state.subLandlords]
            let index = id;
            subLandlords[parseInt(index, 10) - 1 ][name] = e;
            this.setState({ subLandlords : [...subLandlords] });
        }
        if(to === 'number_of_subtenants'){
            let subtenants = [...this.state.subtenants]
            let index = id;
            subtenants[parseInt(index, 10) - 1 ][name] = e;
            this.setState({ subtenants : [...subtenants] });
        }
    }

    render() { 
        const steps = getSteps();
        const  {data, landlords, subLandlords, subtenants} = this.state;
        let value1 = [];
        let value2 = [];
        let value3 = [];
        for(let i = 1 ; i<= data.number_of_landlords.value ; i++){
            value1.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Landlord - {i}</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput name="name"  id = {i} label="Name of the landlord (Lessor) " value={ landlords[i-1].name} onChange = {(e) => this.handleMultiChange(e,'number_of_landlords')} />
                    </Grid>
                    <Grid item xs={12}>
                        <SelectInput name="type" label="Is the landlord an individual or company?" value={ landlords[i-1].type} options={this.type} onChange = {(e) => this.handleMultiSelctChange(e,'type', i,'number_of_landlords')} />
                    </Grid>
                    {landlords[i-1].type.value === 'Company' ?
                 
                    <Grid item xs={6}>
                        <TextInput name="acn"  id = {i} label="What is the ACN number?" value={ landlords[i-1].acn} onChange = {(e) => this.handleMultiChange(e,'number_of_landlords')} />
                    </Grid>
                    :null}
                    <Grid item xs={6}>
                        <TextInput name="address"  id = {i} label="Address of the landlord " value={ landlords[i-1].address} onChange = {(e) => this.handleMultiChange(e,'number_of_landlords')} />
                    </Grid>
                </Grid>
            )
        }
        for(let i = 1 ; i<= data.number_of_subLandlords.value ; i++){
            value2.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Sub Landlords - {i}</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput name="name"  id = {i} label="Name of the subLandlords (Lessor) " value={ subLandlords[i-1].name} onChange = {(e) => this.handleMultiChange(e,'number_of_subLandlords')} />
                    </Grid>
                    <Grid item xs={12}>
                        <SelectInput name="type" label="Is the subLandlords an individual or company?" value={ subLandlords[i-1].type} options={this.type} onChange = {(e) => this.handleMultiSelctChange(e,'type', i,'number_of_subLandlords')} />
                    </Grid>
                    {subLandlords[i-1].type.value === 'Company' ?
                 
                    <Grid item xs={6}>
                        <TextInput name="acn"  id = {i} label="What is the ACN number?" value={ subLandlords[i-1].acn} onChange = {(e) => this.handleMultiChange(e,'number_of_subLandlords')} />
                    </Grid>
                    :null}
                    <Grid item xs={6}>
                        <TextInput name="address"  id = {i} label="Address of the subLandlords " value={ subLandlords[i-1].address} onChange = {(e) => this.handleMultiChange(e,'number_of_subLandlords')} />
                    </Grid>
                </Grid>
            )
        }
        for(let i = 1 ; i<= data.number_of_subtenants.value ; i++){
            value3.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Subtenants - {i}</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput name="name"  id = {i} label="Name of the subtenants (Lessor) " value={ subtenants[i-1].name} onChange = {(e) => this.handleMultiChange(e,'number_of_subtenants')} />
                    </Grid>
                    <Grid item xs={12}>
                        <SelectInput name="type" label="Is the subtenants an individual or company?" value={ subtenants[i-1].type} options={this.type} onChange = {(e) => this.handleMultiSelctChange(e,'type', i, 'number_of_subtenants')} />
                    </Grid>
                    {subtenants[i-1].type.value === 'Company' ?
                 
                    <Grid item xs={6}>
                        <TextInput name="acn"  id = {i} label="What is the ACN number?" value={ subtenants[i-1].acn} onChange = {(e) => this.handleMultiChange(e,'number_of_subtenants')} />
                    </Grid>
                    :null}
                    <Grid item xs={6}>
                        <TextInput name="address"  id = {i} label="Address of the subtenants " value={ subtenants[i-1].address} onChange = {(e) => this.handleMultiChange(e,'number_of_subtenants')} />
                    </Grid>
                </Grid>
            )
        }
        console.log(this.state)
        return ( 
            <RegistrationContainer>
            <FormWrapper > 
            
            <SelctText>Commercial sublease Agreement $129</SelctText>
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
                                    <h3>Agreement Details</h3>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="date_of_sublease" label="What is the start date of the sublease term?" type="date" value={data.date_of_sublease} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true" />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="end_date_for_sublease" label="What is the end date of the sublease term?" value={ data.end_date_for_sublease} options={this.duration_of_partnership} onChange = {(e) => this.handleCustomSelctChange(e,'duration_of_partnership')} autoFocus="true" />
                                </Grid>
                                {data.end_date_for_sublease.value === 'Ends on a specific date'?
                                <Grid item xs={6}>
                                    <TextInput name="end_date" label="Date" type="date" value={data.end_date} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                :null}
                                <Grid item xs={6}>
                                    <TextInput name="effective_date" label="What date is this sublease agreement effective from?" type="date" value={data.effective_date} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="is_renewable" label="Is the sublease renewable?" value={ data.duration_of_partnership} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'is_renewable')} />
                                    {data.is_renewable.value === 'Yes' ?
                                        <SelectInput name="renewal"  value={ data.renewal} options={this.renewal} onChange = {(e) => this.handleCustomSelctChange(e,'renewal')} />
                                    :null}
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <h5>Property</h5>
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <SelectInput name="property_type" label="Property type" value={ data.property_type} options={this.property_type} onChange = {(e) => this.handleCustomSelctChange(e,'property_type')} />
                                </Grid>
                                {data.property_type.value === 'Others' ?
                                <Grid item xs={12}>
                                    <TextInput name="specify1" label="Please specify" value={data.specify1} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                :null}
                                <Grid item xs={12}>
                                    <TextInput name="area_of_sublet" label="Area to be sublet" value={data.area_of_sublet} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput name="address_of_property" label="Address of the property" value={data.address_of_property} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput name="size_of_property" label="Specify the size of the property being sublet" value={data.size_of_property} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="will_attach" label="Will you attach the diagram of the property in this agreement?" value={ data.will_attach} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'will_attach')} />
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
                                    <h3>Landlord (According to the master lease)</h3>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="number_of_landlords" label="Has the landlord given written consent to the sublease?" value={ data.number_of_landlords} options={this.number} onChange = {(e) => this.handleCustomSelctChange(e,'number_of_landlords')} />
                                </Grid>
                                {value1}
                                <Grid item xs={12}>
                                    <h3>Sublandlord (Tenant in the master lease) </h3>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="number_of_subLandlords" label="Has the landlord given written consent to the sublease?" value={ data.number_of_subLandlords} options={this.number} onChange = {(e) => this.handleCustomSelctChange(e,'number_of_subLandlords')} />
                                </Grid>
                                {value2}
                                <Grid item xs={12}>
                                    <h3>Subtenant</h3>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="number_of_subtenants" label="Has the landlord given written consent to the sublease?" value={ data.number_of_subtenants} options={this.number} onChange = {(e) => this.handleCustomSelctChange(e,'number_of_subtenants')} />
                                </Grid>
                                {value3}
                                <Grid item xs={6}>
                                    <TextInput name="when_signed" label="When was the master lease signed?"  value={data.when_signed} onChange = {(e) => this.handleCustomChange(e)}  autoFocus="true"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="will_attached" label="Will a copy of the master lease be attached to this agreement?" value={ data.will_attached} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'will_attached')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="has_consent" label="Has the landlord given written consent to the sublease?" value={ data.has_consent} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'has_consent')} />
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
                                    <h5>Payment/rent</h5>
                                </Grid>
                               
                                <Grid item xs={6}>
                                    <TextInput name="how_much_payment" label="How much is each sublease payment?"  value={data.how_much_payment} onChange = {(e) => this.handleCustomChange(e)}  autoFocus="true"/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="date_of_payment" label="The first date of payment" type="date" value={data.date_of_payment} onChange = {(e) => this.handleCustomChange(e)}  />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="frequency_type" label="What is the frequency of the lease payments?" value={ data.frequency_type} options={this.frequency_type} onChange = {(e) => this.handleCustomSelctChange(e,'frequency_type')} />
                                </Grid>
                                {data.frequency_type.value === "Others" ?
                                <Grid item xs={6}>
                                    <TextInput name="specify2" label="Please specify" value={data.specify2} onChange = {(e) => this.handleCustomChange(e)}  />
                                </Grid>
                                :null}
                                <Grid item xs={6}>
                                    <TextInput name="payment_details" label="What are the payment details/ bank details for the tenant to pay lease payments?" value={data.payment_details} onChange = {(e) => this.handleCustomChange(e)}  />
                                </Grid>

                                <Grid item xs={12}>
                                    <h5>Bond</h5>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="bond_amount" label="What is the security deposit (bond) amount?"  value={data.bond_amount} onChange = {(e) => this.handleCustomChange(e)}  />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="deposit_date" label="What is the date the security deposit must be received by?" type="date" value={data.deposit_date} onChange = {(e) => this.handleCustomChange(e)}  />
                                </Grid>

                                <Grid item xs={12}>
                                    <h5>Liability</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="will_responsible" label="Will the sublessee be responsible for paying outgoings?" value={ data.will_responsible} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'will_responsible')} />
                                </Grid>
                                {data.will_responsible.value === 'Yes' ?
                                <>
                                    <Grid item xs={12}>
                                        <SelectInput name="what_responsible" label="What outgoing will the lessee be responsible for paying?" value={ data.what_responsible} options={this.what_responsible} onChange = {(e) => this.handleCustomSelctChange(e,'what_responsible')} multiple="true" />
                                    </Grid>
                                <Grid item xs={12}>
                                    <TextInput name="what_percentage" label="What percentage of the outgoings will the lessee/tenant be responsible for paying?"  value={data.what_percentage} onChange = {(e) => this.handleCustomChange(e)}  />
                                </Grid>
                                <Grid item xs={12}>
                                    <Note>Note: This is usually how much percentage of the building is being leased out to the lessee.</Note>
                                </Grid>
                                </>
                                :null}
                                <Grid item xs={12}>
                                    <SelectInput name="will_allowed" label="Will the subtenant be allowed to make improvements to the property?" value={ data.will_allowed} options={this.will_allowed} onChange = {(e) => this.handleCustomSelctChange(e,'will_allowed')} />
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
                                    <h5>Service Type</h5>
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
                                    <TextArea name="describe" label="Describe if you have any other specific need that you want us to incorporate in the contract "  value={data.describe} onChange = {(e) => this.handleCustomChange(e)} />
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
 
export default CommercialSubleaseAgreementForm;