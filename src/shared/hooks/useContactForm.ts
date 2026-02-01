import { useState, type FormEvent } from "react";
import {
  sendContactRequest,
  validateContactForm,
  type ContactFormData,
} from "@/shared/utils/contactForm";

const INITIAL_FORM_STATE: ContactFormData = {
  name: "",
  channel: "",
  description: "",
};

export type FormStatus = null | "success" | "error";

export function useContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [status, setStatus] = useState<FormStatus>(null);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateContactForm(form);
    if (!validation.isValid) {
      setStatus("error");
      setMessage(validation.error);
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    setMessage("");

    try {
      await sendContactRequest(form);
      setStatus("success");
      setMessage("Сообщение отправлено. Мы свяжемся с вами в ближайшее время.");
      setForm(INITIAL_FORM_STATE);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Ошибка отправки.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, status, message, isSubmitting, handleChange, handleSubmit };
}
