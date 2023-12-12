import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Rotas from "./routes";
import { EstiloGlobal } from "./styles";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <EstiloGlobal />
        <Nav />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
