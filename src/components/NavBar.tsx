import { useState } from "react";
import "./NavBar.css";

const navItems = [
  { id: "about", label: "О нас" },
  { id: "team", label: "Сотрудники" },
  { id: "works", label: "Работы" },
  { id: "documents", label: "Документы" },
  { id: "faq", label: "Вопрос-ответ" },
  { id: "expertise", label: "Проведение экспертизы" },
  { id: "application", label: "Подача заявки" },
  { id: "awards", label: "Награды и благодарности" },
  { id: "requisites", label: "Реквизиты" },
  { id: "contacts", label: "Контакты" },
];

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__logo">Название</div>
      <button
        type="button"
        className={`navbar__toggle ${
          isMenuOpen ? "navbar__toggle--active" : ""
        }`}
        aria-label="Открыть меню"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}
      >
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={handleLinkClick}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
