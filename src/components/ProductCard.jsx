import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="one columns-2">
        <div className="border p-4 rounded-lg shadow-md bg-white">
          <img src={product.ri.img} alt={product.ri.name} className="w-32 mx-auto" />
          <h3 className="text-lg font-bold mt-2">{product.ri.name}</h3>
          <p className="text-gray-500 line-through">
            {product.ri.oldPrice.toLocaleString()} تومان
          </p>
          <p className="text-red-500 font-bold">
            {product.ri.price.toLocaleString()} تومان
          </p>
          <p className="bg-red-100 text-red-500 p-1 inline-block rounded">
            {product.ri.discount}
          </p>
        </div>
      </div>
      <div className="two">
        <div className="border p-4 rounded-lg shadow-md bg-white">
          <img src={product.img} alt={product.name} className="w-32 mx-auto" />
          <h3 className="text-lg font-bold mt-2">{product.name}</h3>
          <p className="text-gray-500 line-through">
            {product.oldPrice.toLocaleString()} تومان
          </p>
          <p className="text-red-500 font-bold">
            {product.price.toLocaleString()} تومان
          </p>
          <p className="bg-red-100 text-red-500 p-1 inline-block rounded">
            {product.discount}
          </p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
    discount: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
