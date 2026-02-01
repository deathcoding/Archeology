import styles from "./ApplicationSection.module.css";

const requiredDocs = [
  "Скан заявления с подписью ответственного лица",
  "Правоустанавливающие документы на объект",
  "Проектная документация в актуальной редакции",
  "Ситуационный план с указанием координат",
  "Контактные данные ответственного специалиста",
];

const steps = [
  "Подача документов на электронную почту",
  "Получение коммерческого предложения ответным письмом",
  "Запрос проекта договора в случае принятия коммерческого предложения",
];

export function ApplicationSection() {
  return (
    <section id="application" className={`section ${styles.application}`}>
      <div className="section__header">
        <p className="eyebrow">Подача заявки</p>
        <h2>Готовим комплект документов и сопровождаем согласование</h2>
      </div>
      <div className={styles.application__grid}>
        <div>
          <h3>Необходимые документы</h3>
          <ul>
            {requiredDocs.map((doc) => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Порядок действий</h3>
          <ol>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className={styles.application__note}>
            Отвечаем на заявку в течение 1 рабочего дня. Поможем подготовить
            недостающие материалы и согласовать удобный график работ.
          </p>
        </div>
      </div>
    </section>
  );
}

