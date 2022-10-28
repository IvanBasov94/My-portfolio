import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";


const App = () => {

   const location = useLocation();

   return (
      <>
         <Header />
         <Container>
            <AnimatePresence exitBeforeEnter>
               <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
               </Routes>
            </AnimatePresence>
         </Container>
      </>
   );
}

export default App;
