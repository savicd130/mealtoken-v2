import { BrowserRouter } from "react-router-dom";
import Navbar from "./layout/Navbar";
import "./sass/main.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <Navbar />
        </header>
        <main className="main"></main>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
