import styles from "./TeamSection.module.css";

const teamMembers = [
  {
    name: "Чаплыгин Михаил Сергеевич",
    role: "Директор",
    organization: "БГПУ им. М. Акмуллы",
    details: "Историк"
  },
  {
    name: "Шамсутдинов Марсель Расилевич",
    role: "Заместитель директора",
    organization: "БГУ",
    details: "Историк"
  },
  {
    name: "Надолько Дмитрий Владимирович",
    role: "Научный сотрудник",
    organization: "БГПУ им. Акмуллы",
    details: "Историк"
  },
  {
    name: "Максимов Арсений Евгеньевич",
    role: "Научный сотрудник",
    organization: "БГПУ им. Акмуллы",
    details: "Историк"
  },
  {
    name: "Кутуев Александр Сергеевич",
    role: "Научный сотрудник",
    organization: "БГУ",
    details: "Историк, аспирант"
  },
  {
    name: "Морозов Александр Иванович",
    role: "Научный сотрудник",
    organization: "УУНиТ",
    details: "Историк, магистрант"
  },
];


export function TeamSection() {
  return (
    <section id="team" className={`section ${styles.team}`}>
      <div className="section__header">
        <p className="eyebrow">Сотрудники</p>
        <h2>Эксперты, вовлечённые на каждом этапе проекта</h2>
        <p>
          Формируем профильную команду под задачу: от пробных раскопов до защиты
          отчёта перед экспертным советом.
        </p>
      </div>
      <div className={styles.team__grid}>
        {teamMembers.map((member) => (
          <article key={member.name} className={styles.team__card}>
            <div className={styles.team__avatar} aria-hidden="true">
              {member.name[0]}  
            </div>
            <h3>{member.name}</h3>
            <p className={styles.team__role}>{member.role}</p>
            <p>{member.organization}, {member.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

