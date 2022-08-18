import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { TransactionsProvider } from './context/TransactionContext';
ReactDOM.render(
  
  
  <TransactionsProvider>
   <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>
</TransactionsProvider>,

  document.getElementById("root")
);
