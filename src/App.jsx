import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Story from "./pages/Story";
import Journey from "./pages/Journey";
import Initiatives from "./pages/Initiatives";
import Login from "./pages/Login";
import BuyersGuide from "./pages/BuyersGuide";
import CreativeShowcase from "./pages/CreativeShowcase";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import NRICorner from "./pages/NRICorner";
import ContactUs from "./pages/ContactUs";
import ChannelPartner from "./pages/ChannelPartner";
import BecomeVendor from "./pages/BecomeVendor";
import CurrencyCalculator from "./pages/CurrencyCalculator";
import EmiCalculator from "./pages/EmiCalculator";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Careers from "./pages/Careers";
import EmailPopup from "./components/EmailPopup";
function App() {
  return (
    <>
    <ScrollToTop />
    <EmailPopup />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/initiatives" element={<Initiatives />} />
      <Route path="/login" element={<Login />} />
      <Route path="/BuyersGuide" element={<BuyersGuide />} />
      <Route path="/CreativeShowcase" element={<CreativeShowcase />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/disclaimer" element={<Disclaimer />} />
      <Route path="/nri" element={<NRICorner />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/channel-partner" element={<ChannelPartner />} />
      <Route path="/vendor-registration" element={<BecomeVendor />} />
      <Route path="/currency-calculator" element={<CurrencyCalculator />} />
      <Route path="/emi-calculator" element={<EmiCalculator />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/careers" element={<Careers />} />
      
    </Routes>
    </>
  );
}

export default App;
