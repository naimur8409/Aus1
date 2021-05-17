import { Grid } from '@material-ui/core';
import React from 'react'
import { DarkBtn } from '../../../utils/button';
import { PreviewContainer } from '../../../utils/globalStyle';
const ForeignReview = ({data1, data2, data3, fnc1, fnc2}) => {
    return ( 
             <PreviewContainer style={{width: '100%' , backgroundColor: 'rgba(51, 136, 255, 0.5)'}}>
                        <h3>Preview Details</h3>
                        <h4>Please check all the information before submit</h4>
                        <Grid container spacing={1}>
                        
                            <Grid item xs={12}>
                                 <h3 style={{textAlign: 'left'}}>Current Registration</h3> <hr/>
                                 <p>Business Name : <strong>{data1.business_price.value} </strong></p>
                             
                            </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Business Address Details </h3> <hr/>
                             <p>Proposed Business Name : <strong>{data2.proposed_business_name} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Local Agent</h3> <hr/>
                             <p>Unit/Level : <strong>{data3.unit_label} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={fnc1}>Next</DarkBtn>
                             <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={fnc2}>Back</DarkBtn>
                         </Grid>
                     </Grid>
                     </PreviewContainer>
     );
}
 
export default ForeignReview;