"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

// Map to store scroll positions per URL
const scrollPositions = new Map<string, { x: number; y: number }>();

const ScrollRestoration = () => {
  const router = useRouter();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;

    // Disable automatic scroll restoration by browser
    window.history.scrollRestoration = "manual";

    // Save current scroll position
    const saveScrollPos = (url: string): void => {
      scrollPositions.set(url, {
        x: window.scrollX,
        y: window.scrollY,
      });
    };

    // Restore scroll position on back/forward
    const restoreScrollPos = (url: string): void => {
      const pos = scrollPositions.get(url);
      if (pos) {
        window.scrollTo(pos.x, pos.y);
      } else {
        window.scrollTo(0, 0); // Default scroll top
      }
    };

    // Before route changes, save current scroll position
    const handleRouteChangeStart = (url: string): void => {
      saveScrollPos(router.asPath);
    };

    // After route changes, restore scroll position
    const handleRouteChangeComplete = (url: string): void => {
      restoreScrollPos(url);
    };

    // Add event listeners
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // Cleanup listeners
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  return null;
};

export default ScrollRestoration;
