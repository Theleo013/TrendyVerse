import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/base/reset.scss";
import App from "./App.jsx";
import { store, persistor } from "@/redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
