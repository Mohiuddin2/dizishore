import AffiliateCTA from "./AffiliateCTA";
import AffiliatePolicy from "./AffiliatePolicy";
import AffiliateProcess from "./AffiliateProcess";
import CommissionPayoutStructure from "./Comm_payoutStructure";
import Dashboard from "./Dashboard";
import AffiliateProgramBenefits from "./Faq";
import Heading from "./Heading";


const Landing = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 via-white to-blue-100 absolute inset-0 h-full w-full z-0">
      <Heading/>
      <Dashboard/>
      <AffiliateCTA/>
      <AffiliateProgramBenefits/>
      <AffiliateProcess/>
      <CommissionPayoutStructure/>
      <AffiliatePolicy/>
    </div>
  );
}

export default Landing;
{/* <section className="bg-gradient-to-r from-blue-200 via-white to-blue-200 py-24 text-center"></section> */}