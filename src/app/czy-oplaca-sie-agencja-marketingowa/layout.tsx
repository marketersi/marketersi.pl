import { strona } from "../meta";

export const metadata = strona(
  "Czy opłaca się agencja marketingowa",
  "Policz, czy współpraca z agencją marketingową zwróci się Twojej firmie.",
  "/policz-czy-ci-sie-to-oplaca", { indeksuj: false }
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return children;
}
