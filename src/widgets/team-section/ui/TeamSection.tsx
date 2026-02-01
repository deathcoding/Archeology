import styles from "./TeamSection.module.css";

const teamMembers = [
  {
    name: "Михаил",
    role: "Директор",
    email: "msch1979@gmail.com",
    phone: "8-987-489-50-95"
  },
  {
    name: "Шамсутдинов Марсель Расилевич",
    role: "Заместитель директора",
    email: "shamsutdinov.m@yandex.ru",
    phone: "8-987-489-50-95"
  },
  {
    name: "Имя сотрудника",
    role: "Должность",
    email: "shamsutdinov.m@yandex.ru",
    phone: "8-987-489-50-95"
  },
  {
    name: "Имя сотрудника",
    role: "Должность",
    email: "shamsutdinov.m@yandex.ru",
    phone: "8-987-489-50-95"
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
            <p>{member.email}</p>
            <p>{member.phone}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

