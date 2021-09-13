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
  // If the value entered in the input passes validation, it changes the value of the flag
  const showLastTodo = () => {
    if (todo.length > 0) {
      setFlag(true);
    }
  };

  // It provides notification when it is written incorrectly or correctly
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

  // Reads and writes the value entered from the input
  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  // It allows the value entered from the input to be sent by 'enter'
  const keyDownHandle = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      showLastTodo();
      Notify();
    }
  };

  // allows the saved value to be displayed on the screen after clicking the button
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
