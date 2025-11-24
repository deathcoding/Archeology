import "./AboutSection.css";

const stats = [
  { label: "Лицензия Минкультуры", value: "№ 77-ОРГ-2025" },
  { label: "Проектов ежегодно", value: "60+" },
  { label: "Регионов присутствия", value: "18" },
  { label: "Полевых отрядов", value: "5" },
];

export function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="section__header">
        <p className="eyebrow">О нас</p>
        <h2>Экспертная археологическая организация полного цикла</h2>
        <p>
          Проводим историко-культурные исследования, готовим заключения и
          обеспечиваем сопровождение проектов строительства, реконструкции и
          благоустройства.
        </p>
      </div>
      <div className="about__grid">
        <p>
          Команда объединяет археологов, реставраторов, юристов и инженеров.
          Закрываем задачи от разведки и архивации до сдачи отчётности и защиты
          проекта на научно-методических советах.
        </p>
        <ul className="about__stats">
          {stats.map((item) => (
            <li key={item.label}>
              <span>{item.value}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

