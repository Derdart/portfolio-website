import React from "react";
import MainPage from "./MainPage";
import Header from "./Header";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <div id="q"></div>
      <FifthPage />
      <Footer />
    </>
  );
}

export default App;
