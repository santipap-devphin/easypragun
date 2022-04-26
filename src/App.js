import React, { useEffect, Suspense, lazy } from "react";
import { DataProvider } from './context/DataContext';
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import './assets/css/styles.css';
import './assets/css/styleSwipe.css';
import Home from "./page/Home";
import About from "./page/About";
import Service from "./page/Service";
import Contact from "./page/Contact";

function App() {
  return (
        <>
        <DataProvider>
            <BrowserRouter>
              <Routes>
                      <Route path="/" exact element={<Home />} />
                      <Route path="/about" exact element={<About />} />
                      <Route path="/service" exact element={<Service />} />
                      <Route path="/contact" exact element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </DataProvider>
        </>
  );
}

export default App;
