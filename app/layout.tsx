import Script from 'next/script';
import './globals.css';

export function generateMetadata() {
  return {
    title: 'Hirelytica',
    description: 'Fix recruitment for good',
    viewport: 'width=device-width, initial-scale=1',
    icons: {
      icon: '/favicon.svg',
    },
    verification: {
      google: 'xyaYVpBXs-1uA15lMZcTEO8Hvz-T8GjU_VFKfQzsAtc',
    },
    other: {
      'msvalidate.01': '3F149F3AD89374A45E0B36B758D94BE5'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HDFG3DJ818"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HDFG3DJ818');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "s1l3c4i91h");
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
