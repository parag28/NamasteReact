import React, { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count1] = useState(1);

  return (
    <div className="m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count: {count}</h1>
      <h1>Count1: {count1}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: Chincholi</h3>
      <h4>Contact: @gichmid</h4>
    </div>
  );
};

export default User;
