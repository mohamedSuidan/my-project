import React from "react";

function Inputs({ type, placeholder, id, text, val, data, multi }) {
  if (type === "textarea") {
    return (
      <>
        <label htmlFor={id}>{text}</label>

        <textarea
          type={type}
          placeholder={placeholder}
          id={id}
          className="form-control"
          onChange={val}
          value={data}
        ></textarea>
      </>
    );
  }
  return (
    <>
      <label htmlFor={id}>{text}</label>
      {!multi ? (
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          className="form-control"
          onChange={val}
          value={data}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          className="form-control"
          onChange={val}
          value={data}
          multiple
        />
      )}
    </>
  );
}

export default Inputs;
