import { strona } from "../meta";

export const metadata = strona(
  "Konsultacja marketingowa",
  "Umów bezpłatną konsultację marketingową.",
  "/konsultacja-marketingu", { indeksuj: false }
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return children;
}
