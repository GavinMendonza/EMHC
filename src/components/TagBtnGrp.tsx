interface props {
  Tags: string;
  handleAddTags: (string: string) => void;
}

const TagBtnGrp = (props: props) => {
  return (
    <>
      <div className="flex gap-2 justify-center mt-2">
        <button className="btn" onClick={() => props.handleAddTags("IL")}>
          IL
        </button>
        <button
          className="btn btn-neutral"
          onClick={() => props.handleAddTags("UL")}
        >
          UL
        </button>
        <button
          className="btn btn-primary"
          onClick={() => props.handleAddTags("R")}
        >
          Replacement present
        </button>
      </div>
      <div className="flex gap-2 justify-end pr-6 mt-2">
        <button
          className="btn btn-secondary"
          onClick={() => props.handleAddTags("A")}
        >
          Absent
        </button>
        <button
          className="btn btn-accent"
          onClick={() => props.handleAddTags("P")}
        >
          Present
        </button>
      </div>
    </>
  );
};

export default TagBtnGrp;
