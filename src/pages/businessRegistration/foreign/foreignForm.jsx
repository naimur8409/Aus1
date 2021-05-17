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
import ForeignReview from './foreignReview';
import ForeignBilling from './foreignBilling';



const getSteps = () => {
    return ['Step-1', 'Step-2', 'Step-3', 'Step-4', 'Step-5', 'Step-6'];
  }
  


class ForeignForm extends Form {

    state = { 
        activeStep: 0,
        data1: {
            corporation_name: '',
            corporation_number: '',
            date_of_incorporation : '',
            place_of_incorporation : '',
            name_reservation_number: '',
            has_name_reservation : '',
            is_proposed_name : '',
            name_confirmed : false,   
            business_number: '', 
            territory_of_registration:'',  
        },
        data2: {
            aus_at_the_office_of:'',      
            aus_office_unit_level:'',      
            aus_street_number_name:'',      
            aus_subrub_city:'',      
            aus_state:'',      
            aus_postcode:'',      
            office_hours:'',      
            hours_open:'',      
            does_occupy_premises:'',      
            name_of_occupier:'',      
            occupier_confirmed:'',      
            inco_at_the_office_of:'',      
            inco_office_unit_level:'',      
            inco_street_number_name:'',       
            inco_subrub_city:'',      
            inco_state:'',      
            inco_postcode:'',      
            country:'', 
        },
        data3: {
            director_name: '',
            number_of_director: '',
            director_confirmed: false,
            dir_full_name: '',
            type_of_director: '',
            dir_dob: '',
            dir_pob: '',
            dir_former_name: '',
            acn_or_abn: '',
            dir_unit_level: '',
            dir_street_address: '',
            dir_suburb: '',
            dir_state: '',
            dir_postCode: '',
            dir_country: '',
            dir_contact_number: '',
        },
        data4: {
            certificate_of_incorporation: '',
            bodys_constitution_or_MOA_AOA: '',
            other: '',
            given_name: '',
            family_name: '',
            designation: '',
            declaration: true,
    },
        multiple: [],
        errors: {},
        multipleErr: [],
        isValid: false,

     }

