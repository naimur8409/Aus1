import React, { Component } from 'react'
import { Cards, Container,Head } from './abnStyle';
import SelectCard from '../../component/cards/selectCard';
import { Business, Group, Person } from '@material-ui/icons';
import Individual from './individual';
import Partnership from './partnership';
import Company from './company';

class AbnRes extends Component {
    state = { 
        activeStep: 0,
        bindividual: true,
        bgroup: true,
        bcompany: true,
        individual: false,
        group: false,
        company: false,
        close: false,
       
     }
    
    render() { 
        const {individual,group, company,bindividual,bgroup, bcompany, close} = this.state;
        return ( 
            <Container>
                <Head status = {close}>
                    <h1>ABN Registration Form</h1>

                    <h3>Please Select One of the Following</h3>
                    <Cards>
                        <SelectCard 
                            icon = {<Person style={{fontSize: '42px', color: '#0101D2'}} />} 
                            content="Solo Trader / Induvidual" 
                            fnc = {() => {this.setState({individual: true,group: false, company: false,bindividual: true,bgroup: false, bcompany: false, close: true})}}
                            status = {bindividual}
                        />
                        <SelectCard 
                            icon = {<Group style={{fontSize: '42px', color: '#0101D2'}} />} 
                            content="Partnership" 
                            fnc = {() => {this.setState({individual: false,group: true, company: false, bindividual: false,bgroup: true, bcompany: false, close: true})}}
                            status = {bgroup}
                        />
                        <SelectCard 
                            icon = {<Business style={{fontSize: '42px', color: '#0101D2'}} />} 
                            content="Company" 
                            fnc = {() => {this.setState({individual: false,group: false, company: true,bindividual: false,bgroup: false, bcompany: true, close: true})}}
                            status = {bcompany}
                        />
                    </Cards>
                </Head>
                <br/>
                <Individual status = {individual} />
                <Partnership status = {group} />
                <Company status = {company} />
               
                
            </Container>
         );
    }
}
 
export default AbnRes;