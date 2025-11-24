import "./SiteFooter.css";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div>
        <div className="hero__logo">Название археологической компании</div>
        <p>Мини описание</p>
      </div>
      <div className="footer__contacts">
        <p>info@archeolab.ru</p>
        <p>+7 (495) 000-00-00</p>
        <p>Уфа</p>
      </div>
    </footer>
  );
}
