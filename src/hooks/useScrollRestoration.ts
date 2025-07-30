// hooks/useScrollRestoration.ts
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useScrollRestoration() {
  const router = useRouter();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) return;

    let shouldScrollRestore = false;
    window.history.scrollRestoration = "manual";

    const saveScrollPos = (url: string) => {
      sessionStorage.setItem(
        `scroll-pos:${url}`,
        JSON.stringify({ x: window.scrollX, y: window.scrollY })
      );
    };

    const restoreScrollPos = (url: string) => {
      const pos = JSON.parse(sessionStorage.getItem(`scroll-pos:${url}`) || "null");
      if (pos) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            window.scrollTo(pos.x, pos.y);
          }, 0); // allow DOM to paint first
        });
      }
    };

    const handleRouteChangeStart = () => {
      saveScrollPos(router.asPath);
    };

    const handleRouteChangeComplete = (url: string) => {
      if (shouldScrollRestore) {
        shouldScrollRestore = false;
        restoreScrollPos(url);
      }
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.beforePopState(() => {
      shouldScrollRestore = true;
      return true;
    });

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.beforePopState(() => true);
    };
  }, [router]);
}
