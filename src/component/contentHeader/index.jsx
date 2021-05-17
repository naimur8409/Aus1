import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Header, HeaderContainer, SubHeader, Text, List } from './style'
const ContentHeader = ({header, text, subheader, button, ques,link}) => {
    return ( 
        <>
            <HeaderContainer>
                <Header>{header}</Header>
                <Text>{text}</Text>
                {ques ? ques.map((item ,id) => (
                    <>
                        <SubHeader style={{margin: '0px', padding: '0px'}}>{item.ques}</SubHeader>
                        {item.text ? <Text>{item.text}</Text> : null }
                        <List> 
                            {item.list ?
                            <ol>
                            {item.list.map(i => (
                                <li>{i.listItem}</li>
                            ))}
                            </ol>
                            : null}
                            {item.note ?
                            <p>{item.note}</p>
                            : null}
                        </List>
                    </>
                )) : null}
                <SubHeader>{subheader}</SubHeader>
                <Link to={link} style={{alignSelf: 'center'}}><Button>{button}</Button></Link>
            </HeaderContainer>
        </>
     );
}
 
export default ContentHeader;