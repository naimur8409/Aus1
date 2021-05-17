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
class EmploymentAgreementForm extends Form {
    state = { 
        activeStep: 0,
        data: {
            employment_type: '',
            employment_jurisdiction: '',
            date_of_commence: '',
            unit1: '',
            street1: '',
            subrub1: '',
            state1: '',
            post_code1: '',


            employer_type: '',
            employer_name: '',
            unit2: '',
            street2: '',
            subrub2: '',
            state2: '',
            post_code2: '',
            phone: '',
            email: '',
            fax: '',
            employee_family_name: '',
            employee_given_name: '',
            unit3: '',
            street3: '',
            subrub3: '',
            state3: '',
            post_code3: '',
            phone: '',
            email: '',
        
            job_title: '',
            job_description: '',
            probationary_period: '',
            compensation_type: '',
            compensation_amount: '',
            pay_period: '',
            daily_work_hours: '',
            anual_leave: '',
            will_provide: '',
            post_employement_restrictions: '',
            confidentiality: '',
            non_complete: '',
                location: '',
            non_solicitation: '',
            termination_notice: '',
            resignation_notice: '',
            contract_signing_date: '',
        
            
        
            product: '',
            speed: '',
            describe: '',
        },
        errors: {},
     }
     employment_type = [
        { value: 'Full-time', label: 'Full-time ' },
        { value: 'Part-time', label: 'Part-time' },
        { value: 'Casual', label: 'Casual' },
        { value: 'Fixed-term contract', label: 'Fixed-term contract' },
        ];
    employer_type = [
        { value: 'Individual', label: 'Individual' },
        { value: 'Company', label: 'Company/Organisation' },
    ]
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    probationary_period = [
        { value: 'No probationary period', label: 'No probationary period' },
        { value: 'One month', label: 'One month' },
        { value: 'Two months', label: 'Two months' },
        { value: 'Three months', label: 'Three months' },
        { value: 'Four months', label: 'Four months' },
        { value: 'Five months', label: 'Five months' },
        { value: 'Five months', label: 'Five months' },
        { value: 'Twelve months', label: 'Twelve months' },
    ];
    compensation_type = [
        {value: 'Hourly', label: 'Hourly'},
        {value: 'Daily', label: 'Daily'},
        {value: 'Weekly', label: 'Weekly'},
        {value: 'Monthly', label: 'Monthly'},
        {value: 'Commission Only', label: 'Commission Only'},
        {value: 'Salary plus commission', label: 'Salary plus commission'},
    ]
    pay_period = [
        {value: 'Weekly', label: 'Weekly'},
        {value: 'Fortnightly', label: 'Fortnightly'},
        {value: 'Monthly', label: 'Monthly'},
    ]
    clause= [
        {value: 'While employed', label: 'While employed'},
        {value: 'Six months', label: 'Six months'},
        {value: 'One year', label: 'One year'},
        {value: 'Two years', label: 'Two years'},
    ]
    post_employement_restrictions= [
        {value: 'Confidentiality clause', label: 'Confidentiality clause'},
        {value: 'Non-compete clause', label: 'Non-compete clause'},
        {value: 'Non-solicitation clause', label: 'Non-solicitation clause'},
        {value: 'No restrictions', label: 'No restrictions'},
    ]
    
    
    notice_period = [
        { value: 'One weeks', label: 'One weeks' },
        { value: 'Two weeks', label: 'Two weeks' },
        { value: 'Three weeks', label: 'Three weeks' },
        { value: 'Four weeks', label: 'Four weeks' },
    ]
    product = [
        { value: 'Standard contract $99', label: 'Standard contract $99' },
        { value: 'Customised contract: Consultation with a lawyer over the phone $399', label: 'Customised contract: Consultation with a lawyer over the phone $399' },
    ]
    speed = [
        { value: 'Regular: 3 business days $00', label: 'Regular: 3 business days $00' },
        { value: 'Express: 1 business day add $69', label: 'Express: 1 business day add $69' },
        { value: 'Urgent: by the next four business hours add $ 149', label: 'Urgent: by the next four business hours add $ 149' },
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
            
            <SelctText>Employment Contract $99</SelctText>
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
                                <h3>Basics</h3>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <SelectInput name="employment_type" label="Employment type" value={ data.employment_type} options={this.employment_type} onChange = {(e) => this.handleCustomSelctChange(e,'employment_type')} autoFocus="true" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <SelectInput name="employment_jurisdiction" label="Employment Jurisdiction" value={ data.employment_jurisdiction} options={this.jurisdiction} onChange = {(e) => this.handleCustomSelctChange(e,'employment_jurisdiction')} autoFocus="true" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput name="date_of_commence" label="Employment commence date " type="date" value={data.date_of_commence} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true" />
                                    </Grid>
                                
                                    <Grid item xs={12}>
                                        <span>Employment location</span>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="unit1" label="Unit/Level (optional)" value={data.unit1} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="street1" label="Street address" value={data.street1} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextInput name="subrub1" label="Suburb" value={data.subrub1} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextInput name="state1" label="State" type="date" value={data.state1} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextInput name="post_code1" label="Postcode" value={data.post_code1} onChange = {(e) => this.handleCustomChange(e)} />
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
                                    <h5>Parties</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <span><strong>Employer</strong></span>
                                </Grid>
                                <Grid item xs={6}>
                                    <SelectInput name="employer_type" label="Employer Type" value={data.employer_type} options={this.employer_type} onChange = {(e) => this.handleCustomSelctChange(e,'employer_type')} autoFocus="true" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="employer_name" label="Name" value={data.employer_name} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>

                                <Grid item xs={12}>
                                    <span>Address</span>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="unit2" label="Unit/Level (optional)" value={data.unit2} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="street2" label="Street address" value={data.street2} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="subrub2" label="Suburb" value={data.subrub2} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="state2" label="State" type="date" value={data.state2} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="post_code2" label="Postcode" value={data.post_code2} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="phone" label="Phone number" value={data.phone} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="email" label="Email" type="date" value={data.email} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="fax" label="Fax" value={data.fax} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>

                                <Grid item xs={12}>
                                    <span>Employee</span>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="employee_family_name" label="Given Name" value={data.employee_family_name} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="employee_family_name" label="Family Name" value={data.employee_family_name} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="unit3" label="Unit/Level (optional)" value={data.unit3} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="street3" label="Street address" value={data.street3} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="subrub3" label="Suburb" value={data.subrub3} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="state3" label="State" type="date" value={data.state3} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="post_code3" label="Postcode" value={data.post_code3} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="phone" label="Phone number" value={data.phone} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput name="email" label="Email" type="date" value={data.email} onChange = {(e) => this.handleCustomChange(e)} />
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
                                    <h5>Job details</h5>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="job_title" label="Job title"  value={data.job_title} onChange = {(e) => this.handleCustomChange(e)}  autoFocus="true"/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextArea name="job_description" label="Job description" onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="probationary_period" label="Probationary period" value={ data.probationary_period} options={this.probationary_period} onChange = {(e) => this.handleCustomSelctChange(e,'probationary_period')} />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <h5>Compensation</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="compensation_type" label="Compensation type" value={ data.compensation_type} options={this.compensation_type} onChange = {(e) => this.handleCustomSelctChange(e,'compensation_type')} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="compensation_amount" label="Compensation amount"  value={data.compensation_amount} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="pay_period" label="Pay period" value={ data.pay_period} options={this.pay_period} onChange = {(e) => this.handleCustomSelctChange(e,'pay_period')} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="daily_work_hours" label="Daily work hours"  value={data.daily_work_hours} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="anual_leave" label="Annual leave entitlements"  value={data.anual_leave} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="will_provide" label="Will the employer provide additional superannuation payments beyond the required minimum?" value={ data.will_provide} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'is_agreement_to_condition')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="post_employement_restrictions" label="Post-employment restrictions" value={ data.post_employement_restrictions} options={this.post_employement_restrictions} onChange = {(e) => this.handleCustomSelctChange(e,'post_employement_restrictions')} />
                                </Grid>
                                {data.post_employement_restrictions.value === "Confidentiality clause" ?
                                    <Grid item xs={12}>
                                        <SelectInput name="confidentiality" label="Restricted Period" value={ data.confidentiality} options={this.clause} onChange = {(e) => this.handleCustomSelctChange(e,'confidentiality')} />
                                    </Grid>
                                :null}
                                {data.post_employement_restrictions.value === "Non-compete clause" ?
                                    <>
                                    <Grid item xs={6}>
                                        <SelectInput name="non_complete" label="Prevention Period" value={ data.non_complete} options={this.clause} onChange = {(e) => this.handleCustomSelctChange(e,'non_complete')} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="location" label="Where is the employee restricted from competing?"  value={data.location} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    </>
                                :null}
                                {data.post_employement_restrictions.value === "Non-solicitation clause" ?
                                    <Grid item xs={12}>
                                        <SelectInput name="non_solicitation" label="Prevention Period" value={ data.non_solicitation} options={this.clause} onChange = {(e) => this.handleCustomSelctChange(e,'non_solicitation')} />
                                    </Grid>
                                :null}
                                <Grid item xs={12}>
                                    <SelectInput name="termination_notice" label="Termination notice period" value={ data.termination_notice} options={this.notice_period} onChange = {(e) => this.handleCustomSelctChange(e,'termination_notice')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="resignation_notice" label="Employee resignation notice period" value={ data.resignation_notice} options={this.notice_period} onChange = {(e) => this.handleCustomSelctChange(e,'resignation_notice')} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="contract_signing_date" label="Contract signing date" type="date"  value={data.contract_signing_date} onChange = {(e) => this.handleCustomChange(e)} />
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
 
export default EmploymentAgreementForm;