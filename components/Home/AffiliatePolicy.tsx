import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

const AffiliatePolicy = () => {
  return (
    <section className="bg-white py-6 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">Affiliate Policy</h1>
        <p className="text-gray-700 mb-1 text-justify">
          To ensure a smooth and transparent experience for all affiliates, we have prepared our own <Link className='underline' href={"https://support.dizishore.com/support/solutions/articles/101000436262-affiliate-policy"}> affiliate policies</Link>.
        </p>
        <p className="text-gray-700 mb-4">
          Please read our affiliate policy below:
        </p>

         <Card className="mb-2">
          <CardHeader>
            <CardTitle className='text-2xl'>Eligibility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-justify">
              Anyone from around the world who is passionate about digital product selling can join our affiliate program (please review <Link className='underline' href={"https://support.dizishore.com/support/solutions/articles/101000436262-affiliate-policy"}> affiliate policies</Link>). To confirm your participation, you must provide accurate and complete information during our affiliate registration process.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              DiziShore reserves the right to approve or reject any affiliate application with or without any written notice.
            </p>
          </CardContent>
        </Card>


        <Card className="mb-2">
          <CardHeader>
            <CardTitle className='text-2xl'>Prohibited Activities</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            <p className="mb-2 text-justify">
              Affiliates must not engage in any fraudulent, deceptive, or unethical practices. Please do not perform any:
            </p>
            <ul className="list-disc list-inside mb-1">
              <li>Spamming</li>
              <li>Cookie stuffing</li>
              <li>Using misleading advertising</li>
              <li>Paid promotion using brand keywords</li>
            </ul>
            <p className="text-gray-700 mb-1 -ml-3">
              The above violations will lead you to:
            </p>
            <ul className="list-disc list-inside">
              <li>Immediate termination from the affiliate program</li>
              <li>Won’t get any remaining commissions</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-2">
          <CardHeader>
            <CardTitle className='text-2xl'>Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-justify">
            Affiliates must comply with all applicable laws and regulations, including those related to advertising and marketing. Affiliates must also follow DiziShore’s brand guidelines and use proper marketing materials to avoid termination.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-2">
          <CardHeader>
            <CardTitle className='text-2xl'>Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-2 text-justify">
            DiziShore holds the right to end a partnership with an affiliate at any moment, with or without any notice. This may be an indication that the affiliate has violated any rules. Affiliates also have the option to discontinue their involvement with our affiliate program at any time by giving written notification.
            </p>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default AffiliatePolicy;