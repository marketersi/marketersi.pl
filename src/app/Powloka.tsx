"use client";

// Część kliencka layoutu (wcześniej cały layout.tsx był "use client",
// przez co metadane SEO nie działały). Usunięty sztuczny loader 2 s.
import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";
import { Provider } from "react-redux";
import ScrollManager from "./ScrollManager";
import Analytics from "@/components/analytics/Analytics";
import CookieBanner from "@/components/analytics/CookieBanner";
import { useRef } from "react";
import { makeStore, type AppStore, type InitialContent } from "@/store/store";

export default function Powloka({ children, content }: { children: React.ReactNode; content: InitialContent }) {
  const store = useRef<AppStore>();
  if (!store.current) store.current = makeStore(content);
  return (
    <>
      <Analytics />
      <ScrollManager />
      <Header />
      <Provider store={store.current}>{children}</Provider>
      <Footer />
      <CookieBanner />
    </>
  );
}
