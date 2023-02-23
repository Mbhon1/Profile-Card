import React from "react";

const About = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default About;
