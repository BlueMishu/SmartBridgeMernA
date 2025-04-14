// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="text-lg font-semibold text-gray-800 hover:text-green-500">
          {product.name}
        </Link>
        <p className="text-gray-600 mt-1">${product.price}</p>
        <Link 
          to={`/product/${product.id}`}
          className="mt-3 block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;