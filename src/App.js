import React from "react";
import { Brand, CTA, Nav } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT,
} from "./assets/elements";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Nav />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
