import { React, useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { Box, Flex, Center } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import {
  Button, VStack,
  HStack,
  useColorMode,
  useColorModeValue,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoList from "./TodoList";
import AddForm from "./AddForm";

export const Formulario2 = () => {
  const { toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("blue.200", "blue.700");
  const backgroundColor2 = useColorModeValue("blue.300", "blue.800");

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
      <AddForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </VStack>

  );
};

export default Formulario2;
