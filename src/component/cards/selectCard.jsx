import React, { useState } from 'react'
import { Container, Logo } from './cardStyle';
const SelectCard = ({icon, content, fnc, status}) => {
    return ( 
        <Container onClick = {fnc} status={status}>
            <Logo>{icon} </Logo>
            <p>{content}</p>
        </Container>
     );
}
 
export default SelectCard