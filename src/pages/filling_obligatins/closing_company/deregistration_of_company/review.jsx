import { Grid } from '@material-ui/core';
import React from 'react'
import { DarkBtn } from '../../../../utils/button';
import { PreviewContainer } from '../../../../utils/globalStyle';
const Review = ({data1,data2, fnc2,fnc1}) => {
    return ( 
             <PreviewContainer style={{width: '100%' , backgroundColor: 'rgba(51, 136, 255, 0.5)'}}>
                        <h3>Preview Details</h3>
                        <h4>Please check all the information before submit</h4>
                        <Grid container spacing={1}>
                        
                           
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>ABN OR ACN</h3> <hr/>
                             <p>Confidentiality Policy : <strong>{data1.abn }</strong></p>
                             
                         </Grid>
                         
                         
                         <Grid item xs={12}>
                             <h3 style={{textAlign: 'left'}}>legal documentation </h3> <hr/>
                             <p>File : <strong>{data2.legal ? 'yes' : 'No'} </strong></p>
                             
                         </Grid>
                        
                         
                         
                         <Grid item xs={12}>
                         <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={fnc1}>Next</DarkBtn> 
                             <DarkBtn type="button" style={{float:'right', padding: '10px 16px'}} onClick={fnc2}>Back</DarkBtn>
                             
                            
                         </Grid>
                     </Grid>
                     </PreviewContainer>
     );
}
 
export default Review ;