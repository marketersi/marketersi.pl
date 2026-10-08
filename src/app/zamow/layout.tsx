import { strona } from "../meta";

export const metadata = strona(
  "Bezpłatne badanie widoczności",
  "Zamów bezpłatne badanie widoczności firmy w Google i AI.",
  "/zamow-bezplatne-badanie", { indeksuj: false }
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return children;
}
