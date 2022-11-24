import Layout from "@/components/common/Layout";
import React, { useState } from "react";
import INCENTIVE_DATA from "@/utils/data/incentive_data";
import ItemDescription from "@/components/Incentive/ItemDescription";


  const Incentives = () => {
  const [selected,setSelected] = useState(null);
return (
  <Layout>
    {selected===null?<div className="py-8 px-12">
      <div className="text-3xl font-semibold">
        Incentives
      </div>
      <div className="mt-16 w-[90%] mx-auto grid grid-cols-1 gap-5 justify-left items-left">
      <div>You might feel that purchasing an electric vehicle is costlier than buying an internal combustion engine vehicle, but that is only because of the higher upfront cost. Effective cost over the lifetime for electric vehicles is still less. The government offers different types of financial incentives to make electric vehicles more affordable for you. The key mechanisms for getting incentives are:</div>
      <div> </div>
      <div>1. Purchase Incentives: Direct discount provided to the user on the cost of the electric vehicle</div>
      <div>2. Coupons: Financial incentive where the amount is reimbursed later</div>
      <div>3. Interest Subventions:Discount offered on the interest rate while availing loan</div>
      <div>4. Road tax exemption:Road tax at the time of purchase is waived off</div>
      <div>5. Registration fee exemption:One-time registration fee applicable on new vehicle purchase is waived off</div>
      <div>6. Income tax benefit: Provided as a deduction on the tax amount payable by an individual to the government</div>
      <div>7. Scrapping incentives:Provided upon de-registering old Petrol and Diesel Vehicles</div>
      <div>8. Others: Incentives such as interest-free loans, top-up subsidies, special incentives on electric three-wheelers, etc. can also be availed</div>
      </div>

      <div className="text-2xl font-regular mt-8">
        National Incentives:
      </div>

      <div className="mt-8 w-[90%] mx-auto grid grid-cols-1 gap-5 justify-left items-left">
      <div>FAME, or Faster Adoption and Manufacturing of (Hybrid and) Electric vehicles, is currently India’s flagship scheme for promoting electric mobility. Currently in its 2nd phase of implementation, FAME-II is being implemented for a period of 3 years, eff. 1st April 2019 with a budget allocation of 10,000 Cr. The incentives offered in the scheme are:</div>
      <div>
        <img src='https://i.ibb.co/9vk9jLX/Screenshot-2022-11-24-135348.png'></img>
      </div>
      </div>
    </div>:<ItemDescription setSelected={setSelected} title={selected?.title} description={selected?.description} items={selected?.items}/>}
  </Layout>
);
};

;
export default Incentives;