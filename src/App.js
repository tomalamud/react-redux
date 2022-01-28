import "./styles.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const voters = ["tomas", "carlos", "charo", "matias"];
  return (
    <div
      className="App"
      style={{ backgroundColor: "lightblue", margin: "10px" }}
    >
      <h3>This is another counter: {count}</h3>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}
