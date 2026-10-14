import Link from "next/link";
import { strona } from "../meta";
import { poradniki } from "@/content/poradniki";
import styles from "./poradniki.module.css";

export const metadata = strona("Poradniki marketingowe dla małych firm", "Sprawdź, co powinna zawierać strona firmy i jak ustalić, dlaczego nie przynosi zapytań. Praktyczne listy i wskazówki Marketersi.", "/poradniki");

export default function PoradnikiPage() {
  return <main className={styles.page}><div className={styles.wrap}>
    <nav aria-label="Okruszki"><Link href="/">Marketersi</Link> / Poradniki</nav>
    <p className={styles.eyebrow}>Marketing małej firmy</p>
    <h1>Najpierw zrozum problem. Potem wybierz działanie.</h1>
    <p className={styles.lead}>Poradniki dla właścicieli firm usługowych. Pomogą Ci przygotować stronę, sprawdzić drogę do kontaktu i rozmawiać z wykonawcą na podstawie konkretów.</p>
    <div className={styles.grid}>{poradniki.map(p => <article className={styles.card} key={p.slug}>
      <h2><Link href={`/poradniki/${p.slug}`}>{p.title}</Link></h2><p>{p.description}</p>
    </article>)}</div>
    <div className={styles.cta}><h2>Potrzebujesz spojrzenia na swoją firmę?</h2><p>Opowiedz nam o swojej stronie i tym, co chcesz poprawić.</p><Link className={styles.button} href="/zamow-bezplatne-badanie">Zamów bezpłatne badanie</Link></div>
  </div></main>;
}
