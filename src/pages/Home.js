import { useState } from "react";
import Todos from "../components/Todos";
import Header from "../components/Header";

const Home = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <Header />
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default Home;
