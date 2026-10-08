import { strona } from "../meta";

export const metadata = strona(
  "Opinie",
  "Marketersi.",
  "/", { indeksuj: false }
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return children;
}
