import { useEffect } from "react";
import axios from "axios";

const Example = () => {
  useEffect(() => {
    const res = async () => {
      const res = await axios.get("http://127.0.0.1:3003/user");
      console.log(res.data);
    };

    res();
  }, []);

  return <div>Example</div>;
};

export default Example;
