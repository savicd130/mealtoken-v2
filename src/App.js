import Navbar from "./layout/Navbar";
import "./sass/main.scss";

function App() {
  return (
    <div className="container">
      <header className="header">
        <Navbar />
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
