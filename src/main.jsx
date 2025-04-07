import { useState } from "react";
import cityName from "./cities.json";
const Input = () => {
  const [hint, setHint] = useState();
  const [input, setInput] = useState("");
  const searchHandler = (e) => {
    const value = e.target.value;
    setInput(value);
    const moz = cityName.filter((a) => a.startsWith(value));
    setHint(input.length >= 0 ? moz[0] : "");
  };
  return (
    <div className="input">
      {input.length > 2 && <label htmlFor="input">{hint}</label>}
      <input
        type="text"
        id="input"
        name="city"
        value={input}
        onChange={searchHandler}
      />
    </div>
  );
};

export default Input;
