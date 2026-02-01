import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footerLogo}>ООО «АрхеоВектор»</div>
        <p>ООО «АрхеоВектор» - научно-производственная организация, выполняющая археологические исследования по выявлению, изучению и сохранению объектов культурного наследия.</p>
      </div>
      <div className={styles.footer__contacts}>
        <p>msch1979@gmail.com</p>
        <p>8-917-3483-124</p>
        <p>Республика Башкортостан, г. Уфа, ул. Коммунистическая, д. 116</p>
      </div>
    </footer>
  );
}
