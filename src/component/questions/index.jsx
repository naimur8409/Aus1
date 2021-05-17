import React, { useState } from 'react'
import {Header,SubHeader, QuestionsContainer, List} from './style'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        maxWidth: '100%',
        color: theme.palette.info.dark,
    },

  }));
const Questions = ({data, title}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const [show, setshow] = useState(false)
    return ( 
        <QuestionsContainer>
            <Header><span></span> {title} <span></span> </Header>
            
    
                
            <div className={classes.root}>
                {data.map((item ,id) => (
                    <>
                    <Accordion expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="bh-header"
                            >
                            <Typography  style={{color: '#016BFF'}} >{item.ques}</Typography>
                         
                        </AccordionSummary>
                        <AccordionDetails>
                        <List>
                                <p style={{color: '#000'}}>{item?.text}</p>
                                    {item.list ?
                                        <ol>
                                            {item.list.map(i => (
                                                <li style={{color: '#000'}}>{i.listItem}</li>
                                            ))}
                                        </ol>
                                    : null}
                                    {item.note ?
                                        <p style={{color: '#000'}}>{item.note}</p>
                                    : null}
                                </List>
                        </AccordionDetails>
                    </Accordion>
                    {/* <SubHeader>{item.ques}</SubHeader> */}
                    
                    {/* {show ?
                        <List>
                            <p>{item?.text}</p>
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
                        : null
                    }*/}
                    </>
                ))} 
            </div>
        </QuestionsContainer>
     );
}
 
export default Questions;