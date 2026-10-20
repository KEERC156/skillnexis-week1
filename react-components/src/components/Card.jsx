function Card({ title, category, description }) {
  return (
    <article className="practice-card">
      <span className="card-category">{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default Card