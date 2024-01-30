import React from "react";

function LikeImage(props) {
  let { count, setCount } = props;

  return (
    <div>
      <button onClick={setCount}>Like Image {count}</button>
    </div>
  );
}

export default LikeImage;
