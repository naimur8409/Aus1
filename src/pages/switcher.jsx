
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Topbar from '../component/topbar';

import AbnRes from './abn_res/abnRes';
import NameRegiContent from './businessRegistration/nameRegistration/nameRegistration';
import AvnContent from './businessRegistration/abn/abnContent';
import AgentServiceContent from './businessRegistration/agentService/agentServiceContent';
import BusinessLanding from './businessRegistration/businessLanding';
import CompanyContent from './businessRegistration/company/companyContent';
import ForeignCompany from './businessRegistration/foreign/foreignContent';
import VirtualOffice from './businessRegistration/virtualOffice/virtualofficeContent';
import LandingPage from './landingPage/landingpage';
import ForeignForm from './businessRegistration/foreign/foreignForm';
import VirtualOfficeForm from './businessRegistration/virtualOffice/virtualOfiiceForm';
import Footer from '../component/footer';
import NameRegForm from './businessRegistration/nameRegistration/nameForm';
import AgentServiceform from './businessRegistration/agentService/AgentServiceform';
import TFNContent from './businessRegistration/tfn/tfnContent';
import TfnRegform from './businessRegistration/tfn/tfnRegisterForm';
import GstRegForm from './businessRegistration/gst/gstForm';
import GSTRegiContent from './businessRegistration/gst/gstRegistration';
import PAYGRegiContent from './businessRegistration/payg/paygRegistration';
import PAYGRegForm from './businessRegistration/payg/paygForm';
import SoloTreaderContent from './startupPackages/solo/soloRegistration';
import SoloRegForm from './startupPackages/solo/soloForm';
import PartnerTreaderContent from './startupPackages/partner/partnerRegistration';
import PartnerRegForm from './startupPackages/partner/partnerForm';
import CompanyRegForm from './startupPackages/company/companyForm';
import RideShareContent from './startupPackages/rideShare/rideShareRegistration';
import RideShareRegForm from './startupPackages/rideShare/rideShareForm';
// =================HR Solution==========================
import ConfidencialityPolicy from './hrsolution/ConfidentPolicy';
import ConfidencialityPolicyForm from './hrsolution/ConfidentPolicy/form';

import DiscriminationPolicy from './hrsolution/Discriminationpolicy';
import DiscriminationPolicyForm from './hrsolution/Discriminationpolicy/form';

import DrugAlcoholPolicy from './hrsolution/DrugAlcohol';
import DrugAlcoholPolicyForm from './hrsolution/DrugAlcohol/form';

import GrievancePolicy from './hrsolution/Grievance';
import GrievancePolicyForm from './hrsolution/Grievance/form';

import HarassmetBullyingPolicy from './hrsolution/Harasment';
import HarassmetBullyingPolicyForm from './hrsolution/Harasment/form';

import ItPolicy from './hrsolution/ItPolicy';
import ItPolicyForm from './hrsolution/ItPolicy/form';

import PerformanceManagement from './hrsolution/Performance';
import PerformanceManagementFrom from './hrsolution/Performance/form';

import ReturntoWorkPolicy from './hrsolution/ReturnToworkpolicy';
import ReturntoWorkPolicyFrom from './hrsolution/ReturnToworkpolicy/form';

