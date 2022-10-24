import { useState } from "react";
import "./styles.css";

function binary_to_decimal(a) {
  var size = a.length;
  var arr = new Array(size);
  var c = size - 1;
  for (let i = c, k = 0; i >= 0; i--, k++) {
    arr[k] = parseInt(a[i], 10);
  }

  var res = 0;
  var m = arr.length;
  for (let i = 0; i < m; i++) {
    res += Math.pow(2, i) * arr[i];
  }
  return res;
}
function decimal_to_binary(a) {
  var result = "";
  if (isNaN(a)) {
    result = "NaN";
  } else {
    var div = parseInt(a, 10);
    console.log(div);
    var res = "";
    var mod = 0;

    while (div !== 0) {
      mod = div % 2;
      div = parseInt(div / 2, 10);
      res += mod.toString();
    }

    var arr = [...res];
    var temp = new Array(arr.length);
    var size = arr.length - 1;
    for (let i = size, k = 0; i >= 0; i--, k++) {
      temp[k] = arr[i];
    }

    result = temp;
  }
  return result;
}

function add(a, b) {
  return a + b;
}
export default function App() {
  const [first, putFirst] = useState(0);
  const [second, putSecond] = useState(0);
  const setFirst = (e) => {
    var numb = e.target.value;
    putFirst(numb);
  };

  const setSecond = (e) => {
    var numb = e.target.value;
    putSecond(numb);
  };
  var result = 0;
  result = add(binary_to_decimal(first), binary_to_decimal(second));
  return (
    <div className="App">
      <h1>Binary Addition Calculator</h1>

      <label>Enter First Binary Number: </label>
      <input type="text" value={first} onChange={setFirst} />
      <br />
      <label>
        The number entered in decimal is {binary_to_decimal(first)}{" "}
      </label>
      <br />
      <br />
      <label>Enter second Binary Number: </label>
      <input type="text" value={second} onChange={setSecond} />
      <br />
      <label>
        The number entered in decimal is {binary_to_decimal(second)}{" "}
      </label>
      <br />
      <br />

      <p>Answer in decimal is is: {result}</p>
      <p>Answer in binary is is: {decimal_to_binary(result)}</p>
    </div>
  );
}
