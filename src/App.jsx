import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Leadership from "./pages/Leadership";
import Journey from "./pages/Journey";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/journey" element={<Journey />} />
    </Routes>
  );
}

export default App;