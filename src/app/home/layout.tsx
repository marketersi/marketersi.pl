import { strona } from "../meta";

export const metadata = strona(
  "AI nie zastąpi ludzi. Włącz TURBO w swojej firmie",
  "Sprawdzamy, gdzie Twoja firma traci klientów: na stronie, w wizytówce Google i w odpowiedziach AI.",
  "/", { indeksuj: false }
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return children;
}
