import { strona } from "../meta";
import WSkrocie from "@/components/seo/WSkrocie";

export const metadata = strona(
  "Kim są Marketersi",
  "Marketersi (marketersi.pl) to agencja z Warszawy: asystent AI do odbierania telefonów, wizytówka Google i strony dla małych firm usługowych w całej Polsce.",
  "/Kim-jestesmy"
);

export default function Uklad({ children }: { children: React.ReactNode }) {
  return <>{children}<WSkrocie /></>;
}
