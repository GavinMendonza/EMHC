// import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";

interface props {
  name: string;
  result: Boolean;
}

const DisplayName = (props: props) => {
  // const [isCopied, setIsCopied] = useState(false);

  const [value, copy] = useCopyToClipboard();

  // async function copyTextToClipboard() {
  //   if ("clipboard" in navigator) {
  //     return await navigator.clipboard.writeText(props.name);
  //   } else {
  //     return document.execCommand("copy", true, props.name);
  //   }
  // }

  // onClick handler function for the copy button
  // const handleCopyClick = () => {
  //   // Asynchronously call copyTextToClipboard
  //   copyTextToClipboard()
  //     .then(() => {
  //       // If successful, update the isCopied state value
  //       setIsCopied(true);
  //       console.log("copied?");
  //       setTimeout(() => {
  //         setIsCopied(false);
  //       }, 1500);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <div className=" h-full w-full mb-5">
        <div
          className={`stats h-full  bg-gray-900 w-full shadow ${
            !props.result && "place-content-center"
          }`}
        >
          <div className="stat" id="copy-target">
            <div
              className={`stat-value whitespace-pre-wrap ${
                props.result && "text-base"
              }`}
            >
              {props.name}
            </div>
          </div>
        </div>
        {props.result && (
          <button onClick={() => copy(props.name)} className="btn">
            Copy
          </button>
        )}
      </div>
    </>
  );
};

export default DisplayName;
