import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";

function Home() {
  return (
    <>
      <Header />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
