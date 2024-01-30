import "./App.css";
import LikeImage1 from "./components/project1/LikeImage1";
import LikePost1 from "./components/project1/LikePost1";
import Counter from "./components/project2/Counter";
import LikeImage2 from "./components/project2/LikeImage2";
import LikePost2 from "./components/project2/LikePost2";

function App() {
  return (
    <div>
      <h1>Some Blog</h1>
      <h2>Using HOC</h2>
      <div className="buttons">
        <LikePost1 />
        <LikeImage1 />
      </div>
      <h2>Using renderProps</h2>
      <div className="buttons">
        <Counter
          render={(count, setCount) => {
            return <LikeImage2 count={count} setCount={setCount} />;
          }}
        />
        <Counter
          render={(count, setCount) => {
            return <LikePost2 count={count} setCount={setCount} />;
          }}
        />
      </div>
    </div>
  );
}

export default App;
