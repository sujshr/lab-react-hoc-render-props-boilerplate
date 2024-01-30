import React from "react";
import { useState } from "react";

function withCounter(WrappedComponent) {
  function WithCounter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount(count + 1);
    };
    return (
      <WrappedComponent count={count} setCount={handleClick}></WrappedComponent>
    );
  }

  return WithCounter;
}

export default withCounter;
