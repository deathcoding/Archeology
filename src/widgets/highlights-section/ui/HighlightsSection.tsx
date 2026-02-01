import styles from "./HighlightsSection.module.css";

const highlights = [
  {
    eyebrow: "01 — Подход",
    title: "Научная методология",
    text: "Проектируем исследования на основе гипотез, фиксируем каждую находку, обеспечиваем охранную грамоту и прозрачные отчёты.",
    accent: true,
  },
  {
    eyebrow: "02 — География",
    title: "Работаем на берегу и в степи",
    text: "Морские и сухопутные экспедиции, горные районы и плотная городская застройка — адаптируем методики под ландшафт.",
  },
  {
    eyebrow: "03 — Сервис",
    title: "Сопровождение до экспозиции",
    text: "Обеспечиваем консервацию, лабораторный анализ, создаём каталоги и медиа-материалы для презентаций и выставок.",
  },
];

export function HighlightsSection() {
  return (
    <section className={`section ${styles.sectionGrid}`}>
      {highlights.map((card) => (
        <article
          key={card.title}
          className={card.accent ? `${styles.card} ${styles.cardAccent}` : styles.card}
        >
          <p className="eyebrow">{card.eyebrow}</p>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
        </article>
      ))}
    </section>
  );
}
