// components/ScrollRestoration.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

const scrollPositions = new Map();

const ScrollRestoration = () => {
  const router = useRouter();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;

    window.history.scrollRestoration = "manual";

    const saveScrollPos = (url:string) => {
      scrollPositions.set(url, { x: window.scrollX, y: window.scrollY });
    };

    const restoreScrollPos = (url:string) => {
      const pos = scrollPositions.get(url);
      if (pos) {
        window.scrollTo(pos.x, pos.y);
      } else {
        window.scrollTo(0, 0); // Default to top
      }
    };

    const handleRouteChangeStart = (url:string) => {
      saveScrollPos(router.asPath);
    };

    const handleRouteChangeComplete = (url:string) => {
      restoreScrollPos(url);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return null;
};

export default ScrollRestoration;
