import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] font-['Poppins']">
      <NavBar />
      <HeroSection />
      <Footer />
    </main>
  );
}

export default App;
