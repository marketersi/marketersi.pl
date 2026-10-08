import { strona } from "../meta";

export const metadata = strona(
  "Teksty sprzedażowe",
  "Teksty sprzedażowe dla firm.",
  "/tresci-i-hasla-sprzedazowe", { indeksuj: false }
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return children;
}
