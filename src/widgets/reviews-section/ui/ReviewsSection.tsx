import styles from "./ReviewsSection.module.css";

const reviews = [
  {
    author: "АО «ИнвестСтрой»",
    role: "Девелопер, Республика Башкортостан",
    text: "Команда выполнила обследование участка в согласованные сроки и подготовила полный пакет документов для прохождения экспертизы.",
  },
  {
    author: "ООО «ПромТехМонтаж»",
    role: "Промышленный заказчик, ПФО",
    text: "Высоко оценили качество полевых работ и прозрачность коммуникации на каждом этапе проекта.",
  },
  {
    author: "МКУ «ГорПроект»",
    role: "Муниципальный заказчик, г. Уфа",
    text: "Получили детальные рекомендации по сохранению объектов культурного наследия и оперативную поддержку по всем вопросам.",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className={`section ${styles.reviews}`}>
      <div className="section__header">
        <p className="eyebrow">Отзывы</p>
        <h2>Нам доверяют государственные и коммерческие заказчики</h2>
        <p>
          Несколько примеров обратной связи от клиентов по выполненным
          археологическим проектам.
        </p>
      </div>
      <div className={styles.reviews__grid}>
        {reviews.map((review) => (
          <article key={review.author} className={styles.reviewCard}>
            <p className={styles.reviewCard__text}>{review.text}</p>
            <div className={styles.reviewCard__meta}>
              <h3>{review.author}</h3>
              <p>{review.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
