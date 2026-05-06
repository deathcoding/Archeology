import styles from "./Hero.module.css";
import Logo from "@/shared/assets/images/Logo_for_hero.png";
import arrow from "@/shared/assets/images/arrow.svg";

const heroServices = [
  "Археологическое обследование территорий, подлежащих хозяйственному освоению",
  "Охранные археологические раскопки",
  "Разработка разделов обеспечения сохранности объектов культурного наследия",
  "Проведение государственной историко-культурной экспертизы",
];

export function Hero() {
  return (
    <div className={styles.hero} id="">
      <div className={styles.hero__row}>
        <div className={styles.hero__content}>
          <h1>ООО «АрхеоВектор»</h1>
          {heroServices.map((text) => (
            <p key={text} className={styles.hero__eyebrow}>
              <img src={arrow} alt="" className={styles.arrowImage} />
              <span>{text}</span>
            </p>
          ))}
          <div className={styles.hero__actions}>
            <a className="button button--primary" href="#application">
              Подача заявки
            </a>
            <a className="button button--ghost" href="#contacts">
              Связаться с нами
            </a>
          </div>
        </div>
        <div className={styles.heroLogo}>
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
}
