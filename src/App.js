import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import "./sass/main.scss";
import AboutScreen from "./screen/AboutScreen";
import ContactScreen from "./screen/ContactScreen";
import HomeScreen from "./screen/HomeScreen";
import MenuScreen from "./screen/MenuScreen";
import ShopScreen from "./screen/ShopScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header className="header">
          <Navbar />
        </header>
        <main className="main">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/menu" component={MenuScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/shop" component={ShopScreen} />
          <Route path="/contact" component={ContactScreen} />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
