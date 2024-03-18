import axios from "axios";
import { useState } from "react";

const Admin = () => {
  const [value, setValue] = useState("");

  const verify = async () => {
    try {
      const res = await axios.get("https://e4ca4cd30c0b0fd8.mokky.dev/secret");
    const data = await res.data[0];
    if (data.secret !== value) {
      console.log("FAIL");
    } else {
      console.log("SUCCESS");
    }
    } catch (error) {
      console.log("FAIL");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
      <button onClick={verify}>OPEN</button>
    </div>
  );
};

export default Admin;
