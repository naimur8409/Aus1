import { Grid } from '@material-ui/core';
import React from 'react'
import { DarkBtn } from '../../../utils/button';
import { PreviewContainer } from '../../../utils/globalStyle';
const ForeignReview = ({data1, data2, data3,data4, fnc1, fnc2}) => {
    return ( 
             <PreviewContainer style={{width: '100%' , backgroundColor: 'rgba(51, 136, 255, 0.5)'}}>
                        <h3>Preview Details</h3>
                        <h4>Please check all the information before submit</h4>
                        <Grid container spacing={1}>
                        
                            <Grid item xs={12}>
                                 <h3 style={{textAlign: 'left'}}>Current Registration</h3> <hr/>
                                 <p>corporation_name : <strong>{data1.corporation_name} </strong></p>
                             
                            </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Business Address Details </h3> <hr/>
                             <p>Address : <strong>{data2.aus_at_the_office_of} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Local Agent</h3> <hr/>
                             <p>Director Name : <strong>{data3.director_name} </strong></p>
                             
                         </Grid>
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>Local Agent</h3> <hr/>
                             <p>File : <strong>{data4.certificate_of_incorporation ? 'Submitted' : 'Not Submitted'} </strong></p>
                             
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