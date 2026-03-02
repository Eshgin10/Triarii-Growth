import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FilmGrain from "./components/FilmGrain";
import Index from "./pages/Index";
import GrowthStrategies from "./pages/GrowthStrategies";
import TriariiFunnel from "./pages/TriariiFunnel";
import SuccessStories from "./pages/SuccessStories";
import ThirdEyeAudit from "./pages/ThirdEyeAudit";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <FilmGrain />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/growth-strategies" element={<GrowthStrategies />} />
        <Route path="/triarii-funnel" element={<TriariiFunnel />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/third-eye-audit" element={<ThirdEyeAudit />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
