import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux-store/store";
import "./index.scss";
import { CartContentProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartContentProvider>
        <App />
      </CartContentProvider>
    </Provider>
  </React.StrictMode>
);
