import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

export default function ThankYouPage() {
  return (
    <>
            <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17462204987"
        strategy="afterInteractive"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17462204987');
        `}
      </Script>

      {/* Event snippet for Submit lead form conversion */}
      <Script id="gtag-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-17462204987/4g6_COHC14gbELu00IZB',
            'value': 1.0,
            'currency': 'INR'
          });
        `}
      </Script>
      <div className='min-h-screen flex flex-col items-center justify-center bg-vivipurple-200 text-center px-4 py-10'>
        <CheckCircle className='text-green-500 w-20 h-20 mb-6' />
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
          Thank You!
        </h1>
        <p className='text-gray-600 max-w-xl mb-6'>
          Your request for a consultation has been received. Our team will
          contact you shortly to confirm your appointment and guide you through
          the next steps.
        </p>

        <Link
          href='/'
          className='inline-block bg-gradient-to-r from-[#8BA279] to-[#6B7D5C]  text-white px-6 py-3 rounded-lg font-semibold transition-all'
        >
          Back to Home
        </Link>

        <div className='mt-10 text-sm text-gray-400'>
          Oasis Wave of Wellness by Sapna Tiwari © 2025. All rights reserved.
        </div>
      </div>
    </>
  );
}
