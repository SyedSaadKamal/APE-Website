import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import AreasOfOperation from "./pages/AreasOfOperation";
import AreaDetail from "./pages/AreaDetail";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import Certifications from "./pages/Certifications";
import HSEPolicy from "./pages/HSEPolicy";
import Strategy from "./pages/Strategy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/areas-of-operation" element={<AreasOfOperation />} />
          <Route path="/areas-of-operation/:slug" element={<AreaDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/about/hse-policy" element={<HSEPolicy />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
