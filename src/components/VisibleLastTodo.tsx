import React from "react";
import { Container, Button } from "react-bootstrap";

interface IProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

const VisibleLastTodo: React.FunctionComponent<IProps> = ({
  todo,
  setTodo,
  setFlag,
}) => {
  // allows to close the last todo so that a new todo can be entered
  const closedTodoButton = () => {
    setTodo("");
    setFlag(false);
  };
  return (
    <>
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
    </>
  );
};

export default VisibleLastTodo;
