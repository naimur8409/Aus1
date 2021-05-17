import React, { useEffect } from 'react'
import { Wrapper, Bg1, Card,Icon,PlainCardIcon, CardContent, CardIcon,
        Content, ContentWrapper, Header, PlainCard, InputBox,
         ClipCard, Slider ,ClipCards, Footer, FooterWrapper
        } from './landingStyle';
import { Bg2 } from './landingStyle';
import BG1 from './bgc1.PNG';
import BG2 from './bgc2.PNG';
import { Head } from '../../pages/landingPage/landingStyle';
import { FaAngleRight, FaArrowCircleRight, FaGlobe, FaInstagramSquare, FaMapMarkerAlt, FaPhoneAlt, FaPlay, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import { Grid } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const LandingPage = () => {

    useEffect(() => {
        
    }, [])
    return ( 
        <Wrapper>
            <Bg1 src={BG1}/>
            <Bg2 src={BG2}/>
            <Head>
                <h1>Register Your Company Today</h1>
                <h4>All Business Solutions in one platform</h4>
                <h5>We are providing Fastest Company Formation 
                    all around from Australia </h5>
                <button>GET STARTED NOW<FaArrowCircleRight style={{margin: '-5px', position: 'relative', right: '-100px'}} /> </button>
            </Head>
            <Content color = "no">
                <ContentWrapper >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Header> <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> Register Your Company Now <span></span></Header>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardIcon>
                                <Icon><FaGlobe /></Icon>
                            </CardIcon>
                            <CardContent>
                                <h1>Register ABN Online </h1>
                                <h4>Agency Filing Free</h4>
                                <h5>$39</h5>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardIcon>
                                <Icon><FaGlobe /></Icon>
                            </CardIcon>
                            <CardContent>
                                <h1>Update Your Company Details </h1>
                                <h4>Agency Filing Free</h4>
                                <h5>$39</h5>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardIcon>
                                <Icon><FaGlobe /></Icon>
                            </CardIcon>
                            <CardContent>
                                <h1>Legal Health Check </h1>
                                <h4>We have designed a free health check for your business</h4>
                                <h5>Duration : 5 Min</h5>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardIcon>
                                <Icon><FaGlobe /></Icon>
                            </CardIcon>
                            <CardContent>
                                <h1>Registered Agent Service </h1>
                                <h4>Agency Filling Fee</h4>
                                <h5>$249</h5>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardIcon>
                                <Icon><FaGlobe /></Icon>
                            </CardIcon>
                            <CardContent>
                                <h1>Domain, Hosting, Digital marketing etc.</h1>
                                <h4>Agency Filling Fee</h4>
                                <h5>$39</h5>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card>
                            <CardIcon>
                                <Icon><FaGlobe /></Icon>
                            </CardIcon>
                            <CardContent>
                                <h1>Startup Packages</h1>
                                <h4>We have designed a free health check for your business</h4>
                                <h5>Duration : 5 Min</h5>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
                </ContentWrapper>

            </Content>

            <Content color = "yes">
                <ContentWrapper >
                    <PlainCard>
                        <PlainCardIcon><FaGlobe /></PlainCardIcon>
                        <h1>Simple & fast</h1>
                        <p>
                            We have taken the complexity out of incorporating a business. 
                            Fill out our simple online forms in minutes.  
                            We connect in real time to ASIC to register your company in less than 5 minutes.
                        </p>
                    </PlainCard>

                    <PlainCard>
                        <PlainCardIcon><FaGlobe /></PlainCardIcon>
                        <h1>Personalized care</h1>
                        <p>
                            We have seamlessly combined people, process & technology to provide you the best personalised service.
                            Our incorporation specialists review your forms, prepare all documents necessary to incorporate in government database.
                        </p>
                    </PlainCard>

                    <PlainCard>
                        <PlainCardIcon><FaGlobe /></PlainCardIcon>
                        <h1>Affordable</h1>
                        <p>
                            Apart from competitive pricing, you are empowered with customization. Our website will 
                            let you customise your order according to you service need. The customization 
                            process is built to optimize your budget and time.
                        </p>
                    </PlainCard>


                </ContentWrapper>
            </Content>
        
        
            <Content color = "no">
                <ContentWrapper >
                <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Header> <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> Get Legal Documents <span></span></Header>
                </Grid>
                <Grid item xs={3}>
                
                    <PlainCard color = "yes">
                        <PlainCardIcon><FaGlobe /></PlainCardIcon>
                        <h1>FOR NEW BUSINESSES</h1>
                        <p> <span><FaPlay /></span> Shareholder Agreement</p>
                        <p> <span><FaPlay /></span> Employment Agreement</p>
                        <p> <span><FaPlay /></span> Joint Venture (JV) Agreement</p>
                        <p> <span><FaPlay /></span> Confidentiality Agreement</p>
                        <p> <span><FaPlay /></span> Partnership Agreement</p>
                        <p> <span><FaPlay /></span> Company Constitution</p>
                    </PlainCard>
                    </Grid>
                    <Grid item xs={3}>
                    <PlainCard  color = "yes">
                        <PlainCardIcon><FaGlobe /></PlainCardIcon>
                        <h1>FOR EXISTING BUSINESSES</h1>
                        <p> <span><FaPlay /></span> Commercial Lease Agreement</p>
                        <p> <span><FaPlay /></span> Commercial Sublease Agreement</p>
                        <p> <span><FaPlay /></span> Loan Agreement </p>
                        <p> <span><FaPlay /></span> Letter of Demand</p>
                    </PlainCard>
                    </Grid>
                    <Grid item xs={3}>
                    <PlainCard  color = "yes">
                        <PlainCardIcon><FaGlobe /></PlainCardIcon>
                        <h1>FOR ONLINE BUSINESSES</h1>
                        <p> <span><FaPlay /></span> Website Terms & Conditions</p>
                        <p> <span><FaPlay /></span> Privacy Policy</p>
                        <p> <span><FaPlay /></span> Website Development Agreement</p>
                        <p> <span><FaPlay /></span> Web Advertisement Agreement</p>
                        <p> <span><FaPlay /></span> End User License Agreement
                            Cyber Security Policy
                        </p>
                    </PlainCard>
                    </Grid>
                    <Grid item xs={3}>
                    <PlainCard  color = "yes">
                        <PlainCardIcon><FaGlobe /></PlainCardIcon>
                        <h1>General Agreements</h1>
                        <p> <span><FaPlay /></span> Memorandum of Understanding</p>
                        <p> <span><FaPlay /></span> Power of Attorney</p>
                        <p> <span><FaPlay /></span> Service Agreement</p>
                        <p> <span><FaPlay /></span> Sale of Goods Agreements</p>
                        <p> <span><FaPlay /></span> Gift Deed</p>
                        <p> <span><FaPlay /></span> Residential Lease Agreement Residential Sublease Agreement</p>
                    </PlainCard>
                </Grid>
            </Grid>

                </ContentWrapper>
            </Content>
        
            <Content color = "yes">
                <ContentWrapper  >
                <PlainCard style={{backgroundColor: '#0101D2'}} >
                        
                    </PlainCard>
                    <PlainCard style={{backgroundColor: '#0101D2'}}>
                        
                    </PlainCard>
                    <PlainCard style={{ border: '4px solid green'}}>
                       
                            <h1 style={{ margin: '0px', textAlign: 'center'}}>Earn Extra Money</h1>
                            <p style={{margin: '0px', fontSize: '14px', textAlign: 'center'}}>Get An Estimate Price For Space You Rent</p>
                           
                                <InputBox>
                                    <input placeholder="Email" />
                                </InputBox>
                                <InputBox>
                                    <input placeholder="Name" />
                                </InputBox>
                           
                            <p style={{margin: '0px',padding: '0px 10px', fontSize: '14px', textAlign: 'left'}}>MONTHLY PAID</p>
                            <h1 style={{ margin: '0px',padding: '0px 10px', textAlign: 'left'}}>$6532</h1>
                            <InputBox style={{marginTop : '-10px'}}>
                                <button >GET STARTED </button>
                            </InputBox>
                            
                    </PlainCard>


                </ContentWrapper>
            </Content>
            
            <Content color = "no">
                <ContentWrapper >
                <Grid container spacing={1}>
                <Grid item xs={12}>
                        <p style={{color: '#0101D2', textAlign: 'center'}}>What We Do Best</p>
                        <Header style={{color: '#0101D2'}}> TESTIMONIAL</Header>
                        
                </Grid>
                <Slider>
                        
                <Carousel autoPlay infiniteLoop showArrows={true} width="100%" showStatus={false}  >
                    <ClipCards>
                        <div style={{width: '48%'}}>
                            <ClipCard>
                                <h3>Highly professional service</h3>
                            </ClipCard>
                            <p><span>&nbsp;</span> Daniel</p>
                        </div>
                        <div style={{width: '48%'}}>
                            <ClipCard>
                                <h3>Easiest Web navigation experience</h3>
                            </ClipCard>
                            <p> <span>&nbsp;</span> Farah</p>
                        </div>
                    </ClipCards>

                    <ClipCards>
                        <div style={{width: '48%'}}>
                            <ClipCard>
                                <h3>Highly professional service</h3>
                            </ClipCard>
                            <p><span>&nbsp;</span> Daniel</p>
                        </div>
                        <div style={{width: '48%'}}>
                            <ClipCard>
                                <h3>Easiest Web navigation experience</h3>
                            </ClipCard>
                            <p> <span>&nbsp;</span> Farah</p>
                        </div>
                    </ClipCards>
                </Carousel>
            
                </Slider>
            </Grid>

                </ContentWrapper>
            </Content>
            
           
        </Wrapper>
     
     );
}
 
export default LandingPage;