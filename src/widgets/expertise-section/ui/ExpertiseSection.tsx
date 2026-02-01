import styles from "./ExpertiseSection.module.css";

const steps: { title: string; description?: string }[] = [
  {
    title: "Заключение договора между заказчиком археологического обследования и исполнителем археологического обследования.",
  },
  {
    title: "Запрос и получение Открытого листа.",
    description: "Срок выполнения: от 15 рабочих дней.",
  },
  {
    title: "Полевое археологическое обследование земельного отвода.",
    description: "Срок выполнения определяется размером объекта и погодными условиями.",
  },
  {
    title: "Подготовка Документации по результатам полевых исследований.",
    description: "Срок выполнения определяется размером объекта и выявленными объектами археологии.",
  },
  {
    title: "Государственная историко-культурная экспертиза.",
    description: "Срок выполнения определяется размером объекта и выявленными объектами археологии.",
  },
  {
    title: "Получение Согласования на проведение работ в региональном органе охраны объектов культурного наследия.",
    description: "Срок выполнения: от 12 рабочих дней.",
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className={`section ${styles.expertise}`}>
      <div className="section__header">
        <p className="eyebrow">Проведение экспертизы</p>
        <h2>Порядок получения согласования на проведение земляных, строительных, мелиоративных, хозяйственных и иных работ:</h2>
      </div>
      <ol className={styles.expertise__steps}>
        {steps.map((step, index) => (
          <li key={step.title}>
            <span className={styles.expertise__stage}>{index + 1} ЭТАП</span>
            <h3>{step.title}</h3>
            {step.description && <p>{step.description}</p>}
          </li>
        ))}
      </ol>
    </section>
  );
}

