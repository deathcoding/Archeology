import "./ExpertiseSection.css";

const steps = [
  {
    title: "1. Предварительный анализ",
    description: "Изучаем исходные данные, выявляем охраняемые зоны и готовим план работ.",
  },
  {
    title: "2. Полевой этап",
    description: "Проводим разведку, вскрываем шурфы, фиксируем находки и обеспечиваем их сохранность.",
  },
  {
    title: "3. Камеральная обработка",
    description: "Оцифровываем материалы, оформляем научное описание и формируем комплект документов.",
  },
  {
    title: "4. Сдача отчёта",
    description: "Подаём отчёт в органы охраны наследия, сопровождаем рассмотрение и вносим корректировки.",
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section expertise">
      <div className="section__header">
        <p className="eyebrow">Проведение экспертизы</p>
        <h2>От заявки до положительного заключения</h2>
      </div>
      <ol className="expertise__steps">
        {steps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

