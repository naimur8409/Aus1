import { Grid } from '@material-ui/core';
import React from 'react'
import { DarkBtn } from '../../../utils/button';
import { BillingContainer, TableContainer } from '../../../utils/globalStyle';
const VirtualBilling = ({fnc1, fnc2,fnc3}) => {
    return ( 
    <BillingContainer style={{width: '100%'}}>
    <h3>Billing Page</h3>
    <h4>Please check bill before submission</h4>
    <br/>
    <br/>
    <br/>
   <TableContainer>
       <thead>
           <tr>
               <th>Title</th>
               <th>Amount</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Total</td>
               <td>420$ (annually)</td>
           </tr>
       </tbody>
   </TableContainer>
   <br/>
   <br/>
   <br/>
   <br/>
    <Grid container spacing={1} style={{alignSelf: 'center'}}>
        <Grid item xs={6} sm={8}>
            
        </Grid>
        <Grid item xs={6} sm={4}>
        <DarkBtn type="button" style={{ padding: '10px 16px'}} >Pay Now</DarkBtn> 
        <DarkBtn type="button" style={{ padding: '10px 16px'}} onClick={fnc2}>Back</DarkBtn>
        <DarkBtn type="button" style={{ padding: '10px 16px'}} onClick={fnc3}>Reset</DarkBtn>
        </Grid>
    </Grid>
   
   </BillingContainer> );
}
 
export default VirtualBilling;