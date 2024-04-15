import { useEffect } from "react";

import Admin from "./pages/Admin";
import Root from "./pages/Root";

const GTM_ID = "GTM-MWJMHFPH";

function App() {
  useEffect(() => {
    const initializeGTM = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GTM_ID);
    };

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    script.async = true;
    document.head.appendChild(script);

    initializeGTM();

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (window.location.pathname === "/admin") return <Admin />;

  return <Root />;
}

export default App;
