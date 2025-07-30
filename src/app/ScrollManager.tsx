'use client';
 
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
 
export default function ScrollManager() {
  const pathname = usePathname();
 
  useEffect(() => {
    // Save scroll position
    const saveScroll = () => {
        console.log('save scorll run', pathname, window.location.href.includes(pathname))
    if(window.location.pathname === pathname){
      const scrollY = window.scrollY;
      sessionStorage.setItem(`scroll-pos:${pathname}`, String(scrollY));
      console.log('Saved scroll:', pathname, scrollY);
    }
    };
 
    // Restore scroll position
    const restoreScroll = () => {
        console.log('restoreScroll run', `scroll-pos:${pathname}`)
      const saved = sessionStorage.getItem(`scroll-pos:${pathname}`);
      if (saved !== null) {
        const scrollY = parseInt(saved, 10);
        console.log('Restoring scroll:', pathname, scrollY);
        window.scrollTo(0, scrollY);
      }
    };
 
    // Save before leaving the page
     window.addEventListener('scroll', saveScroll);
    // window.addEventListener('beforeunload', saveScroll);
    // window.addEventListener('pagehide', saveScroll);
    // window.addEventListener('popstate', saveScroll);
 
    // Restore on mount
    restoreScroll();
 
    // return () => {
    //   window.removeEventListener('beforeunload', saveScroll);
    //   window.removeEventListener('pagehide', saveScroll);
    //   window.removeEventListener('popstate', saveScroll);
    // };
  }, [pathname]);
 
  return null;
}