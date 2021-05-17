import { Grid } from '@material-ui/core';
import React from 'react'
import { DarkBtn } from '../../../../utils/button';
import { PreviewContainer } from '../../../../utils/globalStyle';
const Review = ({data, fnc1, fnc2}) => {
    return ( 
             <PreviewContainer style={{width: '100%' , backgroundColor: 'rgba(51, 136, 255, 0.5)'}}>
                        <h3>Preview Details</h3>
                        <h4>Please check all the information before submit</h4>
                        <Grid container spacing={1}>
                        
                           
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>What is the name of the person and position to contact if there are any questions regarding this Confidentiality Policy? </h3> <hr/>
                             <p>Confidentiality Policy : <strong>{data.person} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Select your product</h3> <hr/>
                             <p>Product Name : <strong>{data.product} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Service speed</h3> <hr/>
                             <p>speed: <strong>{data.Sspreed} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Select your jurisdiction</h3> <hr/>
                             <p>jurisdiction : <strong>{data.Sjurisdiction } </strong></p>
                             
                         </Grid>
                         
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Describe if you have any other specific need that you want us to incorporate in the policy </h3> <hr/>
                             <p>Incorporate Policy: <strong>{data.incorporate ? 'yes' : 'No'} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Total</h3> <hr/>
                             <p>Total $ : <strong>{data.total} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={fnc1}>Next</DarkBtn>
                             <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={fnc2}>Back</DarkBtn>
                         </Grid>
                     </Grid>
                     </PreviewContainer>
     );
}
 
export default Review;