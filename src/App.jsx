import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Ecosystem from "./components/ecosystem";
import Main from "./components/main";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <div className="gradient-one"></div>
      <div className="gradient-two"></div>
      <div className="gradient-three"></div>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" index element={<Main />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
