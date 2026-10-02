// Wspólny helper pomiaru: wysyła zdarzenie do dataLayer (Google Tag Manager).
// GTM przekazuje je dalej do GA4 (i później do innych narzędzi bez zmian w kodzie).
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export function track(event: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

// Mapowanie endpointów formularzy na czytelne nazwy w raportach.
export const FORM_BY_ENDPOINT: Record<string, string> = {
  "api/post-examination": "bezplatne_badanie",
  "api/contactMail": "kontakt",
  "api/sales": "tresci_sprzedazowe_wycena",
  "api/cenik/menus/store": "cennik",
};
