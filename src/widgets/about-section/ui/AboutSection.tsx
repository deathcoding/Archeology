import styles from "./AboutSection.module.css";

const stats = [
  { label: "Лицензия Минкультуры", value: "№ 77-ОРГ-2025" },
  { label: "Проектов ежегодно", value: "60+" },
  { label: "Регионов присутствия", value: "18" },
  { label: "Полевых отрядов", value: "5" },
];

export function AboutSection() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="section__header">
        <p className="eyebrow">О нас</p>
        <h2>Экспертная археологическая организация полного цикла</h2>
        <p className={styles.section__paragraph}>
          ООО «АрхеоВектор» - научно-производственная
          организация, выполняющая археологические
          исследования по выявлению, изучению и сохранению
          объектов культурного наследия. По результатам
          обследования земельных участков, подлежащих
          хозяйственному освоению, готовится акт
          государственной историко-культурной экспертизы.
          Коллектив ООО «АрхеоВектор» имеет опыт
          археологического обследования земельных отводов и
          раскопок на территории Приволжского и Уральского
          федеральных округов.
        </p>
      </div>
      <ul className={styles.about__stats}>
          {stats.map((item) => (
            <li key={item.label}>
              <span>{item.value}</span>
              {item.label}
            </li>
          ))}
        </ul>
    </section>
  );
}

