import styles from "./DocumentsSection.module.css";

const documents = [
  "Закон РФ «Об объектах культурного наследия (памятниках истории и культуры) народов Российской Федерации» №73-Ф3 от 25.06.2002 г.",
  "Положение о порядке проведения археологических полевых работ и составления научной отчётной документации",
  "Положение о государственной историко-культурной экспертизе",
  "Сборник цен на научно-проектные работы на памятниках истории и культуры. Приказ МК СССР №321 от 05.11.90 (СЦНПP-91)",
]

export function DocumentsSection() {
  return (
    <section id="documents" className={`section ${styles.documents}`}>
      <div className="section__header">
        <p className="eyebrow">Документы</p>
        <h2>Основные нормативные документы</h2>
      </div>
      <ul className={styles.documents__list}>
        {documents.map((doc) => (
          <li key={doc}>{doc}</li>
        ))}
      </ul>
    </section>
  );
}

