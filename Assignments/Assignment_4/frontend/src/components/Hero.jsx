const Hero = () => {
    return (
      <div className="bg-green-50 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to ShopEasy</h1>
          <p className="text-xl text-gray-600 mb-8">Discover amazing products at unbeatable prices</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;