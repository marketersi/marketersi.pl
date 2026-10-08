import { strona } from "../meta";

export const metadata = strona(
  "Dziękujemy",
  "Dziękujemy za zgłoszenie.",
  "/dziekujemy", { indeksuj: false }
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return children;
}
