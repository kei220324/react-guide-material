import { useState } from "react";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const style = {
    width: 120,
    height:60,
    display:"block",
    fontWeight:"bold",
    borderRadius: 9999,

};

  return (
    <>
      <button onClick={clickHandler} style={style}>ボタン</button>
      <div>{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example;
