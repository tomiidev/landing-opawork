import { BrowserRouter } from "react-router";
import ReactDOM from "react-dom/client"; // Importa desde "react-dom/client"
import { I18nextProvider } from "react-i18next";
import 'antd/dist/antd.min.css';
import 'tailwindcss'

import Router from "./router";
import i18n from "./translation";

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
