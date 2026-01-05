const h1Element = document.querySelector("h1");
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = "変更後のタイトル";
console.log(h1Element.textContent);

const btnEl = document.querySelector("button");

const helloFn = () => {
  console.dir(e.target.textContent);
  console.log("ボタンがクリックされました");
};

btnEl.addEventlistener('click',helloFn);
