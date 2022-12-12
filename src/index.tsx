import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Global } from "./GlobalStyles";
import {
  AppContextProvider,
  BudgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
} from "./context";

const providers = [BudgetContextProvider, CurrencyContextProvider, ExpensesContextProvider];

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <Global />
    <AppContextProvider components={providers}>
      <App />
    </AppContextProvider>
  </>,
);
