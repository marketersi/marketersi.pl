import { strona } from "../meta";

export const metadata = strona(
  "Strona internetowa dla firmy",
  "Strony internetowe dla małych firm.",
  "/tworzenie-stron-i-design-ux", { indeksuj: false }
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return children;
}
