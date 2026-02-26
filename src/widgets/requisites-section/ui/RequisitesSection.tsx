import styles from "./RequisitesSection.module.css";

const requisites = [
  { label: "Полное название", value: "ООО «АрхеоВектор»" },
  { label: "ИНН / КПП", value: "0272922587 / 027201001" },
  { label: "ОГРН", value: "1230200042489" },
  {
    label: "Юридический адрес",
    value: "450014, Республика Башкортостан, г. Уфа, ул. Карагайская, д.17"
  },
  {
    label: "Банк",
    value: "Филиал \"Нижегородский\" АО \"АЛЬФА-БАНК\""
  },
  { label: "Расчётный счёт", value: "40702810929300015942" },
  { label: "БИК", value: "042202824" },
  {
    label: "Корреспондентский счёт",
    value: "30101810200000000824 в ВОЛГО-ВЯТСКОЕ ГУ БАНКА РОССИИ"
  },
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

