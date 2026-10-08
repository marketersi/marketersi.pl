import { strona } from "../meta";

export const metadata = strona(
  "Wycena usług",
  "Wyceń usługę dla swojej firmy.",
  "/cennik", { indeksuj: false }
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return children;
}
