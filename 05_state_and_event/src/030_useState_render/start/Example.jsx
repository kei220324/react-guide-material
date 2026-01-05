// import { useState } from "react";

// const Example = () => {
//   let displayVal;
//   let [val, setVal] = useState();
//   console.log("再レンダリングされました");
//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => {
//           setVal(e.target.value);
//           // displayVal = e.target.value;
//         }}
//       />
//       = {val}
//     </>
//   );
// };

// export default Example;

import { useState } from "react";

const Example = () => {
  let [val, setVal] = useState();
  console.log("再レンダリングされました");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      = {val}
    </>
  );
};

export default Example;
