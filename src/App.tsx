import { Hero } from './components/Hero';
import { About } from './components/About';
import { PriceCalculator } from './components/PriceCalculator';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <PriceCalculator />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
