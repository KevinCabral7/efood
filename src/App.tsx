import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Rotas from "./routes";

import { store } from "./store";

import { EstiloGlobal } from "./styles";
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
