import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./textInput";
import SelectInput from "./selectInput";
import TextArea from "./textArea";
import Resizer from 'react-image-file-resizer';
import { DarkBtn } from "../../utils/button";
import RadioInput from "./radioInput";
import CheckInput from "./checkInput";
import MultiTextInput from "./multiTextInput";
import FileInput from "./fileInput";
class Form extends Component {
  state = {
    data1: {},
    data2: {},
    data3: {},
    data4: {},
    errors: {},
    doc_image_front: null,
    doc_image_back: null,
  };

  validateStep1 = () => {
      const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data1, this.schema1, options);
    if (!error) return null;

    const errors = {};
    
    for (let item of error.details) errors[item.path[0]] = item.message;
    
    return errors;
  };
  validateStep2 = () => {
      const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data2, this.schema2, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    
    return errors;
  };
//   validateStep3 = () => {
//     const options = { abortEarly: false };
//     const number = Object.keys(this.state.multiple).length;
//     if(number > 0){
//       this.state.multiple.map(item => {
//         const { error } = Joi.validate(item, this.schema3, options);
//         if (!error) return null;
//         const errors = {};
//         for (let item of error.details) errors[item.path[0]] = item.message;
       
//         return 'lll';
//       })
//     }
//     else{
//       const { error } = Joi.validate(this.state.data3, this.schema3, options);
//       if (!error) return null;
//       const errors = {};
//       for (let item of error.details) errors[item.path[0]] = item.message;
//       // console.log(errors)
//       return errors;
//     }
  
