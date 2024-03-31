import { useState } from "react";
import Button from "./Button/Button";
import "./CalculaterTips.css";

function CalculaterTips() {
  const [cash, setCash] = useState("");
  const [tips, setTips] = useState("");
  const [peoples, setPeoples] = useState("");
  

  const countTip = () => {
    const tip = (+cash * +tips) / 100 / 2;
    return tip;
  };

  const moneyPerson = () => {
    const total = (+cash + countTip() * 2) / peoples;
    return total;
  };

  const getInputTips = (e) => {
    const input = e.target.value;
    if (input[0] === "0") {
      return input.slice(1);
    }
    setTips(input);
  };

  const getInputCash = (e) => {
    const input = e.target.value;
    if (input[0] === "0") {
      setCash(input.slice(1));
    } else {
      setCash(input);
    }
  };
  console.log(cash);

  const reset = () => {
    setCash(0);
    setTips("");
    setPeoples(1);
  };

  return (
    <div className="calculaterTips">
      <div className="dataInput">
        <p>Bill</p>
        <input
          className="inputCash"
          type="number"
          value={cash}
          onChange={(e) => getInputCash(e)}
        />
        <div className="percents">
          <p>Select Tip %</p>
          <div>
            {[
              ...Array(5)
                .fill()
                .map((i, index, arr) => {
                  if (index === arr.length - 1) {
                    return arr.length * 10;
                  }
                  if (index === arr.length - 2) {
                    return arr.length * 5;
                  } else {
                    return (index + 1) * 5;
                  }
                }),
            ].map((el) => (
              <Button key={el} el={el} tips={tips} setTips={setTips} />
            ))}

            <input
              type="number"
              placeholder="CUSTOM"
              value={typeof tips === "string" ? tips : ""}
              onChange={(e) => getInputTips(e)}
            />
          </div>
        </div>
        <p>Number of People</p>
        <input
          type="number"
          className="peoples"
          value={peoples}
          onChange={(e) => setPeoples(e.target.value)}
        />
      </div>
      <div className="dataOutput">
        <div className="cash">
          <div className="tip">
            <div>
              <p>Tip Amount</p>
              <span>/ person</span>
            </div>
            <p>{countTip()}</p>
          </div>
          <div className="total">
            <div>
              <p>Total</p>
              <span>/ person</span>
            </div>
            <p>{moneyPerson()}</p>
          </div>
        </div>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
export default CalculaterTips;
