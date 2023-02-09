import '../src/style.css'
import HeroSection from './components/HeroSection';
import ServiceSection from './components/Services/ServiceSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServiceSection />
      <FooterSection />
    </div>
  );
}

export default App;
