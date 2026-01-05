import { useState, useEffect } from "react";

const Example = () => {
  const [time, setTime] = useState(0);
  

  useEffect(() => {
    window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <>
      <time>{time}</time>
      <span>秒経過</span>
    </>
  );
};
[];
export default Example;