     schema1 = {
        corporation_name: Joi.string().required().label("This field"),
        corporation_number: Joi.string().allow('').label("This field"),
        date_of_incorporation: Joi.string().allow('').label("This field"),
        place_of_incorporation: Joi.string().allow('').label("This field"),
        has_name_reservation : Joi.allow('').label("This field"),
        name_reservation_number : Joi.string().allow('').label("This field"),
        is_proposed_name : Joi.allow('').label("This field"),
        name_confirmed : Joi.allow('').label("This field"),
        business_number : Joi.allow('').label("This field"),
        territory_of_registration : Joi.allow('').label("This field"),
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
        director_name : Joi.allow('').label("This field"),
        director_confirmed : Joi.allow('').label("This field"),
        number_of_director : Joi.allow('').label("This field"),
        dir_full_name : Joi.allow('').label("This field"),
        type_of_director : Joi.allow('').label("This field"),
        dir_dob : Joi.allow('').label("This field"),
        dir_pob : Joi.allow('').label("This field"),
        dir_former_name : Joi.allow('').label("This field"),
        acn_or_abn : Joi.allow('').label("This field"),
        dir_unit_level : Joi.allow('').label("This field"),
        dir_street_address : Joi.allow('').label("This field"),
        dir_suburb : Joi.allow('').label("This field"),
        dir_state : Joi.allow('').label("This field"),
        dir_postCode : Joi.allow('').label("This field"),
        dir_country : Joi.allow('').label("This field"),
        dir_contact_number : Joi.allow('').label("This field"),
        // .options({language: {string: {regex: { base: "Use atleast 8 character and dont use space" },},},}),
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
     common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
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
            const errors = this.validateStep2();
             this.setState({ errors: errors || {} });
        
        if (errors) return;
        }
        if(this.state.activeStep === 2 ){
            const errors = this.validateMultiple();
            
        //     this.setState({ errors: errors || {} });
        if (!errors) return;
        }
        this.setState({activeStep :this.state.activeStep + 1});
        
      };
      handleBack = () => {
        this.setState({activeStep :this.state.activeStep - 1});
      };
      handleReset = () => {
        this.setState({activeStep :0});
      };


    render() { 
        const steps = getSteps();
        const  {data1, data2, data3, data4,} = this.state;
        const  {multiple} = this.state;
        let value = [];
        for(let i = 1 ; i<= data3.number_of_director.value ; i++){
            value.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Director - {i}</h5>
                    </Grid>
                    <Grid item xs={6}>
                        {this.renderMultiInput("dir_full_name", "Full Name of the director*", 'text', i, require)}
                    </Grid>
                    
                    <Grid item xs={6}>
                        {this.renderMultiSelect("type_of_director", "Type of the director", this.director_type, i)}
                    </Grid>
                    {
                        multiple[i-1].type_of_director['value'] === 'Individual' ?
                            <>
                            <Grid item xs={6}>
                                {this.renderMultiInput("dir_dob", "Date of birth", 'date', i, )}
                            </Grid>
                            <Grid item xs={6}>
                                {this.renderMultiInput("dir_pob", "Place of birth", 'text', i)}
                            </Grid>
                            <Grid item xs={12}>
                                {this.renderMultiInput("dir_former_name", "Former name", 'text', i)}
                            </Grid>
                            </>
                        : null
                    }
                    {
                        multiple[i-1].type_of_director['value'] === 'Company' ?
                            <>
                            <Grid item xs={6}>
                                {this.renderMultiInput("acn_or_abn", "ACN/ABN", 'text', i)}
                            </Grid>
                            <Grid item xs={6}>
                                {this.renderMultiInput("dir_unit_level", "Unit/Level (optional)", 'text', i)}
                            </Grid>
                            <Grid item xs={6}>
                                {this.renderMultiInput("dir_street_address", "Street address", 'text', i)}
                            </Grid>
                            <Grid item xs={6}>
                                {this.renderMultiInput("dir_suburb", "Suburb", 'text', i)}
                            </Grid>
                            <Grid item xs={6}>
                                {this.renderMultiInput("dir_state", "State", 'text', i)}
                            </Grid>
                            <Grid item xs={6}>
                                {this.renderMultiInput("dir_postCode", "Postcode", 'text', i)}
                            </Grid>
                            <Grid item xs={12}>
                                {this.renderMultiSelect("dir_country", "Country", this.country, i)}
                            </Grid>
                            
                            </>
                            : null
                    }
                    <Grid item xs={12}>
                        {this.renderMultiInput("dir_contact_number", "The contact number of this director", 'text', i)}
                    </Grid>
                </Grid>
            )
        }
    // console.log(data4)
    // console.log(this.state.multiple)
    // console.log(this.state.multipleErr)
    // console.log(this.state.errors)
        return ( 
            <RegistrationContainer>
            <FormWrapper > 
            
            <SelctText>Foreign Company Registration Form</SelctText>
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
                            
                                <h3>Current Registration</h3>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        {this.renderInput("corporation_name", "Corporation Name*", 'text',"true")}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("corporation_number", "Corporation number in place of origin*", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("date_of_incorporation", "Date of Incorporation*", 'date')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderInput("place_of_incorporation", "Place of incorporation/origin*", 'text')}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {this.renderSelect("has_name_reservation", "Has a name reservation been lodged to reserve the body's name?", this.common)}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {data1.has_name_reservation.value === 'Yes' ? this.renderInput("name_reservation_number", "Provide name reservation number*", 'text') : null}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {data1.has_name_reservation.value === 'No' ?this.renderSelect("is_proposed_name", "Is the proposed name identical to a registered business name(s) in Australia?", this.common) : null}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {data1.is_proposed_name.value === 'Yes' ? 
                                            this.renderCheckInput('name_confirmed','I declare that I own or am registering the company for the owner(s) of the identical business name(s), the registration details of which are listed below' )
                                        : null}
                                    </Grid>
                                    {data1.name_confirmed ? 
                                    <Grid item xs={12}>
                                        {this.renderInput("business_number", "Business number", 'text')}
                                    </Grid>
                                    :null}
                                    <Grid item xs={12}>
                                        {this.renderSelect("territory_of_registration", "State/Territory of registration", this.territory_of_registration)}
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
                        <h3>Registered Office Address in Australia </h3>
                        <p style={{textAlign: 'center', fontSize: '14px', margin: '5px'}}>Note: You cannot use a PO Box address</p>
                        <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    {this.renderInput("aus_at_the_office_of", "At the office of, C/- (if applicable)", 'text',"true")}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("aus_office_unit_level", "Office, unit, level", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("aus_street_number_name", "Street number and Street name", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("aus_subrub_city", "Suburb/city", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("aus_state", "State", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("aus_postcode", "Postcode", 'text')}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderSelect("office_hours", "Office hours", this.office_hours)}
                                </Grid>
                                <Grid item xs={12}>
                                    {data2.office_hours.value === '9_5' ? this.renderInput("hours_open", "Insert hours open", 'text') : null}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderSelect("does_occupy_premises", "Does the company occupy the premises?*", this.common)}
                                </Grid>
                                <Grid item xs={6}>
                                    {data2.does_occupy_premises.value === 'No' ? this.renderInput("name_of_occupier", "Name of the occupier ", 'text') : null}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderCheckInput('occupier_confirmed','I agree that the occupier has consented in writing to the company using those premises as the address for its registered office' )}
                                </Grid>
                                <Grid item xs={12}>
                                <h3 style={{textAlign:'center'}}>Registered Office in Place of Incorporation</h3>
                              
                                <p style={{textAlign: 'center', fontSize: '14px', margin: '5px'}}>Note: If no registered office — the principal place of business in place of incorporation</p>
                                </Grid>
                                
                                <Grid item xs={6}>
                                    {this.renderInput("inco_at_the_office_of", "At the office of, C/- (if applicable)", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("inco_office_unit_level", "Office, unit, level", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("inco_street_number_name", "Street number and Street name", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("inco_subrub_city", "Suburb/city", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("inco_state", "State", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("inco_postcode", "Postcode", 'text')}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderSelect("country", "Office hours", this.country)}
                                </Grid>
                                
                                <Grid item xs={6}></Grid>
                                <Grid item xs={6}>
                                    
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>

                            </Grid>
                       
                        </FormContainer>
                    
                    : null}


                    {this.state.activeStep === 2 ?
                        <FormContainer ref="focus">
                        <h3 >Local Agent</h3>
                            <Grid container spacing={1}>
                              
                                <Grid item xs={12}>
                                    {this.renderInput("director_name", "Name of the director*", 'text', "true" )}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderCheckInput('director_confirmed','I authorise e-company to manage all legal documentation related to ASIC and submit all required documentation on behalf of my company.' )}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderSelect("number_of_director", "Number of directors*", this.number)}
                                </Grid>
                                

                                
                                {value}
                                
                                <Grid item xs={6}></Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>
                            </Grid>
                        </FormContainer>
                    : null}

                    {this.state.activeStep === 3 ?
                        <FormContainer>
                            <h3>Upload Documents </h3>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    {this.renderFileInput("certificate_of_incorporation", "Certified copy of the Certificate of Incorporation", 'file')}
                                    
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderFileInput("bodys_constitution_or_MOA_AOA", "Certified copy of the body's Constitution or MOA & AOA", 'file')}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderFileInput("other", "Other", 'file')}
                                </Grid>
                                
                            </Grid>
                            <h3>Declaration</h3>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <h5>Name of the declarant*</h5>
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("given_name", "Given name*", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("family_name", "Family name ", 'text')}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderInput("designation", "Designation within the business*", 'text')}
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderCheckInput("declaration", "I declare that the information I have given in this application is accurate, full and true. *")}
                                </Grid>
                                <Grid item xs={6}></Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                </Grid>
                            </Grid>
                    
                        </FormContainer>
                    
                    : null}
                    {this.state.activeStep === 4 ?
                        <ForeignReview data1={data1} data2={data2} data3={data3} data4={data4} fnc1={this.handleNext} fnc2={this.handleBack} />
                   
                   : null}

                    {this.state.activeStep === 5 ?
                     <ForeignBilling fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                    : null
                    }
                </form>
                
            </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default ForeignForm;