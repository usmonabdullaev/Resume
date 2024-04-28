import { useEffect } from "react";
import axios from "axios";

import Root from "./pages/Root";

const App = () => {
  useEffect(() => {
    const updateViews = async () => {
      const viewsRes = await axios.get(
        "https://e4ca4cd30c0b0fd8.mokky.dev/views"
      );
      const views = viewsRes.data[0].view + 1;
      await axios.patch("https://e4ca4cd30c0b0fd8.mokky.dev/views/1", {
        view: views,
      });
    };
    updateViews();
  }, []);

  return <Root />;
};

export default App;
