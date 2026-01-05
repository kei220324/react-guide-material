import "./Expression.css";

const Expression = () => {
  const name = "Expression";
  const arry = ["item1", "item2", "item3"];
  const hello = (arg) => `${arg} function`;

  return (
    <div className={name.toLowerCase()}>
      <h3>Hello {name}</h3>
      <h3>{arry}</h3>
      <h3>{hello("Hello")}</h3>
      {<h3>hello JSX </h3>}
    </div>
  );

};

export default Expression;

