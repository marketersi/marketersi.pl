"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Strona z opiniami wyłączona: zawierała opinie i loga, które nie są klientami marketersi.
export default function OpiniePage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);
  return null;
}
