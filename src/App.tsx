import { Component, For, createResource, createSignal } from "solid-js";
import Fetcher from "./Fetcher";
import { delay } from "./utils";

async function getNames(): Promise<Array<string>> {
  const data = await Fetcher.get("/user/all");
  const allUsers: Array<string> = JSON.parse(data).map((d: any) => d.name);

  return allUsers;
}

const App: Component = () => {
  const [data] = createResource(getNames);

  return (
    <div>
      <p>This is Gabes first SolidJS project</p>
      <h1>{JSON.stringify(data.loading)}</h1>
      <For each={data()}>{(name) => <div>{name}</div>}</For>
    </div>
  );
};

export default App;
