import { useEffect, useReducer, useState } from "react";

export default function AdminComponent() {
  const [emotion, setEmotion] = useState("happy");
  const [checked, toggle] = useReducer((checked) => !checked, false);

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  return (
    <>
      <h1> I am feeling {emotion}. </h1>
      <p>
        <button onClick={() => setEmotion("happy")}>My girl</button>
        <button onClick={() => setEmotion("No fun")}>My life</button>
        <button onClick={() => setEmotion("frustrated")}>My career</button>
      </p>
      <p>
        <input type="checkbox" value={checked} onChange={toggle} />{" "}
        {checked
          ? "The helper will be there shortly"
          : "Well... Do you need help?"}
      </p>
    </>
  );
}
