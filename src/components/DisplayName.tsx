import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";

interface props {
  name: string;
  result: Boolean;
}

const DisplayName = (props: props) => {
  // const [isCopied, setIsCopied] = useState(false);

  const [_value, copy] = useCopyToClipboard();
  const [copied, setcopied] = useState(false);

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
      <div className={` h-full w-full mb-5 ${props.result && "mt-32 py-20"}`}>
        <div
          className={`stats h-full  bg-gray-900 w-full shadow ${
            !props.result ? "place-content-center" : "py-8"
          }`}
        >
          <div className="stat" id="copy-target">
            <div
              className={`stat-value whitespace-pre-wrap ${
                props.result && "text-base"
              }`}
            >
              {props.result
                ? "Attendance \n9.40 am mass in terrace:\n\n" + props.name
                : props.name}
            </div>
          </div>
        </div>
        {props.result && (
          <div className="w-full ">
            <button
              onClick={() => {
                copy(props.name);
                setcopied(true);
              }}
              className="absolute btn right-0 mr-6 mt-2 btn-accent lowercase"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default DisplayName;
