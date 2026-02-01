import styles from "./ProjectsSection.module.css";
import type { Expedition } from "@/model/landing";

type ProjectsSectionProps = {
  expeditions: Expedition[];
};

export function ProjectsSection({ expeditions }: ProjectsSectionProps) {
  return (
    <section className={`section ${styles.sectionProjects}`}>
      <div className="section__header">
        <p className="eyebrow">Кейсы</p>
        <h2>Недавние экспедиции</h2>
      </div>
      <div className={styles.projects}>
        {expeditions.map((expedition) => (
          <article key={expedition.title} className={styles.projectCard}>
            <div className={styles.projectCard__media}>
              <span>Фото объекта</span>
            </div>
            <div className={styles.projectCard__body}>
              <p className="eyebrow">{expedition.period}</p>
              <h3>{expedition.title}</h3>
              <p className={styles.projectCard__location}>{expedition.location}</p>
              <p>{expedition.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
