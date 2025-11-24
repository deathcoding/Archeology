import "./FaqSection.css";

const faq = [
  {
    question: "Сколько времени занимает экспертиза?",
    answer:
      "В среднем 30 календарных дней. При наличии дополнительных согласований срок может быть продлён, о чём мы предупреждаем заранее.",
  },
  {
    question: "Нужно ли находиться на площадке заказчику?",
    answer:
      "Нет. Мы самостоятельно организуем полевые работы, обеспечиваем технику безопасности и оформляем допуск сотрудников.",
  },
  {
    question: "Можно ли ускорить выдачу заключения?",
    answer:
      "Мы подготавливаем пакет документов без ошибок и оперативно реагируем на запросы экспертов, что позволяет избежать задержек.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="section faq">
      <div className="section__header">
        <p className="eyebrow">Вопрос-ответ</p>
        <h2>Прозрачно рассказываем о процессе</h2>
      </div>
      <div className="faq__items">
        {faq.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

