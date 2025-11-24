import "./TeamSection.css";

const teamMembers = [
  {
    name: "Имя сотрудника",
    role: "Должность",
    focus: "Обязанности",
  },
  {
    name: "Имя сотрудника",
    role: "Должность",
    focus: "Обязанности",
  },
  {
    name: "Имя сотрудника",
    role: "Должность",
    focus: "Обязанности",
  },
  {
    name: "Имя сотрудника",
    role: "Должность",
    focus: "Обязанности",
  },
];


export function TeamSection() {
  return (
    <section id="team" className="section team">
      <div className="section__header">
        <p className="eyebrow">Сотрудники</p>
        <h2>Эксперты, вовлечённые на каждом этапе проекта</h2>
        <p>
          Формируем профильную команду под задачу: от пробных раскопов до защиты
          отчёта перед экспертным советом.
        </p>
      </div>
      <div className="team__grid">
        {teamMembers.map((member) => (
          <article key={member.name} className="team__card">
            <div className="team__avatar" aria-hidden="true">
              {member.name[0]}  
            </div>
            <h3>{member.name}</h3>
            <p className="team__role">{member.role}</p>
            <p>{member.focus}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

