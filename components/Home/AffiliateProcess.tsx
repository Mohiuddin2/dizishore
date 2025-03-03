import React from 'react';

const AffiliateProcess = () => {
  return (
    <section className="bg-white py-0 md:py-2 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600 mb-3 text-center md:text-left">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="text-justify md:mr-6">
           <div className="text-4xl font-semibold text-blue-600 mb-4">01</div>
            <h3 className="text-2xl font-semibold mb-2">Sign Up</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              It&apos;s super easy and fast to sign up for our affiliate program. To begin with, just fill out the registration form and hit the sign up button.
            </p>
          </div>


          <div className="text-justify md:mr-6">
            <div className="text-4xl font-semibold text-blue-600 mb-4">02</div>
            <h3 className="text-2xl font-semibold mb-2">Promote Products</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              A unique referral ID will be available on your affiliate dashboard after a successful registration. Please make sure you use the same referral ID to create a referral link while promoting any product. Additionally, a large number of marketing materials will be available to promote the products across your website, blog, social media, or any other platform you prefer.
            </p>
          </div>


          <div className="text-justify">
            <div className="text-4xl font-semibold text-blue-600 mb-4">03</div>
            <h3 className="text-2xl font-semibold mb-2">Earning Commissions</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              You will receive a 5% commission on every sale made through your referral link. We promise you that there is no limit on earnings. Moreover, each of your earnings will be tracked in real time. Also, you can monitor your complete affiliation activities right from your affiliate dashboard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateProcess;