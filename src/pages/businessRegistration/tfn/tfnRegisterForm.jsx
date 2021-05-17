import { Grid, Step, StepLabel, Stepper, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import CheckInput from '../../../component/formItem/checkInput';
import RadioInput from '../../../component/formItem/radioInput';
import TextArea from '../../../component/formItem/textArea';
import SelectInput from '../../../component/formItem/selectInput';
import TextInput from '../../../component/formItem/textInput';
import { DarkBtn } from '../../../utils/button';
import {RegistrationContainer,SelctText, BillingContainer, FormContainer, FormWrapper, PreviewContainer,Line } from '../../../utils/globalStyle';
import Form from '../../../component/formItem/formValidator';
import Joi from 'joi-browser';
import TFNBilling from './tfnBilling';
import TFNReview from './tfnReview';





const getSteps = () => {
    return ['Step-1', 'Step-2', 'Step-3', 'Step-4', 'Step-5', 'Review','Proceed'];
  }
  


class TfnRegform extends Form {
    state = { 
        activeStep: 0,
        data1: {
            tax_exe_category:'', 
            Australin_res_tex:'',
            type_of_organisation:'',

        },
        data2: {
            partnership_tfn_date:'',
            primary_business_activities:'',
            operator_agriculture_property:'',
            ACN:'',
            holding_company:'',
            tfn_date:'',
            business_activities:'',
            Agriculture_property:'',
        },
        data3: {
            unit: '',
            street_number: '',
            subrub: '',
            state: '',
            postCode: '',
            country: '',
            isSame: '',
            isSame_unit: '',
            isSame_street_number: '',
            isSame_subrub: '',
            isSame_state: '',
            isSame_postCode: '',
            isSame_country: '',
            email: '',
        },
        data4: {
            number_of_authorised: '',

            number_of_associated: '',
            has_associated_organization:'',
            number_of_organization:'',
            final_declaration: true,
    },
        authorised: [],
        associated: [],
        organization: [],
        errors: {},
        multipleErr: [],
     }
     
     schema1 = {
        type_of_organisation:Joi.alternatives().try([ Joi.object(),Joi.string().label("This field")]).required(),
        Australin_res_tex:Joi.allow('').required().label("This field"),
        tax_exe_category: Joi.allow().label("This field"),
    
    };
     schema2 = {
        partnership_tfn_date:Joi.allow('').label("This field"),
        primary_business_activities:Joi.allow('').required().label("This field"),
        operator_agriculture_property:Joi.allow('').label("This field"),
        ACN:Joi.string().required().label("This field"),
        holding_company:Joi.allow('').label("This field"),
        tfn_date:Joi.allow('').label("This field"),
        business_activities:Joi.string().required().label("This field"),
        Agriculture_property:Joi.allow('').label("This field"),
            // .options({language: {string: {regex: { base: "Use atleast 8 character and dont use space" },},},}),
      };
    //  schema = {
    //     corporation_name: Joi.string().required().label("This field"),
    //     corporation_number: Joi.string().allow('').label("This field"),
    //     date_of_incorporation: Joi.string().allow('').label("This field"),
    //     place_of_incorporation: Joi.string().allow('').label("This field"),
    //     has_name_reservation : Joi.allow('').label("This field"),
    //     name_reservation_number : Joi.string().allow('').label("This field"),
    //     is_proposed_name : Joi.allow('').label("This field"),
    //     name_confirmed : Joi.allow('').label("This field"),
    //     business_number : Joi.allow('').label("This field"),
    //     territory_of_registration : Joi.allow('').label("This field"),
    //     aus_at_the_office_of : Joi.allow('').label("This field"),
    //     aus_office_unit_level : Joi.allow('').label("This field"),
    //     aus_street_number_name : Joi.allow('').label("This field"),
    //     aus_subrub_city : Joi.allow('').label("This field"),
    //     aus_state : Joi.allow('').label("This field"),
    //     aus_postcode : Joi.allow('').label("This field"),
    //     office_hours : Joi.allow('').label("This field"),
    //     hours_open : Joi.allow('').label("This field"),
    //     does_occupy_premises : Joi.allow('').label("This field"),
    //     name_of_occupier : Joi.allow('').label("This field"),
    //     occupier_confirmed : Joi.allow('').label("This field"),
    //     inco_at_the_office_of : Joi.allow('').label("This field"),
    //     inco_office_unit_level : Joi.allow('').label("This field"),
    //     inco_street_number_name : Joi.allow('').label("This field"),
    //     inco_subrub_city : Joi.allow('').label("This field"),
    //     inco_state : Joi.allow('').label("This field"),
    //     inco_postcode : Joi.allow('').label("This field"),
    //     country : Joi.allow('').label("This field"),
    //     director_name : Joi.allow('').label("This field"),
    //     director_confirmed : Joi.allow('').label("This field"),
    //     number_of_director : Joi.allow('').label("This field"),
    //     dir_full_name : Joi.string().required().label("This field"),
    //     type_of_director : Joi.allow('').label("This field"),
    //     dir_dob : Joi.allow('').label("This field"),
    //     dir_pob : Joi.allow('').label("This field"),
    //     acn_or_abn : Joi.allow('').label("This field"),
    //     dir_unit_level : Joi.allow('').label("This field"),
    //     dir_street_address : Joi.allow('').label("This field"),
    //     dir_suburb : Joi.allow('').label("This field"),
    //     dir_state : Joi.allow('').label("This field"),
    //     dir_postCode : Joi.allow('').label("This field"),
    //     dir_country : Joi.allow('').label("This field"),
    //     dir_contact_number : Joi.allow('').label("This field"),
    //         // .options({language: {string: {regex: { base: "Use atleast 8 character and dont use space" },},},}),
    //   };
     schema3 = {
        unit : Joi.string().required().label("This field"),
        street_number : Joi.allow('').label("This field"),
        subrub : Joi.allow('').label("This field"),
        state : Joi.allow('').label("This field"),
        postCode : Joi.allow('').label("This field"),
        country : Joi.allow('').label("This field"),
        isSame : Joi.allow('').label("This field"),
        email : Joi.allow('').label("This field"),
        isSame_unit : Joi.string().required().label("This field"),
        isSame_street_number : Joi.allow('').label("This field"),
        isSame_subrub : Joi.allow('').label("This field"),
        isSame_state : Joi.allow('').label("This field"),
        isSame_postCode : Joi.allow('').label("This field"),
        isSame_country : Joi.allow('').label("This field"),
      };
        schema4 = {
            certificate_of_incorporation : Joi.allow('').label("This field"),
            bodys_constitution_or_MOA_AOA : Joi.allow('').label("This field"),
            other : Joi.allow('').label("This field"),
            given_name : Joi.allow('').label("This field"),
            family_name : Joi.allow('').label("This field"),
            designation : Joi.allow('').label("This field"),
            declaration : Joi.allow('').label("This field"),
            
        }
    organisation= [
        { value: 'Australian_p_company', label: 'Australian private company  ' },
        { value: 'Family_partnership', label: 'Family Partenrship' },
        { value: 'other_partnership', label: 'Other Partenrship(other than Limted Partnership)' },

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
     number2 = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
      ];
     director_type = [
        { value: 'Individual', label: 'Individual' },
        { value: 'Company', label: 'Company' },
      ];
      office_hours = [
        { value: '10_12 2_4', label: 'Registered office open to the public each business day from at least 10 am to 12 noon and 2 pm to 4 pm.' },
        { value: '9_5', label: 'Registered office open to the public each business day for at least 3 hours between 9 am and 5 pm.' },
      ]
      
      Australin_res_tex= [
        { value: 'yes ', label: 'Yes ' },
        { value: 'no ', label: 'No ' },
      ];
      
      common= [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ];
    position = [
    { value: 'Company Secretary', label: 'Company Secretary' },
    { value: 'Company Shareholder', label: 'Company Shareholder' },
    { value: 'Director', label: 'Director' },
    { value: 'Public Officer', label: 'Public Officer' },
    ];
      tax_exe_category= [
        { value: 'yes ', label: 'Yes ' },
        { value: 'no ', label: 'No ' },
        
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
      Businessdetails=()=>{
          if(this.state.data1.tax_exe_category==="Australian_p_company")
            return null;
      }
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
            // console.log(errors)
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
    handleCustomChange = async (e) => {
    //    console.log(target.name)
        
        const data = { ...this.state.data4 };
        if(e.target.name === 'declaration'){
            data[e.target.name] = e.target.checked;
            
        }
        else if(e.target.name === 'final_declaration'){
            data[e.target.name] = e.target.checked;
            this.setState({ data4: data});
        }
        else{
            data[e.target.name] = e.target.value; 
        }
        
        this.setState({ data4: data});
        
    }
    handleCustomSelctChange = async (e, name) => {
        if(this.state.activeStep === 3){
            const data = { ...this.state.data4 };
                data[name] = e;
                this.setState({ data4 : data});
            if(name === 'number_of_authorised'){
                let authorised = [];
                let current = e.value;
                let prev = this.state.data4.number_of_authorised.value;
                let obj =   {
                        title:'',      
                        given_name:'',      
                        family_name:'',      
                        auth_position:'',      
                        contact:    '',      
                        after_hour_contact:'',      
                        mobile_number:'',      
                        email:'',   
                    }
                    
                    
                    if(prev < current ){
                        authorised = [...this.state.authorised]
                        for (let i = prev; i < e.value ; i++){
                            authorised.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        authorised = [...this.state.authorised]
                        for (let i = prev; i > current ; i--){
                            authorised.pop() 
                        } 
                    }else{
                        authorised = [...this.state.authorised]
                        for (let i = 0; i < e.value ; i++){
                            authorised.push({...obj}) 
                        } 
                    }
                    
                    this.setState({authorised: [...authorised]});
            }
            if(name === 'number_of_associated'){
                let associated = [];
                let current = e.value;
                let prev = this.state.data4.number_of_associated.value;
                let obj =   {
                        title:'',      
                        given_name:'',      
                        family_name:'',      
                        assoc_position:'',      
                        dob:'',   
                        text_file_number: '',
                        unit:'',
                        street:'',
                        suburb:'',
                        state:'',
                        postCode:'',
                        country:'',
                    }
                    
                    
                    if(prev < current ){
                        associated = [...this.state.associated]
                        for (let i = prev; i < e.value ; i++){
                            associated.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        associated = [...this.state.associated]
                        for (let i = prev; i > current ; i--){
                            associated.pop() 
                        } 
                    }else{
                        associated = [...this.state.associated]
                        for (let i = 0; i < e.value ; i++){
                            associated.push({...obj}) 
                        } 
                    }
                    
                    this.setState({associated: [...associated]});
            }
            if(name === 'number_of_organization'){
                let organization = [];
                let current = e.value;
                let prev = this.state.data4.number_of_organization.value;
                let obj =  {
                        acn:'',      
                        abn:'',      
                        name:'',      
                        position:'Company Shareholder',      
                        text_file_number: '',
                    }
                    
                    
                    if(prev < current ){
                        organization = [...this.state.organization]
                        for (let i = prev; i < e.value ; i++){
                            organization.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        organization = [...this.state.organization]
                        for (let i = prev; i > current ; i--){
                            organization.pop() 
                        } 
                    }else{
                        organization = [...this.state.organization]
                        for (let i = 0; i < e.value ; i++){
                            organization.push({...obj}) 
                        } 
                    }
                    
                    this.setState({organization: [...organization]});
            }
           
        }

    }
    handleCustomMultiChange = async (e) => {
        let authorised = [ ...this.state.authorised];
        let index = e.target.id;
        authorised[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
        this.setState({ authorised : [...authorised] });
      };
    handleAssocMultiChange = async (e) => {
        let associated = [ ...this.state.associated];
        let index = e.target.id;
        associated[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
        this.setState({ associated : [...associated] });
      };
    handleOrganizationMultiChange = async (e) => {
        let organization = [ ...this.state.organization];
        let index = e.target.id;
        organization[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
        this.setState({ organization : [...organization] });
      };
    handleCustomMultiSelectChange = async (e,name, i) => {
        let authorised = [ ...this.state.authorised];
        let index = i;
        authorised[parseInt(index, 10) - 1 ][name] = e;
        this.setState({ authorised : [...authorised] });
      };
    handleAssocMultiSelectChange = async (e,name, i) => {
        let associated = [ ...this.state.associated];
        let index = i;
        associated[parseInt(index, 10) - 1 ][name] = e;
        this.setState({ associated : [...associated] });
      };
    handleOrganizationMultiSelectChange = async (e,name, i) => {
        let organization = [ ...this.state.organization];
        let index = i;
        organization[parseInt(index, 10) - 1 ][name] = e;
        this.setState({ organization : [...organization] });
      };

    render() { 
        const steps = getSteps();
        const  {data1, data2, data3, data4,authorised, associated, organization} = this.state;
        
        let private_authorised = [];
        let private_associated = [];
        let private_organization = [];
        for(let i = 1 ; i<= data4.number_of_authorised.value ; i++){
            private_authorised.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Authorised Person - {i}</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput name="title"  id = {i} label="Tile" value={ authorised[i-1].title} onChange = {(e) => this.handleCustomMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="given_name"  id = {i} label="Given name*" value={ authorised[i-1].given_name} onChange = {(e) => this.handleCustomMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="family_name"  id = {i} label="Family name*" value={ authorised[i-1].family_name} onChange = {(e) => this.handleCustomMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <SelectInput name="auth_position" label="Position*" options={this.position} value={ authorised[i-1].auth_position} onChange = {(e) => this.handleCustomMultiSelectChange(e,'auth_position',i)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="contact"  id = {i} label="Contact number with area code*" value={ authorised[i-1].contact} onChange = {(e) => this.handleCustomMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="after_hour_contact"  id = {i} label="After hour contact number" value={ authorised[i-1].after_hour_contact} onChange = {(e) => this.handleCustomMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="mobile_number"  id = {i} label="Mobile number*" value={ authorised[i-1].mobile_number} onChange = {(e) => this.handleCustomMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="email"  id = {i} label="Email*" value={ authorised[i-1].email} onChange = {(e) => this.handleCustomMultiChange(e)} />
                    </Grid>
                </Grid>
            )
        }
        for(let i = 1 ; i<= data4.number_of_associated.value ; i++){
            private_associated.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Associated Person - {i}</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput name="title"  id = {i} label="Tile" value={ associated[i-1].title} onChange = {(e) => this.handleAssocMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="given_name"  id = {i} label="Given name*" value={ associated[i-1].given_name} onChange = {(e) => this.handleAssocMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="family_name"  id = {i} label="Family name*" value={ associated[i-1].family_name} onChange = {(e) => this.handleAssocMultiChange(e)} />
                    </Grid>
                    
                    <Grid item xs={6}>
                        <TextInput name="dob"  id = {i} label="Date of birth*" value={ associated[i-1].dob} onChange = {(e) => this.handleAssocMultiChange(e)} type="date" />
                    </Grid>
                    <Grid item xs={6}>
                        <SelectInput name="assoc_position" label="Position held:" options={this.position} value={ associated[i-1].assoc_position} onChange = {(e) => this.handleAssocMultiSelectChange(e,'assoc_position',i)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="text_file_number"  id = {i} label="Tax file number*" value={ associated[i-1].text_file_number} onChange = {(e) => this.handleAssocMultiChange(e)} />
                    </Grid>
                    <Grid item xs={12}>
                        <p>Full address*</p>
                    </Grid>
                   
                    <Grid item xs={4}>
                        <TextInput name="unit"  id = {i} label="Unit/ house number" value={ associated[i-1].unit} onChange = {(e) => this.handleAssocMultiChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextInput name="street"  id = {i} label="Street number and name" value={ associated[i-1].street} onChange = {(e) => this.handleAssocMultiChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextInput name="suburb"  id = {i} label="Suburb" value={ associated[i-1].suburb} onChange = {(e) => this.handleAssocMultiChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextInput name="state"  id = {i} label="State/Territory" value={ associated[i-1].state} onChange = {(e) => this.handleAssocMultiChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextInput name="postCode"  id = {i} label="Postcode" value={ associated[i-1].postCode} onChange = {(e) => this.handleAssocMultiChange(e)} />
                    </Grid>
                    <Grid item xs={12}>
                        <SelectInput name="country" label="Country" options={this.country} value={ associated[i-1].country} onChange = {(e) => this.handleAssocMultiSelectChange(e,'country',i)} />
                    </Grid>
                </Grid>
            )
        }
        for(let i = 1 ; i<= data4.number_of_organization.value ; i++){
            private_organization.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Associated Organization - {i}</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput name="acn"  id = {i} label="ACN of the associated organisation*" value={ organization[i-1].acn} onChange = {(e) => this.handleOrganizationMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="abn"  id = {i} label="ABN of the associated organisation*" value={ organization[i-1].abn} onChange = {(e) => this.handleOrganizationMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="name"  id = {i} label="Name of the associated organisation*" value={ organization[i-1].name} onChange = {(e) => this.handleOrganizationMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="position" disabled  id = {i} label="Position held" value={ organization[i-1].position} onChange = {(e) => this.handleOrganizationMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="text_file_number"  id = {i} label="Tax file number*" value={ organization[i-1].text_file_number} onChange = {(e) => this.handleOrganizationMultiChange(e)} />
                    </Grid>
                    
                    
                </Grid>
            )
        }
    // console.log(data3.isSame.value)
    console.log(this.state.organization)
    // console.log(this.state.multipleErr)
    // console.log(this.state.errors)
        return ( 
            <RegistrationContainer>
            <FormWrapper > 
                
            <SelctText>TFN Registration $49</SelctText>
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
                                
                                <h3 style={{alignSelf:'center'}}>Businness Details</h3>
                                <Grid container spacing={1}>
                                    
                                    <Grid item xs={12}>
                                        {this.renderSelect("type_of_organisation", "What type of organisation is the applicant?*", this.organisation,'true')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("Australin_res_tex", "Is the applicant an Australian resident for tax purposes?* (If No is selected We can not accept the application.)", this.Australin_res_tex)}
                                    </Grid>
                                    {/* <p style={{color:'red', margin: '0px'}}>If No is selected We can not accept the application.</p> */}
                                    <Grid item xs={12}>
                                        {this.renderSelect("tax_exe_category", "Is the applicant a type of organisation that fits within an income tax exempt category?", this.tax_exe_category)}
                                    </Grid>
                                        
                                    <Grid item xs={6}>
                                        
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                            
                        : null
                    }


                    {this.state.activeStep === 1 ?
                    <>
                        {data1.type_of_organisation.value === 'Australian_p_company'?
                    
                        <FormContainer>  
                             < h3 style={{alignSelf:'center'}}>Business Activity (Private Company)</h3>     
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                {this.renderInput("ACN", "ACN /ARBN*", 'text', 'true')}
                            </Grid>
                            <Grid item xs={12}>
                                {this.renderInput("holding_company", "If the Australian Private Company is a subsidiary company, what is the ACN or ARBN of your ultimate holding company? ", 'text')}
                            </Grid>
                            <Grid item xs={12}>
                                {this.renderInput("tfn_date", "From what date do you require the TFN? ", 'date')}
                            </Grid>
                            <p>Note: For a new business, this date cannot be more than six months in the future from its registration date. </p>
                            
                            <Grid item xs={12}>
                        {this.renderInput("business_activities", "Describe your main business activities* ", 'text')}
                    </Grid>
                    <Grid item xs={12}>
                                {this.renderSelect("Agriculture_property", "Is the applicant an Australian resident for tax purposes?*", this.Australin_res_tex)}
                            </Grid>
                            <Grid item xs={6}></Grid>
                            <Grid item xs={6}>
                                <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                            </Grid>
                        </Grid>
                        
                    </FormContainer>
                
                        :null}
                    
                     {data1.type_of_organisation.value === 'Family_partnership'?
                    
                     <FormContainer>  
                            <h3 style={{alignSelf:'center'}}>Business Activity (Family Partnership and Other Partnership)</h3>   
                     <Grid container spacing={1}>
                         
                         <Grid item xs={12}>
                             {this.renderInput("partnership_tfn_date", "From what date does the Partnership need its TFN?", 'date')}
                         </Grid>
                         <p>Note: This date cannot be more than six months in the future. If you provide a future date, the TFN will not be issued until that date. </p>
                         
                         <Grid item xs={12}>
                     {this.renderInput("primary_business_activities", "Describe your primary business activity* ", 'text')}
                 </Grid>
                 <Grid item xs={12}>
                             {this.renderSelect("operator_agriculture_property", "Does this Partnership operate in an agricultural property?", this.Australin_res_tex)}
                         </Grid>
                         <Grid item xs={6}></Grid>
                         <Grid item xs={6}>
                             <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                             <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                         </Grid>
                     </Grid>
                     
                 </FormContainer>
             
                     :null}
                         {data1.type_of_organisation.value === 'other_partnership'?
                    
                    <FormContainer>  
                    <h3 style={{alignSelf:'center'}}>Business Activity (Family Partnership and Other Partnership)</h3>   
                    <Grid container spacing={1}>
                        
                        <Grid item xs={12}>
                            {this.renderInput("partnership_tfn_date", "From what date does the Partnership need its TFN?", 'date')}
                        </Grid>
                        <p>Note: This date cannot be more than six months in the future. If you provide a future date, the TFN will not be issued until that date. </p>
                        
                        <Grid item xs={12}>
                            {this.renderInput("primary_business_activities", "Describe your primary business activity* ", 'text')}
                        </Grid>
                        <Grid item xs={12}>
                            {this.renderSelect("operator_agriculture_property", "Does this Partnership operate in an agricultural property?", this.Australin_res_tex)}
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={6}>
                            <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                            <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                        </Grid>
                    </Grid>
             
         </FormContainer>
     
            
                    :null}
                 </>
                    
                    : null}


                    {this.state.activeStep === 2 ?
                        <FormContainer>
                        <h3 >Please provide the complete address:</h3>
                            <Grid container spacing={1}>

                                <Grid item xs={12}>
                                    <p style={{margin: '0px'}}>Please provide the full address:</p>
                                    <p style={{margin: '0px', fontSize: '11px'}}>Note: Address cannot be a PO Box Number. This can be your home address if you carry out a home-based business.</p>
                                </Grid>
                                <Grid item xs={4} sm={6}>
                                    {this.renderInput("unit", "Unit/ house number", 'text','true')}
                                </Grid>
                                <Grid item xs={4} sm={6}>
                                    {this.renderInput('street_number','Street number and name','text' )}
                                </Grid>
                                <Grid item xs={4} sm={6}>
                                    {this.renderSelect("subrub", "Suburb", this.number)}
                                </Grid>
                                <Grid item xs={4} sm={6}>
                                    {this.renderInput("state", "State/Territory", 'text')}
                                </Grid>
                                <Grid item xs={4} sm={6}>
                                    {this.renderInput("postCode", "Post Code", 'text')}
                                </Grid>
                                <Grid item xs={4} sm={6}>
                                    {this.renderSelect("country", "Country", this.country)}
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Grid item xs={12} sm={12}>
                                    {this.renderSelect("isSame", "Is the business entity’s postal address the same as the business address?", this.common)}
                                </Grid>
                                {data3.isSame.value === 'No' ?
                                <>
                                
                                <Grid item xs={12}>
                                    <p style={{margin: '0px'}}>What is the business entity’s postal address?</p>
                                    </Grid>
                                <Grid item xs={4} sm={6}>
                                    {this.renderInput("isSame_unit", "Unit/ house number", 'text','true')}
                                </Grid>
                                <Grid item xs={4} sm={6}>
                                    {this.renderInput('isSame_street_number','Street number and name','text' )}
                                </Grid>
                                <Grid item xs={4} sm={6}>
                                    {this.renderSelect("isSame_subrub", "Suburb", this.number)}
                                </Grid>
                                <Grid item xs={4} sm={6}>
                                    {this.renderInput("isSame_state", "State/Territory", 'text')}
                                </Grid>
                                <Grid item xs={4} sm={6}>
                                    {this.renderInput("isSame_postCode", "Post Code", 'text')}
                                </Grid>
                                <Grid item xs={4} sm={6}>
                                    {this.renderSelect("isSame_country", "Country", this.country)}
                                </Grid>
                                </>
                                :null}
                                <Grid item xs={4} sm={6}>
                                    {this.renderInput("email", "Provide your email address for service of notices and correspondence?", 'text')}
                                </Grid>
                                

                                <Grid item xs={6}></Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>
                            </Grid>
                        </FormContainer>
                    : null}

                    {this.state.activeStep === 3 ?
                    <>
                    {data1.type_of_organisation.value === 'Australian_p_company'?
                        <FormContainer>
                            
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h3>Authorised Person (Private Company) </h3>
                                    <p>Authorised person is a person who can be contacted for further information regarding this business. An authorised person will be able to make changes to this company’s TFN record.</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="How many authorised contact persons do you want to add?" name="number_of_authorised" value={data4.number_of_authorised} options={this.number2} onChange={(e) => this.handleCustomSelctChange(e,'number_of_authorised')} />
                                </Grid>
                                {private_authorised}
                                
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h3>Associated Person (Private Company)</h3>
                                    <p>Associates are the secretaries, shareholders, public officers and directors of the company. Please provide details of all associates.</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="How many associated persons are in the business?" name="number_of_associated" value={data4.number_of_associated} options={this.number2} onChange={(e) => this.handleCustomSelctChange(e,'number_of_associated')} />
                                </Grid>
                                {private_associated}
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h3>Associated Organisations (Private Company)</h3>
                                        </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="Does the business have any associated organisation?" name="has_associated_organization" value={data4.has_associated_organization} options={this.common} onChange={(e) => this.handleCustomSelctChange(e,'has_associated_organization')} />
                                
                                </Grid>
                                {data4.has_associated_organization.value === 'Yes' ?
                                <>
                                <Grid item xs={12}>
                                    <SelectInput label="How many associated organisations are in the business?" name="number_of_organization" value={data4.number_of_organization} options={this.number} onChange={(e) => this.handleCustomSelctChange(e,'number_of_organization')} />
                                </Grid>
                                {private_organization}
                                </>
                                :null
                                }
                                
                            </Grid>
                            <h3>Declaration</h3>
                            <Grid container spacing={1}>
                                
                                <Grid item xs={6}></Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>
                            </Grid>
                    
                        </FormContainer>
                    : null}
                    {data1.type_of_organisation.value === 'Family_partnership'?
                    <FormContainer>
                            
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h3>Authorised Person (Family Partnership and Other Partnership)</h3>
                                    <p>An authorised person is a person who can be contacted for further information regarding this Partnership. An authorised person will be able to make changes to this Partnership's TFN record.</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="How many authorised contact persons do you want to add?" name="number_of_authorised" value={data4.number_of_authorised} options={this.number2} onChange={(e) => this.handleCustomSelctChange(e,'number_of_authorised')} />
                                </Grid>
                                {private_authorised}
                                
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h3>Associated Person (Other Partnership & Family Partnership)</h3>
                                    <p>Associates are the partners, a trustee of a trust or a director of a company. Please provide details of all associates.</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="How many associated persons are in the business?" name="number_of_associated" value={data4.number_of_associated} options={this.number2} onChange={(e) => this.handleCustomSelctChange(e,'number_of_associated')} />
                                </Grid>
                                {private_associated}
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h3>Associated Organisations (Other Partnership & Family Partnership)</h3>
                                        </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="Does the business have any associated organisation?" name="has_associated_organization" value={data4.has_associated_organization} options={this.common} onChange={(e) => this.handleCustomSelctChange(e,'has_associated_organization')} />
                                
                                </Grid>
                                {data4.has_associated_organization.value === 'Yes' ?
                                <>
                                <Grid item xs={12}>
                                    <SelectInput label="How many associated organisations are in the business?" name="number_of_organization" value={data4.number_of_organization} options={this.number} onChange={(e) => this.handleCustomSelctChange(e,'number_of_organization')} />
                                </Grid>
                                {private_organization}
                                </>
                                :null
                                }
                                
                            </Grid>
                            <h3>Declaration</h3>
                            <Grid container spacing={1}>
                                
                                <Grid item xs={6}></Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>
                            </Grid>
                    
                        </FormContainer>
                    :null}
                    {data1.type_of_organisation.value === 'other_partnership'?
                    <FormContainer>
                            
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h3>Authorised Person (Family Partnership and Other Partnership)</h3>
                                    <p>Authorised person is a person who can be contacted for further information regarding this business. An authorised person will be able to make changes to this company’s TFN record.</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="How many authorised contact persons do you want to add?" name="number_of_authorised" value={data4.number_of_authorised} options={this.number2} onChange={(e) => this.handleCustomSelctChange(e,'number_of_authorised')} />
                                </Grid>
                                {private_authorised}
                                
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h3>Associated Person (Private Company)</h3>
                                    <p>Associates are the secretaries, shareholders, public officers and directors of the company. Please provide details of all associates.</p>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="How many associated persons are in the business?" name="number_of_associated" value={data4.number_of_associated} options={this.number2} onChange={(e) => this.handleCustomSelctChange(e,'number_of_associated')} />
                                </Grid>
                                {private_associated}
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h3>Associated Organisations (Private Company)</h3>
                                        </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="Does the business have any associated organisation?" name="has_associated_organization" value={data4.has_associated_organization} options={this.common} onChange={(e) => this.handleCustomSelctChange(e,'has_associated_organization')} />
                                
                                </Grid>
                                {data4.has_associated_organization.value === 'Yes' ?
                                <>
                                <Grid item xs={12}>
                                    <SelectInput label="How many associated organisations are in the business?" name="number_of_organization" value={data4.number_of_organization} options={this.number} onChange={(e) => this.handleCustomSelctChange(e,'number_of_organization')} />
                                </Grid>
                                {private_organization}
                                </>
                                :null
                                }
                                
                            </Grid>
                            <h3>Declaration</h3>
                            <Grid container spacing={1}>
                                
                                <Grid item xs={6}></Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>
                            </Grid>
                    
                        </FormContainer>
                    :null}
                    <Grid item xs={12}>
                        <CheckInput name="final_declaration" checked={data4.final_declaration === true} label="	I declare that the information I have given in this application is accurate, full and true.*" onChange={(e) => this.handleCustomChange(e)}  />
                    </Grid>
                    </>
                    : null}
                    {this.state.activeStep === 4 ?
                        <TFNReview data1={data1} data2={data2} data3={data3} data4={data4} fnc1={this.handleNext} fnc2={this.handleBack} />
                   
                   : null}

                    {this.state.activeStep === 5 ?
                     <TFNBilling fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                    : null
                    }
                </form>
                
            </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default TfnRegform;