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
class Individual extends Component {
    state = { 
        activeStep: 0,
        data: {
            abn_application_type: 'Individual',
            given_name: '',
            family_name:'',
            former: '',
            former_name:'',
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

            unit: '',
            street: '',
            subrub: '',
            state: '',
            post_code : '',
            country: '',
            abn_activation_data: '',
            industry_sector: '',
            business_describtion: '',

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
        }
     }
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
     handleNext = () => {
        this.setState({activeStep :this.state.activeStep + 1});
      };
      handleBack = () => {
        this.setState({activeStep :this.state.activeStep - 1});
      };
      handleReset = () => {
        this.setState({activeStep :0});
      };
      handleChange = async (e) => {
    //    console.log(target.name)
        
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
        
        this.setState({ data});
       
    }
    handleSelctChange = async (e, name) => {
        const data = { ...this.state.data };
        data[name] = e;
       
        this.setState({ data});
       
    }
    render() { 
        const steps = getSteps();
        const  {data} = this.state;
        return ( 
            <Container status = {this.props.status}> 
                <SelctText>YOU HAVE SELECTED TRADE / INDIVIDUAL CATEGORY</SelctText>
                {/* <SelctText>You have selected Solo Trade / Individual category</SelctText> */}
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
                            <h3>Enter Your Details Below</h3>
                            <Grid container spacing={1}>
                                {/* <Grid item xs={6}>
                                    <TextInput label="Name of Applicant" name="given_name" value={data.given_name} placeholder="Given Name" onChange={(e) => this.handleChange(e)} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput label="&nbsp;" name="family_name" value={data.family_name} placeholder="Family Name" onChange={(e) => this.handleChange(e)} />
                                </Grid> */}

                                <Grid item xs={12}>
                                    <p>Do you have any former name ?</p>
                                    <RadioInput label="Yes" type="radio" value="true" name="former"  onChange={(e) => this.handleChange(e)}  checked={data.former === "true"}/>
                                    <RadioInput label="No" type="radio" value="false" name="former" onChange={(e) => this.handleChange(e)} checked={data.former === "false"} />
                                </Grid>
                                 {this.state.data.former === 'true' ?
                                    <>
                                        <Grid item xs={6}>
                                            <TextInput label="Name of Applicant" name="given_name" value={data.given_name} placeholder="Given Name" onChange={(e) => this.handleChange(e)} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextInput label="&nbsp;" name="family_name" value={data.family_name} placeholder="Family Name" onChange={(e) => this.handleChange(e)} />
                                        </Grid>
                                    </> 
                                : 
                                    null
                                }

                                
                                <Grid item xs={12}>
                                    <TextInput label="Email Address" name="email" type="email" value={data.email} placeholder="Email" onChange={(e) => this.handleChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput label="Phone Number" name="phone" type="text" value={data.phone} placeholder="Phone" onChange={(e) => this.handleChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput label="Date of Birth" name="dob" type="date" value={data.dob} placeholder="Date of birth" onChange={(e) => this.handleChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="Country of birth" name="country_of_birth" value={data.country_of_birth}  options={this.country} onChange={(e) => this.handleSelctChange(e,'country_of_birth')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="Birth State" name="state_of_birth" value={data.state_of_birth} options={this.bstate} onChange={(e) => this.handleSelctChange(e,'state_of_birth')}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="Birth City" name="city_of_birth" value={data.city_of_birth} options={this.country} onChange={(e) => this.handleSelctChange(e,'city_of_birth')} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput label="Address" name="basic_unit" value={data.basic_unit} placeholder="Unit/Level" onChange={(e) => this.handleChange(e)}  />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextInput label="&nbsp;" name="basic_street" value={data.basic_street} placeholder="Street Address" onChange={(e) => this.handleChange(e)}  />
                                </Grid>
                                <Grid item xs={4}>
                                    <SelectInput label="Subrub" name="basic_subrub" options={this.country} value={data.basic_subrub} onChange={(e) => this.handleSelctChange(e,'basic_subrub')} />
                                </Grid>
                                <Grid item xs={4}>
                                    <SelectInput label="State" name="basic_state" options={this.country} value={data.basic_state} onChange={(e) => this.handleSelctChange(e,'basic_state')} />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextInput label="&nbsp;" name="basic_post_code" value={data.basic_post_code} placeholder="Post Code" onChange={(e) => this.handleChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <SelectInput label="Country" name="basic_country" options={this.country} value={data.basic_country} onChange={(e) => this.handleSelctChange(e,'basic_country')} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput label="Tax file number (TFN)" value={data.tfn} name="tfn" placeholder="Tax file number (TFN)" onChange={(e) => this.handleChange(e)} />
                                </Grid>
                                <Grid item xs={12}>
                                    <CheckInput name="declaration" checked={data.declaration === true}  label="I am an Australian Resident for tax purpose" onChange={(e) => this.handleChange(e)}  />
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
                                <SelectInput name="industry_sector" value={data.industry_sector} label="Industry Sector" options={this.country} onChange={(e) => this.handleSelctChange(e,'industry_sector')} />
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
                            {this.state.data.gst == 'yes' ? 
                            <>
                                <Grid item xs={12}>
                                    <SelectInput name="estimated_turn_over" value={data.estimated_turn_over} label="Estimated turn-over" options={this.country} onChange={(e) => this.handleSelctChange(e,'estimated_turn_over')} />
                                </Grid>

                                <Grid item xs={12}>
                                    <SelectInput name="gst_res" value={data.gst_res} label="When will you send GST result to the ATO(?)"  options={this.country} onChange={(e) => this.handleSelctChange(e,'gst_res')} />
                                </Grid>

                                <Grid item xs={12}>
                                    <SelectInput name="tax_report" value={data.tax_report} label="How often would you like to report to the Tax Office?"  options={this.country} onChange={(e) => this.handleSelctChange(e,'tax_report')}  />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <TextInput name="commence_date" value={data.commence_date} label="GST account commence date" type="date" placeholder="GST account commence date" onChange={(e) => this.handleChange(e)} />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <SelectInput name="goods_service" value={data.goods_service} label="Do you import goods and services into Australia ?"  options={this.country} onChange={(e) => this.handleSelctChange(e,'goods_service')}  />
                                </Grid>
                            </>
                            :null}
                                <h4>PAYG</h4>

                                <Grid item xs={12}>
                                    <p>Does your business have employee?</p>
                                    <RadioInput label="Yes" value="yes" name="have_employee" checked={data.have_employee === "yes"}  onChange={(e) => this.handleChange(e)}  />
                                    <RadioInput label="No" value="no" name="have_employee" checked={data.have_employee === "yes"}  onChange={(e) => this.handleChange(e)}  />
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
                                    <SelectInput name="working_holiday" label="Are you employing any working holiday makers?"  options={this.country} onChange={(e) => this.handleSelctChange(e,'basic_subrub')}  />
                                </Grid>

                                <Grid item xs={12}>
                                    <SelectInput name="summary_report" label="How are you going to provide your PAYG withholding payment annual summary report to the ATO?"  options={this.country} onChange={(e) => this.handleSelctChange(e,'summary_report')}  />
                                </Grid>

                                <Grid item xs={12}>
                                    <SelectInput name="provide_paymnet_summary" label="How will you provide payment summaries to your payees?"  options={this.country} onChange={(e) => this.handleSelctChange(e,'provide_paymnet_summary')}  />
                                </Grid>

                                <Grid item xs={12}>
                                    <SelectInput name="pay_royalties" label="Will you pay royalties, dividends or interest to non-residents?"  options={this.country} onChange={(e) => this.handleSelctChange(e,'pay_royalties')}  />
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
                            <p>Former name: <strong>{data.former_name ? data.former_name : 'N/A'}</strong></p>
                            <p>Given name: <strong>{data.given_name} </strong></p>
                            <p>Family name: <strong>{data.family_name}</strong></p>
                            <p>Email Address: <strong>{data.email}</strong></p>
                            <p>Phone Number : <strong>{data.phone}</strong></p>
                            <p>Date of Birth: <strong>{data.dob}</strong></p>
                            <p>Country of Birth : <strong>{data.country_of_birth['value']}</strong></p>
                            <p>State of Birth: <strong>{data.state_of_birth['value']}</strong></p>
                            <p>City of Birth: <strong>{data.city_of_birth['value']}</strong></p>
                            <p>Home Address: <strong>{data.basic_unit} || {data.basic_street} || {data.basic_subrub['value']} || {data.basic_state['value']} || {data.basic_post_code} || {data.basic_country['value']}</strong></p>
                            <p>Tax File Number (TFN): <strong>{data.tfn}</strong></p>
                        </Grid>
                        <Grid item xs={12}>
                            <h3 style={{textAlign: 'left'}}>Business Address Details </h3> <hr/>
                            <p>Address : <strong>{data.unit} || {data.street} || {data.subrub['value']} || {data.state['value']} || {data.post_code} || {data.country['value']}</strong></p>
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
 
export default Individual;