import "server-only";
import axios from "axios";
import { oczyscOdpowiedz } from "./oczyscTresci";
import type { InitialContent } from "@/store/store";

// Public CMS content only. Axios avoids retaining Next's fetch cache across builds.
// A failed CMS read fails publication, leaving the last successful site online.
async function readContent(endpoint: string, requiredSection: string) {
  const { data } = await axios.get(`https://superadmin.marketersi.pl/api/${endpoint}`, {
    timeout: 20000,
  });
  const content = oczyscOdpowiedz(endpoint, data)?.data;
  if (data?.status !== true || !content?.[requiredSection]) {
    throw new Error(`Public CMS content unavailable: ${endpoint}`);
  }
  return content;
}

// Reuse immutable content within a build worker, not a Redux store or user state.
let snapshot: Promise<InitialContent> | undefined;
export function getPublicContent() {
  snapshot ??= Promise.all([
    readContent("get-home-screen-setting", "heroSection"),
    readContent("UX", "HeroSection"),
  ]).then(([home, ux]) => ({ home, ux }));
  return snapshot;
}
