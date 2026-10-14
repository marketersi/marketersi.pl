import { strona } from "../meta";

export const metadata = strona(
  "Strona internetowa dla firmy, która przynosi klientów",
  "Projektujemy strony internetowe dla firm: szybkie na telefonie, widoczne w Google i czytelne dla AI. Uporządkuj ofertę, ułatw klientom kontakt i zapytaj o wycenę.",
  "/tworzenie-stron-i-design-ux"
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return children;
}
