import React, { useState } from "react";
import Layout from "./components/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Todo from "./components/Todo";
import VisibleLastTodo from "./components/VisibleLastTodo";

toast.configure();
function App() {
  const [todo, setTodo] = useState("");
  const [flag, setFlag] = useState(false);

  return (
    <Layout>
      <div className="row write-todo-row">
        <div className="col" />
        {flag === false && (
          <Todo todo={todo} setTodo={setTodo} setFlag={setFlag} />
        )}
        <div className="col" />
      </div>
      {flag === true && (
        <VisibleLastTodo todo={todo} setTodo={setTodo} setFlag={setFlag} />
      )}
    </Layout>
  );
}

export default App;
