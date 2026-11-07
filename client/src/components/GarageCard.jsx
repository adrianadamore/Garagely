function GarageCard({ nome, tipo, cidade, preco }) {
  return (
    <article className="card">
      <div className="card-photo"></div>
      <div className="card-body">
        <span className="card-tag">{tipo}</span>
        <h3>{nome}</h3>
        <p className="card-city">{cidade}</p>
        <p className="card-price"><strong>R$ {preco}</strong> / hora</p>
      </div>
    </article>
  )
}

export default GarageCard