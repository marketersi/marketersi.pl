"use client";

import Script from "next/script";
import { useEffect } from "react";
import { track } from "./track";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-MHD2S544";

// Ładuje Google Tag Manager z trybem zgody (Consent Mode v2):
// domyślnie wszystko odrzucone, dopóki odwiedzający nie zaakceptuje banera.
// Dodatkowo mierzy kliknięcia w telefon, e-mail i przyciski badania/konsultacji.
export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.("a,button") as HTMLElement | null;
      if (!el) return;
      const href = el.getAttribute("href") || "";
      const text = (el.innerText || "").trim().slice(0, 60);
      if (href.startsWith("tel:")) {
        track("klik_telefon", { link_url: href, link_text: text, page_path: location.pathname });
      } else if (href.startsWith("mailto:")) {
        track("klik_email", { link_url: href, link_text: text, page_path: location.pathname });
      } else if (/badani|konsultacj|wycen|zamów|zamow/i.test(text) || /zamow-bezplatne-badanie|konsultacja/i.test(href)) {
        track("klik_cta", { link_url: href, link_text: text, page_path: location.pathname });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!GTM_ID) return null;

  return (
    <>
      <Script id="gtm" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        var c = null;
        try { c = localStorage.getItem('mk_zgoda'); } catch(e) {}
        gtag('consent', 'default', {
          ad_storage: c === 'tak' ? 'granted' : 'denied',
          ad_user_data: c === 'tak' ? 'granted' : 'denied',
          ad_personalization: c === 'tak' ? 'granted' : 'denied',
          analytics_storage: c === 'tak' ? 'granted' : 'denied',
          wait_for_update: 500
        });
        gtag('set', 'url_passthrough', true);

        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}</Script>
    </>
  );
}
