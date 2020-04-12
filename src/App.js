import React from "react";
import "./App.scss";
import Header from "./Components/HeaderComponent";
import SearchBar from "./Components/SearchBarComponent";
import Home from "./Components/HomeComponent";
import Footer from "./Components/Footer";
import FooterMobile from "./Components/FooterMobile";

function App() {
  return (
    <div className="App">
      <Header Title={"GrabOne"} />
      <SearchBar />
      <Home />
      <FooterMobile />
      <Footer />
    </div>
  );
}

export default App;
