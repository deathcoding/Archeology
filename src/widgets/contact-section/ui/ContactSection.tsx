import styles from "./ContactSection.module.css";
import { useContactForm } from "@/shared/hooks/useContactForm";

const contactInfo = [
  { label: "Телефон", value: "+7(917)94-83-124" },
  { label: "Электронная почта", value: "msch1979@gmail.com" },
  { label: "Электронная почта", value: "shamsutdinov.m@yandex.ru" },
  { label: "Телефон", value: "+7(987)48-95-095" },
  { label: "Юридический адрес", value: "Республика Башкортостан, г. Уфа, ул. Карайская 17" },
];

export function ContactSection() {
  const { form, status, message, isSubmitting, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section id="contacts" className={`section ${styles.contacts}`}>
      <div className="section__header">
        <p className="eyebrow">Контакты</p>
        <h2>Свяжитесь с нашей командой</h2>
        <p>
          Ответим на запрос в кратчайшие сроки и предложим удобный формат взаимодействия.
        </p>
      </div>
      <div className={styles.contacts__grid}>
        <div className={styles.contacts__info}>
          <ul>
            {contactInfo.map((item, index) => (
              <li key={index}>
                <span>{item.label}</span>
                <p>{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contacts__formCard}>
          <form className={styles.contacts__form} onSubmit={handleSubmit}>
            <label>
              Контактное лицо
              <input
                type="text"
                name="name"
                placeholder="Имя и должность"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Способ связи
              <input
                type="text"
                name="channel"
                placeholder="+7 999 000-00-00 / email"
                value={form.channel}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Краткое описание задачи
              <textarea
                name="description"
                placeholder="Регион, тип объекта, сроки"
                rows={3}
                value={form.description}
                onChange={handleChange}
                required
              />
            </label>
            <button
              type="submit"
              className={`button ${styles.contacts__submit}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправляем..." : "Отправить"}
            </button>
            {status && (
              <p className={`${styles.contacts__status} ${status === "success" ? styles.contacts__statusSuccess : styles.contacts__statusError}`}>
                {message}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
