import { Grid } from '@material-ui/core';
import React from 'react'
import { DarkBtn } from '../../../utils/button';
import { PreviewContainer } from '../../../utils/globalStyle';
const Returnworkreview = ({data1, fnc2,fnc3}) => {
    return ( 
             <PreviewContainer style={{width: '100%' , backgroundColor: 'rgba(51, 136, 255, 0.5)'}}>
                        <h3>Preview Details</h3>
                        <h4>Please check all the information before submit</h4>
                        <Grid container spacing={1}>
                        
                           
                         
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Select your product</h3> <hr/>
                             <p>Product Name : <strong>{data1.product.value} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Service speed</h3> <hr/>
                             <p>speed: <strong>{data1.Sspreed.value} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Select your jurisdiction</h3> <hr/>
                             <p>jurisdiction : <strong>{data1.Sjurisdiction.value } </strong></p>
                             
                         </Grid>
                         
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Describe if you have any other specific need that you want us to incorporate in the policy </h3> <hr/>
                             <p>Incorporate Policy: <strong>{data1.incorporate ? 'yes' : 'No'} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Total</h3> <hr/>
                             <p>Total $ : <strong>{data1.total} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             
                             <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={fnc2}>Back</DarkBtn>
                             <DarkBtn type="button" style={{ padding: '10px 16px' ,float:'right'}} >Pay Now</DarkBtn> 
                             <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={fnc3}>Reset</DarkBtn>
                         </Grid>
                     </Grid>
                     </PreviewContainer>
     );
}
 
export default Returnworkreview ;