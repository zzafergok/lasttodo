import React, { useState } from "react";
import { Container, Button, FormControl, InputGroup } from "react-bootstrap";
import Layout from "./components/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function App() {
  const [todo, setTodo] = useState("");
  const [flag, setFlag] = useState(false);

  const showLastTodo = () => {
    if (todo.length > 0) {
      setFlag(true);
    }
  };

  const Notify = (e: any) => {
    if (todo.length === 0) {
      toast.error("Todo oluşturulamadı !!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (todo.length >= 2) {
      toast.success("Todo başarılı bir şekilde oluşturuldu", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      return null;
    }
  };

  const addTodoButton = (e: any) => {
    showLastTodo();
    Notify(e);
  };

  const changeHandle = (e: any) => {
    let word = e.target.value;
    setTodo(word);
  };

  const keyDownHandle = (event: any) => {
    if (event.key === "Enter") {
      showLastTodo();
      Notify(event);
    }
  };

  const closedTodoButton = (e: any) => {
    setTodo("");
    setFlag(false);
  };

  return (
    <Layout>
      <div className="row write-todo-row">
        <div className="col" />
        {flag === false && (
          <Container className="col justify-content-center">
            <InputGroup className="mt-5 ">
              <FormControl
                placeholder="The Last Todo"
                onChange={changeHandle}
                onKeyDown={keyDownHandle}
              />
              <Button onClick={addTodoButton} variant="info">
                Sure !
              </Button>
            </InputGroup>
          </Container>
        )}
        <div className="col" />
      </div>
      {flag === true && (
        <div className="row mt-4 write-todo-row">
          <div className="col-4" />
          <Container className="col-4 bg-warning rounded">
            <div>
              <p className="text-dark justify-content-center  write-todo-p">
                {todo}
              </p>
            </div>
          </Container>
          <div className="col">
            <Button className="write-todo-btn" onClick={closedTodoButton}>
              X
            </Button>
          </div>
          <div className="col-2" />
        </div>
      )}
    </Layout>
  );
}

export default App;
