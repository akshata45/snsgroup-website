import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Leadership from "./pages/Leadership";
import Journey from "./pages/Journey";
import Initiatives from "./pages/Initiatives";
import Login from "./pages/Login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/initiatives" element={<Initiatives />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;