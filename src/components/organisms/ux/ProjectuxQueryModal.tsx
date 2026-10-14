"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProjectuxModal from "../modals/ProjectuxModal";

function modalUrl(key: string, open: boolean) {
  const url = new URL(window.location.href);
  if (open) url.searchParams.set(key, "open");
  else url.searchParams.delete(key);
  return `${url.pathname}${url.search}${url.hash}`;
}

export function useOpenProjectUxModal(queryKey: string) {
  const router = useRouter();
  return () => router.push(modalUrl(queryKey, true), { scroll: false });
}

function QueryModal({ queryKey }: { queryKey: string }) {
  const params = useSearchParams();
  const router = useRouter();
  return <ProjectuxModal
    isOpen={params.get(queryKey) === "open"}
    onRequestClose={() => router.push(modalUrl(queryKey, false), { scroll: false })}
  />;
}

// Only the URL-driven modal waits for the browser; the service copy stays in HTML.
export default function ProjectuxQueryModal({ queryKey }: { queryKey: string }) {
  return <Suspense fallback={null}><QueryModal queryKey={queryKey} /></Suspense>;
}
