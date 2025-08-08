import { PencilRuler } from "lucide-react";
import { useState } from "react";
import { veryMap } from "./data/veryMap";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("tedious");
  const [currentKey, setCurrentKey] = useState("");
  const [altIndex, setAltIndex] = useState(0);

  const getWord = () => {
    const key = word.trim().toLowerCase();
    if (!key) {
      setResult("Enter a word");
      return;
    }
    const list = veryMap[key];

    if (!Array.isArray(list) || list.length === 0) {
      setCurrentKey(key);
      setAltIndex(0);
      setResult("No result found");
      return;
    }

    // If the key changed, start from the first alternative
    if (key !== currentKey) {
      setCurrentKey(key);
      setAltIndex(0);
      setResult(list[0]);
      return;
    }

    // Same key: cycle to the next alternative
    const nextIndex = (altIndex + 1) % list.length;
    setAltIndex(nextIndex);
    setResult(list[nextIndex]);
  };

  const randomPick = () => {
    const keys = Object.keys(veryMap);
    if (keys.length === 0) return;
    const idx = Math.floor(Math.random() * keys.length);
    const k = keys[idx];
    const list = veryMap[k] ?? [];
    setWord(k);
    setCurrentKey(k);
    setAltIndex(0);
    setResult(list[0] ?? "No result found");
  };

  return (
    <>
      <div className="items-center flex flex-col justify-center roboto-400">
        <div className="mt-20 pt-6">
          <PencilRuler size={22} />
        </div>
        <div className="text-sm font-thin text-[#738290] mt-4 roboto-400">
          Transform two weak words into one brilliant one
        </div>
        {/* Fixed-width equation row to prevent layout shifts */}
        <div className="m-14 w-[720px] flex items-end justify-center">
          <div className="font-bold text-4xl w-32 text-right">very</div>
          <div className="font-bold text-4xl mx-6 w-8 text-center">+</div>
          <input
            value={word}
            onChange={(e) => setWord(e.target.value)}
            type="text"
            placeholder="boring"
            className="font-bold text-4xl text-gray-400 border-b-2 border-black/30 focus:border-black text-center w-48 focus:outline-none"
          />
          <div className="font-bold text-4xl mx-6 w-8 text-center">=</div>
          <div className="font-bold text-4xl text-[#485665] w-48 text-center overflow-hidden text-ellipsis whitespace-nowrap">
            {result}
          </div>
        </div>

        <div className="flex gap-10">
          <button
            className="bg-black text-white px-4 py-2 rounded-md"
            onClick={getWord}
          >
            Get/Refresh result
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md" onClick={randomPick}>
            Random
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
