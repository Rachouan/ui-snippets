import { useState } from "react";
import "./globals.css";
import { Switch } from "./ui";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <main className="flex justify-center items-center bg-white dark:bg-zinc-900 w-full h-screen max-h-fit">
      <Switch checked={checked} onChange={setChecked} />
    </main>
  );
}

export default App;
