import styles from "./WorksSection.module.css";

const works = [
  {
    title: "Название проекта",
    location: "Город",
    result: "Описание результата работы.",
  },
  {
    title: "Название проекта",
    location: "Город",
    result: "Описание результата работы.",
  },
  {
    title: "Название проекта",
    location: "Город",
    result: "Описание результата работы.",
  },
];


export function WorksSection() {
  return (
    <section id="works" className={`section ${styles.works}`}>
      <div className="section__header">
        <p className="eyebrow">Работы</p>
        <h2>Берём на себя ответственность за результаты экспертизы</h2>
        <p>Работаем с федеральными и региональными объектами, промышленностью и девелопментом.</p>
      </div>
      <div className={styles.works__grid}>
        {works.map((work) => (
          <article key={work.title} className={styles.workCard}>
            <div className={styles.workCard__media}>
              <span>Фото объекта</span>
            </div>
            <div className={styles.workCard__body}>
              <p className="eyebrow">{work.location}</p>
              <h3>{work.title}</h3>
              <p>{work.result}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

