import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SectionC from "./pages/SectionC";
import SectionD from "./pages/SectionD";
import SectionE from "./pages/SectionE";
import QuestionsSection from "./pages/QuestionsSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SectionC />
      <SectionD />
      <SectionE />
      <QuestionsSection />
    </div>
  );
}

export default App;
