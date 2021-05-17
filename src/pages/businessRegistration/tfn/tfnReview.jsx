import { Grid } from '@material-ui/core';
import React from 'react'
import { DarkBtn } from '../../../utils/button';
import { PreviewContainer } from '../../../utils/globalStyle';
const TFNReview = ({data1, data2, data3, fnc1, fnc2}) => {
    return ( 
             <PreviewContainer style={{width: '100%' , backgroundColor: 'rgba(51, 136, 255, 0.5)'}}>
                        <h3>Preview Details</h3>
                        <h4>Please check all the information before submit</h4>
                        <Grid container spacing={1}>
                        
                            <Grid item xs={12}>
                                 <h3 style={{textAlign: 'left'}}>Current Registration</h3> <hr/>
                                 <p>Type of Organisation : <strong>{data1.type_of_organisation.value} </strong></p>
                             
                            </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Business Address Details </h3> <hr/>
                             <p>ACN /ARBN* : <strong>{data2.ACN} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Local Agent</h3> <hr/>
                             <p>Unit/ house number : <strong>{data3.unit} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Local Agent</h3> <hr/>
                             <p>Number of authorised : <strong>{data3.number_of_authorised} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={fnc1}>Next</DarkBtn>
                             <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={fnc2}>Back</DarkBtn>
                         </Grid>
                     </Grid>
                     </PreviewContainer>
     );
}
 
export default TFNReview;