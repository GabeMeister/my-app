import { Component, createSignal } from "solid-js";

const App: Component = () => {
  const [first, setFirst] = createSignal("Gabe");

  function onInputChange({ target }: KeyboardEvent) {
    const title = (target as HTMLInputElement).value.trim();
    setFirst(title);
  }

  return (
    <div>
      <p>This is Gabes first SolidJS project</p>
      <input type="text" onKeyUp={onInputChange} />
      <p>{first()}</p>
    </div>
  );
};

export default App;