import ChangeCompanyName from './filling_obligatins/Change_name_and_setup/change_company_name';
import ChangeCompanyNameForm from './filling_obligatins/Change_name_and_setup/change_company_name/form';
import ChangeCompanyType from './filling_obligatins/Change_name_and_setup/change_company_type';
import ChangeCompanyTypeForm from './filling_obligatins/Change_name_and_setup/change_company_type/form';
import ReservationComapnayName from './filling_obligatins/Change_name_and_setup/reservation_of_company_name';
import ReservationComapnayNameForm from './filling_obligatins/Change_name_and_setup/reservation_of_company_name/form';
import ChangeReservationComapnayName from './filling_obligatins/Change_name_and_setup/change_of_reservation_of_company_name';
import ChangeReservationComapnayNameForm from './filling_obligatins/Change_name_and_setup/change_of_reservation_of_company_name/form';
import ExtensionCompanyNameReservation from './filling_obligatins/Change_name_and_setup/extension_of_company_name_reservation';
import ExtensionCompanyNameReservationform from './filling_obligatins/Change_name_and_setup/extension_of_company_name_reservation/form';
import ChangeCompanyConstitution from './filling_obligatins/Change_name_and_setup/change_of_company_constitution';
import ChangeCompanyConstitutionform from './filling_obligatins/Change_name_and_setup/change_of_company_constitution/form';
import RequestCompanyDetails from './filling_obligatins/Change_name_and_setup/request_for_company_details';
import RequestCompanyDetailsform from './filling_obligatins/Change_name_and_setup/request_for_company_details/form';
import CompanySolvencyStatement from './filling_obligatins/Change_name_and_setup/company_solvency_statement';
import CompanySolvencyStatementform from './filling_obligatins/Change_name_and_setup/company_solvency_statement/form';
import CorrectionofSubmitted from './filling_obligatins/Change_name_and_setup/correction_of_submitted';
import CorrectionofSubmittedform from './filling_obligatins/Change_name_and_setup/correction_of_submitted/form';
import CommenceSpecialPurposeCompanyStatus from './filling_obligatins/Change_name_and_setup/commence_special_purpose_company_status';
import CommenceSpecialPurposeCompanyStatusform from './filling_obligatins/Change_name_and_setup/commence_special_purpose_company_status/form';
import AppointmentOfNewOfficeholder from './filling_obligatins/officeholders_and_registered_address/appointment_of_new_officeholder';
import AppointmentOfNewOfficeholderform from './filling_obligatins/officeholders_and_registered_address/appointment_of_new_officeholder/form';
import NameChangeOfOfficeholder from './filling_obligatins/officeholders_and_registered_address/name_change_of_officeholder';
import NameChangeOfOfficeholderform from './filling_obligatins/officeholders_and_registered_address/name_change_of_officeholder/form';
import CeaseOfficeholderform from './filling_obligatins/officeholders_and_registered_address/cease_officeholder';
import CeaseOfficeholderformform from './filling_obligatins/officeholders_and_registered_address/cease_officeholder/form';
import AddNewRoleToOfficeholder from './filling_obligatins/officeholders_and_registered_address/add_new_role_to_existing_officeholder';
import AddNewRoleToOfficeholderform from './filling_obligatins/officeholders_and_registered_address/add_new_role_to_existing_officeholder/form';
import AppointmentOfAlternateDirector from './filling_obligatins/officeholders_and_registered_address/appointment_of_alternate_director';
import AppointmentOfAlternateDirectorForm from './filling_obligatins/officeholders_and_registered_address/appointment_of_alternate_director/form';
import AppointmentOfNewDirector from './filling_obligatins/officeholders_and_registered_address/appointment_of_a_director';
import AppointmentOfNewDirectorForm from './filling_obligatins/officeholders_and_registered_address/appointment_of_a_director/form';
import ChangeNameAndDetailsOfDirector from './filling_obligatins/officeholders_and_registered_address/change_name_and_details_of_a_director';
import ChangeNameAndDetailsOfDirectorForm from './filling_obligatins/officeholders_and_registered_address/change_name_and_details_of_a_director/form';
import UpdateBusinessAddress from './filling_obligatins/officeholders_and_registered_address/update_business_address';
import UpdateBusinessAddressForm from './filling_obligatins/officeholders_and_registered_address/update_business_address/form';
import ChangeShareholderDetails from './filling_obligatins/share_and_shareholders/change_shareholder_details';
import ChangeShareholderDetailsForm from './filling_obligatins/share_and_shareholders/change_shareholder_details/form';
import IssueOfNewShares from './filling_obligatins/share_and_shareholders/issue_of_shared';
import IssueOfNewSharesForm from './filling_obligatins/share_and_shareholders/issue_of_shared/form';
import CancellationOfShares from './filling_obligatins/share_and_shareholders/cancellation_of_shares';
import CancellationOfSharesForm from './filling_obligatins/share_and_shareholders/cancellation_of_shares/form';
import ConversionOfShares from './filling_obligatins/share_and_shareholders/conversion_of_shares';
import ConversionOfSharesForm from './filling_obligatins/share_and_shareholders/conversion_of_shares/form';
import DivisionOrConversionOfClassShares from './filling_obligatins/share_and_shareholders/division_or_conversion_of_class_shares';
import DivisionOrConversionOfClassSharesForm from './filling_obligatins/share_and_shareholders/division_or_conversion_of_class_shares/form';