// };
  validateStep3 = () => {
      const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data3, this.schema3, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    
    return errors;
  };
  validateStep4 = () => {
      const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data4, this.schema4, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    
    return errors;
  };

  validateMultiSelectProperty = ( name, value ) => {
    if(this.state.activeStep === 0){
      const obj = { [name]: value };
      const schema = { [name]: this.schema1[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
    if(this.state.activeStep === 1){
      const obj = { [name]: value };
      const schema = { [name]: this.schema2[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
    if(this.state.activeStep === 2){
      const obj = { [name]: value };
      const schema = { [name]: this.schema3[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
    if(this.state.activeStep === 3){
      const obj = { [name]: value };
      const schema = { [name]: this.schema4[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
  };
  validateSelectProperty = ( name, value ) => {
    if(this.state.activeStep === 0){
      const obj = { [name]: value };
      const schema = { [name]: this.schema1[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
    if(this.state.activeStep === 1){
      const obj = { [name]: value };
      const schema = { [name]: this.schema2[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
    if(this.state.activeStep === 2){
      const obj = { [name]: value };
      const schema = { [name]: this.schema3[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
    if(this.state.activeStep === 3){
      const obj = { [name]: value };
      const schema = { [name]: this.schema4[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
  };
  validateProperty = ({ name, value }) => {
    if(this.state.activeStep === 0){
      const obj = { [name]: value };
      const schema = { [name]: this.schema1[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
    if(this.state.activeStep === 1){
      const obj = { [name]: value };
      const schema = { [name]: this.schema2[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
    if(this.state.activeStep === 2){
      const obj = { [name]: value };
      const schema = { [name]: this.schema3[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
    if(this.state.activeStep === 3){
      const obj = { [name]: value };
      const schema = { [name]: this.schema4[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
  };
  validateMultiProperty = ( name, value ) => {
    if(this.state.activeStep === 0){
      const obj = { [name]: value };
      const schema = { [name]: this.schema1[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
    if(this.state.activeStep === 1){
      const obj = { [name]: value };
      const schema = { [name]: this.schema2[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
    if(this.state.activeStep === 2){
      const obj = { [name]: value };
      const schema = { [name]: this.schema3[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
    if(this.state.activeStep === 3){
      const obj = { [name]: value };
      const schema = { [name]: this.schema4[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    
    if (errors) return;

    this.doSubmit();
  };

  handleMultiChange = async (e) => {
    let multiple = [ ...this.state.multiple];
    let index = e.target.id;
    const errors = { ...this.state.multipleErr };
    // this.setState({ multiple : [...multiple] });
    const errorMessage = this.validateMultiProperty(e.target.name,e.target.value);
    
    multiple[parseInt(index, 10) - 1 ][e.target.name] = e.target.value;
    
    if (errorMessage) errors[parseInt(index, 10) - 1 ][e.target.name] = errorMessage;
    
    else delete errors[parseInt(index, 10) - 1 ][e.target.name];

    this.setState({ multiple : [...multiple], errors });
  };
  handleChange = async ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    
    const errorMessage = this.validateProperty(input);
    
    if (errorMessage) errors[input.name] = errorMessage;
    
    else delete errors[input.name];

    if(this.state.activeStep === 0 ){
      const data = { ...this.state.data1 };
      data[input.name] = input.value;
   
      this.setState({ data1 : data, errors });
    }
    if(this.state.activeStep === 1 ){
      const data = { ...this.state.data2 };
      data[input.name] = input.value;
   
      this.setState({ data2 : data, errors });
    }
    if(this.state.activeStep === 2 ){
      const data = { ...this.state.data3 };
      data[input.name] = input.value;
   
      this.setState({ data3 : data, errors });
    }
    if(this.state.activeStep === 3 ){
      const data = { ...this.state.data4 };
      data[input.name] = input.value;
   
      this.setState({ data4 : data, errors });
    }
  };
  handleFileChange = async ({ currentTarget: input }) => {
        var type= input.files[0].type;
        if (input.files && input.files[0]) {
          var fsize = input.files[0].size/1024;
          if( type == 'image/jpg' || type == 'image/jpeg' || type == 'image/JPG' || type == 'image/JPEG' || type == 'image/PNG' || type == 'image/png' ){
         
              try {
                Resizer.imageFileResizer(
                input.files[0],
                300,
                300,
                'PNG',
                100,
                0,
                uri => {
                    this.setState({ [input.name]: uri });
                },
                'blob',
                200,
                200,
                );
            }   catch(err) {
                    console.log(err)
            }
            //  this.setState({ [input.name]: input.files[0] });
          //  }
          }
          else{
            alert('Invalid image format');
            return true;
          }
      }
  
    const errors = { ...this.state.errors };
    
    const errorMessage = this.validateProperty(input);
    
    if (errorMessage) errors[input.name] = errorMessage;
    
    else delete errors[input.name];

    if(this.state.activeStep === 0 ){
      const data = { ...this.state.data1 };
      data[input.name] = input.value;
   
      this.setState({ data1 : data, errors });
    }
    if(this.state.activeStep === 1 ){
      const data = { ...this.state.data2 };
      data[input.name] = input.value;
   
      this.setState({ data2 : data, errors });
    }
    if(this.state.activeStep === 2 ){
      const data = { ...this.state.data3 };
      data[input.name] = input.value;
   
      this.setState({ data3 : data, errors });
    }
    if(this.state.activeStep === 3 ){
      const data = { ...this.state.data4 };
      data[input.name] = input.value;
   
      this.setState({ data4 : data, errors });
    }
  };
 
  handleMultiSelect = async (e, name, id) => {
    const errors = { ...this.state.multipleErr };
    let multiple = [ ...this.state.multiple];
    let index = id;
    const errorMessage = this.validateMultiProperty(name,e.value);
    
    multiple[parseInt(index, 10) - 1 ][name] = e;
    
    if (errorMessage) errors[parseInt(index, 10) - 1 ][name] = errorMessage;
    
    else delete errors[parseInt(index, 10) - 1 ][name];

   
    this.setState({ multiple : [...multiple], errors });
  }
  handleSelect = async (e, name) => {
    const errors = { ...this.state.errors };
    if(name === 'number_of_director'){
      let multiple = [];
      let multipleErr = [];
      let current = e.value;
      
      let prev = this.state.data3.number_of_director.value ? this.state.data3.number_of_director.value : 0;
      const obj = {
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
      }
      const objerr = {
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
      }
      if(prev < current ){
        multiple = [...this.state.multiple]
        multipleErr = [...this.state.multipleErr]
        for (let i = prev; i < e.value ; i++){
            multiple.push({...obj}) 
            multipleErr.push({...objerr}) 
        } 
    }
    else if(prev > current ){
        multiple = [...this.state.multiple]
        multipleErr = [...this.state.multipleErr]
        for (let i = prev; i > e.value ; i--){
            multiple.pop() 
            multipleErr.pop() 
        } 
    }else{
        multiple = [...this.state.multiple]
        multipleErr = [...this.state.multipleErr]
        for (let i = 0; i < e.value ; i++){
            multiple.push({...obj}) 
            multipleErr.push({...objerr})
        } 
    }
      this.setState({multipleErr: [...multipleErr]});
      this.setState({multiple: [...multiple]});
    }
    const errorMessage = this.validateSelectProperty(name, e.value);
    if (errorMessage) errors[name] = errorMessage;
    
    else delete errors[name];

    if(this.state.activeStep === 0 ){
      const data = { ...this.state.data1 };
      data[name] = e;
   
      this.setState({ data1 : data, errors });
    }
    if(this.state.activeStep === 1 ){
      const data = { ...this.state.data2 };
     data[name] = e;
   
    this.setState({ data2 : data, errors });
    }
    if(this.state.activeStep === 2 ){
      const data = { ...this.state.data3 };
     data[name] = e;
   
    this.setState({ data3 : data, errors });
    }
    if(this.state.activeStep === 3 ){
      const data = { ...this.state.data4 };
     data[name] = e;
   
    this.setState({ data4 : data, errors });
    }
    
  }
  handleCheck = async (e) => {
    const name = e.target.name;
    const value = e.target.checked;
    const errors = { ...this.state.errors };
    const errorMessage = this.validateSelectProperty(name, value);
    if (errorMessage) errors[name] = errorMessage;
    
    else delete errors[name];
    
    if(this.state.activeStep === 0 ){
      const data = { ...this.state.data1 };
      data[name] = value;
      this.setState({ data1: data, errors });
    }

    if(this.state.activeStep === 1 ){
      const data = { ...this.state.data2 };
      data[name] = value;
      this.setState({ data2: data, errors });
    }

    if(this.state.activeStep === 2 ){
      const data = { ...this.state.data3 };
      data[name] = value;
      this.setState({ data3: data, errors });
    }

    if(this.state.activeStep === 3 ){
      const data = { ...this.state.data4 };
      data[name] = value;
      this.setState({ data4: data, errors });
    }
  }
  renderButton(label) {
    return (
      <>
        <DarkBtn  className="btn btn-primary">{label}</DarkBtn>
      </>
    );
  }

  renderTextArea(name, label) {
    const { data1,data2,data3,data4, errors } = this.state;
    if(this.state.activeStep === 0 ){
      return (
        <TextArea
          name={name}
          label={label}
          value={data1[name]}
          onChange={this.handleChange}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 1 ){
      return (
        <TextArea
          name={name}
          label={label}
          value={data2[name]}
          onChange={this.handleChange}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 2 ){
      return (
        <TextArea
          name={name}
          label={label}
          value={data3[name]}
          onChange={this.handleChange}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 3 ){
      return (
        <TextArea
          name={name}
          label={label}
          value={data4[name]}
          onChange={this.handleChange}
          error={errors[name]}
        />
      );
    }
    
  }

  renderSelect(name, label, options, focus, multi) {
    const { data1,data2,data3,data4, errors } = this.state;
    if(this.state.activeStep === 0 ){
      return (
        <SelectInput
          autoFocus={focus}
          multi={multi}
          name={name}
          label={label}
          value={data1[name]}
          options={options}
          onChange={(e) =>{ this.handleSelect(e, name)}}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 1 ){
      return (
        <SelectInput
          focus={focus}
          multi={multi}
          name={name}
          label={label}
          value={data2[name]}
          options={options}
          onChange={(e) =>{ this.handleSelect(e, name)}}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 2 ){
      return (
        <SelectInput
          focus={focus}
          multi={multi}
          name={name}
          label={label}
          value={data3[name]}
          options={options}
          onChange={(e) =>{ this.handleSelect(e, name)}}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 3 ){
      return (
        <SelectInput
          focus={focus}
          multi={multi}
          name={name}
          label={label}
          value={data4[name]}
          options={options}
          onChange={(e) =>{ this.handleSelect(e, name)}}
          error={errors[name]}
        />
      );
    }
    
  }
  renderMultiSelect(name, label, options, id) {
    const { multiple, multipleErr } = this.state;
 
    return (
      <SelectInput
        name={name}
        label={label}
        value={multiple[id-1][name]}
        options={options}
        onChange={(e) =>{ this.handleMultiSelect(e, name, id)}}
        error={multipleErr[id-1][name]}
      />
    );
  }

  renderFileInput(name, label) {
    const { data1,data2,data3,data4, errors } = this.state;
    if(this.state.activeStep === 0 ){
      return (
        <FileInput
          name={name}
          value={data1[name]}
          label={label}
          onChange={this.handleFileChange}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 1 ){
      return (
        <FileInput
          name={name}
          value={data2[name]}
          label={label}
          onChange={this.handleFileChange}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 2 ){
      return (
        <FileInput
          name={name}
          value={data3[name]}
          label={label}
          onChange={this.handleFileChange}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 3 ){
      return (
        <FileInput
          name={name}
          value={data4[name]}
          label={label}
          onChange={this.handleFileChange}
          error={errors[name]}
        />
      );
    }
    
    
  }
  renderInput(name, label, type, focus) {
    const { data1,data2,data3,data4, errors } = this.state;
    
    if(this.state.activeStep === 0 ){
      return (
        <Input
          focus={focus}
          type={type}
          name={name}
          value={data1[name]}
          label={label}
          onChange={this.handleChange}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 1 ){
      return (
        <Input
          focus={focus}
          type={type}
          name={name}
          value={data2[name]}
          label={label}
          onChange={this.handleChange}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 2 ){
      return (
        <Input
          focus={focus}
          type={type}
          name={name}
          value={data3[name]}
          label={label}
          onChange={this.handleChange}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 3 ){
      return (
        <Input
          focus={focus}
          type={type}
          name={name}
          value={data4[name]}
          label={label}
          onChange={this.handleChange}
          error={errors[name]}
        />
      );
    }
  }

  renderMultiInput(name, label, type, id) {
    const { data,multiple, multipleErr } = this.state;
    // console.log(id-1, name)
    return (
      <MultiTextInput
        type={type}
        name={name}
        value={multiple[id-1][name]}
        label={label}
        onChange={(e) => this.handleMultiChange(e)}
        error={multipleErr[id-1][name]}
        id={id}
      />
    );
  }
  renderRadioInput(name,value, label, caption) {
    const { data, errors } = this.state;
    return (
      <RadioInput
        caption = {caption}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderCheckInput(name,label){
    const { data1,data2,data3,data4, errors } = this.state;
    if(this.state.activeStep === 0 ){
      return (
        <CheckInput
          name={name}
          value={data1[name]}
          label={label}
          onChange={(e) => this.handleCheck(e)}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 1 ){
      return (
        <CheckInput
          name={name}
          value={data2[name]}
          label={label}
          onChange={(e) => this.handleCheck(e)}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 2 ){
      return (
        <CheckInput
          name={name}
          value={data3[name]}
          label={label}
          onChange={(e) => this.handleCheck(e)}
          error={errors[name]}
        />
      );
    }
    if(this.state.activeStep === 3 ){
      return (
        <CheckInput
          name={name}
          value={data4[name]}
          label={label}
          onChange={(e) => this.handleCheck(e)}
          error={errors[name]}
        />
      );
    }
    
  }
}

export default Form;
