import { Grid, Step, StepLabel, Stepper, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import { DarkBtn } from '../../../utils/button';
import {RegistrationContainer,SelctText,  FormContainer, FormWrapper } from '../../../utils/globalStyle';
import Form from '../../../component/formItem/formValidator';
import Joi from 'joi-browser';
import NameReview from './nameReview';
import NameBilling from './nameBilling';
import TextInput from '../../../component/formItem/textInput';
import { Cards } from '../../abn_res/abnStyle';
import SelectCard from '../../../component/cards/selectCard';
import { Business, Group, Person } from '@material-ui/icons';
import SelectInput from '../../../component/formItem/selectInput';
import CheckInput from '../../../component/formItem/checkInput';


const getSteps = () => {
    return ['Step-1', 'Step-2', 'Step-3', 'Step-4', 'Step-5'];
  }
  


class NameRegForm extends Form {

    state = { 
        activeStep: 0,
        data1: {
            business_price: '',
            need_abn: '',
            abn : '',
            abn_activation_date : '',
            industry_sector: '',
            business_activity : '',
        },
        data2: {
            proposed_business_name:'',      
            proposed_second_business_name:'',      
            proposed_third_business_name:'',  

            business_structure:'',      

            solo_given_name:'',      
            solo_family_name:'',      
            solo_past_name:'',      
            solo_email:'',      
            solo_phone:'',      
            solo_dob:'',      
            solo_cob:'',      
            solo_sob:'',   
            solo_cityob:'',       
            solo_unit:'',      
            solo_street_address:'',      
            solo_subrub:'',      
            solo_state:'',      
            solo_postCode:'',      
            solo_tfn:'',      
            solo_declaration:'',    

            number_of_partner: '',    
              
            acn_no: '',
            subsidiary: '',
            companys_ACN: '',
            number_of_directors: '',
           
            
        },
        data3: {
            unit_label: '',
            street_address: '',
            suburb: '',
            state: '',
            postCode: '',

            gst: '',
            estimated_turn_over: '',
            gst_res: '',
            tax_report: '',
            commence_date: '',
            goods_service: '',

            have_employee: '',
            sign_up: '',
            when_commence: '',
            employee_pay: '',
            working_holiday: '',
            payment_each_year: '',
            summary_report: '',
            provide_paymnet_summary: '',
            pay_royalties: '',

            declarant_given_name: '',
            declarant_family_name: '',
            designation: '',
            final_declaration: '',
        },
        multiple: [],
        errors: {},
        multipleErr: [],
        isValid: false,
        partner: [],
        director: [],
     }

    schema1 = {
        business_price: Joi.alternatives().try([ Joi.object(),Joi.string().label("This field")]).required(),
        need_abn: Joi.allow('').label("This field"),
        abn: Joi.string().allow('').label("This field"),
        abn_activation_date: Joi.string().allow('').label("This field"),
        industry_sector : Joi.allow('').label("This field"),
        business_activity : Joi.string().allow('').label("This field"),
    };
    schema2 = {
        aus_at_the_office_of : Joi.allow('').label("This field"),
        aus_office_unit_level : Joi.allow('').label("This field"),
        aus_street_number_name : Joi.allow('').label("This field"),
        aus_subrub_city : Joi.allow('').label("This field"),
        aus_state : Joi.allow('').label("This field"),
        aus_postcode : Joi.allow('').label("This field"),
        office_hours : Joi.allow('').label("This field"),
        hours_open : Joi.allow('').label("This field"),
        does_occupy_premises : Joi.allow('').label("This field"),
        name_of_occupier : Joi.allow('').label("This field"),
        occupier_confirmed : Joi.allow('').label("This field"),
        inco_at_the_office_of : Joi.allow('').label("This field"),
        inco_office_unit_level : Joi.allow('').label("This field"),
        inco_street_number_name : Joi.allow('').label("This field"),
        inco_subrub_city : Joi.allow('').label("This field"),
        inco_state : Joi.allow('').label("This field"),
        inco_postcode : Joi.allow('').label("This field"),
        country : Joi.allow('').label("This field"),
        
            // .options({language: {string: {regex: { base: "Use atleast 8 character and dont use space" },},},}),
    };
    schema3 = {
        unit_label : Joi.allow('').label("This field"),
        street_address : Joi.allow('').label("This field"),
        suburb : Joi.allow('').label("This field"),
        state : Joi.allow('').label("This field"),
        postCode : Joi.allow('').label("This field"),
        gst : Joi.allow('').label("This field"),
        estimated_turn_over : Joi.allow('').label("This field"),
        gst_res : Joi.allow('').label("This field"),
        tax_report : Joi.allow('').label("This field"),
        commence_date : Joi.allow('').label("This field"),
        goods_service : Joi.allow('').label("This field"),
        have_employee : Joi.allow('').label("This field"),
        sign_up : Joi.allow('').label("This field"),
        when_commence : Joi.allow('').label("This field"),
        employee_pay : Joi.allow('').label("This field"),
        payment_each_year : Joi.allow('').label("This field"),
        working_holiday : Joi.allow('').label("This field"),
        summary_report : Joi.allow('').label("This field"),
        provide_paymnet_summary : Joi.allow('').label("This field"),
        pay_royalties : Joi.allow('').label("This field"),
        declarant_given_name : Joi.allow('').label("This field"),
        declarant_family_name : Joi.allow('').label("This field"),
        designation : Joi.allow('').label("This field"),
        final_declaration : Joi.allow('').label("This field"),
    // .options({language: {string: {regex: { base: "Use atleast 8 character and dont use space" },},},}),
    };

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
    price = [
    { value: '59', label: '$59 for one year' },
    { value: '139', label: '$139 for three years' },
    ];
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
    director_type = [
    { value: 'Individual', label: 'Individual' },
    { value: 'Company', label: 'Company' },
    ];
    office_hours = [
    { value: '10_12 2_4', label: 'Registered office open to the public each business day from at least 10 am to 12 noon and 2 pm to 4 pm.' },
    { value: '9_5', label: 'Registered office open to the public each business day for at least 3 hours between 9 am and 5 pm.' },
    ]
    
    territory_of_registration = [
    { value: 'ACT ', label: 'ACT ' },
    { value: 'NSW ', label: 'NSW ' },
    { value: 'WA ', label: 'WA ' },
    { value: 'QLD ', label: 'QLD ' },
    { value: 'TAS ', label: 'TAS ' },
    { value: 'SA ', label: 'SA ' },
    { value: 'NT ', label: 'NT ' },
    ]
    country = [
    { value: 'Australia', label: 'Australia' },
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'India', label: 'India' }
    ];
    bstate = [
    { value: 'Australia', label: 'Australia' },
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'India', label: 'India' }
    ];
    city = [
    { value: 'Australia', label: 'Australia' },
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'India', label: 'India' }
    ];
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
      goods_service = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ]
      working_holiday = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
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
    handleCustomChange = async (e) => {
    //    console.log(target.name)
        
        const data = { ...this.state.data2 };
        if(e.target.name === 'declaration'){
            data[e.target.name] = e.target.checked;
        }
        else if(e.target.name === 'final_declaration'){
            data[e.target.name] = e.target.checked;
        }
        else{
            data[e.target.name] = e.target.value; 
        }
        
        this.setState({ data2: data});
        
    }
    handleCustomSelctChange = async (e, name) => {
        if(this.state.activeStep === 1){
            const data = { ...this.state.data2 };
                data[name] = e;
                this.setState({ data2 : data});
            if(name === 'number_of_partner'){
                let data = [ ...this.state.partner ];
                let partner = [];
                let current = e.value;
                let prev = this.state.data2.number_of_partner.value;
                let obj =   {
                        p_given_name:'',      
                        p_family_name:'',      
                        p_past_name:'',      
                        p_email:'',      
                        p_phone:'',      
                        p_dob:'',      
                        p_cob:'',      
                        p_sob:'',   
                        p_cityob:'',       
                        p_unit:'',      
                        p_street_address:'',      
                        p_subrub:'',      
                        p_state:'',      
                        p_postCode:'',      
                        p_tfn:'',      
                        p_declaration:true,
                    }
                    
                    
                    if(prev < current ){
                        partner = [...this.state.partner]
                        for (let i = prev; i < e.value ; i++){
                            partner.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        partner = [...this.state.partner]
                        for (let i = prev; i > current ; i--){
                            partner.pop() 
                        } 
                    }else{
                        partner = [...this.state.partner]
                        for (let i = 0; i < e.value ; i++){
                            partner.push({...obj}) 
                        } 
                    }
                    
                    this.setState({partner: [...partner]});
            }
            if(name === 'number_of_directors'){
                let data = [ ...this.state.director ];
                let director = [];
                let current = e.value;
                let prev = this.state.data2.number_of_directors.value;
                let obj =   {
                    c_given_name:'',      
                    c_family_name:'',      
                    c_past_name:'',      
                    c_email:'',      
                    c_phone:'',      
                    c_dob:'',      
                    c_cob:'',      
                    c_sob:'',   
                    c_cityob:'',       
                    c_unit:'',      
                    c_street_address:'',      
                    c_subrub:'',      
                    c_state:'',      
                    c_postCode:'',      
                    c_tfn:'',      
                    c_declaration:true,      
                    }
                    
                    
                    if(prev < current ){
                        director = [...this.state.director]
                        for (let i = prev; i < e.value ; i++){
                            director.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        director = [...this.state.director]
                        for (let i = prev; i > current ; i--){
                            director.pop() 
                        } 
                    }else{
                        director = [...this.state.director]
                        for (let i = 0; i < e.value ; i++){
                            director.push({...obj}) 
                        } 
                    }
                    
                    this.setState({director: [...director]});
            }
        }

    }
    handleMultiChange = async (e) => {
       
        let partner = [ ...this.state.partner];
        let index = e.target.id;
        if(e.target.name === 'p_declaration'){
            partner[parseInt(index, 10) - 1 ]['p_declaration'] = e.target.checked;
        }
        else if(e.target.name === 'final_declaration'){
          partner[parseInt(index, 10) - 1 ][e.target.name] = e.target.checked;
        }
        else{
            partner[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
        }
        
        this.setState({ partner : [...partner] });
       
    }
    handleMultiSelctChange = async (e, name, id) => {
        
        let partner = [...this.state.partner]
        
        let index = id.i;
        partner[parseInt(index, 10) - 1 ][name] = e;
        this.setState({ partner : [...partner] });
    }
    handleValidate = () => {
        const data =  this.state.data2;
        const errors = { ...this.state.errors };
        let valid = true;
        if(data.proposed_business_name === ''){
            errors['proposed_business_name'] = 'Can not be empty';
            this.setState({errors: errors})
            valid = false
        }
        return valid
    }
    validateMultiple =  () => {
        
        const data3 = this.state.data3;
        const data = this.state.multiple;
        const error = {...this.state.multipleErr}
        const errors = {...this.state.errors}
        let valid = true;
            if(data3.number_of_director === ''){
                errors['number_of_director'] = 'Number of director can not be empty';
                this.setState({errors: errors})
                valid = false
            }
            if(Object.keys(data).length > 0){
                data.map((item,i) => {
                    if(data[i].dir_full_name === ''){
                        // error['dir_full_name'] = 'Can not be empty'
                        error[i]['dir_full_name'] = 'Can not be empty';
                        this.setState({multipleErr: error, isValid: false})
                        valid = false
                    }
                    else{
                        this.setState({isValid: true})
                        valid = true
                    }
                })
            }
            return valid
    }
    handleNext = () => {
        if(this.state.activeStep === 0 ){
            const errors = this.validateStep1();
            this.setState({ errors: errors || {} });
        
        if (errors) return;
        }
        if(this.state.activeStep === 1 ){
            const errors = this.handleValidate();
            
        if (!errors) return;
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
    handleBusinessStructure = (value) => {
        console.log(value)
        const data = { ...this.state.data2}
        data.business_structure = value;
        this.setState({data2: data})
    };

    render() { 
        const steps = getSteps();
        const  {data1, data2, data3} = this.state;
        const  {partner,director} = this.state;
        let value = [];
        let value1 = [];
        for(let i = 1 ; i<= data2.number_of_partner.value ; i++){
            value.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Partner - {i}</h5>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_given_name"  id = {i} label="Given Name " value={ partner[i-1].c_given_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_family_name"  id = {i} label="Family Name " value={ partner[i-1].c_family_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_past_name"  id = {i} label="Family Name " value={ partner[i-1].c_past_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_email"  id = {i} label="Family Name " value={ partner[i-1].c_email} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_phone"  id = {i} label="Family Name " value={ partner[i-1].c_phone} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_dob"  id = {i} label="Family Name " value={ partner[i-1].c_dob} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_cob"  id = {i} label="Family Name " value={ partner[i-1].c_cob} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_sob"  id = {i} label="Family Name " value={ partner[i-1].c_sob} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_cityob"  id = {i} label="Family Name " value={ partner[i-1].c_cityob} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_unit"  id = {i} label="Family Name " value={ partner[i-1].c_unit} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_street_address"  id = {i} label="Family Name " value={ partner[i-1].c_street_address} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_subrub"  id = {i} label="Family Name " value={ partner[i-1].c_subrub} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_state"  id = {i} label="Family Name " value={ partner[i-1].c_state} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_postCode"  id = {i} label="Family Name " value={ partner[i-1].c_postCode} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="c_tfn"  id = {i} label="Family Name " value={ partner[i-1].c_tfn} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={12}>
                        <CheckInput name="c_declaration" checked={partner[i-1].c_declaration === true} id = {i} label="I am an Australian resident for tax purpose" onChange={(e) => this.handleMultiChange(e)}  />
                    </Grid>
                </Grid>
            )
        }
        for(let i = 1 ; i<= data2.number_of_directors.value ; i++){
            value1.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Director - {i}</h5>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_given_name"  id = {i} label="Given Name " value={ director[i-1].p_given_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_family_name"  id = {i} label="Family Name " value={ director[i-1].p_family_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_past_name"  id = {i} label="Family Name " value={ director[i-1].p_past_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_email"  id = {i} label="Family Name " value={ director[i-1].p_email} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_phone"  id = {i} label="Family Name " value={ director[i-1].p_phone} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_dob"  id = {i} label="Family Name " value={ director[i-1].p_dob} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_cob"  id = {i} label="Family Name " value={ director[i-1].p_cob} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_sob"  id = {i} label="Family Name " value={ director[i-1].p_sob} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_cityob"  id = {i} label="Family Name " value={ director[i-1].p_cityob} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_unit"  id = {i} label="Family Name " value={ director[i-1].p_unit} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_street_address"  id = {i} label="Family Name " value={ director[i-1].p_street_address} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_subrub"  id = {i} label="Family Name " value={ director[i-1].p_subrub} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_state"  id = {i} label="Family Name " value={ director[i-1].p_state} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_postCode"  id = {i} label="Family Name " value={ director[i-1].p_postCode} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="p_tfn"  id = {i} label="Family Name " value={ director[i-1].p_tfn} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={12}>
                        <CheckInput name="p_declaration" checked={director[i-1].p_declaration === true} id = {i} label="I am an Australian resident for tax purpose" onChange={(e) => this.handleMultiChange(e)}  />
                    </Grid>
                </Grid>
            )
        }
    console.log(this.state.data3)
    // console.log(this.state.multiple)
    // console.log(this.state.multipleErr)
    // console.log(this.state.errors)
        return ( 
            <RegistrationContainer>
            <FormWrapper > 
            
            <SelctText>Business Name Registration Form</SelctText>
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
                            
                                <h3>Business Name </h3>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        {this.renderSelect("business_price", "Select duration and price*", this.price)}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("need_abn", "Do you need to register an ABN? (It will cost additional $39)", this.common)}
                                        {/* <p style={{color: '#2D2DFF'}}></p> */}
                                        
                                    </Grid>
                                    {data1.need_abn.value === 'No' ?
                                        <Grid item xs={12}>
                                            {this.renderInput("abn", "Enter your ABN*", 'text')}
                                        </Grid>
                                    :
                                    null}
                                    {data1.need_abn.value === 'Yes' ?
                                        <Grid item xs={12}>
                                            {this.renderSelect("industry_sector", "Industry Sector", this.industry_sector)}
                                        </Grid>
                                    :
                                    null}
                                    
                                    <Grid item xs={12}>
                                        {this.renderInput("business_activity", "Describe your primary business activity", 'text')}
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
                        <h3>Business Structure </h3>
                        <Grid container spacing={1}>
                                <Grid item sm={4} xs={6}>
                                    <TextInput name="proposed_business_name" label="Provide your Proposed Business Name*" focus="true" value={data2.proposed_business_name} onChange = {(e) => this.handleCustomChange(e)} error={this.state.errors['proposed_business_name']}  />
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <TextInput name="proposed_second_business_name" label="Provide your second Proposed Business Name*" value={data2.proposed_second_business_name} onChange = {(e) => this.handleCustomChange(e)}  />
                                </Grid>
                                <Grid item sm={4} xs={6}>
                                    <TextInput name="proposed_third_business_name" label="Provide your third Proposed Business Name*" value={data2.proposed_third_business_name} onChange = {(e) => this.handleCustomChange(e)}  />
                                </Grid>
                                <Grid item sm={12} xs={12}>
                                    <h5 style={{textAlign: 'center', margin: '10px'}}>Please Select Your Business Structure* </h5>
                                    <Cards style={{marginTop :'-15px'}}>
                                        <SelectCard 
                                            icon = {<Person style={{fontSize: '42px', color: '#0101D2'}} />} 
                                            content="Solo Trader / Induvidual"
                                            fnc= { () => this.handleBusinessStructure("Induvidual")} 
                                            status = {true}
                                        />
                                        <SelectCard 
                                            icon = {<Group style={{fontSize: '42px', color: '#0101D2'}} />} 
                                            content="Partnership" 
                                            fnc= { () => this.handleBusinessStructure('Partnership')} 
                                            status = {true}
                                        />
                                        <SelectCard 
                                            icon = {<Business style={{fontSize: '42px', color: '#0101D2'}} />} 
                                            content="Company" 
                                            fnc= { () => this.handleBusinessStructure('Company')} 
                                            status = {true}
                                        />
                                    </Cards>
                                </Grid>
                                {data2.business_structure === 'Induvidual' ?
                                <>
                                    <Grid item xs={12}>
                                        <h5 style={{textAlign: 'center', margin: '10px'}}>Individual</h5>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput label="Given Name " name="solo_given_name" type="text" value={data2.solo_given_name}  onChange={(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput label="Family Name " name="solo_family_name" type="text" value={data2.solo_family_name}  onChange={(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput label="Have you been known by any other name in the past?" name="solo_past_name" type="email" value={data2.solo_past_name}  onChange={(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput label="Email Address" name="solo_email" type="email" value={data2.solo_email} placeholder="Email" onChange={(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput label="Phone Number" name="solo_phone" type="text" value={data2.solo_phone} placeholder="Phone" onChange={(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput label="Date of Birth" name="solo_dob" type="date" value={data2.solo_dob} placeholder="Date of birth" onChange={(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectInput label="Country of birth" name="solo_cob" value={data2.solo_cob}  options={this.country} onChange={(e) => this.handleCustomSelctChange(e,'solo_cob')} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectInput label="Birth State" name="solo_sob" value={data2.solo_sob} options={this.bstate} onChange={(e) => this.handleCustomSelctChange(e,'solo_sob')}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectInput label="Birth City" name="solo_cityob" value={data2.solo_cityob} options={this.country} onChange={(e) => this.handleCustomSelctChange(e,'solo_cityob')} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput label="Address" name="solo_unit" value={data2.solo_unit} placeholder="Unit/Level" onChange={(e) => this.handleCustomChange(e)}  />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput label="&nbsp;" name="solo_street_address" value={data2.solo_street_address} placeholder="Street Address" onChange={(e) => this.handleCustomChange(e)}  />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <SelectInput label="Subrub" name="solo_subrub" options={this.country} value={data2.solo_subrub} onChange={(e) => this.handleCustomSelctChange(e,'solo_subrub')} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <SelectInput label="State" name="solo_state" options={this.country} value={data2.solo_state} onChange={(e) => this.handleCustomSelctChange(e,'solo_state')} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextInput label="&nbsp;" name="solo_postCode" value={data2.solo_postCode} placeholder="Post Code" onChange={(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput label="Tax file number (TFN)" value={data2.solo_tfn} name="solo_tfn" placeholder="Tax file number (TFN)" onChange={(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <CheckInput name="solo_declaration" checked={data2.solo_declaration === true}  label="I am an Australian Resident for tax purpose" onChange={(e) => this.handleCustomChange(e)}  />
                                    </Grid>
                                 </>
                                :null}
                                {data2.business_structure === 'Partnership' ?
                                   <>
                                   <Grid item xs={12}>
                                        <h5 style={{textAlign: 'center', margin: '10px'}}>Partnership</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                     <  SelectInput label="Number of Partners" name="number_of_partner" value={data2.number_of_partner} options={this.number} onChange={(e) => this.handleCustomSelctChange(e,'number_of_partner')} />
                                    </Grid>
                                    {value}
                                    
                                    </>
                                :null}
                                {data2.business_structure === 'Company' ?
                                <>
                                    <Grid item xs={12}>
                                        <h5 style={{textAlign: 'center', margin: '10px'}}>Company</h5>
                                    </Grid>
                                        <Grid item xs={12}>
                                            <TextInput label="ACN*" name="acn_no" value={data2.acn_no}  onChange={(e) => this.handleCustomChange(e)} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            < SelectInput label="Is the company a majority-owned subsidiary?" name="subsidiary" value={data2.subsidiary} options={this.common} onChange={(e) => this.handleCustomSelctChange(e,'subsidiary')} />
                                        </Grid>
                                        {data2.subsidiary.value === 'Yes'?
                                        <Grid item xs={6}>
                                            <TextInput label="Please provide the holding company’s ACN" name="companys_ACN" value={data2.companys_ACN}  onChange={(e) => this.handleCustomChange(e)} />
                                        </Grid>
                                        : null}
                                         <Grid item xs={12}>
                                            < SelectInput label="Number of directors" name="number_of_directors" value={data2.number_of_directors} options={this.number} onChange={(e) => this.handleCustomSelctChange(e,'number_of_directors')} />
                                        </Grid>
                                        {value1}
                                 </>    
                                :null}

                                <Grid item xs={6}></Grid>
                                <Grid item xs={6}>
                                    
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>

                            </Grid>
                       
                        </FormContainer>
                    
                    : null}
                    {this.state.activeStep === 2 ?
                        <FormContainer>
                            <h3>Business Address*</h3>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    {this.renderInput("unit_label", "Unit/Level (optional)", 'text',"true")}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderInput("street_address", "Street address", 'text')}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderInput("suburb", "Suburb", 'text')}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderInput("state", "State", 'text')}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderInput("postCode", "Postcode", 'text')}
                                </Grid>
                            </Grid>
                        <h3>GST account</h3>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                  {this.renderSelect('gst','Do you need to register for GST?', this.common)}
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
                                    {this.renderSelect('goods_service','Do you import goods and services into Australia ?', this.goods_service)}
                                </Grid>
                            </>
                            :null}
                                <h4>PAYG</h4>

                                <Grid item xs={12}>
                                    {this.renderSelect('have_employee','Does your business have employees?', this.common)}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderSelect('sign_up','Do you want to sign up for PAYG through us ?', this.common)}
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
                                    {this.renderSelect('working_holiday','Are you employing any working holiday makers?', this.working_holiday)}
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
                            </>: null}
                                <Grid item xs={12}>
                                    <h4>Declaration</h4>
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("declarant_given_name", "Given Name", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("declarant_family_name", "Family Name ", 'text')}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderInput("designation", "Designation within the business", 'text')}
                                </Grid>

                                <Grid item xs={12}>
                                    {this.renderCheckInput('final_declaration', 'I declare that the information I have given in this application is accurate, full and true.')}
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
                        <NameReview data1={data1} data2={data2} data3={data3} fnc1={this.handleNext} fnc2={this.handleBack} />
                   : null}

                    {this.state.activeStep === 4 ?
                     <NameBilling fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                    : null
                    }
                </form>
                
            </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default NameRegForm;