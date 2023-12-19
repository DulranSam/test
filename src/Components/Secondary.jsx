import React from "react";

const Secondary = (props) => {
  const { testinglol } = props;

  return (
    <div>
      <h1>Hi this is my second component</h1>
      <h2>and today im just {testinglol}</h2>
    </div>
  );
};

export default Secondary;
