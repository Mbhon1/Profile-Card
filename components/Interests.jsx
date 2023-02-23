import React from "react";

const Interests = (props) => {
  return (
    <div className="px-4">
      <h3 className="pb-3 mt-6 font-semibold text-xl">{props.title}</h3>
      <p className="tracking-tighter text-sm">{props.desc}</p>
    </div>
  );
};

export default Interests;
