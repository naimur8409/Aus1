import { Email, ExpandMore, Phone } from '@material-ui/icons';
import React from 'react'
import { PrimaryBtn } from '../utils/button';
import { Top,Head, Buttons, Bar,SubDropItem, BarItem,SubDropDown, DropdownContent,DropDown,DropItem,SubDropdownContent, SubBarItem } from './topbarStyle'
import CLogo from './logo.PNG'
import { FaAngleRight } from "react-icons/fa";
const Topbar = () => {
    return ( 
        <>
        <Top>
            <Head>
                <h5>ASIC Registered Agent No: 44543</h5>
            </Head>
            <p> 
                <Phone style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> 04587445 &nbsp;&nbsp;
                <Email style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> info@e-company.com.au
            </p>
            <Buttons>
                <PrimaryBtn>Signup</PrimaryBtn> &nbsp;
                <PrimaryBtn>Login</PrimaryBtn>
            </Buttons>
        </Top>

        <Bar>
            <BarItem><img src={CLogo} alt = "Logo" style={{width: '120px', alignSelf: 'center', padding: '5px'}} />
                    
            </BarItem>
            <DropDown>
                <BarItem><p>Business Registration <ExpandMore style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> </p>
                    <DropdownContent>
                        <DropItem to = "/company-registration">Company Registration</DropItem>
                        <DropItem to = "/foreign-company-registration">Foreign Company Registration</DropItem>
                        <DropItem to = "/ABN-registration">ABN Registration</DropItem>
                        <DropItem to = "/virtual-office-registration">Virtual Office Registration</DropItem>
                        <DropItem to= "/registered-agent-service">Registered Agent Service</DropItem>
                        <DropItem to = "/business-name-registration">Business Name Registration</DropItem>
                        <DropItem to = "/tfn-registration">TFN Registration</DropItem>
                        <DropItem to = "/gst-registration">GST Registration</DropItem>
                        <DropItem to = "/payg-registration">PAYG Registration</DropItem>
                    </DropdownContent>
                </BarItem>
            </DropDown>
            <DropDown>
                <BarItem><p>Startup Packages <ExpandMore style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> </p>
                    <DropdownContent>
                        <DropItem to = "/solo-trader-registration">Sole Trader Package</DropItem>
                        <DropItem to = "/partner-trader-registration">Partnership Package</DropItem>
                        <DropItem to = "/company-registration-form">Company Package</DropItem>
                        <DropItem to = "/ride-share-registration">Ride-Share Business Package</DropItem>
                    </DropdownContent>
                </BarItem>
            </DropDown>
            <DropDown>
                <BarItem><p>Filling <ExpandMore style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> </p>
                    <DropdownContent>
                        <SubDropDown>
                            <SubBarItem>Company Name and Set-up <FaAngleRight  style={{fontSize: '17px', marginTop:'5px', alignSelf: 'center', float: 'right'}} /> </SubBarItem>
                                <SubDropdownContent>
                                    <SubDropItem to = "/change-company-name">Change of Company Name</SubDropItem>
                                    <SubDropItem to = "/change-company-type">Change of Company Type</SubDropItem>
                                    <SubDropItem to = "/reservation-company-name">Reservation of Company Name</SubDropItem>
                                    <SubDropItem to = "/change-reservation-company-name">Change of Company Name Reservation</SubDropItem>
                                    <SubDropItem to = "/extension-company-name-reservation">Extension of Company Name Reservation</SubDropItem>
                                    <SubDropItem to = "/change-company-constitution">Change of Company Constitution</SubDropItem>
                                    <SubDropItem to = "/request-for-company-details">Request for Company Details</SubDropItem>
                                    <SubDropItem to = "/company-solvency-statement">Company Solvency Statement</SubDropItem>
                                    <SubDropItem to = "/correction-of-submitted">Correction of Submitted Form</SubDropItem>
                                    <SubDropItem to = "/commence-special-purpose-company-status">Commence Special Purpose Company Status</SubDropItem>
                                </SubDropdownContent>
                            
                        </SubDropDown>
                           
                        <SubDropDown>
                            
                            <SubBarItem>Officeholders and Registered Address <FaAngleRight  style={{fontSize: '17px', marginTop:'5px', alignSelf: 'center', float: 'right'}} /> </SubBarItem>
                                <SubDropdownContent>
                                    <SubDropItem to = "/appointment-of-new-officeholder">Appointment of New Officeholder</SubDropItem>
                                    <SubDropItem to = "/name-change-of-officeholder">Name Change of Officeholder</SubDropItem>
                                    <SubDropItem to = "/chease-officeholder">Cease Officeholder</SubDropItem>
                                    <SubDropItem to = "/add-new-role-to-existing-officeholder">Add New Role to Existing Officeholder</SubDropItem>
                                    <SubDropItem to = "/appointment-of-alternate-director">Appointment of Alternate Director</SubDropItem>
                                    <SubDropItem to = "/appointment-of-a-director">Appointment of a new director</SubDropItem>
                                    <SubDropItem to = "/change-name-and-details-of-a-director">Change Name and Details of Directors</SubDropItem>
                                    <SubDropItem to = "/update-business-address">Update Your Business Address</SubDropItem>
                                </SubDropdownContent>
                            
                        </SubDropDown>
                        <SubDropDown>
                                <SubBarItem>Share and Shareholders<FaAngleRight  style={{fontSize: '17px', marginTop:'5px', alignSelf: 'center', float: 'right'}} /> </SubBarItem>
                                <SubDropdownContent>
                                    <SubDropItem to = "/change-shareholders-details">Change Shareholder Details</SubDropItem>
                                    <SubDropItem to = "/issue-of-shared">Issue of New Shares</SubDropItem>
                                    <SubDropItem to = "/cancellation-of-shares">Cancellation of Shares</SubDropItem>
                                    <SubDropItem to = "/conversion-of-shares">Conversion of Shares Into Smaller or Larger Numbers</SubDropItem>
                                    <SubDropItem to = "/division-or-conversion-of-class-shares">Division or Conversion of a Class of Shares</SubDropItem>
                                </SubDropdownContent>
                        </SubDropDown>
                        <SubDropDown>
                                <SubBarItem>Annual Review<FaAngleRight  style={{fontSize: '17px', marginTop:'5px', alignSelf: 'center', float: 'right'}} /> </SubBarItem>
                                <SubDropdownContent>
                                    <SubDropItem to = "/annual-review-payment">Annual Review Payment</SubDropItem>
                                    <SubDropItem to = "/change-company-details">Change Company Details in Response to a Company Statement</SubDropItem>
                                    <SubDropItem to = "/re-issue-annual-review-payment">Re-issue Annual Statement</SubDropItem>
                                    <SubDropItem to = "/change-annual-review-date">Change annual review date</SubDropItem>
                                </SubDropdownContent>
                        </SubDropDown>
                        <SubDropDown>
                                <SubBarItem>Financial Reports and Accounts<FaAngleRight  style={{fontSize: '17px', marginTop:'5px', alignSelf: 'center', float: 'right'}} /> </SubBarItem>
                                <SubDropdownContent>
                                    <SubDropItem to = "/notification-of-half-yearly-reports">Notification of Half Yearly Reports</SubDropItem>
                                    <SubDropItem to = "/request-company-debt-report">Request Company Debt Report</SubDropItem>
                                </SubDropdownContent>
                        </SubDropDown>
                        <SubDropDown>
                                <SubBarItem>Closing Company<FaAngleRight  style={{fontSize: '17px', marginTop:'5px', alignSelf: 'center', float: 'right'}} /> </SubBarItem>
                                <SubDropdownContent>
                                    <SubDropItem to = "/deregistrationo-of-company">Deregistrationo Company</SubDropItem>
                                </SubDropdownContent>
                        </SubDropDown>
                        <SubDropDown>
                                <SubBarItem>Foreign Company<FaAngleRight  style={{fontSize: '17px', marginTop:'5px', alignSelf: 'center', float: 'right'}} /> </SubBarItem>
                                <SubDropdownContent>
                                <SubDropItem to = "/appoint-us-your-local-agent">Local Agent</SubDropItem>
                                <SubDropItem to = "/notification-of-change-to-directors">Notification Change </SubDropItem>
                                <SubDropItem to = "/notification-of-change-of-registered-office-or-office-hours">Notification Change Registered</SubDropItem>
                                <SubDropItem to = "/notify-change-of-name-constitution-power-of-directors">Notify Name of Change</SubDropItem>
                                <SubDropItem to = "/notification-of-dissolution-of-company">Notification Dissolution</SubDropItem>
                                </SubDropdownContent>
                        </SubDropDown>
                           
                    </DropdownContent>
                </BarItem>
            </DropDown>
            
            <DropDown>
                <BarItem><p>Legal Solutions<ExpandMore style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> </p>
                    <DropdownContent>
                        <SubDropDown>
                            <SubBarItem>For New Business<FaAngleRight  style={{fontSize: '17px', marginTop:'5px', alignSelf: 'center', float: 'right'}} /> </SubBarItem>
                            <SubDropdownContent>
                                <SubDropItem to = "/shareholder-agreement">Shareholder Agreement</SubDropItem>
                                <SubDropItem to = "/employment-agreement">Employment Agreement</SubDropItem>
                                <SubDropItem to = "/partnership-agreement">Partnership Agreement</SubDropItem>
                            </SubDropdownContent>
                        </SubDropDown>
                        <SubDropDown>
                            <SubBarItem>For Existing Business<FaAngleRight  style={{fontSize: '17px', marginTop:'5px', alignSelf: 'center', float: 'right'}} /> </SubBarItem>
                            <SubDropdownContent>
                                {/* <SubDropItem to = "/">Shareholder Agreement</SubDropItem> */}
                                {/* <SubDropItem to = "/">Employment Agreement</SubDropItem> */}
                                <SubDropItem to = "/commercial-sublease-agreement">Commercial Sublease Agreement</SubDropItem>
                                {/* <SubDropItem to = "/">Partnership Agreement</SubDropItem> */}
                            </SubDropdownContent>
                        </SubDropDown>
                        <SubDropDown>
                            <SubBarItem>General Agreements<FaAngleRight  style={{fontSize: '17px', marginTop:'5px', alignSelf: 'center', float: 'right'}} /> </SubBarItem>
                            <SubDropdownContent>
                                <SubDropItem to = "/memorandum-of-undeerstanding">Memorandum of Understanding</SubDropItem>
                                <SubDropItem to = "/power-of-attorney">Power of Attorney</SubDropItem>
                                <SubDropItem to = "/service-agreement">Service Agreement</SubDropItem>
                                <SubDropItem to = "/sale-of-goods-agreement">Sale of Goods Agreements</SubDropItem>
                                <SubDropItem to = "/gift-deed">Gift Deed</SubDropItem>
                            </SubDropdownContent>
                        </SubDropDown>
                   
                    </DropdownContent>
                </BarItem>
            </DropDown>
            
            {/* <BarItem><p>Filling <ExpandMore style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> </p></BarItem> */}
            {/* <BarItem><p>Legal Solutions <ExpandMore style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> </p></BarItem> */}
            <DropDown>
                <BarItem><p>HR Solutions<ExpandMore style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> </p>
                    <DropdownContent>
                        <DropItem to = "/confidentiality-policy">Confidenciality Policy</DropItem>
                        <DropItem to = "/partner-trader-registration">Business Plan</DropItem>
                        <DropItem to = "/discrimination-policy">Discrimination Policy</DropItem>
                        <DropItem to = "/drug-alcohol-policy">Drug Alcohol Policy</DropItem>
                        <DropItem to = "/grievance-policy">Grievance Policy </DropItem>
                        <DropItem to = "/harassmet-bullying-policy">Harassmet Bullying Policy</DropItem>
                        <DropItem to = "/it-policy">IT Policy</DropItem>
                        <DropItem to = "/performance-management">Performance Management Policy</DropItem>
                        <DropItem to = "/return-to-work-policy">Return to Work Policy </DropItem>
                    </DropdownContent>
                </BarItem>
            </DropDown>
           
            <BarItem><p>Tax Solutions <ExpandMore style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> </p></BarItem>
            <BarItem><p>Get Online <ExpandMore style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> </p></BarItem>
            <BarItem><p>IT Solutions <ExpandMore style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> </p></BarItem>
            <BarItem><p>Office Supplies <ExpandMore style={{fontSize: '17px', margin:'-3px', alignSelf: 'center'}} /> </p></BarItem>
        </Bar>

        </>
     );
}
 
export default Topbar;      