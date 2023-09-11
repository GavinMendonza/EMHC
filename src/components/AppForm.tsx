import { useState } from "react";
// import InputBox from "./InputBox";
import TagBtnGrp from "./TagBtnGrp";
import { BsChevronRight } from "react-icons/bs";
import DisplayName from "./DisplayName";

interface props {
  name: string;
  handleNext: (tags: string) => void;
}

const AppForm = (props: props) => {
  const [Tags, setTags] = useState("");
  const handleAddTags = (string: string) => {
    setTags(Tags + " " + string);
  };

  return (
    <>
      {/* <InputBox /> */}

      <DisplayName name={props.name} result={false} />

      <div className="grid place-items-center">
        <div className="flex w-full">
          <input
            value={Tags}
            className="flex input input-bordered rounded-r-none w-full max-w-xs"
            disabled
          />
          <button className="btn rounded-l-none" onClick={() => setTags("")}>
            Clear
          </button>
        </div>
      </div>
      <TagBtnGrp Tags={Tags} handleAddTags={handleAddTags} />
      <div className="flex justify-end pr-6">
        <button
          className="btn btn-success font-semibold mt-10"
          onClick={() => props.handleNext(Tags)}
        >
          Next <BsChevronRight />
        </button>
      </div>
    </>
  );
};

export default AppForm;
