import { useEffect, useState } from "react";
import AppForm from "./components/AppForm";
import DisplayName from "./components/DisplayName";

export default function App() {
  const [showForm, setshowForm] = useState(false);
  const [showResult, setshowResult] = useState(false);
  const names = [
    "Violet Castelino",
    "Violet Quadros",
    "Winston Rodrigues",
    "Felcy Mendonza",
    "Chrisanta Dias",
  ];
  const [currentName, setcurrentName] = useState(names[0]);
  const [counter, setCounter] = useState(0);
  const [result, setresult] = useState("");
  const handleNext = async (tags: string) => {
    await setCounter(counter + 1);
    console.log(counter);
    setresult(result + currentName + ": " + tags + "\n");
  };
  useEffect(() => {
    if (counter > names.length - 1) {
      setshowResult(true);
      setshowForm(false);
    }

    setcurrentName(names[counter]);
  }, [counter]);

  return (
    <>
      {/* <div className="grid h-screen w-full place-items-center"> */}
      <div className="container w-full  grid  py-5">
        <div className="container px-3">
          {!showForm && !showResult && (
            <div className="flex justify-end mt-44 pt-96 pr-6 ">
              <button
                className="btn btn-active btn-accent "
                onClick={() => setshowForm(true)}
              >
                Start!
              </button>
            </div>
          )}
          {showForm && <AppForm name={currentName} handleNext={handleNext} />}
          {showResult && (
            <div>
              <DisplayName name={result} result={true} />
            </div>
          )}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
