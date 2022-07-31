import './index.css'

const CardItem = props => {
  const {resourcesDetails} = props
  const {
    category,
    description,
    iconUrl,
    id,
    link,
    tag,
    title,
  } = resourcesDetails
  return (
    <li className="card-item">
      <div className="title-card">
        <div className="img-container">
          <img src={iconUrl} alt={id} className="icon-img" />
        </div>
        <div className="title-cont">
          <h1 className="title-heading">{title}</h1>
          <p className="disc">{category}</p>
        </div>
      </div>
      <a href={link} className="link">
        {link}
      </a>
      <p className="description">{description}</p>
    </li>
  )
}

export default CardItem
