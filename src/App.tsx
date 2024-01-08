import { Provider } from "react-redux";
import { store } from "./store";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Rotas from "./routes";
import { EstiloGlobal } from "./styles";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
