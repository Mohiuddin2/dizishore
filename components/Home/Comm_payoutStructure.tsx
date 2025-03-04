import React from 'react';
import Image from 'next/image'; 
import commissionPayoutImage from '../../public/images/commisionStuc.jpeg';
import { CustomCheckbox } from "@/components/ui/checkbox"


const CommissionPayoutStructure = () => {
  return (
    <section className="bg-white py-6 md:py-6 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-start"> 
        
        <div>
          <h2 className="text-3xl font-semibold text-blue-600 mb-8">
            Our Commission & Payout Structure
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-green-500 mr-2"><CustomCheckbox/></span> 
              <div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Every individual registered affiliate from DiziShore can earn a 5% commission on the new sales.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2"><CustomCheckbox/></span>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  You&apos;ll earn a 2% commission on recurring orders or renewals, and you&apos;ll keep receiving it whenever your customer renews or places a recurring order. Plus, this applies for an unlimited time.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2"><CustomCheckbox/></span>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A successful sale will be counted 15 days after the product is purchased. This policy aims to prevent complications related to events such as customers making a refund or return. After this grace period, affiliates can claim their sales commissions.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2"><CustomCheckbox/></span>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Commissions are calculated only for successful orders. In the case of any refund or return, your commission will not be calculated. Please make sure, each sale you have made has come from the referral link provided by us. Commissions will be calculated based on the sale price, excluding taxes and any applicable fees.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-green-500 mr-2"><CustomCheckbox/></span>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed">
                The minimum payout threshold is £50. This amount will be disbursed
                immediately upon request from the affiliate. The requested payments will be made via PayPal.
                </p>
              </div>
            </div>
          </div>
        </div>

      
        <div className="mt-1 md:mt-24 md:ml-36">
          <Image
            src={commissionPayoutImage} 
            alt="Our Commission & Payout Structure"
            layout="responsive"
            width={500}
            height={400}
            className="w-[400px] h-auto text-inherit"
            quality={90}
            // unoptimized={true}
          />
        </div>
      </div>
    </section>
  );
};

export default CommissionPayoutStructure;