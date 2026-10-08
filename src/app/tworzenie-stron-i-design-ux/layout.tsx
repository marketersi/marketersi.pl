import { strona } from "../meta";

export const metadata = strona(
  "Strona internetowa dla firmy, która przynosi klientów",
  "Projektujemy strony dla małych firm: szybkie na telefonie, widoczne w Google i czytelne dla AI. Zacznij od bezpłatnego badania.",
  "/tworzenie-stron-i-design-ux"
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return children;
}
