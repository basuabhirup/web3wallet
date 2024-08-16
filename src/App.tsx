import { useState } from "react";
import { generateMnemonic } from "bip39";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  const handleButtonClick = () => {
    const mn = generateMnemonic();
    setMnemonic(mn);
  };

  return (
    <>
      <button onClick={handleButtonClick}>Create Seed Phrase</button>
      <br />
      <textarea value={mnemonic} cols={85} />
    </>
  );
}

export default App;
