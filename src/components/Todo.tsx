import React from "react";
import { Container, Button, FormControl, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProps {
  todo: string;
  setTodo: any;
  setFlag: any;
}

toast.configure();
const Todo: React.FunctionComponent<IProps> = ({ todo, setTodo, setFlag }) => {
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

  const addTodoButton = (e: any) => {
    showLastTodo();
    Notify(e);
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
