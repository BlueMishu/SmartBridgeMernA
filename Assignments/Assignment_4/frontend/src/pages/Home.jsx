import Navbar from '../components/Navabar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default Home;