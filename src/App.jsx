import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import Community from "./components/community";
import Ecosystem from "./components/ecosystem";
import Footer from "./components/footer";
import Main from "./components/main";
import Nav from "./components/nav";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <div className="gradient-one"></div>
        <div className="gradient-two"></div>
        <div className="gradient-three"></div>
        <BrowserRouter>
          <Nav />
          <main className="container">
            <Routes>
              <Route path="/" index element={<Main />} />
              <Route path="/ecosystem" element={<Ecosystem />} />
            </Routes>
            <Community />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </ParallaxProvider>
  );
}

export default App;
