import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import "./sass/main.scss";
import HomeScreen from "./screen/HomeScreen";
import MenuScreen from "./screen/MenuScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <Navbar />
        </header>
        <main className="main">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/menu" component={MenuScreen} exact />
        </main>
        <footer className="footer"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
