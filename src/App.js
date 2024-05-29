import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SectionC from "./pages/SectionC";
import SectionD from "./pages/SectionD";
import SectionE from "./pages/SectionE";
import SectionF from "./pages/SectionF";
import QuestionsSection from "./pages/QuestionsSection";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
      <QuestionsSection />
      <Footer />
    </div>
  );
}

export default App;
