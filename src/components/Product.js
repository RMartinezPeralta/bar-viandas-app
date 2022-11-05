import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.img} alt={product.name} className="product-img" />
      <div className="card">
        <p className="title">{product.name}</p>
        <p className="description">{product.description}</p>
        <p className="price">${product.price}</p>
        <button className="add">Agregar</button>
      </div>
    </div>
  );
};

export default Product;
