import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Game from "./Pages/Game";

// Pages import
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Legal from "./Pages/Legal";
import Press from "./Pages/Press";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";

export default function App() {
  return (
    <Router>

      <Routes>
        {/* Main Game */}
        <Route path="/" element={<Game />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/press" element={<Press />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}