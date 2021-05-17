import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react'
import { DarkBtn } from '../../../utils/button';
import {RegistrationContainer,SelctText,  FormContainer, FormWrapper } from '../../../utils/globalStyle';
import Form from '../../../component/formItem/formValidator';
import Joi from 'joi-browser';
import PartnerReview from './partnerReview';
import PartnerBilling from './partnerBilling';
import SelectInput from '../../../component/formItem/selectInput';
import TextInput from '../../../component/formItem/textInput';
import CheckInput from '../../../component/formItem/checkInput';


const getSteps = () => {
    return ['Step-1', 'Step-2', 'Step-3', 'Step-4', 'Step-5', 'Step-6'];
  }
  


class PartnerRegForm extends Form {

    state = { 
        activeStep: 0,
        data1: {
            number_of_partner: '',
        },
        data2: {
            busi_unit:'',      
            busi_street:'',      
            busi_subrub:'',      
            busi_state:'',      
            busi_post_code:'',

            abn_activation_date:'',
            industry_sector:'',
            business_activity: '',

            proposed_business_name:'',      
            proposed_second_business_name:'',      
            proposed_third_business_name:'', 

            
        },
        data3: {
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
        },
        data4: {
            declarant_given_name: '',
            declarant_family_name: '',
            designation: '',
            final_declaration: '',
        },
        errors: {},
        partner: [],
     }

    schema1 = {
        // business_structure: Joi.alternatives().try([ Joi.object(),Joi.string().label("This field")]).required(),
        number_of_partner: Joi.allow('').label("This field"),
        

    };
    schema2 = {
        
        busi_unit: Joi.allow('').label("This field"),
        busi_street: Joi.allow('').label("This field"),
        busi_subrub: Joi.allow('').label("This field"),
        busi_state: Joi.allow('').label("This field"),
        busi_post_code: Joi.allow('').label("This field"),
        abn_activation_date : Joi.allow('').label("This field"),
        industry_sector : Joi.allow('').label("This field"),
        business_activity : Joi.allow('').label("This field"),
        proposed_business_name : Joi.allow('').label("This field"),
        proposed_second_business_name : Joi.allow('').label("This field"),
        proposed_third_business_name : Joi.allow('').label("This field"),
    };
    schema3 = {
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
       
        // .options({language: {string: {regex: { base: "Use atleast 8 character and dont use space" },},},}),
    };

