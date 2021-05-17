import { Button, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react'
import { DarkBtn } from '../../../utils/button';
import {RegistrationContainer,SelctText,  FormContainer, FormWrapper } from '../../../utils/globalStyle';
import Form from '../../../component/formItem/formValidator';
import Joi from 'joi-browser';
// import PartnerReview from './directorReview';
// import PartnerBilling from './directorBilling';
import SelectInput from '../../../component/formItem/selectInput';
import TextInput from '../../../component/formItem/textInput';
import CheckInput from '../../../component/formItem/checkInput';
import { Link } from 'react-router-dom';


const getSteps = () => {
    return ['Step-1', 'Step-2', 'Step-3', 'Step-4', 'Step-5', 'Step-6'];
  }
  


class CompanyRegForm extends Form {

    state = { 
        activeStep: 0,
        data1: {
            has_proposed_name: '',
            proposed_name: '',
            company_type:'',
            state: '',
        },
        data2: {
            is_occupied: '',
            office_unit:'',      
            office_street:'',      
            office_subrub:'',      
            office_state:'',      
            office_post_code:'',

            occupie_agree: '',
            name_of_occupier: '',
            is_companys: '',

            busi_unit:'',      
            busi_street:'',      
            busi_subrub:'',      
            busi_state:'',      
            busi_post_code:'',

        },
        data3: {
            
            industry_sector:'',
            business_activity: '',
           
            // gst: '',
            // estimated_turn_over: '',
            // gst_res: '',
            // tax_report: '',
            // commence_date: '',
            // goods_service: '',

            // have_employee: '',
            // sign_up: '',
            // when_commence: '',
            // employee_pay: '',
            // working_holiday: '',
            // payment_each_year: '',
            // summary_report: '',
            // provide_paymnet_summary: '',
            // pay_royalties: '',
        },
        data4: {
            number_of_director: '',
        },
        errors: {},
        business_share_class: [
            {
                share_class: '',
                issuance_of_shares:'',
                value_per_share: '',
            }
        ],
        director_count: 1,
        director: [],
     }

    schema1 = {
        // business_structure: Joi.alternatives().try([ Joi.object(),Joi.string().label("This field")]).required(),
        has_proposed_name: Joi.allow('').label("This field"),
        proposed_name: Joi.allow('').label("This field"),
        company_type: Joi.allow('').label("This field"),
        state: Joi.allow('').label("This field"),
        

    };
    schema2 = {
        is_occupied: Joi.allow('').label("This field"),
        office_unit: Joi.allow('').label("This field"),
        office_street: Joi.allow('').label("This field"),
        office_subrub: Joi.allow('').label("This field"),
        office_state: Joi.allow('').label("This field"),
        office_post_code: Joi.allow('').label("This field"),
        occupie_agree : Joi.allow('').label("This field"),
        name_of_occupier : Joi.allow('').label("This field"),
        is_companys : Joi.allow('').label("This field"),
        busi_unit : Joi.allow('').label("This field"),
        busi_street : Joi.allow('').label("This field"),
        busi_subrub : Joi.allow('').label("This field"),
        busi_state : Joi.allow('').label("This field"),
        busi_post_code : Joi.allow('').label("This field"),
    };
    schema3 = {
        industry_sector : Joi.allow('').label("This field"),
        business_activity : Joi.allow('').label("This field"),

        // gst : Joi.allow('').label("This field"),
        // estimated_turn_over : Joi.allow('').label("This field"),
        // gst_res : Joi.allow('').label("This field"),
        // tax_report : Joi.allow('').label("This field"),
        // commence_date : Joi.allow('').label("This field"),
        // goods_service : Joi.allow('').label("This field"),
    
        // have_employee : Joi.allow('').label("This field"),
        // sign_up : Joi.allow('').label("This field"),
        // when_commence : Joi.allow('').label("This field"),
        // employee_pay : Joi.allow('').label("This field"),
        // payment_each_year : Joi.allow('').label("This field"),
        // working_holiday : Joi.allow('').label("This field"),
        // summary_report : Joi.allow('').label("This field"),
        // provide_paymnet_summary : Joi.allow('').label("This field"),
        // pay_royalties : Joi.allow('').label("This field"),
       
        // .options({language: {string: {regex: { base: "Use atleast 8 character and dont use space" },},},}),
    };

    schema4 = {
             number_of_director : Joi.allow('').label("This field"),
    //     declarant_family_name : Joi.allow('').label("This field"),
    //     designation : Joi.allow('').label("This field"),
    //     final_declaration : Joi.allow('').label("This field"),
     }
    share_class = [
        { value: 'Ordinary', label: 'Ordinary' },
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
        { value: 'C', label: 'C' },
        { value: 'D', label: 'D' },
        { value: 'E', label: 'E' },
        { value: 'F', label: 'F' },
        { value: 'G', label: 'G' },
        { value: 'H', label: 'H' },
        { value: 'I', label: 'I' },
        { value: 'J', label: 'J' },
        { value: 'K', label: 'K' },
        { value: 'L', label: 'L' },
        { value: 'M', label: 'M' },
        { value: 'Redeemable Preference', label: 'Redeemable Preference' },
    ]
    company_type = [
        { value: 'PTY LTD', label: 'PTY LTD' },
        { value: 'PTY. LTD.', label: 'PTY. LTD.' },
        { value: 'PTY. LIMITED', label: 'PTY. LIMITED' },
        { value: 'PTY LIMITED', label: 'PTY LIMITED' },
        { value: 'PROPRIETARY LTD', label: 'PROPRIETARY LTD' },
        { value: 'PROPRIETARY', label: 'PROPRIETARY' },
    ]
    comapny_state = [
        { value: 'ACT', label: 'ACT' },
        { value: 'NSW', label: 'NSW' },
        { value: 'VIC', label: 'VIC' },
        { value: 'WA', label: 'WA' },
        { value: 'QLD', label: 'QLD' },
        { value: 'TAS', label: 'TAS' },
        { value: 'SA', label: 'SA' },
        { value: 'NT', label: 'NT' },
    ]
    number = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
        ];
    is_occupied = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
    { value: 'Get Virtual Office $429 annually', label: 'Get Virtual Office $429 annually' },
    ];
    common = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
    ];
    industry_sector = [
    { value: 'Agriculture, Forestry, Fishing', label: 'Agriculture, Forestry, Fishing' },
    { value: 'Mining', label: 'Mining' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'Electricity, Gas, Water, Waste Services', label: 'Electricity, Gas, Water, Waste Services' },
    { value: 'Construction', label: 'Construction' },
    { value: 'Wholesale Trade', label: 'Wholesale Trade' },
    { value: 'Retail Trade', label: 'Retail Trade' },
    { value: 'Accommodation and Food Services', label: 'Accommodation and Food Services' },
    { value: 'Transport, Postal and Warehousing', label: 'Transport, Postal and Warehousing' },
    { value: 'Information Media and Telecommunications', label: 'Information Media and Telecommunications' },
    { value: 'Financial and Insurance Services', label: 'Financial and Insurance Services' },
    { value: 'Rental, Hiring and Real Estate Services', label: 'Rental, Hiring and Real Estate Services' },
    { value: 'Professional, Scientific, Technical Services', label: 'Professional, Scientific, Technical Services' },
    { value: 'Administrative and Support Services', label: 'Administrative and Support Services' },
    { value: 'Public Administration and Safety', label: 'Public Administration and Safety' },
    { value: 'Education and Training', label: 'Education and Training' },
    { value: 'Health Care and Social Assistance', label: 'Health Care and Social Assistance' },
    { value: 'Arts and Recreation Services', label: 'Arts and Recreation Services' },
    { value: 'Other Services', label: 'Other Services' },
    ]
    turn_over  = [
        { value: '$0 - $74,999  ', label: '$0 - $74,999  ' },
        { value: '$75,000 - $149,999', label: '$75,000 - $149,999' },
        { value: '$150,000 – $1,999,999', label: '$150,000 – $1,999,999' },
        { value: '$2,000,000 and over', label: '$2,000,000 and over' },
        
    ]
    gst_res = [
    { value: 'When I receive the cash ', label: 'When I receive the cash ' },
    { value: 'When I issue the invoice', label: 'When I issue the invoice' },
    ]
    tax_report = [
    { value: 'Monthly ', label: 'Monthly ' },
    { value: 'Quarterly ', label: 'Quarterly ' },
    ]
    summary_report = [
    { value: 'Electronically ', label: 'Electronically ' },
    { value: 'Paper form', label: 'Paper form' },
    { value: 'Both', label: 'Both' },
    ]
    provide_paymnet_summary = [
    { value: 'Create your own payment summaries', label: 'Create your own payment summaries' },
    { value: 'Use payment summaries supplied by ATO', label: 'Use payment summaries supplied by ATO' },
    { value: 'Both', label: 'Both' },
    ]
   
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
        if(this.state.activeStep === 3 ){
            const errors = this.validateStep4();
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
    handleBusinessStructure = (value) => {
        // console.log(value)
        const data = { ...this.state.data2}
        data.business_structure = value;
        this.setState({data2: data})
    };
    
    handleCustomChange = async (e) => {
        //    console.log(target.name)
            
            const data = { ...this.state.data1 };
            if(e.target.name === 'declaration'){
                data[e.target.name] = e.target.checked;
            }
            else if(e.target.name === 'final_declaration'){
                data[e.target.name] = e.target.checked;
            }
            else{
                data[e.target.name] = e.target.value; 
            }
            
            this.setState({ data1: data});
            
    }
    handleCustomSelctChange = async (e, name) => {
        if(this.state.activeStep === 3){
            const data = { ...this.state.data4 };
                data[name] = e;
                this.setState({ data4 : data});
            if(name === 'number_of_director'){
                let data = [];
                let current = e.value;
                let prev = this.state.data4.number_of_director.value;
                let obj =   {
                    given_name: '',
                    family_name:'',
                    street: '',
                    subrub: '',
                    state: '',
                    post_code: '',
                    country: '',
                    dob: '',
                    pob: '',
                    sob: '',
                    tfn: '',
                    is_authorised: '',
                    director_share: [
                        {
                            share_class: '',
                            issuance_of_shares:'',
                            value_per_share: '',
                        }
                    ]
                    }
                    
                    
                    if(prev < current ){
                        data = [...this.state.director]
                        for (let i = prev; i < e.value ; i++){
                            data.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        data = [...this.state.director]
                        for (let i = prev; i > current ; i--){
                            data.pop() 
                        } 
                    }else{
                        data = [...this.state.director]
                        for (let i = 0; i < e.value ; i++){
                            data.push({...obj}) 
                        } 
                    }
                    
                    this.setState({director: [...data]});
            }
        }

    }
    handleMultiChange = async (e, to) => {
       if(to === 'business_share_class'){
            let data = [ ...this.state.business_share_class];
            let index = e.target.id;
            data[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
            this.setState({ business_share_class : [...data] });
       }
       if(to === 'director_share'){
            let index = e.target.id;
            let data = [...this.state.director];
            
            // console.log(data[index-1]?.director_share[index-1]?.value_per_share)
            // if(data[index-1].director_share){
            //     data[index-1]['director_share'][index-1][e.target.name] = e.target.value;
            // }
            
            // this.setState({ business_share_class : [...data] });
            console.log(data)
        }
       if(to === 'director'){
            let data = [ ...this.state.director];
            let index = e.target.id;
            if(e.target.name === 'is_authorised'){
                data[parseInt(index, 10) - 1 ]['is_authorised'] = e.target.checked;
            }
            else{
                data[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
            }
            this.setState({ director : [...data] });
       }
        
       
    }
    handleMultiSelctChange = async (e, name, id, to) => {
        if(to === 'business_share_class'){
            let data = [...this.state.business_share_class]
        
            let index = id;
            data[parseInt(index, 10) - 1 ][name] = e;
            this.setState({ business_share_class : [...data] });
        }
        
    }
    handleIncrement = (name, index) => {
        if(name === 'business_share'){
            if(this.state.business_count === 5 ) return
            this.setState({business_count: this.state.business_count + 1});
                    
            // ========================WORKING===============
            
            let data = [];
            let current = this.state.business_count + 1;
            let prev = this.state.business_count;

            let obj =   {
                    share_class: '',
                    issuance_of_shares:'',
                    value_per_share: '',
                }
            
            if(prev < current ){
                data = [...this.state.business_share_class]
                for (let i = prev; i < current ; i++){
                    data.push({...obj}) 
                } 
            }
            else if(prev > current ){
                data = [...this.state.business_share_class]
                for (let i = prev; i > current ; i--){
                    data.pop() 
                } 
            }else{
                data = [...this.state.business_share_class]
                for (let i = 0; i < current ; i++){
                    data.push({...obj}) 
                } 
            }
            
            this.setState({business_share_class: [...data]});
        }
        if(name === 'director_share'){
            if(this.state.director_count === 5 ) return
            this.setState({director_count: this.state.director_count + 1});
                    
            // ========================WORKING===============
            
            let data = [];
            let current = this.state.director_count + 1;
            let prev = this.state.director_count;

            let obj =   {
                    share_class: '',
                    issuance_of_shares:'',
                    value_per_share: '',
                }
            
            if(prev < current ){
                data = [...this.state.director[index -1 ]['director_share']]
                for (let i = prev; i < current ; i++){
                    data.push({...obj}) 
                } 
            }
            else if(prev > current ){
                data = [...this.state.director[index -1 ]['director_share']]
                for (let i = prev; i > current ; i--){
                    data.pop() 
                } 
            }else{
                data = [...this.state.director[index -1 ]['director_share']]
                for (let i = 0; i < current ; i++){
                    data.push({...obj}) 
                } 
            }
           const originData = [...this.state.director]
           const prevData = {...this.state.director[index -1 ]}
           prevData.director_share = {...data};
           originData[index -1 ] = {...prevData}
            this.setState({director: [...originData]});
        }
        
    }
    
   
  
    
    render() { 
        const steps = getSteps();
        const  {data1, data2, data3,data4, director,business_share_class, business_count,director_count} = this.state;
        let business_share = [];
        let director_share = [];
        let director_data = [];
        for(let i = 1 ; i<= business_count ; i++){
            business_share.push(
            <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                <Grid item xs={4}>
                    <SelectInput name="share_class" label="Share class*" value={ business_share_class[i-1].share_class} options={this.share_class} onChange = {(e) => this.handleMultiSelctChange(e,'share_class',i,'business_share_class')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="issuance_of_shares"  id = {i} label="Issuance of shares (Number)*" type="number" value={ business_share_class[i-1].issuance_of_shares} onChange = {(e) => this.handleMultiChange(e,'business_share_class')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="value_per_share"  id = {i} label="Value per share*" value={ business_share_class[i-1].value_per_share} onChange = {(e) => this.handleMultiChange(e,'business_share_class')} />
                </Grid>
            </Grid>
            )
        }
        for(let i = 1 ; i<= director_count ; i++){
            director_share.push(
            <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                {/* {console.log(director[i-1]?.director_share[i-1]?.value_per_share)} */}
                {/* <Grid item xs={4}>
                    <SelectInput name="share_class" label="Share class*" value={ business_share_class[i-1].share_class} options={this.share_class} onChange = {(e) => this.handleMultiSelctChange(e,'share_class',i,'business_share_class')} />
                </Grid> */}
                {/* <Grid item xs={4}>
                    <TextInput name="issuance_of_shares"  id = {i} label="Issuance of shares (Number)*" type="number" value={ business_share_class[i-1].issuance_of_shares} onChange = {(e) => this.handleMultiChange(e,'business_share_class')} />
                </Grid> */}
                <Grid item xs={4}>
                    <TextInput name="value_per_share"  id = {i} label="Value per share*" alue={director[i-1]?.director_share[i-1]?.value_per_share}  onChange = {(e) => this.handleMultiChange(e,'director_share')} />
                </Grid>
            </Grid>
            )
        }
        for(let i = 1 ; i<= data4.number_of_director.value ; i++){
            director_data.push(
            <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                <Grid item xs={12}>
                    <h5>Director - {i}</h5>
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="given_name"  id = {i} label="Given Name*" type="text" value={ director[i-1].given_name} onChange = {(e) => this.handleMultiChange(e,'director')} />
                </Grid>
                {director_share}
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick = {() => this.handleIncrement('director_share', i)} >Add Another Class</Button>
                </Grid>
            </Grid>
            )
        }
    console.log(this.state.director)
    // console.log(this.state.multiple)
    // console.log(this.state.multipleErr)
    // console.log(this.state.errors)
        return ( 
            <RegistrationContainer>
            <FormWrapper > 
            
            {/* <SelctText>Basic Structure </SelctText> */}
                <Stepper activeStep={this.state.activeStep} alternativeLabel style={{margin: '-10px'}}>
                    {steps.map((label) => (
                        <Step key={label} style={{width: '100%', fontSize: '18px'}}>
                        <StepLabel style={{width: '100%', fontSize: '18px'}}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <h3>Under Development</h3>
                {/* <form style={{width: '100%'}} >
                    {
                        this.state.activeStep === 0 ?
                            <FormContainer>
                            
                                <h3>Basic Structure </h3>
                                <Grid container spacing={1}>
                                    
                                    <Grid item xs={12}>
                                        {this.renderSelect("has_proposed_name", "Do you have a proposed name for your company?*", this.common)}
                                        <p style={{margin: '0px', fontSize: '12px'}}>Note: If you tick "No", a company will have an automatically generated number assigned by ASIC to its name, i.e. 367 759 487 Pty Ltd</p>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("proposed_name", "Proposed company name", 'text')}
                                        <p style={{margin: '0px', fontSize: '12px'}}>Note: ASIC requires company names to be in capital letters</p>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("company_type", "Company type*", this.company_type)}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("state", "In which state/territory should the company be registered?*", this.comapny_state)}
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
                                    <h5>Address</h5>
                                </Grid>
                                
                                <Grid item xs={12}>
                                    {this.renderSelect("is_occupied", "Is the registered office occupied by an entity other than this new company?*", this.is_occupied)}
                                    <p style={{margin: '0px', fontSize: '12px'}}>If you do not have an address, please select our 'Virtual Office service'. You can read more about the service here: <Link to="/virtual-office-registration">Virtual office page</Link></p>
                                </Grid>
                                {data2.is_occupied.value !== 'Get Virtual Office $429 annually' ?
                                <>

                                    <Grid item xs={4}>
                                        <h5>Registered office address</h5>
                                    </Grid>
                                    <Grid item xs={4}>
                                        {this.renderInput("office_unit", "Unit/Level (optional)", 'text')}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {this.renderInput("office_street", "Street address", 'text')}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {this.renderInput("office_subrub", "Suburb", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("office_state", "State", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("office_post_code", "Postcode", 'text')}
                                    </Grid>
                                    {data2.is_occupied.value === 'Yes' ?
                                        <>
                                        <Grid item xs={12}>
                                            <p style={{margin: '0px', fontSize: '12px'}}>Note: If the Company does not occupy the premises where its registered office is located, the premises' occupier must agree in writing to having the company's registered office located there. A proprietary company is not required to open its registered office to the public. However, this does not affect its obligation to make documents available for inspection. We can assist with the preparation of the relevant consent to occupy the premises as a registered office. </p>
                                            {this.renderCheckInput('occupie_agree', 'I agree that the occupier has consented in writing to the company using the premises as the address for its registered office')}
                                
                                        </Grid>
                                        <Grid item xs={12}>
                                            {this.renderInput("name_of_occupier", "Name of the occupier of the proposed company's proposed registered office*", 'text')}
                                        </Grid>
                                        <Grid item xs={12}>
                                            {this.renderSelect("is_companys", "Will the above-registered office be the company's principal place of business in Australia?", this.common)}
                                            <p style={{margin: '0px', fontSize: '12px'}}>If you do not have an address, please select our 'Virtual Office service'. You can read more about the service here: <Link to="/virtual-office-registration">Virtual office page</Link></p>
                                        </Grid>
                                        {data2.is_companys.value === 'No'?
                                            <>
                                            <Grid item xs={12}>
                                                <h5>Principal Place of Business</h5>
                                            </Grid>
                                            <Grid item xs={4}>
                                                {this.renderInput("busi_unit", "Unit/Level (optional)", 'text')}
                                            </Grid>
                                            <Grid item xs={4}>
                                                {this.renderInput("busi_street", "Street address", 'text')}
                                            </Grid>
                                            <Grid item xs={4}>
                                                {this.renderInput("busi_subrub", "Suburb", 'text')}
                                            </Grid>
                                            <Grid item xs={6}>
                                                {this.renderInput("busi_state", "State", 'text')}
                                            </Grid>
                                            <Grid item xs={6}>
                                                {this.renderInput("busi_post_code", "Postcode", 'text')}
                                            </Grid>
                                            </>
                                            :null}
                                        </>
                                    :null}
                                </>
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
                    {this.state.activeStep === 2 ?
                        <FormContainer>
                            
                            
                            <Grid container spacing={1}>
                            <Grid item xs={12}>
                                    <h3>Business Activity</h3>
                                </Grid>
                                
                                <Grid item xs={6}>
                                    {this.renderSelect("industry_sector", "Industry sector", this.industry_sector)}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("business_activity", "Describe your primary business activity*", 'text')}
                                </Grid>

                                <Grid item xs={12}>
                                    <h5>Share Structure</h5>
                                    <p>Ordinary shares represent the most usual equity ownership in a company. They have equal voting and dividend rights among their subscribers. If you start a small business with a simple share structure, we recommend you issue ordinary shares at this stage. When necessary, you can always change your share structure. </p>
                                </Grid>
                                {business_share}
                                
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary" onClick = {() => this.handleIncrement('business_share')} >Add Another Class</Button>
                                </Grid>
                                
                                 {this.state.data3.gst.value === 'Yes' ?
                                <>
                                    <Grid item xs={12}>
                                        {this.renderSelect('estimated_turn_over','Estimated turn-over', this.turn_over)}
                                    </Grid>

                                    <Grid item xs={12}>
                                        {this.renderSelect('gst_res','When will you send GST result to the ATO(?)', this.gst_res)}
                                    </Grid>

                                    <Grid item xs={12}>
                                        {this.renderSelect('tax_report','How often would you like to report to the Tax Office?', this.tax_report)}
                                    </Grid>
                                    
                                    <Grid item xs={12}>
                                        {this.renderInput("commence_date", "GST account commence date", 'date')}
                                    </Grid>
                                    
                                    <Grid item xs={12}>
                                        {this.renderSelect('goods_service','Do you import goods and services into Australia ?', this.common)}
                                    </Grid>
                                </>
                                :null}

                                <Grid item xs={12}>
                                    <h5>PAYG Registration</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderSelect('have_employee','Does your business have employees?', this.common)}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderSelect('sign_up','Do you wish to sign up for PAYG?', this.common)}
                                </Grid>
                                {this.state.data3.sign_up.value === 'Yes' ?
                                <>  
                                    <Grid item xs={12}>
                                        {this.renderInput("when_commence", "When do you want to commence", 'date')}
                                    </Grid>

                                    <Grid item xs={12}>
                                        {this.renderInput("employee_pay", "How many employees are you going to pay", 'text')}
                                    </Grid>

                                    <Grid item xs={12}>
                                        {this.renderInput("payment_each_year", "How much do you expect to withhold from the payments each year? ", 'text')}
                                    </Grid>

                                    <Grid item xs={12}>
                                        {this.renderSelect('working_holiday','Are you employing any working holiday makers?', this.common)}
                                    </Grid>

                                    <Grid item xs={12}>
                                        {this.renderSelect('summary_report','How are you going to provide your PAYG withholding payment annual summary report to the ATO?', this.summary_report)}
                                    </Grid>

                                    <Grid item xs={12}>
                                        {this.renderSelect('provide_paymnet_summary','How will you provide payment summaries to your payees?', this.provide_paymnet_summary)}
                                    </Grid>

                                    <Grid item xs={12}>
                                        {this.renderSelect('pay_royalties','Will you pay royalties, dividends or interest to non-residents?', this.common)}
                                    </Grid>
                                </>: 
                                null} 
                               
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
                                    <h5>Directors</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="number_of_director" label="How many individual directors will this company have?" value={ data4.number_of_director} options={this.number} onChange = {(e) => this.handleCustomSelctChange(e,'number_of_director')} />
                                </Grid>
                               {director_data}

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
                    <></>
                        // <PartnerReview data1={data1} data2={data2} data3={data3} fnc1={this.handleNext} fnc2={this.handleBack} />
                   : null}

                    {this.state.activeStep === 5 ?
                    <></>
                    
                    //  <PartnerBilling fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                    : null
                    }
                </form>
                 */}
            </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default CompanyRegForm;