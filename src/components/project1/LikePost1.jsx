import React from "react";
import withCounter from "./WithCounter";
function LikePost(props) {
  let { count, setCount } = props;
  return (
    <div>
      <button onClick={setCount}>Like Post {count}</button>
    </div>
  );
}

export default withCounter(LikePost);
