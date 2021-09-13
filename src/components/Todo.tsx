import React from "react";
import { Container, Button, FormControl, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}

toast.configure();
const Todo: React.FunctionComponent<IProps> = ({ todo, setTodo, setFlag }) => {
  const showLastTodo = () => {
    if (todo.length > 0) {
      setFlag(true);
    }
  };

  const Notify = () => {
    if (todo.length === 0) {
      toast.error("Todo oluşturulamadı !!!", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: false,
      });
    } else if (todo.length >= 2) {
      toast.success("Todo başarılı bir şekilde oluşturuldu", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: false,
      });
    } else {
      return null;
    }
  };

  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const keyDownHandle = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      showLastTodo();
      Notify();
    }
  };

  const addTodoButton = () => {
    showLastTodo();
    Notify();
  };

  return (
    <>
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
    </>
  );
};

export default Todo;
