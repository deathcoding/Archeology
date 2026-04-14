import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footerLogo}>ООО «АрхеоВектор»</div>
        <p>
          ООО «АрхеоВектор» - научно-производственная организация, выполняющая
          археологические исследования по выявлению, изучению и сохранению
          объектов культурного наследия.
        </p>
      </div>
      <div className={styles.footer__contacts}>
        <p>+7(917)94-83-124 — msch1979@gmail.com</p>
        <p>+7(987)48-95-095 — shamsutdinov.m@yandex.ru</p>
        <p>Республика Башкортостан, г. Уфа, ул. Карайская 17</p>
      </div>
    </footer>
  );
}
