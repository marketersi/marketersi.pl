"use client";

import { useEffect, useState } from "react";

// Prosty baner zgody na cookies (RODO). Zapisuje wybór w localStorage
// i aktualizuje Consent Mode, więc GA4 zbiera pełne dane tylko po zgodzie.
export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let c: string | null = null;
    try { c = localStorage.getItem("mk_zgoda"); } catch (e) {}
    if (!c) setShow(true);
  }, []);

  const decide = (zgoda: boolean) => {
    try { localStorage.setItem("mk_zgoda", zgoda ? "tak" : "nie"); } catch (e) {}
    const v = zgoda ? "granted" : "denied";
    window.gtag?.("consent", "update", {
      ad_storage: v, ad_user_data: v, ad_personalization: v, analytics_storage: v,
    });
    window.dataLayer?.push({ event: zgoda ? "zgoda_tak" : "zgoda_nie" });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: "fixed", left: 16, right: 16, bottom: 16, zIndex: 9999, maxWidth: 560, margin: "0 auto",
      background: "#fff", color: "#0F1B2D", borderRadius: 12, padding: "16px 18px",
      boxShadow: "0 8px 30px rgba(0,0,0,.18)", fontSize: 14, lineHeight: 1.45,
    }}>
      <div style={{ marginBottom: 12 }}>
        Używamy plików cookies, żeby sprawdzać, skąd przychodzą odwiedzający i które strony działają.
        Bez Twojej zgody zbieramy tylko anonimowe, zbiorcze dane.
      </div>
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", flexWrap: "wrap" }}>
        <button onClick={() => decide(false)} style={{
          border: "1px solid #0F1B2D", background: "#fff", color: "#0F1B2D", borderRadius: 8, padding: "8px 14px", cursor: "pointer",
        }}>Odrzuć</button>
        <button onClick={() => decide(true)} style={{
          border: "none", background: "#12B8E8", color: "#fff", borderRadius: 8, padding: "8px 14px", cursor: "pointer", fontWeight: 600,
        }}>Akceptuję</button>
      </div>
    </div>
  );
}
