export type ContactFormData = {
  name: string;
  channel: string;
  description: string;
};

const EMAIL_ENDPOINT = "https://formsubmit.co/ajax/ilishev.i@yandex.ru";
const STORAGE_KEY = "contact:lastSent";
const RATE_LIMIT_MS = 60 * 60 * 1000; // 1 hour

type ValidationResult =
  | { isValid: true; error: null }
  | { isValid: false; error: string };

export function validateContactForm(form: ContactFormData): ValidationResult {
  if (!form.name.trim() || !form.channel.trim() || !form.description.trim()) {
    return { isValid: false, error: "Заполните все поля, пожалуйста." };
  }

  const lastSentAt = localStorage.getItem(STORAGE_KEY);
  if (lastSentAt && Date.now() - Number(lastSentAt) <= RATE_LIMIT_MS) {
    return {
      isValid: false,
      error: "Повторная отправка доступна через час.",
    };
  }

  return { isValid: true, error: null };
}

export async function sendContactRequest(form: ContactFormData) {
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
}


