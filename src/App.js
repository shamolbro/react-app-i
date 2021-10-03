import "./App.css";
import Header from "./components/header/Header.js";
import bg from "./bg.jpg";
import Main from "./components/Main/Main.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <div style={{ background: `url(${bg})` }}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
