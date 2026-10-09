import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Reports from "./views/Reports";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
};

export default App;
