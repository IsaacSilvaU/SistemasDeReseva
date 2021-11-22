import { React, useState, useEffect } from "react";
import { VStack, Box } from "@chakra-ui/react";
import { ListaDatos } from "./ListaDatos";
import AddForm from "./AddForm";

export const Formulario = () => {

  const [todos2, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos2")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos2", JSON.stringify(todos2));
  }, [todos2]);

  function deleteTodo(id) {
    const newTodos2 = todos2.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos2);
  }

  function addTodo(todo2) {
    setTodos([...todos2, todo2]);
  }

  return (
    <Box>
      <VStack p={4}>
        <Box marginBottom="110px">
          <AddForm addTodo={addTodo} />
        </Box>
          <ListaDatos todos2={todos2} deleteTodo={deleteTodo} />
      </VStack>
    </Box>
  );
};

export default Formulario;
