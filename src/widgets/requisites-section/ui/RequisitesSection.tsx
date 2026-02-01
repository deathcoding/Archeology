import styles from "./RequisitesSection.module.css";

const requisites = [
  { label: "Полное название", value: "ООО «Название компании»" },
  { label: "ОГРН", value: "0000000000000" },
  { label: "ИНН / КПП", value: "0000000000 / 000000000" },
  { label: "Юр. адрес", value: "000000, Город, ул. Название, д. 00" },
  { label: "Расчётный счёт", value: "00000000000000000000 в Название банка" },
  { label: "Корр. счёт", value: "00000000000000000000" },
  { label: "БИК", value: "000000000" },
];


export function RequisitesSection() {
  return (
    <section id="requisites" className={`section ${styles.requisites}`}>
      <div className="section__header">
        <p className="eyebrow">Реквизиты</p>
        <h2>Информация о компании</h2>
      </div>
      <dl className={styles.requisites__list}>
        {requisites.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

