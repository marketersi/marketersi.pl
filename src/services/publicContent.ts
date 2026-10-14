import "server-only";
import axios from "axios";
import { oczyscOdpowiedz } from "./oczyscTresci";
import type { InitialContent } from "@/store/store";
import zapasHome from "@/content/cms-zapas/home.json";
import zapasUx from "@/content/cms-zapas/ux.json";

// Publiczne treści z panelu superadmin.marketersi.pl pobierane przy buildzie.
// Gdy panel nie odpowiada (awaria, wygasły VPS), build używa kopii zapasowej
// z src/content/cms-zapas (pobranej 14.10.2026), zamiast przerywać publikację.
// Odświeżenie kopii: zapisz aktualne odpowiedzi API do tych plików.
const ZAPAS: Record<string, unknown> = {
  "get-home-screen-setting": zapasHome,
  UX: zapasUx,
};

function sprawdz(endpoint: string, data: any, requiredSection: string) {
  const content = oczyscOdpowiedz(endpoint, data)?.data;
  if (data?.status !== true || !content?.[requiredSection]) return null;
  return content;
}

async function readContent(endpoint: string, requiredSection: string) {
  try {
    const { data } = await axios.get(`https://superadmin.marketersi.pl/api/${endpoint}`, {
      timeout: 20000,
    });
    const content = sprawdz(endpoint, data, requiredSection);
    if (content) return content;
    console.warn(`[cms] Niepełna odpowiedź panelu (${endpoint}), używam kopii zapasowej.`);
  } catch (e) {
    console.warn(`[cms] Panel niedostępny (${endpoint}): ${(e as Error)?.message}. Używam kopii zapasowej.`);
  }
  // Kopia jest klonowana, bo oczyscOdpowiedz modyfikuje obiekt.
  const content = sprawdz(endpoint, JSON.parse(JSON.stringify(ZAPAS[endpoint])), requiredSection);
  if (!content) throw new Error(`Brak treści z panelu i kopii zapasowej: ${endpoint}`);
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
