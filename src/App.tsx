import Footer from "./components/Footer";
import Rotas from "./routes";
import { EstiloGlobal } from "./styles";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