import AnnualReviewPayment from './filling_obligatins/annual_review/annual_review_payment';
import AnnualReviewPaymentForm from './filling_obligatins/annual_review/annual_review_payment/form';

import ChangeCompanyDetails from './filling_obligatins/annual_review/change_company_details';
import ChangeCompanyDetailsForm from './filling_obligatins/annual_review/change_company_details/form';

import ReIssueAnnualReviewPayment from './filling_obligatins/annual_review/re-issue_annual_statement';
import ReIssueAnnualReviewPaymentForm from './filling_obligatins/annual_review/re-issue_annual_statement/form';

import ChangeAnnualReviewDate from './filling_obligatins/annual_review/change_annual_review_date';
import ChangeAnnualReviewDateForm from './filling_obligatins/annual_review/change_annual_review_date/form';

import NotificationOfHalfYearlyReports from './filling_obligatins/financial_reports_and_accounts/notification_of_half_yearly_reports';
import NotificationOfHalfYearlyReportsForm from './filling_obligatins/financial_reports_and_accounts/notification_of_half_yearly_reports/form';

import RequestCompanyDebtReport from './filling_obligatins/financial_reports_and_accounts/request_company_debt_report';
import RequestCompanyDebtReportForm from './filling_obligatins/financial_reports_and_accounts/request_company_debt_report/form';

import DeregistrationOfCompany from './filling_obligatins/closing_company/deregistration_of_company';
import DeregistrationOfCompanyForm from './filling_obligatins/closing_company/deregistration_of_company/form';

import AppointUsAsYourLocalAgent from './filling_obligatins/foreign_company/appoint_as_as_your_local_agent';
import AppointUsAsYourLocalAgentForm from './filling_obligatins/foreign_company/appoint_as_as_your_local_agent/form';

import NotificationofChangetoDirectorsForm from './filling_obligatins/foreign_company/notification_of_change_to_directors/form';
import NotificationofChangetoDirectors from './filling_obligatins/foreign_company/notification_of_change_to_directors';

import NotificationofChangeofRegisteredOfficeorOfficeHours from './filling_obligatins/foreign_company/notification_of_change_of_registered_office_or_office_hours';
import NotificationofChangeofRegisteredOfficeorOfficeHoursForm from './filling_obligatins/foreign_company/notification_of_change_of_registered_office_or_office_hours/form';
import NotifyChangeofNameConstitutionPowerofDirectors from './filling_obligatins/foreign_company/notify_change_of_name_constitution_power_of_directors';
import NotifyChangeofNameConstitutionPowerofDirectorsForm from './filling_obligatins/foreign_company/notify_change_of_name_constitution_power_of_directors/form';

import NotificationofDissolutionofCompany from './filling_obligatins/foreign_company/notification_of_dissolution_of_company';
import NotificationofDissolutionofCompanyForm from './filling_obligatins/foreign_company/notification_of_dissolution_of_company/form';

// ======================= Legal Solution=========
import ShareholderAgreement from './legal_solutions/for_new_business/shareholder_agreement';
import ShareholderAgreementForm from './legal_solutions/for_new_business/shareholder_agreement/form';

import EmploymentAgreement from './legal_solutions/for_new_business/employement_agreement';
import EmploymentAgreementForm from './legal_solutions/for_new_business/employement_agreement/form';

import PartnershipAgreement from './legal_solutions/for_new_business/partnership_agreement';
import PartnershipAgreementForm from './legal_solutions/for_new_business/partnership_agreement/form';

import CommercialSubleaseAgreement from './legal_solutions/for_existing_business/commercial_sublease_agreement';
import CommercialSubleaseAgreementForm from './legal_solutions/for_existing_business/commercial_sublease_agreement/form';

import MemorandumOfUndeerstanding from './legal_solutions/general_agreements/memorandum_of_undeerstanding';
import MemorandumOfUndeerstandingForm from './legal_solutions/general_agreements/memorandum_of_undeerstanding/form';

import PowerOfAttorney from './legal_solutions/general_agreements/power_of_attorney';
import PowerOfAttorneyForm from './legal_solutions/general_agreements/power_of_attorney/form';

import ServiceAgreement from './legal_solutions/general_agreements/service_agreement';
import ServiceAgreementForm from './legal_solutions/general_agreements/service_agreement/form';

