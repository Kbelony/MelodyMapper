import { Routes, Route } from "react-router-dom";
import "./style.scss";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import GlobalTop from "./components/GlobalTop";
import { LanguageProvider } from "./components/LanguageContext";
import MoreStats from "./components/MoreStats";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Navbar />
        <Routes>
          <Route path="/MelodyMapper/" element={<Home />} />
          <Route path="/MelodyMapper/global-top/" element={<GlobalTop />} />
          <Route path="/MelodyMapper/more-stats/" element={<MoreStats />} />
          <Route
            path="/MelodyMapper/privacy-policy/"
            element={<PrivacyPolicy />}
          />
        </Routes>
      </LanguageProvider>
    </div>
  );
}

export default App;
