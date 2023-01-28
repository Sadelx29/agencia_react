import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import Travels from "./pages/Travels";
import About from "./pages/About";
import { AgenciaContextProvider } from "./context/AgenciaProvider";

function App() {

  return (
    <>
      <div>
        <AgenciaContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/travels" element={<Travels />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </AgenciaContextProvider>
      </div>
    </>
  );
}

export default App;
