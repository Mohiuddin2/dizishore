import AffiliateCTA from "./AffiliateCTA";
import AffiliatePolicy from "./AffiliatePolicy";
import AffiliateProcess from "./AffiliateProcess";
import CommissionPayoutStructure from "./Comm_payoutStructure";
import Dashboard from "./Dashboard";
import AffiliateProgramBenefits from "./Faq";
import Heading from "./Heading";
import JoinUs from "./JoinUs";


const Landing = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-white to-blue-200">
      <Heading/>
      <Dashboard/>
      <AffiliateCTA/>
      <AffiliateProgramBenefits/>
      <AffiliateProcess/>
      <CommissionPayoutStructure/>
      <AffiliatePolicy/>
      <JoinUs/>
    </div>
  );
}

export default Landing;
