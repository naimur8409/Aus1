import { Grid, Step, StepLabel, Stepper, TextField } from '@material-ui/core';
import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';
import CheckInput from '../../component/formItem/checkInput';
import RadioInput from '../../component/formItem/radioInput';
import SelectInput from '../../component/formItem/selectInput';
import TextArea from '../../component/formItem/textArea';
import TextInput from '../../component/formItem/textInput';
import { DarkBtn } from '../../utils/button';
import { FormContainer,SelctText,PreviewContainer, BillingContainer, Line } from './abnStyle';

const getSteps = () => {
    return ['Step-1', 'Step-2', 'Step-3', 'Step-4', 'Step-5'];
  }
  const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;
  const Container = styled.div`
  
    width: 70%;
    
    display: ${props => props.status ? 'flex' : 'none'};
    animation: ${props => props.status ? fadeIn : fadeOut} 0.2s linear ;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    padding: 15px 20px;
    background-color: #ffffff;
    margin-top: -20px;
    @media only screen and (max-width: 400px) {
        width: 90%;
    }
  `;
class Partnership extends Component {
    state = { 
        activeStep: 0,
        data: {
            abn_application_type: 'Partnership',
            number_of_partner: '1',
            given_name: '',
            family_name:'',
            unit: '',
            street: '',
            subrub: '',
            state: '',
            post_code : '',
            country: '',
            abn_activation_data: '',
            industry_sector: '',
            business_describtion: '',
            Partnership_agreement: '',

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
            employee_pay: '',
            working_holiday: '',
            summary_report: '',
            provide_paymnet_summary: '',
            pay_royalties: '',

            declarant_given_name: '',
            declarant_family_name: '',
            designation: '',
            final_declaration: '',
        },
        partner: [
            {
                former: '',
                given_name: '',
                family_name:'',
              //   former_name:'',
                email: '',
                phone: '',
                dob: '',
                country_of_birth: '',
                state_of_birth: '',
                city_of_birth: '',
                basic_unit: '',
                basic_street: '',
                basic_subrub: '',
                basic_state: '',
                basic_post_code: '',
                basic_country: '',
                tfn: '',
                declaration: '',
            }
        ]
     }
    //  {
    //     former: '',
    //     former_name:'',
    //     email: '',
    //     phone: '',
    //     dob: '',
    //     country_of_birth: '',
    //     state_of_birth: '',
    //     city_of_birth: '',
    //     basic_unit: '',
    //     basic_street: '',
    //     basic_subrub: '',
    //     basic_state: '',
    //     basic_post_code: '',
    //     basic_country: '',
    //     tfn: '',
    //     declaration: '',
    //   }
     select = [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' },
      ];
     country = [
        { value: 'Australia', label: 'Australia' },
        { value: 'Bangladesh', label: 'Bangladesh' },
        { value: 'India', label: 'India' }
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
     handleNext = () => {
        this.setState({activeStep :this.state.activeStep + 1});
      };
      handleBack = () => {
        this.setState({activeStep :this.state.activeStep - 1});
      };
      handleReset = () => {
        this.setState({activeStep :0});
      };
      handleChange = (e) => {
      
        
        const data = { ...this.state.data };
        if(e.target.name === 'number_of_partner'){
            // data[e.target.name] = e.target.checked;
            let data = [ ...this.state.partner ];
            let partner = [];
            let current = e.target.value;
            let prev = this.state.data.number_of_partner;
            let obj =   {
                    former: '',
                    given_name: '',
                    family_name:'',
                  //   former_name:'',
                    email: '',
                    phone: '',
                    dob: '',
                    country_of_birth: '',
                    state_of_birth: '',
                    city_of_birth: '',
                    basic_unit: '',
                    basic_street: '',
                    basic_subrub: '',
                    basic_state: '',
                    basic_post_code: '',
                    basic_country: '',
                    tfn: '',
                    declaration: '',
                }
                 
                
                if(prev < current ){
                    partner = [...this.state.partner]
                    for (let i = prev; i < e.target.value ; i++){
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
                    for (let i = 0; i < e.target.value ; i++){
                        partner.push({...obj}) 
                    } 
                }
                  
                  this.setState({partner: [...partner]});
                  
        }
        if(e.target.name === 'declaration'){
            data[e.target.name] = e.target.checked;
        }
        else if(e.target.name === 'final_declaration'){
          data[e.target.name] = e.target.checked;
        }
        else{
           data[e.target.name] = e.target.value; 
        }
        
        this.setState({ data});
       
    }
      handleMultiChange = async (e) => {
       
        let partner = [ ...this.state.partner];
        let index = e.target.id;
        if(e.target.name === 'declaration'){
            partner[parseInt(index, 10) - 1 ][e.target.name] = e.target.checked;
        }
        else if(e.target.name === 'final_declaration'){
          partner[parseInt(index, 10) - 1 ][e.target.name] = e.target.checked;
        }
        else{
            partner[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
        }
        
        this.setState({ partner : [...partner] });
       
    }
    
    handleSelctChange = async (e, name) => {
        const data = { ...this.state.data };
        data[name] = e;
        this.setState({ data});
    }
    handleMultiSelctChange = async (e, name, id) => {
        
        let partner = [...this.state.partner]
        
        let index = id.i;
        console.log(index)
        partner[parseInt(index, 10) - 1 ][name] = e;
        this.setState({ partner : [...partner] });
    }

    
        
           
    

    render() { 
        const steps = getSteps();
        const  {data} = this.state;
        const  {partner} = this.state;
        
        let value = [];
            
            // let element = [] ;
        for(let i = 1 ; i <= data.number_of_partner ; i++){
            value.push(
                <>
                    {/* <Grid item xs={12} > */}
                    <p style={{width: '100%', padding: '5px',color: '#fff', backgroundColor: '#3389FF'}}>Partner {i}</p>
                    {/* </Grid> */}
                    
                    <Grid item xs={12}>
                        <SelectInput label="Have any former name ?" name="former" id = {i} value={Object.keys(partner).length > 0 ? partner[i-1].former : ''}  options={this.select} onChange={(e) => this.handleMultiSelctChange(e,'former', {i})} />
                    
                        {/* <p>Have any former name ?</p>
                        <RadioInput label="Yes" type="radio" value="true" name="former" id = {i} onChange={(e) => this.handleMultiChange(e)}  checked={Object.keys(partner).length > 0 ? partner[i-1].former === "true" : null}/>
                        <RadioInput label="No" type="radio" value="false" name="former" id = {i} onChange={(e) => this.handleMultiChange(e)} checked={Object.keys(partner).length > 0 ? partner[i-1].former === "false" : null}/> */}
                    </Grid>
                    {/* <Grid item xs={6}>
                        {partner[0].former['value'] === 'true' ? <TextInput label="Provide Your Former Name" id = {i} value={data.former_name} name="former_name" value={Object.keys(partner).length > 0 ? partner[i-1].former_name : ''} placeholder="Former Name" onChange={(e) => this.handleMultiChange(e)} /> : null}
                    </Grid> */}
                    { Object.keys(partner).length > 0 ? partner[0].former['value']  === 'true' ?
                    <>
                    <Grid item xs={6}>
                        <TextInput label="Former name" name="given_name" id = {i} value={Object.keys(partner).length > 0 ? partner[i-1].given_name : ''} placeholder="Given Name" onChange={(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput label="&nbsp;" name="family_name" id = {i} value={Object.keys(partner).length > 0 ? partner[i-1].family_name : ''} placeholder="Family Name" onChange={(e) => this.handleMultiChange(e)} />
                    </Grid>
                    </>
                    : null : null }
                    <Grid item xs={12}>
                        <TextInput label="Email Address" name="email" id = {i} type="email" value={Object.keys(partner).length > 0 ? partner[i-1].email : ''} placeholder="Email" onChange={(e) => this.handleMultiChange(e)} />
                    </Grid>
                     <Grid item xs={12}>
                        <TextInput label="Phone Number" name="phone" id = {i} type="text" value={Object.keys(partner).length > 0 ? partner[i-1].phone : ''} placeholder="Phone" onChange={(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput label="Date of Birth" name="dob" type="date" id = {i} value={Object.keys(partner).length > 0 ? partner[i-1].dob : ''} placeholder="Date of birth" onChange={(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={12}>
                        <SelectInput label="Country of birth" name="country_of_birth" id = {i} value={Object.keys(partner).length > 0 ? partner[i-1].country_of_birth : ''}  options={this.country} onChange={(e) => this.handleMultiSelctChange(e,'country_of_birth', {i})} />
                    </Grid>
                    <Grid item xs={12}>
                        <SelectInput label="Birth State" name="state_of_birth" id = {i} value={Object.keys(partner).length > 0 ? partner[i-1].state_of_birth : ''} options={this.bstate} onChange={(e) => this.handleMultiSelctChange(e,'state_of_birth' , {i})}/>
                    </Grid>
                    <Grid item xs={12}>
                        <SelectInput label="Birth City" name="city_of_birth" id = {i} value={Object.keys(partner).length > 0 ? partner[i-1].city_of_birth : ''} options={this.country} onChange={(e) => this.handleMultiSelctChange(e,'city_of_birth', {i})} />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput label="Address" name="basic_unit" id = {i} value={Object.keys(partner).length > 0 ? partner[i-1].basic_unit : ''} placeholder="Unit/Level" onChange={(e) => this.handleMultiChange(e)}  />
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput label="&nbsp;" name="basic_street" id = {i} value={Object.keys(partner).length > 0 ? partner[i-1].basic_street : ''} placeholder="Street Address" onChange={(e) => this.handleMultiChange(e)}  />
                    </Grid>
                    <Grid item xs={4}>
                        <SelectInput label="Subrub" name="basic_subrub" id = {i} options={this.country} value={Object.keys(partner).length > 0 ? partner[i-1].basic_subrub : ''} onChange={(e) => this.handleMultiSelctChange(e,'basic_subrub', {i})} />
                    </Grid>
                    <Grid item xs={4}>
                        <SelectInput label="State" name="basic_state" id = {i} options={this.country} value={Object.keys(partner).length > 0 ? partner[i-1].basic_state : ''} onChange={(e) => this.handleMultiSelctChange(e,'basic_state', {i})} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextInput label="&nbsp;" name="basic_post_code" id = {i} value={Object.keys(partner).length > 0 ? partner[i-1].basic_post_code : ''} placeholder="Post Code" onChange={(e) => this.handleMultiChange(e)} />
                    </Grid>
                    <Grid item xs={12}>
                        <SelectInput label="Country" name="basic_country" id = {i} options={this.country} value={Object.keys(partner).length > 0 ? partner[i-1].basic_country : ''} onChange={(e) => this.handleMultiSelctChange(e,'basic_country', {i})} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput label="Tax file number (TFN)" value={Object.keys(partner).length > 0 ? partner[i-1].tfn : ''} id = {i} name="tfn" placeholder="Tax file number (TFN)" onChange={(e) => this.handleMultiChange(e)} />
                    </Grid>
                </>
            )
        }
            // return element
        
        return ( 
            <Container status = {this.props.status}> 
                <SelctText>YOU HAVE SELECTED PARTNERSHIP CATEGORY</SelctText>
                {/* <Line>&nbsp;sdfds</Line> */}
                <Stepper activeStep={this.state.activeStep} alternativeLabel style={{margin: '-10px'}}>
                    {steps.map((label) => (
                        <Step key={label} style={{width: '100%', fontSize: '18px'}}>
                        <StepLabel style={{width: '100%', fontSize: '18px'}}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <form action="">
                    {this.state.activeStep === 0 ?
                        <FormContainer>
                            <h3>Please provide details of all partners, If a partner is a company, please provide details of one representative</h3>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextInput label="Number of Partners" type="number" name="number_of_partner" min="1" max="10" value={data.number_of_partner} placeholder="Number of Partner" onChange={(e) => this.handleChange(e)} />
                                </Grid>
                               {/* {this.makeForm(data)} */}
                               {value}
                                
                               <Grid item xs={12}>
                                    <CheckInput name="declaration" checked={data.declaration === true}  label="I am an Australian Resident for tax purpose" onChange={(e) => this.handleChange(e)}  />
                                </Grid>

                                <Grid item xs={12}>
                                    <p>Do you need a Partnership Agreement </p>
                                    <RadioInput label="Yes" value="yes" name="Partnership_agreement" checked={data.Partnership_agreement === "yes"} onChange={(e) => this.handleChange(e)}  />
                                    <RadioInput label="No" value="no" name="Partnership_agreement" checked={data.Partnership_agreement === "no"} onChange={(e) => this.handleChange(e)}  />
                                    <p style={{color: '#2D2DFF'}}>*It will cost additional $99</p>
                                </Grid>

                                <Grid item xs={12}>
                                    <p>Note: It is highly recommended to have a partnership agreement which is drafted by our Australian registered Lawyer.
                                         It is an essential document for a partnership business. It reminds the mutual agreement and understanding which are agreed upon.
                                         It reduces misunderstanding and sorts out many issues when any problem occurs between partners. 
                                    </p>
                                </Grid>

                                <Grid item xs={6}>

                                </Grid>
                                <Grid item xs={6}>
                                    <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                                </Grid>
                            </Grid>
                        </FormContainer>
                        
                    : null }


                    {this.state.activeStep === 1 ?
                        <FormContainer>
                        <h3>Enter Business Details</h3>
                        <Grid container spacing={1}>
                            
                            <Grid item xs={6}>
                                <TextInput name="unit" label="Address" value={data.unit} placeholder="Unit/Level(Optional)" onChange={(e) => this.handleChange(e)} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextInput name="street" label="&nbsp;" value={data.street} placeholder="Street Address" onChange={(e) => this.handleChange(e)} />
                            </Grid>
                            <Grid item xs={4}>
                                <SelectInput name="subrub" label="Subrub" value={data.subrub} options={this.country} onChange={(e) => this.handleSelctChange(e,'subrub')}  />
                            </Grid>
                            <Grid item xs={4}>
                                <SelectInput name="state" label="State" value={data.state} options={this.country} onChange={(e) => this.handleSelctChange(e,'state')}  />
                            </Grid>
                            <Grid item xs={4}>
                                <TextInput name="post_code" value={data.post_code} label="&nbsp;" placeholder="Post Code" onChange={(e) => this.handleChange(e)} />
                            </Grid>
                            <Grid item xs={12}>
                                <SelectInput name="country" label="Country" value={data.country} options={this.country} onChange={(e) => this.handleSelctChange(e,'country')}  />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput name="abn_activation_data" value={data.abn_activation_data} label="ABN Activation Date " type="date" placeholder="ABN Activation Date " onChange={(e) => this.handleChange(e)} />
                            </Grid>
                            <Grid item xs={12}>
                                <SelectInput name="industry_sector" value={data.industry_sector} label="Industry Sector" options={this.industry_sector} onChange={(e) => this.handleSelctChange(e,'industry_sector')} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextArea name="business_describtion" value={data.business_describtion} label="Description" name="business_describtion" onChange={(e) => this.handleChange(e)} />
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
                        <h3>GST account</h3>
                            <Grid container spacing={1}>
                                
                                <Grid item xs={12}>
                                    <p>Do you need to register fot GST</p>
                                    <RadioInput label="Yes" value="yes" name="gst" checked={data.gst === "yes"} onChange={(e) => this.handleChange(e)}  />
                                    <RadioInput label="No" value="no" name="gst" checked={data.gst === "no"} onChange={(e) => this.handleChange(e)}  />
                                    <p style={{color: '#2D2DFF'}}>*It will cost additional $39</p>
                                </Grid>
                            {this.state.data.gst === 'yes' ? 
                            <>
                                <Grid item xs={12}>
                                    <SelectInput name="estimated_turn_over" value={data.estimated_turn_over} label="Estimated turn-over" options={this.turn_over} onChange={(e) => this.handleSelctChange(e,'estimated_turn_over')} />
                                </Grid>

                                <Grid item xs={12}>
                                    <SelectInput name="gst_res" value={data.gst_res} label="When will you send GST result to the ATO(?)"  options={this.country} onChange={(e) => this.handleSelctChange(e,'gst_res')} />
                                </Grid>

                                <Grid item xs={12}>
                                    <SelectInput name="tax_report" value={data.tax_report} label="How often would you like to report to the Tax Office?"  options={this.tax_report} onChange={(e) => this.handleSelctChange(e,'tax_report')}  />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <TextInput name="commence_date" value={data.commence_date} label="GST account commence date" type="date" placeholder="GST account commence date" onChange={(e) => this.handleChange(e)} />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <SelectInput name="goods_service" value={data.goods_service} label="Do you import goods and services into Australia ?"  options={this.goods_service} onChange={(e) => this.handleSelctChange(e,'goods_service')}  />
                                </Grid>
                            </>
                            :null}
                                <h4>PAYG</h4>

                                <Grid item xs={12}>
                                    <p>Does your business have employee?</p>
                                    <RadioInput label="Yes" value="yes" name="have_employee" checked={data.have_employee === "yes"}  onChange={(e) => this.handleChange(e)}  />
                                    <RadioInput label="No" value="no" name="have_employee" checked={data.have_employee === "no"}  onChange={(e) => this.handleChange(e)}  />
                                    {/* <SelectInput name="have_employee" label="Does your business have employee?"  options={this.country} onChange={(e) => this.handleSelctChange(e,'have_employee')}  /> */}
                                </Grid>

                                <Grid item xs={12}>
                                    <p>Do you want to sign up for PAYG through us</p>
                                    <RadioInput label="Yes" value="yes" name="sign_up" checked={data.sign_up === "yes"} onChange={(e) => this.handleChange(e)}  />
                                    <RadioInput label="No" value="no" name="sign_up" checked={data.sign_up === "no"} onChange={(e) => this.handleChange(e)}  />
                                    {/* <SelectInput name="sign_up" label="Do you want to sign up for PAYG through us?"  options={this.country} onChange={(e) => this.handleSelctChange(e,'sign_up')}  /> */}
                                </Grid>
                            {this.state.data.sign_up === 'yes' ?
                            <>  
                                <Grid item xs={12}>
                                    <TextInput name="when_commence" label="When do you want to commence " type="date" placeholder="When do you want to commence " onChange={(e) => this.handleChange(e)}  />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextInput name="employee_pay" label="How many employees are you going to pay" type="text" placeholder="" onChange={(e) => this.handleChange(e)}  />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextInput name="payment_each_year" label="How much do you expect to withhold from the payments each year? " type="text" placeholder="*For example, on a $60,000 wage, withholding tax is roughly $11,000" onChange={(e) => this.handleChange(e)} />
                                </Grid>

                                <Grid item xs={12}>
                                    <SelectInput name="working_holiday" label="Are you employing any working holiday makers?"  options={this.working_holiday} onChange={(e) => this.handleSelctChange(e,'basic_subrub')}  />
                                </Grid>

                                <Grid item xs={12}>
                                    <SelectInput name="summary_report" label="How are you going to provide your PAYG withholding payment annual summary report to the ATO?"  options={this.summary_report} onChange={(e) => this.handleSelctChange(e,'summary_report')}  />
                                </Grid>

                                <Grid item xs={12}>
                                    <SelectInput name="provide_paymnet_summary" label="How will you provide payment summaries to your payees?"  options={this.provide_paymnet_summary} onChange={(e) => this.handleSelctChange(e,'provide_paymnet_summary')}  />
                                </Grid>

                                <Grid item xs={12}>
                                    <SelectInput name="pay_royalties" label="Will you pay royalties, dividends or interest to non-residents?"  options={this.goods_service} onChange={(e) => this.handleSelctChange(e,'pay_royalties')}  />
                                </Grid>
                            </>: null}
                                <Grid item xs={12}>
                                    <h4>Declaration</h4>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="declarant_given_name" value={data.declarant_given_name} label="Name of Applicant" placeholder="Given Name" onChange={(e) => this.handleChange(e)}  />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput name="declarant_famity_name" value={data.declarant_famity_name} label="&nbsp;" placeholder="Family Name" onChange={(e) => this.handleChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput name="designation" value={data.designation} label="Designation within the business" placeholder="Designation within the business" onChange={(e) => this.handleChange(e)}  />
                                </Grid>

                                <Grid item xs={12}>
                                    <CheckInput name="final_declaration" checked={data.final_declaration === true} label="I declare that the information I have given in this application is accurate, full and true." onChange={(e) => this.handleChange(e)}  />
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
                
                        <PreviewContainer style={{width: '100%' , backgroundColor: 'rgba(51, 136, 255, 0.5)'}}>
                        <h3>Preview Details</h3>
                        <h4>Please check all the information before submit</h4>
                        <Grid container spacing={1}>
                        
                        <Grid item xs={12}>
                            <h3 style={{textAlign: 'left'}}>Details</h3> <hr/>
                            <p>ABN Application type: <strong>{data.abn_application_type}</strong></p>
                            {partner.map((item, i) => (
                                <div style={{width: '100%'}} key={i}>
                                    <h4>Partner {i}</h4>
                                    <p>Given name: <strong>{item.given_name} </strong></p>
                                    <p>Family name: <strong>{item.family_name} </strong></p>
                                    <p>Email Address: <strong>{item.email}</strong></p>
                                    <p>Phone Number : <strong>{item.phone}</strong></p>
                                    <p>Date of Birth: <strong>{item.dob}</strong></p>
                                    <p>Country of Birth : <strong>{item.country_of_birth['value']}</strong></p>
                                    <p>State of Birth: <strong>{item.state_of_birth['value']}</strong></p>
                                    <p>City of Birth: <strong>{item.city_of_birth['value']}</strong></p>
                                    <p>Home Address: <strong>{item.basic_unit} - {item.basic_street} - {item.basic_subrub['value']} - {item.basic_state['value']} - {item.basic_post_code} - {item.basic_country['value']}</strong></p>
                                    <p>Tax File Number (TFN): <strong>{item.tfn}</strong></p>
                                </div>
                            ))}
                            {/* <p>Former name: <strong>{data.former_name ? data.former_name : 'N/A'}</strong></p>
                            <p>Given name: <strong>{data.given_name} </strong></p>
                            <p>Family name: <strong>{data.family_name}</strong></p>
                            <p>Email Address: <strong>{data.email}</strong></p>
                            <p>Phone Number : <strong>{data.phone}</strong></p>
                            <p>Date of Birth: <strong>{data.dob}</strong></p>
                            <p>Country of Birth : <strong>{data.country_of_birth['value']}</strong></p>
                            <p>State of Birth: <strong>{data.state_of_birth['value']}</strong></p>
                            <p>City of Birth: <strong>{data.city_of_birth['value']}</strong></p>
                            <p>Home Address: <strong>{data.basic_unit} - {data.basic_street} - {data.basic_subrub['value']} - {data.basic_state['value']} - {data.basic_post_code} - {data.basic_country['value']}</strong></p>
                            <p>Tax File Number (TFN): <strong>{data.tfn}</strong></p> */}
                        </Grid>
                        <Grid item xs={12}>
                            <h3 style={{textAlign: 'left'}}>Business Address Details </h3> <hr/>
                            <p>Address : <strong>{data.unit} - {data.street} - {data.subrub['value']} - {data.state['value']} - {data.post_code} - {data.country['value']}</strong></p>
                            <p>ABN activation date: <strong>{data.abn_activation_data}</strong></p>
                            <p>Industry sector: <strong>{data.industry_sector['value']} </strong></p>
                            <p>Description: <strong>{data.business_describtion}</strong></p>
                            
                        </Grid>
                        <Grid item xs={12}>
                            <h3 style={{textAlign: 'left'}}>GST account</h3> <hr/>
                            {data.gst === 'yes' ?<> 
                                <p>Estimated turn-over : <strong>{data.estimated_turn_over['value']}</strong></p>
                                <p>When will you send GST results to the ATO (?) : <strong>{data.gst_res['value']}</strong></p>
                                <p>How often would like to report to the Tax Office? : <strong>{data.tax_report['value']}</strong></p>
                                <p>GST account commence date : <strong>{data.businescommence_dates_describtion}</strong></p>
                                <p>Do you import goods and services into Australia (?) : <strong>{data.goods_service['value']}</strong></p>
                            </> : <h4>You didn't register fot GST</h4> }
                            
                            <h3 style={{textAlign: 'left'}}>PAYG</h3> <hr/>
                            {data.sign_up === 'yes' ?<> 
                                <p>Does your business have employee? : <strong>{data.have_employee}</strong></p>
                                <p>When do you want to commence : <strong>{data.when_commence}</strong></p>
                                <p>How many employees are you going to pay : <strong>{data.employee_pay}</strong></p>
                                <p>How much do you expect to withhold from the payments each year? : <strong>{data.payment_each_year}</strong></p>
                                <p>Are you employing any working holiday makers? : <strong>{data.working_holiday['value']}</strong></p>
                                <p>PAY G Payment Option : <strong>{data.summary_report['value']}</strong></p>
                                <p>How will you provide payment summaries to your payees? : <strong>{data.provide_paymnet_summary['value']}</strong></p>
                                <p>Will you pay royalties, dividends or interest to non-residents? : <strong>{data.pay_royalties['value']}</strong></p>
                            </> : <h4>You didn't sign up for PAYG</h4> }
                            
                            <p>PAY G Payment Option : <strong>Paper form</strong></p>
                            
                        </Grid>
                        <Grid item xs={12}>
                            <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleNext}>Next</DarkBtn>
                            <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                        </Grid>
                    </Grid>
                    </PreviewContainer>
                    : null}

                    {this.state.activeStep === 4 ?
                     <BillingContainer style={{width: '100%'}}>
                     <h3>Billing Page</h3>
                     <h4>Please check bill before submission</h4>
                     <Grid container spacing={1}>
                        <Grid item xs="2"><p>ABN Registration</p></Grid>
                        <Grid item xs="8"><p>---------------------------------------------------------------------------------------</p></Grid>
                        <Grid item xs="2"><p>$39</p></Grid>
                        
                        <Grid item xs="2"><p>GST Account</p></Grid>
                        <Grid item xs="8"><p>---------------------------------------------------------------------------------------</p></Grid>
                        <Grid item xs="2"><p>{data.gst === 'yes' ? '$39' : '$0'}</p></Grid>

                        <Grid item xs="2"><p>PAYG</p></Grid>
                        <Grid item xs="8"><p>---------------------------------------------------------------------------------------</p></Grid>
                        <Grid item xs="2"><p>{data.gst === 'yes' ? '$25' : '$0'}</p></Grid>

                        <Grid item xs="2"><p>VAT/Tax</p></Grid>
                        <Grid item xs="8"><p>---------------------------------------------------------------------------------------</p></Grid>
                        <Grid item xs="2"><p>{data.gst === 'yes' ? data.gst === 'yes' ? '$15.45' : '$11' : '$5'}</p></Grid>

                        <Line></Line>
                        <Grid item xs="4"><h4>TOTAL BILL TO BE PAY</h4></Grid>
                        <Grid item xs="6"><p></p></Grid>
                        <Grid item xs="2"><p>{data.gst === 'yes' ? data.gst === 'yes' ? '$118.45' : '$89' : '$44'}</p></Grid>
                        
                        {/* <Grid item xs={12} style={{alignSelf: 'center'}} > */}
                            
                        {/* </Grid> */}
                       
                        
                    </Grid>
                    <Grid item xs={12} style={{alignSelf: 'center'}}>
                            <DarkBtn type="button" style={{ padding: '10px 16px'}} onClick={this.handleNext}>Pay Now</DarkBtn>
                            <DarkBtn type="button" style={{ padding: '10px 16px'}} onClick={this.handleBack}>Back</DarkBtn>
                            <DarkBtn type="button" style={{ padding: '10px 16px'}} onClick={this.handleReset}>Reset</DarkBtn>
                        </Grid>
                    </BillingContainer>
                    : null
                    }
                </form>
                
            </Container>
         );
    }
}
 
export default Partnership;