import { React, useState, useForm, useEffect } from "react";
import {
  Heading,
  VStack,
} from "@chakra-ui/react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

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
      <Heading margin="2">Binvenido al hotel ADA</Heading>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </VStack>
  );
}

export default Login2;
