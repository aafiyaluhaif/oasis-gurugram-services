import { Jost, Marcellus } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const marcellus = Marcellus({
  subsets: ['latin'],

  variable: '--marcellus',
  weight: ['400'],
});
const jost = Jost({
  subsets: ['latin'],

  variable: '--jost',
  weight: ['400', '500', '600'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=AW-592439167'
          strategy='afterInteractive'
        />
        <Script id='google-ads-gtag' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-592439167');
          `}
        </Script>
      </head>
      <body className={`${marcellus.variable} ${jost.variable} root-container`}>
        {children}
      </body>
    </html>
  );
}
