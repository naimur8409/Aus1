import { Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import Joi  from 'joi-browser';
import React, { Component } from 'react'
import Form from '../../../../component/formItem/formValidator';
import SelectInput from '../../../../component/formItem/selectInput';
import TextArea from '../../../../component/formItem/textArea';
import TextInput from '../../../../component/formItem/textInput';
import { DarkBtn } from '../../../../utils/button';
import { FormContainer, FormWrapper, RegistrationContainer, SelctText, Note } from '../../../../utils/globalStyle';
import Billing from './billing';
import Review from './review'

const getSteps = () => {
    return ['Step-1','Step-2','Step-3','Step-4','Review','Billing'];
}
class ChangeCompanyDetailsForm extends Form {
    state = {  
        activeStep: 0,
        data1: {
            name_of_company: '',
            abn: '',
        },
        data2: {
            date_of_change: '',
            changes: '',
            
        },
        data3: {
            late_fee: '',
        },
        data4: {
            declaration: true,
            name: '',
            designation: '',
        },
        form1: {
            date_of_change: '',
            unit: '',
            street: '',
            suburb: '',
            state: '',
            post_code: '',
            country: '',
            address_type: '',
            does_occupy: '',
            occupier: '',
            has_premises: '',
        },
        form2: {
            date_of_appointment: '',
            role_of_officeholder: '',
            person_for_alternate: '',
            given_name_of_officeholder: '',
            family_name_of_officeholder: '',
            date_of_birth: '',
            country_of_birth: '',
            town_of_birth: '',
            has_former: '',
            given_name: '',
            family_name: '',
            unit: '',
            street: '',
            suburb: '',
            state: '',
            post_code: '',
            country: '',
        },
        form3: {
            role_of_officeholder: '',
            person_for_alternate: '',
            given_name_of_officeholder: '',
            family_name_of_officeholder: '',
            date_of_birth: '',
            country_of_birth: '',
            town_of_birth: '',
            given_name: '',
            family_name: '',
            date_of_cessation: '',
        },
        form4: {
            whose_name: '',
            person_for_alternate: '',
            previous_given_name: '',
            previous_family_name: '',
            date_of_birth: '',
            country_of_birth: '',
            town_of_birth: '',
            given_name: '',
            family_name: '',
            date_of_change: '',
        },
        form5: {
            given_name_of_officeholder: '',
            family_name_of_officeholder: '',
            unit: '',
            street: '',
            suburb: '',
            state: '',
            post_code: '',
            country: '',
            role_of_officeholder: '',
            person_for_alternate: '',
            new_role_of_officeholder: '',
            new_person_for_alternate: '',
            date_of_new_role: '',
            describe: '',
        },
        form6: {
            have_resolution: '',
            resolution: '',
            want_resolution: '',
            date_of_resolution: '',
            is_identical: '',
            proposed_company_name: '',
            legal_elements: '',
            required_manual_review: '',
        },
        form7: {
            have_resolution: '',
            resolution: '',
            want_resolution: '',
            date_of_resolution: '',
            proposed_company_type: '',
            legal_elements: '',
            required_manual_review: '',
        },
        form8: {
            given_name_of_director: '',
            family_name_of_director: '',
            date_of_birth: '',
            country_of_birth: '',
            town_of_birth: '',
            given_name: '',
            family_name: '',
            date_of_change: '',
        },
        form9: {
            
            given_name_of_director: '',
            family_name_of_director: '',
            date_of_birth: '',
            country_of_birth: '',
            town_of_birth: '',
            has_former: '',
            given_name: '',
            family_name: '',
            unit: '',
            street: '',
            suburb: '',
            state: '',
            post_code: '',
            country: '',
            date_of_appointment: '',
            is_for_specific_time: '',
            when_end: '',
            conditions: '',
        },
        form10: {
            number_of_shares: '',
            paid_cancelled_share: '',
            date_of_cancellation: '',
            reason: '',
            section_reference: '',
            description: '',
        },
        form11: {
            number_of_shares: '',
            paid_per_share: '',
            unpaid_per_share: '',
            date_of_change: '',
            is_cash: '',
            is_written_contract: '',
            share_class: '',
            effective_date: '',
            reason: '',
        },
        form12: {
            conversion: '',
            share_class: '',
            date_of_converstion: '',
            number_of_shares: '',
            paid_per_share: '',
            unpaid_per_share: '',
            have_resolution: '',
            want_resolution: '',
        },
        form13: {
            service: '',
            share_class: '',
            date_of_subDivision: '',
            number_of_shares: '',
            paid_per_share: '',
            unpaid_per_share: '',
            have_resolution: '',
            want_resolution: '',
        },
        errors: {}
    }
    schema1 = {
        name_of_company: Joi.allow().label("This field"),
        abn: Joi.allow('').label("This field").label('Change business address'),
    };
    schema2 = {
        date_of_change: Joi.allow('').label("This field"),
        changes: Joi.allow('').label("This field"),
        // changes: Joi.alternatives().try([ Joi.object(),Joi.string(),Joi.array().label("This field")]).required(),
    };
    schema3 = {
        late_fee: Joi.allow('').label("This field"),
    };
    schema4 = {
        declaration: Joi.allow().label("This field"),
        name: Joi.allow('').label("This field"),
        designation: Joi.allow('').label("This field"),
    };
    address_type = [
        { value: 'Registered address', label: 'Registered address  ' },
        { value: 'Principle place of business', label: 'Principle place of business ' },
        { value: 'Officeholder’s address', label: 'Officeholder’s address ' },
    ]
    conversion = [
        { value: 'Into smaller number', label: 'Into smaller number' },
        { value: 'Into larger number', label: 'Into larger number' },
    ]
    service = [
        { value: 'Consolidate', label: 'Consolidate' },
        { value: 'Sub-divide', label: 'Sub-divide' },
    ]
    class_reason = [
        { value: 'Issue of Shares', label: 'Issue of Shares' },
        { value: 'Division or conversion of a class of shares', label: 'Division or conversion of a class of shares' },
    ]
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    common1 = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
        { value: 'I dont know', label: 'I dont know' },
    ];
    
    company_type = [
        { value: '205AA- Limited by guarantee to limited by shares $120', label: '205AA- Limited by guarantee to limited by shares $120' },
        { value: '205AB- Ltd by shares & guarantee to Ltd by shares $120', label: '205AB- Ltd by shares & guarantee to Ltd by shares $120' },
        { value: '205AC- Ltd by shares & guarantee to Ltd by guarantee $120', label: '205AC- Ltd by shares & guarantee to Ltd by guarantee $120' },
        { value: '205B- Conversion of company from public to proprietary $120', label: '205B- Conversion of company from public to proprietary $120' },
        { value: '205C ~ Conversion of company from proprietary to public $120', label: '205C ~ Conversion of company from proprietary to public $120' },
        { value: '205F ~ Change of status: no-liability company to company limited by shares $120', label: '205F ~ Change of status: no-liability company to company limited by shares $120' },
        { value: '205G ~ Change of status: limited company to unlimited company $120', label: '205G ~ Change of status: limited company to unlimited company $120' },
        { value: '205H ~ Change of status: unlimited company to limited company $120', label: '205H ~ Change of status: unlimited company to limited company $120' },
        { value: '205X ~ Change of status: limited company to no liability company $120', label: '205X ~ Change of status: limited company to no liability company $120' },
        
    ];
    changes = [
        { value: 'Change business address', label: 'Change business address' },
        { value: 'Appoint a new officeholder', label: 'Appoint a new officeholder' },
        { value: 'Cease/terminate an officeholder', label: 'Cease/terminate an officeholder' },
        { value: 'Change name of an officeholder', label: 'Change name of an officeholder' },
        { value: 'Add a new role to an officeholder', label: 'Add a new role to an officeholder' },
        { value: 'Change company name', label: 'Change company name' },
        { value: 'Change company types', label: 'Change company types' },
        { value: 'Change the name and details of a director', label: 'Change the name and details of a director' },
        { value: 'Appoint an alternate director', label: 'Appoint an alternate director' },
        { value: 'Cancel issued shares', label: 'Cancel issued shares' },
        { value: 'Issue new shares', label: 'Issue new shares' },
        { value: 'Convert shares into a smaller or larger number', label: 'Convert  shares into a smaller or larger number' },
        { value: 'Division/conversion of a class of shares', label: 'Division/conversion of a class of shares' },
    ]
    lateFee = [
        { value: 'Not late $00', label: 'Not late ------ $00' },
        { value: '1 month $82', label: '1 month ------ $82' },
        { value: 'More than 1 month $340', label: 'More than 1 month ------ $340' },
    ];
    role = [
        { value: 'Director', label: 'Director ' },
        { value: 'Secretary', label: 'Secretary' },
        { value: 'Alternate director', label: 'Alternate director ' },
    ]
    role2 = [
        { value: 'Director', label: 'Director ' },
        { value: 'Secretary', label: 'Secretary' },
        { value: 'Alternate director', label: 'Alternate director ' },
        { value: 'Member', label: 'Member ' },
    ]
    legal_elements = [
        { value: 'PTY LTD', label: 'PTY LTD' },
        { value: 'PTY. LTD.', label: 'PTY. LTD.' },
        { value: 'PTY. LIMITED', label: 'PTY. LIMITED' },
        { value: 'PTY LIMITED', label: 'PTY LIMITED' },
        { value: 'PROPRIETARY LTD', label: 'PROPRIETARY LTD' },
        { value: 'PROPRIETARY', label: 'PROPRIETARY' },
    ];
    
    reason = [
        { value: 'S.254J Redeemable preference shares redeemed out of profits', label: 'S.254J Redeemable preference shares redeemed out of profits' },
        { value: 'S.254J Redeemable preference shares redeemed out of a fresh issue of shares', label: 'S.254J Redeemable preference shares redeemed out of a fresh issue of shares' },
        { value: 'S.256A-S.256E Capital reduction - single shareholder company', label: 'S.256A-S.256E Capital reduction - single shareholder company' },
        { value: 'S.256A-S.256E Capital reduction - multiple shareholder company', label: 'S.256A-S.256E Capital reduction - multiple shareholder company' },
        { value: 'S.257H(3) Share buyback - Minimum holding buyback only', label: 'S.257H(3) Share buyback - Minimum holding buyback only' },
        { value: 'S.257H(3) Share buyback - Other buyback types', label: 'S.257H(3) Share buyback - Other buyback types' },
        { value: 'S.257H(3) Share buyback - Other buyback types', label: 'S.257H(3) Share buyback - Other buyback types' },
        { value: 'S.258E(2) and (3) Shares returned to the Company, under section 651C, 742(2), 737 or 738', label: 'S.258E(2) and (3) Shares returned to the Company, under section 651C, 742(2), 737 or 738' },
        { value: 'ss.258E(2) and (3) Shares returned to the Company, under section 1325A (court order)', label: 'ss.258E(2) and (3) Shares returned to the Company, under section 1325A (court order)' },
    ];
    share_class = [
        { value: 'Ordinary share', label: 'Ordinary share' },
        { value: 'A class', label: 'A class' },
        { value: 'B class', label: 'B class' },
        { value: 'c class', label: 'c class' },
        { value: 'D class', label: 'D class' },
        { value: 'E class', label: 'E class' },
        { value: 'F class', label: 'F class' },
        { value: 'G class', label: 'G class' },
        { value: 'H class', label: 'H class' },
        { value: 'I class', label: 'I class' },
        { value: 'J class', label: 'J class' },
        { value: 'K class', label: 'K class' },
        { value: 'L class', label: 'L class' },
        { value: 'M class', label: 'M class' },
        { value: 'N class', label: 'N class' },
        { value: 'O class', label: 'O class' },
        { value: 'p class', label: 'p class' },
        { value: 'Q class', label: 'Q class' },
        { value: 'R class', label: 'R class' },
        { value: 'S class', label: 'S class' },
        { value: 'T class', label: 'T class' },
        { value: 'U class', label: 'U class' },
        { value: 'V class', label: 'V class' },
        { value: 'W class', label: 'W class' },
        { value: 'X class', label: 'X class' },
        { value: 'Y class', label: 'Y class' },
        { value: 'Z class', label: 'Z class' },
        { value: 'Management', label: 'Management' },
        { value: 'life governors', label: 'life governors' },
        { value: 'Employees', label: 'Employees' },
        { value: 'Founders', label: 'Founders' },
        { value: 'Preference', label: 'Preference' },
        { value: 'Cumulative preference', label: 'Cumulative preference' },
        { value: 'Non-cumulative preference', label: 'Non-cumulative preference' },
        { value: 'Redeemable preference', label: 'Redeemable preference' },
        { value: 'Non-redeemable preference', label: 'Non-redeemable preference' },
        { value: 'Cumulative redeemable preference', label: 'Cumulative redeemable preference' },
        { value: 'Non-cumulative redeemable preference', label: 'Non-cumulative redeemable preference' },
        { value: 'Participative preference', label: 'Participative preference' },
        { value: 'Redeemable', label: 'Redeemable' },
        { value: 'Special', label: 'Special' },
    ];
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
    handleCustomChange = async (e,origin) => {
        //    console.log(target.name)
            if(origin === 'form1'){
                
                const data = { ...this.state.form1 };
                data[e.target.name] = e.target.value; 
                this.setState({ form1: data});
            }
            if(origin === 'form2'){
                const data = { ...this.state.form2 };
                data[e.target.name] = e.target.value; 
                this.setState({ form2: data});
            }
            if(origin === 'form3'){
                const data = { ...this.state.form3 };
                data[e.target.name] = e.target.value; 
                this.setState({ form3: data});
            }
            if(origin === 'form4'){
                const data = { ...this.state.form4 };
                data[e.target.name] = e.target.value; 
                this.setState({ form4: data});
            }
            if(origin === 'form5'){
                const data = { ...this.state.form5 };
                data[e.target.name] = e.target.value; 
                this.setState({ form5: data});
            }
            if(origin === 'form6'){
                const data = { ...this.state.form6 };
                data[e.target.name] = e.target.value; 
                this.setState({ form6: data});
            }
            if(origin === 'form7'){
                const data = { ...this.state.form7 };
                data[e.target.name] = e.target.value; 
                this.setState({ form7: data});
            }
            if(origin === 'form8'){
                const data = { ...this.state.form8 };
                data[e.target.name] = e.target.value; 
                this.setState({ form8: data});
            }
            if(origin === 'form9'){
                const data = { ...this.state.form9 };
                data[e.target.name] = e.target.value; 
                this.setState({ form9: data});
            }
            if(origin === 'form10'){
                const data = { ...this.state.form10 };
                data[e.target.name] = e.target.value; 
                this.setState({ form10: data});
            }
            if(origin === 'form11'){
                const data = { ...this.state.form11 };
                data[e.target.name] = e.target.value; 
                this.setState({ form11: data});
            }
            if(origin === 'form12'){
                const data = { ...this.state.form12 };
                data[e.target.name] = e.target.value; 
                this.setState({ form12: data});
            }
            if(origin === 'form13'){
                const data = { ...this.state.form13 };
                data[e.target.name] = e.target.value; 
                this.setState({ form13: data});
            }
            
    }
    handleCustomSelctChange = async (e, name, origin) => {
        if(this.state.activeStep === 1){
            if(origin === 'form1'){
                const data = { ...this.state.form1};
                data[name] = e;
                this.setState({ form1 : data});
            }
            if(origin === 'form2'){
                const data = { ...this.state.form2};
                data[name] = e;
                this.setState({ form2 : data});
            }
            if(origin === 'form3'){
                const data = { ...this.state.form3};
                data[name] = e;
                this.setState({ form3 : data});
            }
            if(origin === 'form4'){
                const data = { ...this.state.form4};
                data[name] = e;
                this.setState({ form4 : data});
            }
            if(origin === 'form5'){
                const data = { ...this.state.form5};
                data[name] = e;
                this.setState({ form5 : data});
            }
            if(origin === 'form6'){
                const data = { ...this.state.form6};
                data[name] = e;
                this.setState({ form6 : data});
            }
            if(origin === 'form7'){
                const data = { ...this.state.form7};
                data[name] = e;
                this.setState({ form7 : data});
            }
            if(origin === 'form8'){
                const data = { ...this.state.form8};
                data[name] = e;
                this.setState({ form8 : data});
            }
            if(origin === 'form9'){
                const data = { ...this.state.form9};
                data[name] = e;
                this.setState({ form9 : data});
            }
            if(origin === 'form10'){
                const data = { ...this.state.form10};
                data[name] = e;
                this.setState({ form10 : data});
            }
            if(origin === 'form11'){
                const data = { ...this.state.form11};
                data[name] = e;
                this.setState({ form11 : data});
            }
            if(origin === 'form12'){
                const data = { ...this.state.form12};
                data[name] = e;
                this.setState({ form12 : data});
            }
            if(origin === 'form13'){
                const data = { ...this.state.form13};
                data[name] = e;
                this.setState({ form13 : data});
            }
        }

    }
    render() { 
        const steps = getSteps();
        const  {data1, data2, data3, data4,form1,form2,form3,form4,
            form5,form6,form7,form8,form9,form10,form11, form12,form13} = this.state;
        console.log(this.state)
        const changeBusinessAddress = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>Change Business Addess</h5>
                </Grid>
                <Grid item xs={12}>
                    <span>New address</span>
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="date_of_change" label="Date of change" value={ form1.date_of_change} type="date" onChange = {(e) => this.handleCustomChange(e,'form1')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="unit" label="Unit/ house number" value={ form1.unit} onChange = {(e) => this.handleCustomChange(e,'form1')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="street" label="Street number and name" value={ form1.street} onChange = {(e) => this.handleCustomChange(e,'form1')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="suburb" label="Suburb" value={ form1.suburb} onChange = {(e) => this.handleCustomChange(e,'form1')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="state" label="State/Territory" value={ form1.state} onChange = {(e) => this.handleCustomChange(e,'form1')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="post_code" label="Post code" value={ form1.post_code} onChange = {(e) => this.handleCustomChange(e,'form1')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="country" label="Country" value={ form1.country} onChange = {(e) => this.handleCustomChange(e,'form1')} />
                </Grid>

                <Grid item xs={12}>
                    <SelectInput name="address_type" label="Address type" options={this.address_type} value={ form1.address_type} onChange = {(e) => this.handleCustomSelctChange(e,'address_type', 'form1')} />
                </Grid>
                <Grid item xs={12}>
                    <SelectInput name="does_occupy" label="Unit/ house number" options={this.common} value={ form1.does_occupy} onChange = {(e) => this.handleCustomSelctChange(e,'address_type', 'form1')} />
                </Grid>
                
                {form1.does_occupy.value === 'Yes' ?
                    <>
                        <Grid item xs={6}>
                        <TextInput name="occupier" label="Provide name of the occupier" value={ form1.occupier} onChange = {(e) => this.handleCustomChange(e,'form1')} />
                            {this.renderInput("occupier", "Provide name of the occupier", 'text')}
                        </Grid>
                        <Grid item xs={6}>
                            <SelectInput name="has_premises" label="Has the occupier of the premises consented in writing to the use this address?" options={this.common} value={ form1.has_premises} onChange = {(e) => this.handleCustomSelctChange(e,'has_premises', 'form1')} />
                        </Grid>
                    </>
                    : null   
                }
            </>
        )
        const appointNewOfficeholder = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>Appoint a new officeholder</h5>
                </Grid>
                <Grid item xs={12}>
                    <span>Appoint a new officeholder</span>
                </Grid>
                <Grid item xs={12}>
                    <TextInput name="date_of_appointment" label="Date of Appoinment" value={ form2.date_of_change} type="date" onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
                <Grid item xs={8}>
                    <SelectInput name="role_of_officeholder" label="Role of appointed officeholder" options={this.role} value={ form2.role_of_officeholder} onChange = {(e) => this.handleCustomSelctChange(e,'role_of_officeholder', 'form2')} />
                </Grid>
                {form2.role_of_officeholder.value === 'Alternate director' ?
                <Grid item xs={4}>
                    <TextInput name="person_for_alternate" label="Person alternate for" value={ form2.person_for_alternate} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
                :null}
                <Grid item xs={6}>
                    <TextInput name="given_name_of_officeholder" label="Given name" value={ form2.given_name_of_officeholder} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="family_name_of_officeholder" label="Family name" value={ form2.family_name_of_officeholder} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="date_of_birth" label="Date of birth" type="date" value={ form2.date_of_birth} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="country_of_birth" label="Country of birth" value={ form2.country_of_birth} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
                <Grid item xs={12}>
                    <TextInput name="town_of_birth" label="Town of birth" value={ form2.town_of_birth} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
                <Grid item xs={8}>
                    <SelectInput name="has_former" label="Does this person have any former names?" options={this.common} value={ form2.has_former} onChange = {(e) => this.handleCustomSelctChange(e,'has_former', 'form2')} />
                </Grid>
                {form2.has_former.value === 'Yes'
                ?
                    <>
                        <Grid item xs={6}>
                            <TextInput name="given_name" label="Given name" value={ form2.given_name} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextInput name="family_name" label="Family name" value={ form2.family_name} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                        </Grid>
                    </>
                :null}
                <Grid item xs={4}>
                    <TextInput name="unit" label="Unit/ house number" value={ form2.unit} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="street" label="Street number and name" value={ form2.street} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="suburb" label="Suburb" value={ form2.suburb} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="state" label="State/Territory" value={ form2.state} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="post_code" label="Post code" value={ form2.post_code} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="country" label="Country" value={ form2.country} onChange = {(e) => this.handleCustomChange(e,'form2')} />
                </Grid>
            </>
        )
        const ceaseOfficeholder = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>Cease/terminate an officeholder</h5>
                </Grid>
                <Grid item xs={12}>
                    <span>Terminate/cease Officeholder</span>
                </Grid>
                <Grid item xs={12}>
                    <TextInput name="date_of_cessation" label="Date of Cessation" value={ form3.date_of_cessation} type="date" onChange = {(e) => this.handleCustomChange(e,'form3')} />
                </Grid>
                <Grid item xs={8}>
                    <SelectInput name="role_of_officeholder" label="Role of appointed officeholder" options={this.role} value={ form3.role_of_officeholder} onChange = {(e) => this.handleCustomSelctChange(e,'role_of_officeholder', 'form3')} />
                </Grid>
                {form3.role_of_officeholder.value === 'Alternate director' ?
                <Grid item xs={4}>
                    <TextInput name="person_for_alternate" label="Person alternate for" value={ form3.person_for_alternate} onChange = {(e) => this.handleCustomChange(e,'form3')} />
                </Grid>
                :null}
                <Grid item xs={6}>
                    <TextInput name="given_name_of_officeholder" label="Given name" value={ form3.given_name_of_officeholder} onChange = {(e) => this.handleCustomChange(e,'form3')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="family_name_of_officeholder" label="Family name" value={ form3.family_name_of_officeholder} onChange = {(e) => this.handleCustomChange(e,'form3')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="date_of_birth" label="Date of birth" type="date" value={ form3.date_of_birth} onChange = {(e) => this.handleCustomChange(e,'form3')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="country_of_birth" label="Country of birth" value={ form3.country_of_birth} onChange = {(e) => this.handleCustomChange(e,'form3')} />
                </Grid>
                <Grid item xs={12}>
                    <TextInput name="town_of_birth" label="Town of birth" value={ form3.town_of_birth} onChange = {(e) => this.handleCustomChange(e,'form3')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="given_name" label="Given name" value={ form3.given_name} onChange = {(e) => this.handleCustomChange(e,'form3')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="family_name" label="Family name" value={ form3.family_name} onChange = {(e) => this.handleCustomChange(e,'form3')} />
                </Grid>
                
            </>
        )
        const changeName = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>CHANGE OF NAME: OFFICEHOLDER OR MEMBER</h5>
                </Grid>
                <Grid item xs={12}>
                    <span>NAME CHANGE DETAILS</span>
                </Grid>
                <Grid item xs={8}>
                    <SelectInput name="whose_name" label="Who’s name do you want to change?" options={this.role2} value={ form4.whose_name} onChange = {(e) => this.handleCustomSelctChange(e,'whose_name', 'form4')} />
                </Grid>
                {form4.whose_name.value === 'Alternate director' ?
                <Grid item xs={4}>
                    <TextInput name="person_for_alternate" label="Person alternate for" value={ form4.person_for_alternate} onChange = {(e) => this.handleCustomChange(e,'form4')} />
                </Grid>
                :null}
                <Grid item xs={12}><span>Previous name</span></Grid>
                <Grid item xs={6}>
                    <TextInput name="previous_given_name" label="Given name" value={ form4.previous_given_name} onChange = {(e) => this.handleCustomChange(e,'form4')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="previous_family_name" label="Family name" value={ form4.previous_family_name} onChange = {(e) => this.handleCustomChange(e,'form4')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="date_of_birth" label="Date of birth" type="date" value={ form4.date_of_birth} onChange = {(e) => this.handleCustomChange(e,'form4')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="country_of_birth" label="Country of birth" value={ form4.country_of_birth} onChange = {(e) => this.handleCustomChange(e,'form4')} />
                </Grid>
                <Grid item xs={12}>
                    <TextInput name="town_of_birth" label="Town of birth" value={ form4.town_of_birth} onChange = {(e) => this.handleCustomChange(e,'form4')} />
                </Grid>
                <Grid item xs={12}><span>New name</span></Grid>
                <Grid item xs={6}>
                    <TextInput name="given_name" label="Given name" value={ form4.given_name} onChange = {(e) => this.handleCustomChange(e,'form4')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="family_name" label="Family name" value={ form4.family_name} onChange = {(e) => this.handleCustomChange(e,'form4')} />
                </Grid>
                
                <Grid item xs={12}>
                    <TextInput name="date_of_change" label="Date of Cessation" value={ form4.date_of_change} type="date" onChange = {(e) => this.handleCustomChange(e,'form4')} />
                </Grid>
                
            </>
        )
        
        const addNewRole = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>Add a new role to an officeholder</h5>
                </Grid>
                <Grid item xs={12}>
                    <span>Add A New Role to An Existing Officeholder</span>
                </Grid>
                
                <Grid item xs={12}><span>Name of the existing officeholder</span></Grid>
                <Grid item xs={6}>
                    <TextInput name="given_name_of_officeholder" label="Given name" value={ form5.given_name_of_officeholder} onChange = {(e) => this.handleCustomChange(e,'form5')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="family_name_of_officeholder" label="Family name" value={ form5.family_name_of_officeholder} onChange = {(e) => this.handleCustomChange(e,'form5')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="unit" label="Unit/ house number" value={ form5.unit} onChange = {(e) => this.handleCustomChange(e,'form5')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="street" label="Street number and name" value={ form5.street} onChange = {(e) => this.handleCustomChange(e,'form5')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="suburb" label="Suburb" value={ form5.suburb} onChange = {(e) => this.handleCustomChange(e,'form5')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="state" label="State/Territory" value={ form5.state} onChange = {(e) => this.handleCustomChange(e,'form5')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="post_code" label="Post code" value={ form5.post_code} onChange = {(e) => this.handleCustomChange(e,'form5')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="country" label="Country" value={ form5.country} onChange = {(e) => this.handleCustomChange(e,'form5')} />
                </Grid>
                <Grid item xs={8}>
                    <SelectInput name="role_of_officeholder" label="Role of appointed officeholder" options={this.role} value={ form5.role_of_officeholder} onChange = {(e) => this.handleCustomSelctChange(e,'role_of_officeholder', 'form5')} />
                </Grid>
                {form5.role_of_officeholder.value === 'Alternate director' ?
                <Grid item xs={4}>
                    <TextInput name="person_for_alternate" label="Person alternate for" value={ form5.person_for_alternate} onChange = {(e) => this.handleCustomChange(e,'form5')} />
                </Grid>
                :null}
                <Grid item xs={8}>
                    <SelectInput name="new_role_of_officeholder" label="Role of appointed officeholder" options={this.role} value={ form5.new_role_of_officeholder} onChange = {(e) => this.handleCustomSelctChange(e,'new_role_of_officeholder', 'form5')} />
                </Grid>
                {form5.new_role_of_officeholder.value === 'Alternate director' ?
                <Grid item xs={4}>
                    <TextInput name="new_person_for_alternate" label="Person alternate for" value={ form5.new_person_for_alternate} onChange = {(e) => this.handleCustomChange(e,'form5')} />
                </Grid>
                :null}
                
                <Grid item xs={12}>
                    <TextInput name="date_of_new_role" label="Enter appointment dates for the new role" value={ form5.date_of_new_role} type="date" onChange = {(e) => this.handleCustomChange(e,'form5')} />
                </Grid>
                <Grid item xs={12}>
                    <TextArea name="describe" label="Please describe the terms of the appointment" value={ form5.describe} onChange = {(e) => this.handleCustomChange(e,'form5')} />
                </Grid>
            </>
        )
        
        const changeCompanyName = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>Change of company name</h5>
                </Grid>
                <Grid item xs={12}>
                    {/* <span>Add A New Role to An Existing Officeholder</span> */}
                </Grid>
                
                <Grid item xs={6}>
                    <SelectInput name="have_resolution" label="Role of appointed officeholder" options={this.common} value={ form6.have_resolution} onChange = {(e) => this.handleCustomSelctChange(e,'have_resolution', 'form6')} />
                </Grid>
                {form6.have_resolution.value === 'Yes' ?
                    <Grid item xs={6}>
                        <TextInput name="resolution" label="Upload the resolution for changing the company name" type="file" value={ form6.resolution} onChange = {(e) => this.handleCustomChange(e,'form6')} />
                    </Grid>
                :null}
                {form6.have_resolution.value === 'No' ?
                    <Grid item xs={6}>
                        <SelectInput name="want_resolution" label="Do you want us to prepare the resolution on your behalf?" options={this.common} value={ form6.want_resolution} onChange = {(e) => this.handleCustomSelctChange(e,'want_resolution', 'form6')} />
                        <Note>It will cost additional $49</Note>
                    </Grid>
                :null}
                
                <Grid item xs={6}>
                    <TextInput name="date_of_resolution" label="Date of the Resolution" value={ form6.date_of_resolution} type="date" onChange = {(e) => this.handleCustomChange(e,'form6')} />
                </Grid>
                <Grid item xs={6}>
                    <SelectInput name="is_identical" label="Role of appointed officeholder" options={this.common1} value={ form6.is_identical} onChange = {(e) => this.handleCustomSelctChange(e,'is_identical', 'form6')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="proposed_company_name" label="Provide the new proposed company name" value={ form6.proposed_company_name} onChange = {(e) => this.handleCustomChange(e,'form6')} />
                </Grid>
                <Grid item xs={6}>
                    <SelectInput name="legal_elements" label="Select the legal elements that you prefer to use" options={this.legal_elements} value={ form6.legal_elements} onChange = {(e) => this.handleCustomSelctChange(e,'legal_elements', 'form6')} />
                </Grid>
                <Grid item xs={6}>
                    <SelectInput name="required_manual_review" label="Do you require manual review of your proposed change of company name?" options={this.common} value={ form6.required_manual_review} onChange = {(e) => this.handleCustomSelctChange(e,'required_manual_review', 'form6')} />
                    <Note>It will cost additional $49</Note>
                </Grid>
                
            </>
        )
        const changeCompanyType = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>Change of company Type</h5>
                </Grid>
                <Grid item xs={12}>
                    {/* <span>NEW NAME DETAILS</span> */}
                </Grid>
                
                <Grid item xs={6}>
                    <SelectInput name="have_resolution" label="Role of appointed officeholder" options={this.common} value={ form7.have_resolution} onChange = {(e) => this.handleCustomSelctChange(e,'have_resolution', 'form7')} />
                </Grid>
                {form7.have_resolution.value === 'Yes' ?
                    <Grid item xs={6}>
                        <TextInput name="resolution" label="Upload the resolution for changing the company name" type="file" value={ form7.resolution} onChange = {(e) => this.handleCustomChange(e,'form7')} />
                    </Grid>
                :null}
                {form7.have_resolution.value === 'No' ?
                    <Grid item xs={6}>
                        <SelectInput name="want_resolution" label="Do you want us to prepare the resolution on your behalf?" options={this.common} value={ form7.want_resolution} onChange = {(e) => this.handleCustomSelctChange(e,'want_resolution', 'form7')} />
                        <Note>It will cost additional $49</Note>
                    </Grid>
                :null}
                
                <Grid item xs={6}>
                    <TextInput name="date_of_resolution" label="Date of the Resolution" value={ form7.date_of_resolution} type="date" onChange = {(e) => this.handleCustomChange(e,'form7')} />
                </Grid>
                <Grid item xs={6}>
                    <SelectInput name="is_identical" label="Role of appointed officeholder" options={this.common1} value={ form7.is_identical} onChange = {(e) => this.handleCustomSelctChange(e,'is_identical', 'form7')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="proposed_company_name" label="Provide the new proposed company name" value={ form7.proposed_company_name} onChange = {(e) => this.handleCustomChange(e,'form7')} />
                </Grid>
                <Grid item xs={6}>
                    <SelectInput name="legal_elements" label="Select the legal elements that you prefer to use" options={this.legal_elements} value={ form7.legal_elements} onChange = {(e) => this.handleCustomSelctChange(e,'legal_elements', 'form7')} />
                </Grid>
                <Grid item xs={6}>
                    <SelectInput name="required_manual_review" label="Do you require manual review of your proposed change of company name?" options={this.common} value={ form7.required_manual_review} onChange = {(e) => this.handleCustomSelctChange(e,'required_manual_review', 'form7')} />
                    <Note>It will cost additional $49</Note>
                </Grid>
                
            </>
        )
        
        const changeDirectorName = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>Name Change Details</h5>
                </Grid>
                <Grid item xs={12}>
                    <span>The Former name of the director</span>
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="given_name_of_director" label="Given name" value={ form8.given_name_of_director} onChange = {(e) => this.handleCustomChange(e,'form8')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="family_name_of_director" label="Family name" value={ form8.family_name_of_director} onChange = {(e) => this.handleCustomChange(e,'form8')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="date_of_birth" label="Date of birth" value={ form8.date_of_birth} type="date" onChange = {(e) => this.handleCustomChange(e,'form8')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="town_of_birth" label="Town of birth" value={ form8.town_of_birth} onChange = {(e) => this.handleCustomChange(e,'form8')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="country_of_birth" label="Country of birth " value={ form8.country_of_birth} onChange = {(e) => this.handleCustomChange(e,'form8')} />
                </Grid>
                <Grid item xs={12}>
                    <span>New name of the director</span>
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="given_name" label="Given name" value={ form8.given_name} onChange = {(e) => this.handleCustomChange(e,'form8')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="family_name" label="Family name" value={ form8.family_name} onChange = {(e) => this.handleCustomChange(e,'form8')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="date_of_change" label="Date of the change" value={ form8.date_of_change} type="date" onChange = {(e) => this.handleCustomChange(e,'form8')} />
                </Grid>
                
            </>
        )
        
        const appointmentDirector = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>Alternate Director</h5>
                </Grid>
                <Grid item xs={12}>
                    <span>Name of the alternate director</span>
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="given_name_of_director" label="Given name" value={ form9.given_name_of_director} onChange = {(e) => this.handleCustomChange(e,'form9')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="family_name_of_director" label="Family name" value={ form9.family_name_of_director} onChange = {(e) => this.handleCustomChange(e,'form9')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="date_of_birth" label="Date of birth" value={ form9.date_of_birth} type="date" onChange = {(e) => this.handleCustomChange(e,'form9')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="town_of_birth" label="Town of birth" value={ form9.town_of_birth} onChange = {(e) => this.handleCustomChange(e,'form9')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="country_of_birth" label="Country of birth " value={ form9.country_of_birth} onChange = {(e) => this.handleCustomChange(e,'form9')} />
                </Grid>
                
                <Grid item xs={6}>
                    <SelectInput name="has_former" label="Does this person have any former names?" options={this.common} value={ form9.has_former} onChange = {(e) => this.handleCustomSelctChange(e,'has_former', 'form9')} />
                </Grid>
                {form9.has_former.value === 'Yes' ?
                    <>
                        <Grid item xs={12}>
                            <span>Provide the former name</span>
                        </Grid>
                        <Grid item xs={6}>
                            <TextInput name="given_name" label="Given name" value={ form9.given_name} onChange = {(e) => this.handleCustomChange(e,'form9')} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextInput name="family_name" label="Family name" value={ form9.family_name} onChange = {(e) => this.handleCustomChange(e,'form9')} />
                        </Grid>
                    </>
                :null}
                
                <Grid item xs={12}>
                    <p>Residential address of the alternate director </p>
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="unit" label="Unit/ house number" value={ form9.unit} onChange = {(e) => this.handleCustomChange(e,'form9')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="street" label="Street number and name" value={ form9.street} onChange = {(e) => this.handleCustomChange(e,'form9')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="suburb" label="Suburb" value={ form9.suburb} onChange = {(e) => this.handleCustomChange(e,'form9')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="state" label="State/Territory" value={ form9.state} onChange = {(e) => this.handleCustomChange(e,'form9')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="post_code" label="Post code" value={ form9.post_code} onChange = {(e) => this.handleCustomChange(e,'form9')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="country" label="Country" value={ form9.country} onChange = {(e) => this.handleCustomChange(e,'form9')} />
                </Grid>
                
                <Grid item xs={6}>
                    <TextInput name="date_of_appointment" label="Date of appointment" value={ form9.date_of_appointment} type="date" onChange = {(e) => this.handleCustomChange(e,'form9')} />
                </Grid>
                
                <Grid item xs={6}>
                    <SelectInput name="is_for_specific_time" label="Is the appointment for a specific time?" options={this.common} value={ form9.is_for_specific_time} onChange = {(e) => this.handleCustomSelctChange(e,'is_for_specific_time', 'form9')} />
                </Grid>
                

                {form9.is_for_specific_time.value === 'Yes' ?
                    <Grid item xs={6}>
                        <TextInput name="when_end" label="When does it end?" value={ form9.when_end} type="date" onChange = {(e) => this.handleCustomChange(e,'form9')} />
                    </Grid>
                :null}
                
                <Grid item xs={6}>
                    <TextArea name="conditions" label="Provide the conditions of appointment">value={ form9.conditions}</TextArea>
                </Grid>
                
            </>
        )
        
        const cancelShare = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>Cancellation Details</h5>
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="number_of_shares" label="The number of shares    cancelled" value={ form10.number_of_shares} onChange = {(e) => this.handleCustomChange(e,'form10')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="paid_cancelled_share" label="Amount paid for cancelled shares (cash or otherwise)" value={ form10.paid_cancelled_share} onChange = {(e) => this.handleCustomChange(e,'form10')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="date_of_cancellation" label="The effective date of cancellation" value={ form10.date_of_cancellation} type="date" onChange = {(e) => this.handleCustomChange(e,'form10')} />
                </Grid>
                
                <Grid item xs={12}>
                    <p>Reason of Cancelation</p>
                </Grid>
                <Grid item xs={6}>
                    <SelectInput name="reason" label="Please select one" options={this.reason} value={ form10.reason} onChange = {(e) => this.handleCustomSelctChange(e,'reason', 'form10')} />
                </Grid>
                {form10.reason.value === 'S.256A-S.256E Capital reduction - multiple shareholder company' ?
                    <Grid item xs={12}>
                        <Note>Note: A form 2560 must be lodged before capital reduction takes place. We will send you the form 2560 to fill-up and send back to us. </Note>
                    </Grid>
                    :null
                }
                {form10.reason.value === 'S.257H(3) Share buyback - Other buyback types' ?
                    <Grid item xs={12}>
                        <Note>Note: A form 280 or 281 must be lodged at least 14 days and no more than one year before the share buyback can take place. We will send you the required form to fill-up and send it back to us. </Note>
                    </Grid>
                    :null
                }
                <Grid item xs={12}>
                    <p>Other reason for the cancellation</p>
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="section_reference" label="Section reference" value={ form10.section_reference} onChange = {(e) => this.handleCustomChange(e,'form10')} />
                </Grid>
                <Grid item xs={4}>
                    <TextInput name="description" label="description" value={ form10.description} onChange = {(e) => this.handleCustomChange(e,'form10')} />
                </Grid>
            </>
        )
        
        const issueShare = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>Details of Share Issue </h5>
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="number_of_shares" label="The number of shares issued" value={ form11.number_of_shares} onChange = {(e) => this.handleCustomChange(e,'form11')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="paid_per_share" label="Amount paid per share" value={ form11.paid_per_share} onChange = {(e) => this.handleCustomChange(e,'form11')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="unpaid_per_share" label="Amount unpaid per share" value={ form11.unpaid_per_share} onChange = {(e) => this.handleCustomChange(e,'form11')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="date_of_change" label="Earliest date of change" value={ form11.date_of_change} type="date" onChange = {(e) => this.handleCustomChange(e,'form11')} />
                </Grid>
                <Grid item xs={12}>
                    <SelectInput name="is_cash" label="Were shares issued for other than cash?" options={this.common} value={ form11.is_cash} onChange = {(e) => this.handleCustomSelctChange(e,'is_cash', 'form11')} />
                </Grid>
                {form11.is_cash.value === 'Yes' ?
                    <>
                        <Grid item xs={12}>
                            <SelectInput name="is_written_contract" label="Are some or all of the shares issued under a written contract?" options={this.common} value={ form11.is_written_contract} onChange = {(e) => this.handleCustomSelctChange(e,'is_written_contract', 'form11')} />
                        </Grid>
                    </>
                :null}
                
                <Grid item xs={12}>
                    <h5>is_written_contract</h5>
                    <span>Complete the share class details for the new share class</span>
                </Grid>
                <Grid item xs={12}>
                    <SelectInput name="share_class" label="Please select a share class from the list of common classes" options={this.share_class} value={ form11.share_class} onChange = {(e) => this.handleCustomSelctChange(e,'share_class', 'form11')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="effective_date" label="Effective Date" value={ form11.effective_date} type="date" onChange = {(e) => this.handleCustomChange(e,'form11')} />
                </Grid>
                
                <Grid item xs={6}>
                    <SelectInput name="reason" label="Reason for a new class" options={this.class_reason} value={ form11.reason} onChange = {(e) => this.handleCustomSelctChange(e,'reason', 'form11')} />
                </Grid>
                
            </>
        )
        const covertIntonumber = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>Conversion of Shares Into Smaller or Larger Numbers </h5>
                </Grid>
                <Grid item xs={12}>
                    <SelectInput name="conversion" label="Conversion " options={this.conversion} value={ form12.conversion} onChange = {(e) => this.handleCustomSelctChange(e,'conversion', 'form12')} />
                </Grid>
                <Grid item xs={12}>
                    <SelectInput name="share_class" label="Chose share class" options={this.share_class} value={ form12.share_class} onChange = {(e) => this.handleCustomSelctChange(e,'share_class', 'form12')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="date_of_converstion" label="Date of conversion" value={ form12.date_of_converstion} type="date" onChange = {(e) => this.handleCustomChange(e,'form12')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="number_of_shares" label="The total number of current shares after changes" value={ form12.number_of_shares} onChange = {(e) => this.handleCustomChange(e,'form12')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="paid_per_share" label="The total amount paid on these shares" value={ form12.paid_per_share} onChange = {(e) => this.handleCustomChange(e,'form12')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="unpaid_per_share" label="The total amount unpaid on these shares" value={ form12.unpaid_per_share} onChange = {(e) => this.handleCustomChange(e,'form12')} />
                </Grid>
                <Grid item xs={12}>
                    <SelectInput name="have_resolution" label="Do you have the resolution for the share consolidation/ sub-division" options={this.common} value={ form12.have_resolution} onChange = {(e) => this.handleCustomSelctChange(e,'have_resolution', 'form12')} />
                </Grid>
                {form12.have_resolution.value === 'No' ?
                    <>
                        <Grid item xs={12}>
                            <SelectInput name="want_resolution" label="Do you want us to prepare the resolution? " options={this.common} value={ form12.want_resolution} onChange = {(e) => this.handleCustomSelctChange(e,'want_resolution', 'form12')} />
                            <Note>It will cost additinal $89</Note>
                        </Grid>
                    </>
                :null}
                
            </>
        )
        const divisionShare = (
            <>
                <Grid item xs={12}>
                    <br/>
                    <h5>Conversion of Shares Into Smaller or Larger Numbers </h5>
                </Grid>
                <Grid item xs={12}>
                    <SelectInput name="service" label="Select service" options={this.service} value={ form13.service} onChange = {(e) => this.handleCustomSelctChange(e,'service', 'form13')} />
                </Grid>
                <Grid item xs={12}>
                    <SelectInput name="share_class" label="Chose share class" options={this.share_class} value={ form13.share_class} onChange = {(e) => this.handleCustomSelctChange(e,'share_class', 'form13')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="date_of_converstion" label="Date of conversion" value={ form13.date_of_converstion} type="date" onChange = {(e) => this.handleCustomChange(e,'form13')} />
                </Grid>
                <Grid item xs={6}>
                    <TextInput name="number_of_shares" label="The total number of current shares after changes" value={ form13.number_of_shares} onChange = {(e) => this.handleCustomChange(e,'form13')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="paid_per_share" label="The total amount paid on these shares" value={ form13.paid_per_share} onChange = {(e) => this.handleCustomChange(e,'form13')} />
                </Grid>
               <Grid item xs={6}>
                    <TextInput name="unpaid_per_share" label="The total amount unpaid on these shares" value={ form13.unpaid_per_share} onChange = {(e) => this.handleCustomChange(e,'form13')} />
                </Grid>
                <Grid item xs={12}>
                    <SelectInput name="have_resolution" label="Do you have the resolution for the share consolidation/ sub-division" options={this.common} value={ form13.have_resolution} onChange = {(e) => this.handleCustomSelctChange(e,'have_resolution', 'form13')} />
                </Grid>
                {form13.have_resolution.value === 'No' ?
                    <>
                        <Grid item xs={12}>
                            <SelectInput name="want_resolution" label="Do you want us to prepare the resolution? " options={this.common} value={ form13.want_resolution} onChange = {(e) => this.handleCustomSelctChange(e,'want_resolution', 'form13')} />
                            <Note>It will cost additinal $89</Note>
                        </Grid>
                    </>
                :null}
                
            </>
        )
        
        return ( 
            <RegistrationContainer>
                <FormWrapper>
                    <SelctText>Change Company Details In Response To Your Company Annual Statement</SelctText>
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
                                        <h5>Company details</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("name_of_company", "Name of company ", 'text', 'true')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("abn", "ABN/ ACN", 'text')}
                                    </Grid>
                                   
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                        :null}
                        {this.state.activeStep === 1 ?
                            <FormContainer>
                                <Grid container spacing={1}>
                                    
                                    <Grid item xs={12}>
                                        <h5>Changes Details</h5>
                                    </Grid>
                                    
                                    <Grid item xs={12}>
                                        {this.renderInput("date_of_change", "Date of change",'date', 'true')}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("changes", "Select the changes", this.changes,'false','true')}
                                    </Grid>
                                    {data2.changes ? data2.changes.map(item => {
                                        if(item.value=== 'Change business address'){
                                            return changeBusinessAddress
                                        }
                                        if(item.value=== 'Appoint a new officeholder'){
                                            return appointNewOfficeholder
                                        }
                                        if(item.value=== 'Cease/terminate an officeholder'){
                                            return ceaseOfficeholder
                                        }
                                        if(item.value=== 'Change name of an officeholder'){
                                            return changeName
                                        }
                                        if(item.value=== 'Add a new role to an officeholder'){
                                            return addNewRole
                                        }
                                        if(item.value=== 'Change company name'){
                                            return changeCompanyName
                                        }
                                        if(item.value=== 'Change company types'){
                                            return changeCompanyType
                                        }
                                        if(item.value=== 'Change the name and details of a director'){
                                            return changeDirectorName
                                        }
                                        if(item.value=== 'Appoint an alternate director'){
                                            return appointmentDirector
                                        }
                                        if(item.value=== 'Cancel issued shares'){
                                            return cancelShare
                                        }
                                        if(item.value=== 'Issue new shares'){
                                            return issueShare
                                        }
                                        if(item.value=== 'Convert shares into a smaller or larger number'){
                                            return covertIntonumber
                                        }
                                        if(item.value=== 'Division/conversion of a class of shares'){
                                            return divisionShare
                                        }
                                    }) : null}
                                    
                                   
                                    
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                    
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                        :null}
                        {this.state.activeStep === 2 ?
                            <FormContainer>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <h5>Late Fee</h5>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderSelect("late_fee", "Late Lodgement Fee", this.lateFee, 'true')}
                                        <Note>A late fee is imposed after 28 days of changes</Note>
                                    </Grid>
                                    
                                   
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                    </Grid>
                                </Grid>
                                
                            </FormContainer>
                        :null}
                        {this.state.activeStep === 3 ?
                            <FormContainer>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <h5>Declaration</h5>
                                    </Grid>

                                    
                                    <Grid item xs={12}>
                                        {this.renderCheckInput("declaration", "I authorize e-company to manage all legal documentation related to ASIC and submit all required documentations on behalf of my company.")}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("name", "Declarant Name", 'text', 'true' )}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {this.renderInput("designation", "Designation within the Company", 'text')}
                                    </Grid>
                                    
                                    
                                    <Grid item xs={6}></Grid>
                                    <Grid item xs={6}>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                        <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                                    </Grid>
                                </Grid>
                            
                            </FormContainer>
                        :null}
                         
                        {this.state.activeStep === 4 ?
                              <Review data1={data1} data2={data2} data3={data3} fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                        {this.state.activeStep === 5 ?
                              <Billing fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />:null
                        }
                            
                    </form>
                </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default ChangeCompanyDetailsForm;