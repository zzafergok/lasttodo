import React, { useState } from "react";
import Layout from "./components/Layout";

import Todo from "./components/Todo";
import VisibleLastTodo from "./components/VisibleLastTodo";

function App() {
  const [todo, setTodo] = useState("");
  const [flag, setFlag] = useState(false);

  return (
    <Layout>
      {/* If the flag is false, it displays the screen for entering the last todo */}
      {flag ? (
        <VisibleLastTodo todo={todo} setTodo={setTodo} setFlag={setFlag} />
      ) : (
        <div className="row write-todo-row">
          <div className="col" />
          <Todo todo={todo} setTodo={setTodo} setFlag={setFlag} />
          <div className="col" />
        </div>
      )}
    </Layout>
  );
}

export default App;