import SaleOfGoodsAgreement from './legal_solutions/general_agreements/sale_of_goods_agreements';
import SaleOfGoodsAgreementForm from './legal_solutions/general_agreements/sale_of_goods_agreements/form';

import GiftDeed from './legal_solutions/general_agreements/gift_deed';
import GiftDeedForm from './legal_solutions/general_agreements/gift_deed/form';

const Container = styled.div`
    padding: 0px 0px;
    margin: 0px 0px;
    width: 100%;
    height: 100%;
`;
const Switcher = () => {
    return ( 
        <>
        <Topbar />
        <Container>

            <Switch>
                <Route path="/abnResFrom" component={AbnRes}/>

                {/* =============Legal Solution    ============== */}

                <Route path="/shareholder-agreement" component={ShareholderAgreement}/>
                <Route path="/shareholder-agreement-form" component={ShareholderAgreementForm}/>

                <Route path="/employment-agreement" component={EmploymentAgreement}/>
                <Route path="/employment-agreement-form" component={EmploymentAgreementForm}/>

                <Route path="/partnership-agreement" component={PartnershipAgreement}/>
                <Route path="/partnership-agreement-form" component={PartnershipAgreementForm}/>

                <Route path="/commercial-sublease-agreement" component={CommercialSubleaseAgreement}/>
                <Route path="/commercial-sublease-agreement-form" component={CommercialSubleaseAgreementForm}/>

                <Route path="/memorandum-of-undeerstanding" component={MemorandumOfUndeerstanding}/>
                <Route path="/memorandum-of-undeerstanding-form" component={MemorandumOfUndeerstandingForm}/>

                <Route path="/power-of-attorney" component={PowerOfAttorney}/>
                <Route path="/power-of-attorney-form" component={PowerOfAttorneyForm}/>

                <Route path="/service-agreement" component={ServiceAgreement}/>
                <Route path="/service-agreement-form" component={ServiceAgreementForm}/>

                <Route path="/sale-of-goods-agreement" component={SaleOfGoodsAgreement}/>
                <Route path="/sale-of-goods-agreement-form" component={SaleOfGoodsAgreementForm}/>
                

                <Route path="/gift-deed" component={GiftDeed}/>
                <Route path="/gift-deed-form" component={GiftDeedForm}/>
                

                    {/* ===============Annual Review========== */}
                <Route path="/request-company-debt-report" component={RequestCompanyDebtReport}/>
                <Route path="/request-company-debt-report-form" component={RequestCompanyDebtReportForm}/>
                
                
                <Route path="/deregistrationo-of-company" component={DeregistrationOfCompany}/>
                <Route path="/deregistrationo-of-company-form" component={DeregistrationOfCompanyForm}/>
                
                <Route path="/appoint-us-your-local-agent" component={AppointUsAsYourLocalAgent}/>
                <Route path="/appoint-us-your-local-agent-form" component={AppointUsAsYourLocalAgentForm}/>

                
                <Route path="/notification-of-change-to-directors" component={NotificationofChangetoDirectors}/>
                <Route path="/notification-of-change-to-directors-form" component={NotificationofChangetoDirectorsForm}/>
                

                <Route path="/notification-of-change-of-registered-office-or-office-hours" component={NotificationofChangeofRegisteredOfficeorOfficeHours}/>
                <Route path="/notification-of-change-of-registered-office-or-office-hours-form" component={NotificationofChangeofRegisteredOfficeorOfficeHoursForm}/>
                

                <Route path="/notify-change-of-name-constitution-power-of-directors" component={NotifyChangeofNameConstitutionPowerofDirectors}/>
                <Route path="/notify-change-of-name-constitution-power-of-directors-form" component={NotifyChangeofNameConstitutionPowerofDirectorsForm}/>
                

                <Route path="/notification-of-dissolution-of-company" component={NotificationofDissolutionofCompany}/>
                <Route path="/notification-of-dissolution-of-company-form" component={NotificationofDissolutionofCompanyForm}/>

                <Route path="/notification-of-half-yearly-reports" component={NotificationOfHalfYearlyReports}/>
                <Route path="/notification-of-half-yearly-reports-form" component={NotificationOfHalfYearlyReportsForm}/>
                
                <Route path="/change-annual-review-date" component={ChangeAnnualReviewDate}/>
                <Route path="/change-annual-review-date-form" component={ChangeAnnualReviewDateForm}/>
                
                <Route path="/re-issue-annual-review-payment" component={ReIssueAnnualReviewPayment}/>
                <Route path="/re-issue-annual-review-payment-form" component={ReIssueAnnualReviewPaymentForm}/>
                
                <Route path="/annual-review-payment" component={AnnualReviewPayment}/>
                <Route path="/annual-review-payment-form" component={AnnualReviewPaymentForm}/>
                
                <Route path="/change-company-details" component={ChangeCompanyDetails}/>
                <Route path="/change-company-details-form" component={ChangeCompanyDetailsForm}/>
                
                    {/* ===============Change Shares========== */}
                <Route path="/division-or-conversion-of-class-shares" component={DivisionOrConversionOfClassShares}/>
                <Route path="/division-or-conversion-of-class-shares-form" component={DivisionOrConversionOfClassSharesForm}/>
                
                <Route path="/conversion-of-shares" component={ConversionOfShares}/>
                <Route path="/conversion-of-shares-form" component={ConversionOfSharesForm}/>
                
                <Route path="/cancellation-of-shares" component={CancellationOfShares}/>
                <Route path="/cancellation-of-shares-form" component={CancellationOfSharesForm}/>
                
                <Route path="/issue-of-shared" component={IssueOfNewShares}/>
                <Route path="/issue-of-shared-form" component={IssueOfNewSharesForm}/>
                
                <Route path="/change-shareholders-details" component={ChangeShareholderDetails}/>
                <Route path="/change-shareholders-details-form" component={ChangeShareholderDetailsForm}/>
                
                    {/* ===============Offilce Holder========== */}
                <Route path="/update-business-address" component={UpdateBusinessAddress}/>
                <Route path="/update-business-address-form" component={UpdateBusinessAddressForm}/>
                
                <Route path="/change-name-and-details-of-a-director" component={ChangeNameAndDetailsOfDirector}/>
                <Route path="/change-name-and-details-of-a-director-form" component={ChangeNameAndDetailsOfDirectorForm}/>
                
                <Route path="/appointment-of-a-director" component={AppointmentOfNewDirector}/>
                <Route path="/appointment-of-a-director-form" component={AppointmentOfNewDirectorForm}/>
                
                <Route path="/appointment-of-alternate-director" component={AppointmentOfAlternateDirector}/>
                <Route path="/appointment-of-alternate-director-form" component={AppointmentOfAlternateDirectorForm}/>
                
                <Route path="/add-new-role-to-existing-officeholder" component={AddNewRoleToOfficeholder}/>
                <Route path="/add-new-role-to-existing-officeholder-form" component={AddNewRoleToOfficeholderform}/>
                
                <Route path="/chease-officeholder" component={CeaseOfficeholderform}/>
                <Route path="/chease-officeholder-form" component={CeaseOfficeholderformform}/>
                
                <Route path="/name-change-of-officeholder" component={NameChangeOfOfficeholder}/>
                <Route path="/name-change-of-officeholder-form" component={NameChangeOfOfficeholderform}/>

                <Route path="/appointment-of-new-officeholder" component={AppointmentOfNewOfficeholder}/>
                <Route path="/appointment-of-new-officeholder-form" component={AppointmentOfNewOfficeholderform}/>


                    {/* ===============Name/Type========== */}
                <Route path="/commence-special-purpose-company-status" component={CommenceSpecialPurposeCompanyStatus}/>
                <Route path="/commence-special-purpose-company-status-form" component={CommenceSpecialPurposeCompanyStatusform}/>
                
                <Route path="/correction-of-submitted" component={CorrectionofSubmitted}/>
                <Route path="/correction-of-submitted-form" component={CorrectionofSubmittedform}/>
                
                <Route path="/company-solvency-statement" component={CompanySolvencyStatement}/>
                <Route path="/company-solvency-statement-form" component={CompanySolvencyStatementform}/>
                
                <Route path="/request-for-company-details" component={RequestCompanyDetails}/>
                <Route path="/request-for-company-details-form" component={RequestCompanyDetailsform}/>
                
                <Route path="/change-company-constitution" component={ChangeCompanyConstitution}/>
                <Route path="/change-company-constitution-form" component={ChangeCompanyConstitutionform}/>
                
                <Route path="/extension-company-name-reservation" component={ExtensionCompanyNameReservation}/>
                <Route path="/extension-company-name-reservation-form" component={ExtensionCompanyNameReservationform}/>
                
                <Route path="/change-reservation-company-name" component={ChangeReservationComapnayName}/>
                <Route path="/change-reservation-company-name-form" component={ChangeReservationComapnayNameForm}/>
                
                <Route path="/reservation-company-name" component={ReservationComapnayName}/>
                <Route path="/reservation-company-name-form" component={ReservationComapnayNameForm}/>
                
                <Route path="/change-company-type" component={ChangeCompanyType}/>
                <Route path="/change-company-type-form" component={ChangeCompanyTypeForm}/>
                
                <Route path="/change-company-name" component={ChangeCompanyName}/>
                <Route path="/change-company-name-form" component={ChangeCompanyNameForm}/>
                
                {/* =============HR Solution============== */}
                <Route path="/confidentiality-policy" component={ConfidencialityPolicy}/>
                <Route path="/confidentiality-policy-from" component={ConfidencialityPolicyForm}/>
                
                <Route path="/discrimination-policy" component={DiscriminationPolicy}/>
                <Route path="/discrimination-policy-form" component={DiscriminationPolicyForm}/>
                
                <Route path="/drug-alcohol-policy" component={DrugAlcoholPolicy}/>
                <Route path="/drug-alcohol-policy-form" component={DrugAlcoholPolicyForm}/>
                
                <Route path="/grievance-policy" component={GrievancePolicy}/>
                <Route path="/grievance-policy-form" component={GrievancePolicyForm}/>
                
                <Route path="/harassmet-bullying-policy" component={HarassmetBullyingPolicy}/>
                <Route path="/harassmet-bullying-policy-form" component={HarassmetBullyingPolicyForm}/>
                
                <Route path="/it-policy" component={ItPolicy}/>
                <Route path="/it-policy-form" component={ItPolicyForm}/>
                
                <Route path="/performance-management" component={PerformanceManagement}/>
                <Route path="/performance-management-form" component={PerformanceManagementFrom}/>
                
                
                <Route path="/return-to-work-policy" component={ReturntoWorkPolicy}/>
                <Route path="/return-to-work-policy-form" component={ReturntoWorkPolicyFrom}/>
                

                {/* =============Start up============== */}
                
                
                <Route path="/ride-share-registration" component={RideShareContent}/>
                <Route path="/ride-share-registration-form" component={RideShareRegForm}/>

                <Route path="/company-registration-form" component={CompanyRegForm}/>
                
                <Route path="/partner-trader-registration" component={PartnerTreaderContent}/>
                <Route path="/partner-trader-registration-form" component={PartnerRegForm}/>

                <Route path="/solo-trader-registration" component={SoloTreaderContent}/>
                <Route path="/solo-trader-registration-form" component={SoloRegForm}/>



                {/* =========================Business Regi== */}
                <Route path="/payg-registration" component={PAYGRegiContent}/>
                <Route path="/payg-registration-form" component={PAYGRegForm}/>
                
                <Route path="/gst-registration" component={GSTRegiContent}/>
                <Route path="/gst-registration-form" component={GstRegForm}/>
                
                <Route path="/tfn-registration" component={TFNContent}/>
                <Route path="/tfn-registration-form" component={TfnRegform}/>

                <Route path="/business-name-registration" component={NameRegiContent}/>
                <Route path="/business-name-registration-form" component={NameRegForm}/>
                
                <Route path="/registered-agent-service" component={AgentServiceContent}/>
                <Route path="/agent-service-registration-form" component={AgentServiceform}/>

                <Route path="/virtual-office-registration" component={VirtualOffice}/>
                <Route path="/virtual-office-registration-form" component={VirtualOfficeForm}/>

                <Route path="/ABN-registration" component={AvnContent}/>

                <Route path="/foreign-company-registration" component={ForeignCompany}/>
                <Route path="/foreign-company-registration-form" component={ForeignForm}/>

                <Route path="/company-registration" component={CompanyContent}/>
                <Route path="/business-registration" component={BusinessLanding}/>


                <Route path="/home" component={LandingPage}/>
                <Redirect to="/home" from="/" />
            </Switch>
        </Container>
        <Footer />
        </>
     );
}
 
export default Switcher;