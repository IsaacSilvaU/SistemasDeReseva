import { React, useState, useForm, useEffect } from "react";
import {
  Heading,
  VStack,
} from "@chakra-ui/react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { Box } from "@chakra-ui/react";

export function Login2() {

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <VStack p={4}>
      <Box margin="5">
        <Heading margin="5">
          Binvenido al hotel ADA
        </Heading>
        <AddTodo addTodo={addTodo}/>
      </Box>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
    </VStack>
  );
}

export default Login2;
