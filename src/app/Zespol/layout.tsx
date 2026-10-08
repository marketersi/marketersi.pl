import { strona } from "../meta";

export const metadata = strona(
  "Zespół",
  "Poznaj zespół Marketersi.",
  "/Kim-jestesmy", { indeksuj: false }
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return children;
}
