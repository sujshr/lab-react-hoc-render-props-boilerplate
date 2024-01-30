import React from "react";
function LikePost(props) {
  let { count, setCount } = props;
  return (
    <div>
      <button onClick={setCount}>Like Post {count}</button>
    </div>
  );
}

export default LikePost;
