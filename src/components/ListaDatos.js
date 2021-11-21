import { React, useState, useForm, useEffect } from "react";
import { Button, Heading, Stack, HStack, VStack } from "@chakra-ui/react";
import TodoList from "./TodoList";

export function ListaDatos() {
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
      <Heading>Registro</Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </VStack>
  );
}

export default ListaDatos;