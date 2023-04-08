import { Component, createSignal } from "solid-js";

const App: Component = () => {
  const [first, setFirst] = createSignal("Gabe");
  const [headerText, setHeaderText] = createSignal("Default Header");

  function onInputChange({ target }: KeyboardEvent) {
    const title = (target as HTMLInputElement).value.trim();
    setFirst(title);
  }

  async function onBtnClick() {
    const r: Response = await fetch(
      "https://gabemeister-yousearch-api.onrender.com/"
    );
    const data: string = await r.text();

    console.log("\n\n***** data *****\n", data, "\n\n");
    setHeaderText(data);
  }

  return (
    <div>
      <p>This is Gabes first SolidJS project</p>
      <input type="text" onKeyUp={onInputChange} />
      <p>{first()}</p>
      <button onClick={onBtnClick}>Fetch Data</button>
      <h1>{headerText()}</h1>
    </div>
  );
};

export default App;
