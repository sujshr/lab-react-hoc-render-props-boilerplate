import React from "react";
import withCounter from "./WithCounter";

function LikeImage(props) {
  let { count, setCount } = props;

  return (
    <div>
      <button onClick={setCount}>Like Image {count}</button>
    </div>
  );
}

export default withCounter(LikeImage);
