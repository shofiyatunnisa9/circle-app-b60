import { useEffect, useState } from "react";

function MyCounter() {
  // const [suhu, setSuhu] = useState<number>(27);
  const {
    counter,
    increment,
    decrement,
    reset,
    incrementByAmount,
    decrementByAmount,
  } = useSuhuCounterStore((state) => state);

  const [background, setBackground] = useState<string>("blue");

  // useEffect(() => {
  //   if (suhu > 25) {
  //     setBackground("#fff200");
  //   } else if (suhu < 20) {
  //     setBackground("#97ff5c");
  //   } else {
  //     setBackground("#71b4ff");
  //   }
  // }, [suhu]);

  // const tambah = () => {
  //   //arrow function
  //   if (suhu < 33) {
  //     setSuhu(suhu + 1);
  //   } else {
  //     alert("suhu tidak bisa lebih dari 33");
  //   }
  // };
  // const kurang = () => {
  //   if (suhu > 16) {
  //     setSuhu(suhu - 1);
  //   } else {
  //     alert("suhu tidak bisa kurang dari 16");
  //   }
  // };

  return (
    <div
      id="my-counter"
      style={{
        backgroundColor: "blue",
        height: "50vh",
        display: "flex",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{counter}</h1>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
      <button onClick={reset}>Reset</button>
      <button onClick={incrementByAmount}>Kurang</button>
    </div>
  );
}
export default MyCounter;
