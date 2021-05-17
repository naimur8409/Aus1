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
class PartnershipAgreementForm extends Form {
    state = { 
        activeStep: 0,
        data: {
            date_of_agreement: '',
            commence_date: '',
            partnership_name:'',      
            business_activities:'',      
            partnership_address:'',
            duration_of_partnership: '',
                end_date: '',     
            required_percentage:'',      
            asset_distribution:'',
                specify: '',
        
            number_of_parties: 0,

        
            how_much_partner: '',
            how_much_notice_retiring: '',
            how_much_notice_expelled: '',
            how_much_partner_allow: '',
                requirement: '',
            will_given_compensation: '',
            
        
            account_details: '',
            who_will_setup: '',
            how_rise: '',
            who_managing: '',
                specify1: '',
            what_vote_remove: '',
            what_vote_make_financial: '',
            what_vote_make_significant: '',
            what_vote_right: '',
            how_often: '',
        
            product: '',
            speed: '',
            jurisdiction: '',
            describe: '',
        },
        errors: {},
        parties: [],
     }
    duration_of_partnership = [
        { value: 'Indefinite', label: 'Indefinite' },
        { value: 'Until a specific time', label: 'Until a specific time' },
    ];
    vote = [
        { value: 'Majority Vote', label: 'Majority Vote' },
        { value: 'Unanimous Vote', label: 'Unanimous Vote' },
    ];
    asset_distribution = [
        { value: 'In proportion to his/her capital contribution', label: 'In proportion to his/her capital contribution' },
        { value: 'Others', label: 'Others' },
    ];
    party_type = [
        { value: 'Individual', label: 'Individual' },
        { value: 'Company', label: 'Company' },
    ]
    profit_loss_distribution = [
        { value: 'Equal share', label: 'Equal share' },
        { value: 'Proportional to capital contribution', label: 'Proportional to capital contribution' },
    ]
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    how_much_notice_retiring = [
        { value: 'Three months', label: 'Three months' },
        { value: 'Six months', label: 'Six months' },
        { value: 'One year', label: 'One year' },
        { value: 'Two years', label: 'Two years' },
    ];
    how_much_notice_expelled = [
        { value: 'Two weeks', label: 'Two weeks' },
        { value: 'One month', label: 'One month' },
        { value: 'Three months', label: 'Three months' },
        { value: 'Six months', label: 'Six months' },
    ];
    common = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];
    will_given_compensation = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
        { value: 'Do not mention', label: 'Do not mention' },
    ];
    how_rise = [
        { value: 'Partners will provide loan ', label: 'Partners will provide loan ' },
        { value: 'Partners will buy more shares', label: 'Partners will buy more shares' },
        { value: 'A loan from a third party', label: 'A loan from a third party' },
        { value: 'Do not specify', label: 'Do not specify' },
    ];
    who_managing = [
        { value: 'All partners', label: 'All partners' },
        { value: 'Managing partner ', label: 'Managing partner ' },
    ];
    how_often = [
        { value: 'Weekly', label: 'Weekly' },
        { value: 'Fortnightly ', label: 'Fortnightly ' },
        { value: 'Monthly', label: 'Monthly' },
        { value: 'Quarterly', label: 'No' },
        { value: 'Annually', label: 'Annually' },
        { value: 'As required ', label: 'As required ' },
    ];
    selection_type = [
        { value: 'Simple majority decision', label: 'Simple majority decision' },
        { value: 'Unanimous decision', label: 'Unanimous decision' },
    ]
    product = [
        { value: 'Standard Agreement $129', label: 'Standard Agreement $129' },
        { value: 'Customised Agreement: Consultation with a lawyer over the phone $499', label: 'Customised Agreement: Consultation with a lawyer over the phone $499' },
    ]
    speed = [
        { value: 'Regular: 3 business days $00', label: 'Regular: 3 business days $00' },
        { value: 'Express: 1 business day add $69', label: 'Express: 1 business day add $69' },
        { value: 'Urgent: by the next four business hours add $139', label: 'Urgent: by the next four business hours add $139' },
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
            if(e.target.name === 'number_of_parties'){
                let data = [ ...this.state.parties];
                let parties = [];
                let current = parseInt(e.target.value,10);
                let prev = parseInt(this.state.data.number_of_parties,10);
                let obj =   {
                    party_type: '',
                        given_name: '',
                        family_name: '',

                        abn: '',
                    witess_given_name: '',
                    witess_family_name: '',
                    address: '',
                    contributins: '',
                    capital_contribution: '',
                    services_contribution: '',
                    total_value: '',
                    percentage_of_partnership: '',
                    profit_loss_distribution: '',
                    }
                    
                    if(prev < current ){
                        parties = [...this.state.parties]
                        
                        for (let i = prev; i < current ; i++){
                            parties.push({...obj}) 
                        } 
                    }
                    else if(prev > current ){
                        parties = [...this.state.parties]
                        for (let i = prev; i > current ; i--){
                            parties.pop() 
                        } 
                    }else{
                        parties = [...this.state.parties]
                        for (let i = 0; i < current ; i++){
                            parties.push({...obj}) 
                        } 
                    }
                    
                    this.setState({parties: [...parties]});
            }
            
            this.setState({ data: data});
            
    }
    handleCustomSelctChange = async (e, name) => {
            const data = { ...this.state.data };
                data[name] = e;
                this.setState({ data : data});
            

    }
    handleMultiChange = async (e) => {
       
        let parties = [ ...this.state.parties];
        let index = e.target.id;
        if(e.target.name === 'declaration'){
            parties[parseInt(index, 10) - 1 ]['declaration'] = e.target.checked;
        }
        else if(e.target.name === 'final_declaration'){
          parties[parseInt(index, 10) - 1 ][e.target.name] = e.target.checked;
        }
        else{
            parties[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
        }
        
        this.setState({ parties : [...parties] });
       
    }
    handleMultiSelctChange = async (e, name, id) => {
        
        let parties = [...this.state.parties]
        
        let index = id;
        parties[parseInt(index, 10) - 1 ][name] = e;
        this.setState({ parties : [...parties] });
    }

    render() { 
        const steps = getSteps();
        const  {data, parties} = this.state;
        let value = [];
        for(let i = 1 ; i<= data.number_of_parties ; i++){
            value.push(
                <Grid container spacing={1} style={{border: '1px solid #0101D2', margin: '20px 0px', padding: '10px'}}>
                    <Grid item xs={12}>
                        <h5>Party - {i}</h5>
                    </Grid>
                    <Grid item xs={12}>
                        <SelectInput name="party_type" label="Does this parties agreement have any transactional documents?" value={ parties[i-1].party_type} options={this.party_type} onChange = {(e) => this.handleMultiSelctChange(e,'party_type', i)} />
                    </Grid>
                    {parties[i-1].party_type.value === 'Individual' ?
                    <>
                    <Grid item xs={6}>
                        <TextInput name="given_name"  id = {i} label="Given Name" value={ parties[i-1].given_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="family_name"  id = {i} label="Family Name" value={ parties[i-1].family_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    </>
                    :null}
                    {parties[i-1].party_type.value === 'Company' ?
                 
                    <Grid item xs={6}>
                        <TextInput name="abn"  id = {i} label="ABN" value={ parties[i-1].abn} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    :null}
                    <Grid item xs={12}>
                        <span>Name of the witness</span>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="witess_given_name"  id = {i} label="Given name" value={ parties[i-1].witess_given_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="witess_family_name"  id = {i} label="Given name" value={ parties[i-1].witess_family_name} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="address"  id = {i} label="Address" value={ parties[i-1].address} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="contributins"  id = {i} label="Party’s contributions" value={ parties[i-1].contributins} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="capital_contribution"  id = {i} label="Capital contributions" value={ parties[i-1].capital_contribution} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="services_contribution"  id = {i} label="Goods/services contributions" value={ parties[i-1].services_contribution} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="total_value"  id = {i} label="Total value" value={ parties[i-1].total_value} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput name="percentage_of_partnership"  id = {i} label="Percentage of the partnership" value={ parties[i-1].percentage_of_partnership} onChange = {(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <SelectInput name="profit_loss_distribution" label="Profit and loss distribution" value={ parties[i-1].profit_loss_distribution} options={this.profit_loss_distribution} onChange = {(e) => this.handleMultiSelctChange(e,'profit_loss_distribution',i)} />
                    </Grid>
                    
                </Grid>
            )
        }
        console.log(this.state)
        return ( 
            <RegistrationContainer>
            <FormWrapper > 
            
            <SelctText>Partnership Agreement $129</SelctText>
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
                                        <h3>Agreement Details</h3>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="date_of_agreement" label="Date of the Agreement" type="date" value={data.date_of_agreement} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="commence_date" label="The commencement date of the partnership" type="date" value={data.commence_date} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                
                                    <Grid item xs={12}>
                                        <h5>Partnership Details</h5>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="partnership_name" label="Name of the partnership" value={data.partnership_name} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="business_activities" label="Business activities " value={data.business_activities} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextInput name="partnership_address" label="Address of the partnership" placeholder="Australian address format" value={data.partnership_address} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectInput name="duration_of_partnership" label="Duration of partnership" value={ data.duration_of_partnership} options={this.duration_of_partnership} onChange = {(e) => this.handleCustomSelctChange(e,'duration_of_partnership')} autoFocus="true" />
                                    </Grid>
                                    {data.duration_of_partnership.value === 'Until a specific time' ?
                                    <Grid item xs={6}>
                                        <TextInput name="end_date" label="End date" type="date" value={data.end_date} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    :null}
                                    <Grid item xs={12}>
                                        <SelectInput name="required_percentage" label="What is the required percentage of the vote to dissolve the partnership?" value={ data.required_percentage} options={this.vote} onChange = {(e) => this.handleCustomSelctChange(e,'required_percentage')} autoFocus="true" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <SelectInput name="asset_distribution" label="How will the assets be distributed when winding up your partnership?" value={ data.asset_distribution} options={this.asset_distribution} onChange = {(e) => this.handleCustomSelctChange(e,'asset_distribution')} autoFocus="true" />
                                    </Grid>
                                    {data.asset_distribution.value === 'Others' ?
                                    <Grid item xs={12}>
                                        <TextInput name="specify" label="Please specify" value={data.specify} onChange = {(e) => this.handleCustomChange(e)} />
                                    </Grid>
                                    :null}
                                    
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
                                    <h3>Parties</h3>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput name="number_of_parties" label="Number of parties" type="number" value={ data.number_of_parties} onChange = {(e) => this.handleCustomChange(e)} autoFocus="true" />
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
                                    <h5>address</h5>
                                </Grid>
                               
                                <Grid item xs={6}>
                                    <TextInput name="how_much_partner" label="How much a partner can borrow for the partnership without other partners approval"  value={data.how_much_partner} onChange = {(e) => this.handleCustomChange(e)}  autoFocus="true"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="how_much_notice_retiring" label="How much notice a partner should provide before retiring/leaving" value={ data.how_much_notice_retiring} options={this.how_much_notice_retiring} onChange = {(e) => this.handleCustomSelctChange(e,'how_much_notice_retiring')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="how_much_notice_expelled" label="How much notice should a partner receive before getting expelled?" value={ data.how_much_notice_expelled} options={this.how_much_notice_expelled} onChange = {(e) => this.handleCustomSelctChange(e,'how_much_notice_expelled')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="how_much_partner_allow" label="Will your partnership allow new partners in future?" value={ data.how_much_partner_allow} options={this.common} onChange = {(e) => this.handleCustomSelctChange(e,'how_much_partner_allow')} />
                                </Grid>
                                {data.how_much_partner_allow.value==='Yes' ?
                                <Grid item xs={12}>
                                    <SelectInput name="requirement" label="Will your partnership allow new partners in future?" value={ data.requirement} options={this.vote} onChange = {(e) => this.handleCustomSelctChange(e,'requirement')} />
                                </Grid>
                                :null}
                                <Grid item xs={12}>
                                    <SelectInput name="will_given_compensation" label="Will your partnership allow new partners in future?" value={ data.will_given_compensation} options={this.will_given_compensation} onChange = {(e) => this.handleCustomSelctChange(e,'will_given_compensation')} />
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
                                    <h5>Account</h5>
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <TextInput name="account_details" label=" Bank Account details of the partnership"  value={data.account_details} onChange = {(e) => this.handleCustomChange(e)}  autoFocus="true"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput name="who_will_setup" label="Who will set up the bank account" value={data.who_will_setup} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="how_rise" label="How will partnership raise additional fund if needed in the future" value={ data.how_rise} options={this.how_rise} onChange = {(e) => this.handleCustomSelctChange(e,'how_rise')} />
                                </Grid>

                                <Grid item xs={12}>
                                    <h5>Management</h5>
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <SelectInput name="who_managing" label="Who will be managing the partnership?" value={ data.who_managing} options={this.who_managing} onChange = {(e) => this.handleCustomSelctChange(e,'who_managing')} />
                                </Grid>
                                {data.who_managing.value === 'Managing partner' ?
                                <Grid item xs={12}>
                                    <TextInput name="specify1" label="Specify" value={data.specify1} onChange = {(e) => this.handleCustomChange(e)} />
                                </Grid>
                                :null}
                                <Grid item xs={12}>
                                    <SelectInput name="what_vote_remove" label="What vote is required to remove a managing partner?" value={ data.what_vote_remove} options={this.vote} onChange = {(e) => this.handleCustomSelctChange(e,'what_vote_remove')} />
                                </Grid>

                                <Grid item xs={12}>
                                    <h5>Decision Making</h5>
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <SelectInput name="what_vote_make_financial" label="What vote is required to make financial decisions?" value={ data.what_vote_make_financial} options={this.vote} onChange = {(e) => this.handleCustomSelctChange(e,'what_vote_remove')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="what_vote_make_significant" label="What vote is required to make significant business decisions?" value={ data.what_vote_make_significant} options={this.vote} onChange = {(e) => this.handleCustomSelctChange(e,'what_vote_make_significant')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="what_vote_right" label="The voting right of each partner" value={ data.what_vote_right} options={this.profit_loss_distribution} onChange = {(e) => this.handleCustomSelctChange(e,'what_vote_right')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput name="how_often" label="How often will regular meetings be held?" value={ data.how_often} options={this.how_often} onChange = {(e) => this.handleCustomSelctChange(e,'how_often')} />
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
                                    <TextArea name="describe" label="Describe if you have any other specific need that you want us to incorporate in the agreement"  value={data.describe} onChange = {(e) => this.handleCustomChange(e)} />
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
 
export default PartnershipAgreementForm;