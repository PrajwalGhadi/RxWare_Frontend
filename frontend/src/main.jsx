import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './styles/index.css';       // Base desktop styles
import './styles/tabletView.css';  // Styles for tablets (overrides index.css)
import './styles/mobileView.css';  // Styles for mobile (overrides both index.css and tabletView.css)
import App from "./App.jsx";

import { Provider } from "react-redux";
import Store from "./redux/Store.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
