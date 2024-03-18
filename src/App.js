import Admin from "./pages/Admin";
import Root from "./pages/Root";

function App() {
  if (window.location.pathname === "/admin") return <Admin />;
  return <Root />;
}

export default App;
