import React, { useState } from "react";
import { Container, Button, FormControl, InputGroup } from "react-bootstrap";
import Layout from "./components/Layout";

function App() {
  const [todo, setTodo] = useState("");
  const [flag, setFlag] = useState(false);

  return (
    <>
      <Layout>
        <div className="row write-todo-row">
          <div className="col" />
          {flag === false && (
            <Container className="col justify-content-center">
              <InputGroup className="mt-5 ">
                <FormControl
                  placeholder="The Last Todo"
                  onChange={(e) => {
                    let word = e.target.value;
                    setTodo(word);
                  }}
                />
                <Button
                  onClick={() => {
                    if (todo.length > 0) {
                      setFlag(true);
                    }
                  }}
                  variant="info"
                >
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
              <Button
                className="write-todo-btn"
                onClick={() => {
                  setTodo("");
                  setFlag(false);
                }}
              >
                X
              </Button>
            </div>
            <div className="col-2" />
          </div>
        )}
      </Layout>
    </>
  );
}

export default App;
