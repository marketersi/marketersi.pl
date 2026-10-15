"use client";

import { useEffect } from "react";

// Microsoft Clarity (nagrania sesji i heatmapy), 15.10.2026.
// Ładuje się tylko po zgodzie na cookies (mk_zgoda = "tak"), także gdy zgoda padnie w trakcie wizyty.
// ID projektu: zmienna NEXT_PUBLIC_CLARITY_ID w Vercel albo stała poniżej. Pusty ID = Clarity wyłączone.
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "yy5s8jnxh1";

declare global {
  interface Window { clarity?: (...args: unknown[]) => void }
}

function zaladuj() {
  if (!CLARITY_ID || window.clarity) return;
  (function (c: any, l: Document, a: string, r: string, i: string) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode?.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_ID);
  window.clarity?.("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });
}

export default function Clarity() {
  useEffect(() => {
    let c: string | null = null;
    try { c = localStorage.getItem("mk_zgoda"); } catch (e) {}
    if (c === "tak") zaladuj();
    const naZgode = () => zaladuj();
    window.addEventListener("mk-zgoda-tak", naZgode);
    return () => window.removeEventListener("mk-zgoda-tak", naZgode);
  }, []);
  return null;
}
