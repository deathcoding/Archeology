import "./Hero.css";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Археологическая экспертиза</p>
        <h1>Помогаем согласовать проекты и сохранить историческое наследие</h1>
        <p className="hero__intro">
          Проводим исследования, готовим документацию и сопровождаем заказчика
          на каждом этапе взаимодействия с контролирующими органами.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#application">
            Подача заявки
          </a>
          <a className="button button--ghost" href="#contacts">
            Связаться с нами
          </a>
        </div>
      </div>

      <div className="hero__photo-placeholder">
        <span>Фото экспедиции</span>
      </div>
    </header>
  );
}
