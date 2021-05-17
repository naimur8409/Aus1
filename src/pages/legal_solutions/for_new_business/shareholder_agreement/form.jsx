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
    return ['Step-1','Step-2','Step-3','Step-4','Step-5','Step-6','Step-7','Review','Billing'];
}
class ShareholderAgreementForm extends Form {
    state = { 
        activeStep: 0,
        data: {
            date_of_agreement: '',
            when_effect: '',
            company_name:'',      
            company_acn:'',      
            company_address:'',      
            company_regi_date:'',      
            total_shared_issue:'',
            description: '',
        
            number_of_shareholders: '',

        
            voting_percentage: '',
            board_meeting_address: '',
            dose_have_doc: '',
            is_agreement_to_condition: '',
            condition: '',
            chairmen_selection_type: '',
            director_appointment_type: '',
            which_decision: '',
        
            number_of_years_of_planing: '',
            number_of_days_to_adopt: '',
            number_of_days_to_end: '',
            number_of_days_to_draft: '',
            dose_have_preparation: '',
        
            amount1: '',
            amount2: '',
            amount3: '',
            amount4: '',
            amount5: '',
        
            how_to_rise: '',
            is_majority_need: '',
            are_prohibited: '',
            how_share_set: '',
            when_fail: '',
            want_provision: '',
            detail: '',
            what_happen: '',
            want_incorporate: '',
            how_long: '',
            want_include_non: '',
            how_long_bind: '',
            when_next: '',
            what_location: '',
        
            product: '',
            speed: '',
            jurisdiction: '',
            describe: '',
            want_our_lawyer: '',
            upload: '',
        },
        errors: {},
        shareholders: [],
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
    shareholder_type = [
        { value: 'Individual', label: 'Individual' },
        { value: 'Company', label: 'Company' },
    ]
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    selection_type = [
        { value: 'Simple majority decision', label: 'Simple majority decision' },
        { value: 'Unanimous decision', label: 'Unanimous decision' },
    ]
    decision = [
        { value: 'Redemption of shares other than as set out in this Agreement', label: 'Redemption of shares other than as set out in this Agreement' },
        { value: 'Issue of new shares by the company other than as set out in the this Agreement', label: 'Issue of new shares by the company other than as set out in the this Agreement' },
        { value: 'Selecting an auditor for the company', label: 'Selecting an auditor for the company' },
        { value: 'Selecting a bank for the company', label: 'Selecting a bank for the company' },
    ]
    how_to_rise = [
        { value: 'Shareholders will provide a loan to the company', label: 'Shareholders will provide a loan to the company' },
        { value: 'Shareholders will buy more shares', label: 'Shareholders will buy more shares' },
        { value: 'Do not specify', label: 'Do not specify' },
    ]
    how_share_set = [
        { value: 'Shareholders on an annual basis', label: 'Shareholders on an annual basis' },
        { value: 'Professional business valuation service', label: 'Professional business valuation service' },
    ]
    what_happen = [
        { value: 'Other shareholders will buy the shares equally', label: 'Other shareholders will buy the shares equally' },
        { value: 'Other shareholders may buy the shares if interested', label: 'Other shareholders may buy the shares if interested' },
        { value: 'Do not specify', label: 'Do not specify' },
    ]
    time = [
        { value: 'Six months', label: 'Six months' },
        { value: 'One year', label: 'One year' },
        { value: 'Two year', label: 'Two year' },
        { value: 'Three year', label: 'Three year' },
        { value: 'Five year', label: 'Five year' },
    ]
    product = [
        { value: 'Standard Agreement $139', label: 'Standard Agreement $139' },
        { value: 'Customised Agreement: Consultation with a lawyer over the phone $499', label: 'Customised Agreement: Consultation with a lawyer over the phone $499' },
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
                this.setState({ data : data});
            if(name === 'number_of_shareholders'){
                let shareholders = [];
                let current = e.value;
                let prev = this.state.data.number_of_shareholders.value;
                let obj =   {
                    shareholder_name: '',
                    shareholder_type: '',
                    shareholder_address: '',
                    shareholder_number: '',
                    sharehilder_shares: '',
                    class_of_share: '',
                    }
                    
                    
                    if(prev < current ){
                        shareholders = [...this.state.shareholders]
                        for (let i = prev; i < e.value ; i++){
                            shareholders.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        shareholders = [...this.state.shareholders]
                        for (let i = prev; i > current ; i--){
                            shareholders.pop() 
                        } 
                    }else{
                        shareholders = [...this.state.shareholders]
                        for (let i = 0; i < e.value ; i++){
                            shareholders.push({...obj}) 
                        } 
                    }
                    
                    this.setState({shareholders: [...shareholders]});
            }

    }
    handleMultiChange = async (e) => {
       
        let shareholders = [ ...this.state.shareholders];
        let index = e.target.id;
        if(e.target.name === 'declaration'){
            shareholders[parseInt(index, 10) - 1 ]['declaration'] = e.target.checked;
        }
        else if(e.target.name === 'final_declaration'){
          shareholders[parseInt(index, 10) - 1 ][e.target.name] = e.target.checked;
        }
        else{
            shareholders[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
        }
        
        this.setState({ shareholders : [...shareholders] });
       
    }
    handleMultiSelctChange = async (e, name, id) => {
        
        let shareholders = [...this.state.shareholders]
        
        let index = id;
        shareholders[parseInt(index, 10) - 1 ][name] = e;
        this.setState({ shareholders : [...shareholders] });
    }

    render() { 
        const steps = getSteps();
        const  {data, shareholders} = this.state;
        let value = [];
        for(let i = 1 ; i<= data.number_of_shareholders.value ; i++){
            value.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Partner - {i}</h5>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="shareholder_name"  id = {i} label="Full name of the shareholder" value={ shareholders[i-1].shareholder_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <SelectInput name="shareholder_type" label="Type of the shareholder" value={ shareholders[i-1].shareholder_type} options={this.shareholder_type} onChange = {(e) => this.handleMultiSelctChange(e,'shareholder_type',i)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="shareholder_address"  id = {i} label="Address of this shareholder" value={ shareholders[i-1].shareholder_address} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="shareholder_number"  id = {i} label="The contact number of this shareholder" value={ shareholders[i-1].shareholder_number} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="sharehilder_shares"  id = {i} label="How many shares does this shareholder hold?" value={ shareholders[i-1].sharehilder_shares} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="class_of_share"  id = {i} label="Class of share " value={ shareholders[i-1].class_of_share} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    
                </Grid>
            )
        }
        console.log(this.state)
        return ( 
            <RegistrationContainer>
            <FormWrapper > 
            
            <SelctText>Shareholder Agreement $139</SelctText>
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
                                <h3>The Agreement</h3>
                                <Grid container spacing={1}>
                                    <Grid item xs={6}>
                                        <TextInput name="date_of_agreement" label="Date of the Agreement" type="date" value={data.date_of_agreement} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="when_effect" label="When will this Agreement come into effect?" type="date" value={data.when_effect} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                
                                    <Grid item xs={12}>
                                        <h5>Company Details</h5>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="company_name" label="Registered name of the company" value={data.company_name} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="company_acn" label="ACN of the company" value={data.company_acn} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="company_address" label="The registered address of the company" placeholder="Australian address format" value={data.company_address} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="company_regi_date" label="Registration date of the company?" type="date" value={data.company_regi_date} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="total_shared_issue" label="How much issued capital does the company have?" placeholder="Total number of shares issued" value={data.total_shared_issue} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="description" label="Give a short description of the company?" value={data.description} onChange = {(e) => this.handleCustomChange(e)} />
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
                                    <h5>Shareholder Details</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="number_of_shareholders" label="Number of shareholders*" value={ data.number_of_shareholders} options={this.number} onChange = {(e) => this.handleCustomSelctChange(e,'number_of_shareholders')} autoFocus="true" />
                                </Grid>
                                {value}
                                
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
                                    <h5>Conditions</h5>
                                </Grid>
                               
                                <Grid item xs={6}>
                                    <TextInput name="voting_percentage" label="What voting percentage is needed for a special majority?"  value={data.voting_percentage} onChange = {(e) => this.handleCustomChange(e)}  autoFocus="true"/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="board_meeting_address" label="Where will the company hold its board meetings?"  value={data.board_meeting_address} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                    
                                <Grid item xs={12}>
                                    <SelectInput name="dose_have_doc" label="Does this shareholders agreement have any transactional documents?" value={ data.dose_have_doc} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'dose_have_doc')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="is_agreement_to_condition" label="Is this shareholders agreement subject to any conditions?" value={ data.is_agreement_to_condition} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'is_agreement_to_condition')} />
                                </Grid>
                                {data.is_agreement_to_condition.value === 'Yes' ?
                                <Grid item xs={6}>
                                    <TextInput name="condition" label="What is the condition?"  value={data.condition} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                :null}
                                <Grid item xs={12}>
                                    <SelectInput name="chairmen_selection_type" label="How will a chairman of the board be appointed or removed?" value={ data.chairmen_selection_type} options={this.selection_type} onChange = {(e) => this.handleCustomSelctChange(e,'chairmen_selection_type')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="director_appointment_type" label="How will an independent director be appointed?" value={ data.director_appointment_type} options={this.selection_type} onChange = {(e) => this.handleCustomSelctChange(e,'director_appointment_type')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="which_decision" label="Which decisions should be subjected to shareholder approval?" value={ data.which_decision} options={this.decision} onChange = {(e) => this.handleCustomSelctChange(e,'which_decision')} />
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
                                    <h5>Business Plan</h5>
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <TextInput name="number_of_years_of_planing" label="How many years of financial forecasts have the company planned for?"  value={data.number_of_years_of_planing} onChange = {(e) => this.handleCustomChange(e)}  autoFocus="true"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <span>The board must adopt a business plan and budgets after the commencement of this shareholders agreement.
                                            
                                    </span>
                                    <TextInput name="number_of_days_to_adopt" label="How many days does this board have to consider adopting a business plan and budgets after the commencement of this shareholders agreement?" value={data.number_of_days_to_adopt} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <span>The board must consider and adopt a business plan and budget before the start of each financial year, </span>
                                    <TextInput name="number_of_days_to_end" label="How many days before the end of each financial year?"  value={data.number_of_days_to_end} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput name="number_of_days_to_draft" label="How many days does the board have to consider the draft of the business plan proposed by the CEO?"  value={data.number_of_days_to_draft} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                    
                                <Grid item xs={12}>
                                    <SelectInput name="dose_have_preparation" label="Does the company have to prepare a profit and loss statement for each previous month?" value={ data.dose_have_preparation} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'number_of_shareholders')} />
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
                        <FormContainer>
                            <Grid container spacing={1}>
                               
                                <Grid item xs={12}>
                                    <h5>Clauses</h5>
                                </Grid>
                                
                                <Grid item xs={6}>
                                    <span>A special majority is required for the sale or disposal of assets valued above a certain amount.</span>
                                    <TextInput name="amount1" label="What is the amount?"  value={data.amount1} onChange = {(e) => this.handleCustomChange(e)}  autoFocus="true"/>
                                </Grid>
                            
                                <Grid item xs={6}>
                                    <span>A special majority is required to purchase assets in one transaction or related transactions valued above a certain amount.</span>
                                    <TextInput name="amount2" label="What is the amount?"  value={data.amount2} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                            
                                <Grid item xs={6}>
                                    <span>A special majority is required for capital expenditures by the company above a certain amount not included in the current business plan.</span>
                                    <TextInput name="amount3" label="What is the amount?"  value={data.amount3} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                            
                                <Grid item xs={6}>
                                    <span>A special majority is required when granting a guarantee, security, indemnity, or assurance involving a potential liability valued above a certain amount.</span>
                                    <TextInput name="amount4" label="What is the amount?"  value={data.amount4} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                            
                                <Grid item xs={6}>
                                    <span>A special majority is required when incurring additional borrowing valued above a certain amount.</span>
                                    <TextInput name="amount5" label="What is the amount?"  value={data.amount5} onChange = {(e) => this.handleCustomChange(e)} />
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
                        <FormContainer>
                            <Grid container spacing={1}>
                               
                                <Grid item xs={12}>
                                    <h5>Others</h5>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="how_to_rise" label="How will you raise capital if needed?" value={ data.how_to_rise} options={this.how_to_rise} onChange = {(e) => this.handleCustomSelctChange(e,'how_to_rise')}  autoFocus="true"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="is_majority_need" label="Is a special majority needed to determine that additional funds are required?" value={ data.is_majority_need} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'is_majority_need')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="are_prohibited" label="Are shareholders prohibited from selling their shares?" value={ data.are_prohibited} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'are_prohibited')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="how_share_set" label="How will the value of the shares be set?" value={ data.how_share_set} options={this.how_share_set} onChange = {(e) => this.handleCustomSelctChange(e,'how_share_set')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="when_fail" label="When the shareholders fail to set the value, the board will appoint a professional business valuation service." value={ data.when_fail} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'when_fail')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="want_provision" label="Do you want to include provisions for dividend distribution?" value={ data.want_provision} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'want_provision')} />
                                </Grid>
                                {data.want_provision.value === 'Yes' 
                                ?
                                <Grid item xs={6}>
                                    <TextInput name="detail" label="Please specify"  value={data.detail} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                :null
                                }
                                <Grid item xs={12}>
                                    <SelectInput name="what_happen" label="What happens when a shareholder becomes incapacitated or passes away?" value={ data.what_happen} options={this.what_happen} onChange = {(e) => this.handleCustomSelctChange(e,'what_happen')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="want_incorporate" label="Do you want to incorporate a non-compete clause?" value={ data.want_incorporate} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'want_incorporate')} />
                                </Grid>
                                
                                {data.want_incorporate.value === 'Yes' 
                                ?
                                <Grid item xs={6}>
                                    <SelectInput name="how_long" label="How long is each shareholder prohibited from competing after leaving the company?" value={ data.how_long} options={this.time} onChange = {(e) => this.handleCustomSelctChange(e,'how_long')} />
                                </Grid>
                                :null
                                }
                                <Grid item xs={12}>
                                    <SelectInput name="want_include_non" label="Do you want to include a non-solicitation clause?" value={ data.want_include_non} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'want_include_non')} />
                                </Grid>
                                
                                {data.want_include_non.value === 'Yes' 
                                ?
                                <Grid item xs={6}>
                                    <SelectInput name="how_long_bind" label="How long does the non-solicitation clause bind each shareholder after leaving the company?" value={ data.how_long_bind} options={this.time} onChange = {(e) => this.handleCustomSelctChange(e,'how_long_bind')} />
                                </Grid>
                                :null
                                }
                                <Grid item xs={6}>
                                    <TextInput name="when_next" label="When does the next financial year start?"  value={data.when_next} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="what_location" label="In what location will all mediation proceeding take place"  value={data.what_location} onChange = {(e) => this.handleCustomChange(e)} />
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
                    {this.state.activeStep === 6 ?
                        <FormContainer>
                            <Grid container spacing={1}>
                               
                                <Grid item xs={12}>
                                    <h5>Agreement Type</h5>
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
                                    <TextArea name="describe" label="Describe if you have any other specific need that you want us to incorporate in the Agreement"  value={data.describe} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <span>A shareholder agreement is required to be coherent with the Company’s Constitution. We recommend you to get your Company Constitution reviewed by a lawyer. There can be contradictions or conflicts if the Company Constitution is not checked carefully.</span>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="want_our_lawyer" label="Do you want our lawyer to review your Company Constitution before drafting your Shareholder Agreement?" value={ data.want_our_lawyer} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'want_our_lawyer')} />
                                    <Note>It will cost additional $119</Note>
                                </Grid>
                                {data.want_our_lawyer.value === 'Yes' ? 
                                <Grid item xs={6}>
                                    <TextInput name="upload" label="Upload your Company Constitution" type="text" value={data.upload} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
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


                    {this.state.activeStep === 7 ?
                        <Review data={data} fnc1={this.handleNext} fnc2={this.handleBack} />
                   : null}

                    {this.state.activeStep === 8 ?
                        <Billing fnc1={this.handleNext} fnc2={this.handleBack} fnc3={this.handleReset} />
                    : null
                    }
                </form>
                
            </FormWrapper>
            </RegistrationContainer>
         );
    }
}
 
export default ShareholderAgreementForm;