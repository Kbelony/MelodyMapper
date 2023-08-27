import { Routes, Route } from "react-router-dom";
import "./style.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import GlobalTop from "./components/GlobalTop";
import { LanguageProvider } from "./components/LanguageContext";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Navbar />
        <Routes>
          <Route path="/MelodyMapper/" element={<Home />} />
          <Route path="/MelodyMapper/global-top/" element={<GlobalTop />} />
        </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
