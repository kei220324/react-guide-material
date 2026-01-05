import { useLinkClickHandler } from "react-router-dom";

const Example = () => {
  const clickHandler = () => {
    alert("ボタンがクリックされました");
  };

  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
    </>
  );
};

export default Example;
