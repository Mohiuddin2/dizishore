import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

const JoinUs = () => {
  return (
    <section className="bg-white py-0 px-6 mb-8">
      <div className='max-w-5xl mx-auto'>
        <div className='mb-8'>

      <p><Link className='text-blue-600 underline text-lg font-semibold max-w-5xl mx-auto' href="https://support.dizishore.com/support/solutions/articles/101000436262-affiliate-policy">Please read our complete affiliate policy here</Link></p>
        </div>
      <Card className='bg-[#032B4B] p-6'>
        <CardHeader className='text-white'>
          <CardTitle className='text-3xl'>Ready to earn money with the DiziShore affiliate program?</CardTitle>
          <CardDescription className='max-w-2xl text-justify'>
          Join us today and unlock the potential to earn significant commissions by promoting a diverse range of high-quality digital products and services.
          </CardDescription>
        </CardHeader>
        <CardContent>
        <Button asChild className='bg-white text-blue-600 text-lg px-12 py-6 rounded-full transition self-center hover:bg-gray-200 md:self-center shadow-md'>
            <Link href="/joinus">Join Us Now!</Link>
        </Button>

        </CardContent>
      </Card>
    </div>
    </section>
  );
}

export default JoinUs;
