"use client";
import Script from "next/script";
import React from "react";

const GoogleAnalytics = () => {
  return (
    <>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-FGX2JG85DL' strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', "G-FGX2JG85DL");
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;