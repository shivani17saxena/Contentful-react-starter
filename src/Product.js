const Product = ({ name, image, alt, category }) => {
  return (
    <figure className="painting">
      <img className="image-thumb" src={image} alt={alt} />
      <h4>{name}</h4>
      <p>
        <i>{category}</i>
      </p>
    </figure>
  )
}

export default Product
