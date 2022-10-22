import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (state = 0, action) => {
  //state의 기본값은 0
  if (action.type === ADD) {
    return state + 1;
  } else if (action.type === MINUS) {
    return state - 1;
  } else {
    return state;
  }
};

const countStore = createStore(countModifier);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
