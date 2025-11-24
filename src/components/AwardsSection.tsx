import { useState } from "react";
import "./AwardsSection.css";

const awards = [
  {
    title: "Благодарность Министерства культуры РФ",
    year: "2024",
    description: "За вклад в сохранение объектов культурного наследия.",
  },
  {
    title: "Премия Российского исторического общества",
    year: "2023",
    description: "За лучший проект по популяризации археологии.",
  },
  {
    title: "Почётная грамота Ассоциации реставраторов",
    year: "2022",
    description: "За высокий уровень научной реставрации артефактов.",
  },
];

export function AwardsSection() {
  const [index, setIndex] = useState(0);
  const current = awards[index];

  const handlePrev = () => setIndex((prev) => (prev === 0 ? awards.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev + 1) % awards.length);

  return (
    <section id="awards" className="section awards">
      <div className="section__header">
        <p className="eyebrow">Награды и благодарности</p>
        <h2>С нами работают музеи, вузы и крупнейшие застройщики</h2>
      </div>
      <div className="awards__slider">
        <button type="button" onClick={handlePrev} aria-label="Предыдущая награда">
          ←
        </button>
        <article className="awards__card">
          <div className="awards__media">Фото награды</div>
          <div>
            <p className="eyebrow">{current.year}</p>
            <h3>{current.title}</h3>
            <p>{current.description}</p>
          </div>
        </article>
        <button type="button" onClick={handleNext} aria-label="Следующая награда">
          →
        </button>
      </div>
    </section>
  );
}

