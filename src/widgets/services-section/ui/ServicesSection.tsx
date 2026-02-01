import styles from "./ServicesSection.module.css";

type ServicesSectionProps = {
  services: string[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="section">
      <div className="section__header">
        <p className="eyebrow">Услуги</p>
        <h2>Полный цикл археологических проектов</h2>
        <p>
          Подбираем команду, оборудование и цифровые инструменты для каждого
          этапа проекта.
        </p>
      </div>
      <ul className={styles.list}>
        {services.map((item) => (
          <li key={item} className={styles.list__item}>
            <span className={styles.list__bullet} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
