// src/pages/ProductDetail.jsx
import { useParams } from 'react-router-dom';
import products from '../data/product';
import Navbar from '../components/Navabar';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
            <p className="mt-2 text-gray-600">The product you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                <p className="text-2xl text-green-500 font-semibold mb-6">${product.price}</p>
                <p className="text-gray-600 mb-8">{product.description}</p>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;