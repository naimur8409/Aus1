import { Grid } from '@material-ui/core';
import React from 'react'
import { Header, HowCard, HowCardBody, HowCardHeader, HowItWorksContainer } from './style';

const HowItWorks = ({data, title}) => {
    return ( 
        <HowItWorksContainer>
            <Header><span></span> {title} <span></span></Header>
            <Grid container spacing={3} style={{display: 'flex', justifyContent: 'center'}}>
                {data.map((item, id) => (
                    <Grid item sm = {3} xs = {6} key={id}>
                        <HowCard>
                            <HowCardHeader><p>{item.title}</p></HowCardHeader>
                            <HowCardBody>
                            {item.content ? <p>{item.content}</p> : null }
                                { item.list ? item.list.map((i => (
                                    <li style={{padding: '5px', listStyleType: 'none', textAlign: 'center', marginTop: '0px'}}>{i.listItem}</li>
                                ))) : null}
                            </HowCardBody>
                        </HowCard>
                    </Grid>
                ))}
                
            </Grid>
        </HowItWorksContainer>
     );
}
 
export default HowItWorks;