    schema4 = {
        declarant_given_name : Joi.allow('').label("This field"),
        declarant_family_name : Joi.allow('').label("This field"),
        designation : Joi.allow('').label("This field"),
        final_declaration : Joi.allow('').label("This field"),
    }


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
        console.log(value)
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
        if(this.state.activeStep === 0){
            const data = { ...this.state.data1 };
                data[name] = e;
                this.setState({ data1 : data});
            if(name === 'number_of_partner'){
                let partner = [];
                let current = e.value;
                let prev = this.state.data1.number_of_partner.value;
                let obj =   {
                    given_name: '',
                    family_name:'',
                    former: '',
                    former_name:'',
                    email: '',
                    phone: '',
                    dob: '',
                    cob: '',
                    sob: '',
                    cityob: '',
                    home_unit: '',
                    home_street: '',
                    home_subrub: '',
                    home_state: '',
                    home_post_code: '',
                    tfn: '',
                    declaration: true,
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
        }

    }
    handleMultiChange = async (e) => {
       
        let partner = [ ...this.state.partner];
        let index = e.target.id;
        if(e.target.name === 'declaration'){
            partner[parseInt(index, 10) - 1 ]['declaration'] = e.target.checked;
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
        
        let index = id;
        partner[parseInt(index, 10) - 1 ][name] = e;
        this.setState({ partner : [...partner] });
    }

    render() { 
        const steps = getSteps();
        const  {data1, data2, data3, partner} = this.state;
        let value = [];
        for(let i = 1 ; i<= data1.number_of_partner.value ; i++){
            value.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Partner - {i}</h5>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="given_name"  id = {i} label="Given Name " value={ partner[i-1].given_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="family_name"  id = {i} label="Family Name " value={ partner[i-1].family_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <SelectInput name="former" label="Have you been known by any other name in the past?" value={ partner[i-1].former} options={this.common} onChange = {(e) => this.handleMultiSelctChange(e,'former',i)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="former_name"  id = {i} label="Former Name" value={ partner[i-1].former_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="email"  id = {i} label="Email address*" value={ partner[i-1].email} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="phone"  id = {i} label="Phone number*" value={ partner[i-1].phone} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="dob"  id = {i} label="Date of birth" value={ partner[i-1].dob} type="date" onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="cob"  id = {i} label="Country of birth" value={ partner[i-1].cob} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="sob"  id = {i} label="State of birth" value={ partner[i-1].sob} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="cityob"  id = {i} label="City of birth" value={ partner[i-1].cityob} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="home_unit"  id = {i} label="Unit/Level (optional)" value={ partner[i-1].home_unit} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="home_street"  id = {i} label="Street address" value={ partner[i-1].home_street} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="home_subrub"  id = {i} label="Suburb" value={ partner[i-1].home_subrub} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="home_state"  id = {i} label="State" value={ partner[i-1].home_state} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="home_post_code"  id = {i} label="Postcode" value={ partner[i-1].home_post_code} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="tfn"  id = {i} label="Tax file number (TFN)*" value={ partner[i-1].tfn} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={12}>
                        <CheckInput name="declaration" checked={partner[i-1].declaration === true} id = {i} label="I am an Australian resident for tax purpose" onChange={(e) => this.handleMultiChange(e)}  />
                    </Grid>
                </Grid>
            )
        }
    console.log(this.state)
    // console.log(this.state.multiple)
    // console.log(this.state.multipleErr)
    // console.log(this.state.errors)
        return ( 
            <RegistrationContainer>
            <FormWrapper > 
            
            <SelctText>Sole-Trader Package $129</SelctText>
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
                            
                                <h3>ABN Registration</h3>
                                <Grid container spacing={1}>
                                    
                                    <Grid item xs={12}>
                                    <SelectInput name="number_of_partner" label="Number of Partners*" value={ data1.number_of_partner} options={this.number} onChange = {(e) => this.handleCustomSelctChange(e,'number_of_partner')} />
                    
                                    </Grid>
                                    {value}
                                    


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
                                    <h5>Business Address</h5>
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
                                <Grid item xs={12}>
                                    <h3>Business Activity</h3>
                                </Grid>
                                
                                <Grid item xs={6}>
                                    {this.renderInput("abn_activation_date", "ABN activation date", 'date')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderSelect("industry_sector", "Industry sector", this.industry_sector)}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("business_activity", "Describe your primary business activity*", 'text')}
                                </Grid>

                                <Grid item xs={12}>
                                        <h5>Business Name</h5>
                                </Grid>
                                
                                <Grid item xs={6}>
                                    {this.renderInput("proposed_business_name", "Provide your Proposed Business Name*", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("proposed_second_business_name", "Provide your Second  Business Name*", 'text')}
                                </Grid>
                                <Grid item xs={6}>
                                    {this.renderInput("proposed_third_business_name", "Provide your Third  Business Name*", 'text')}
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
                                    <h5>GST Registration</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    {this.renderSelect('gst','Do you need to register for GST?*', this.common)}
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
                                    <h5>Declaration</h5>
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


                    {this.state.activeStep === 4 ?
                        <PartnerReview data1={data1} data2={data2} data3={data3} fnc1={this.handleNext} fnc2={this.handleBack} />
                   : null}

                    {this.state.activeStep === 5 ?
                     <PartnerBilling fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                    : null
                    }
                </form>
                
            </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default PartnerRegForm;