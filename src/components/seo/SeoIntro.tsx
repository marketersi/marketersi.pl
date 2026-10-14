import Link from "next/link";
import styles from "@/app/poradniki/poradniki.module.css";

export default function SeoIntro() {
  return <section className={styles.page} aria-labelledby="marketing-malej-firmy"><div className={styles.wrap}>
    <p className={styles.eyebrow}>Od pytania klienta do kontaktu</p>
    <h2 id="marketing-malej-firmy">Marketing małej firmy zaczyna się od zrozumiałej oferty</h2>
    <p className={styles.lead}>Pomagamy połączyć <Link href="/tworzenie-stron-i-design-ux">stronę internetową i design UX</Link>, <Link href="/tresci-i-hasla-sprzedazowe">treści sprzedażowe</Link> oraz <Link href="/strategia-marketingowa">strategię marketingową</Link>. Punktem wyjścia jest to, czego szuka Twój klient i co ma zrobić po wejściu na stronę.</p>
    <div className={styles.grid}>
      <article className={styles.card}><h3><Link href="/poradniki/co-powinna-zawierac-strona-malej-firmy">Co powinna zawierać strona małej firmy?</Link></h3><p>Lista elementów, które pomagają zrozumieć ofertę, sprawdzić wiarygodność i poprosić o wycenę.</p></article>
      <article className={styles.card}><h3><Link href="/poradniki/dlaczego-strona-nie-pozyskuje-klientow">Strona działa, ale nie przynosi zapytań?</Link></h3><p>Sprawdź kolejno widoczność, dopasowanie ruchu, ofertę i drogę do kontaktu.</p></article>
    </div>
    <Link href="/poradniki">Zobacz poradniki dla małych firm</Link>
  </div></section>;
}
