import { useState, type FormEvent } from "react";
import "./ContactSection.css";

const contactInfo = [
  { label: "Телефон", value: "+7 (495) 000-00-00" },
  { label: "Электронная почта", value: "info@archeolab.ru" },
  { label: "Адрес офиса", value: "Уфа, ул. Археологическая, 12" },
  { label: "Режим работы", value: "Пн—Пт, 09:00–19:00" },
];

const EMAIL_ENDPOINT = "https://formsubmit.co/ajax/ilishev.i@yandex.ru";
const STORAGE_KEY = "contact:lastSent";
const RATE_LIMIT_MS = 60 * 60 * 1000; // 1 hour

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    channel: "",
    description: "",
  });
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const canSend = () => {
    const last = localStorage.getItem(STORAGE_KEY);
    if (!last) return true;
    return Date.now() - Number(last) > RATE_LIMIT_MS;
  };

  const validate = () => {
    if (!form.name.trim() || !form.channel.trim() || !form.description.trim()) {
      setStatus("error");
      setMessage("Заполните все поля, пожалуйста.");
      return false;
    }
    if (!canSend()) {
      setStatus("error");
      setMessage("Повторная отправка доступна через час.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus(null);
    setMessage("");

    try {
      const response = await fetch(EMAIL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "Контактное лицо": form.name,
          "Способ связи": form.channel,
          "Описание задачи": form.description,
        }),
      });

      if (!response.ok) {
        throw new Error("Не удалось отправить сообщение. Попробуйте позже.");
      }

      localStorage.setItem(STORAGE_KEY, String(Date.now()));
      setStatus("success");
      setMessage("Сообщение отправлено. Мы свяжемся с вами в ближайшее время.");
      setForm({ name: "", channel: "", description: "" });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Ошибка отправки.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="section contacts">
      <div className="section__header">
        <p className="eyebrow">Контакты</p>
        <h2>Свяжитесь с нашей командой</h2>
        <p>
          Ответим на запрос в течение рабочего дня и предложим удобный формат
          взаимодействия.
        </p>
      </div>
      <div className="contacts__grid">
        <div className="contacts__info">
          <ul>
            {contactInfo.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <p>{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="contacts__form-card">
          <form className="contacts__form" onSubmit={handleSubmit}>
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
              className="button button--primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправляем..." : "Отправить"}
            </button>
            {status && (
              <p className={`contacts__status contacts__status--${status}`}>
                {message}
              </p>
            )}
          </form>
          <div className="contacts__map">Место для карты / фото офиса</div>
        </div>
      </div>
    </section>
  );
}
