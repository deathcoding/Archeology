import "./ProjectsSection.css";
import type { Expedition } from "../data/landing";

type ProjectsSectionProps = {
  expeditions: Expedition[];
};

export function ProjectsSection({ expeditions }: ProjectsSectionProps) {
  return (
    <section className="section section--projects">
      <div className="section__header">
        <p className="eyebrow">Кейсы</p>
        <h2>Недавние экспедиции</h2>
      </div>
      <div className="projects">
        {expeditions.map((expedition) => (
          <article key={expedition.title} className="project-card">
            <div className="project-card__media">
              <span>Фото объекта</span>
            </div>
            <div className="project-card__body">
              <p className="eyebrow">{expedition.period}</p>
              <h3>{expedition.title}</h3>
              <p className="project-card__location">{expedition.location}</p>
              <p>{expedition.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
