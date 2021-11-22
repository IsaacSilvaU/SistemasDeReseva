import { React, useState, useEffect } from "react";
import { Heading, VStack } from "@chakra-ui/react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { Box } from "@chakra-ui/react";

export function Login() {
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
      <Box>
        <Heading margin="5">
          Bienvenido {localStorage.getItem("usuario")} al hotel ADA
        </Heading>
        <AddTodo addTodo={addTodo} />
      </Box>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </VStack>
  );
}

export default Login;
