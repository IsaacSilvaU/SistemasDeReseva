import { nanoid } from "nanoid"
import { React, useState, useForm, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  Button, VStack,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";


/* export let Login = () => { */
/*   const { toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("gray.300", "gray.700"); */

/*   const captura = () => {
    console.log("Hola"); */
    /* const usuario = document.getElementById("nombre").getValue(); */
/*     const usu = document.getElementById("user");
    console.log(usu);
    const usuario = usu.getValue();
    localStorage.setItem("memoria", usuario);
    console.log(usuario);
  }; */

export function Login() {
  const { toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("gray.300", "gray.700");
  
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
    /*     <Flex height="70vh" justifyContent="center" alignItems="center">
      <Box maxW="xs" bg={backgroundColor} p={6} borderRadius="md">
        <Heading size="lg" mb={3}>
          Log In
        </Heading>
        <FormControl id="username">
          <FormLabel>Nombre de usuario</FormLabel>
          <Input type="text" variant="filled" />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormLabel>Contraseña</FormLabel>
        <Input
          placeholder="Password"
          variant="filled"
          mb={6}
          type="password"
          autoComplete="off"
        />
        <HStack spacing="10" variant="outline" justify="center">
          <Button colorScheme="blue" type="submit">
            Login
          </Button>
          <Button colorScheme="blue" type="submit">
            Dark Mode
          </Button>
        </HStack>
      </Box>
    </Flex> */

    <Flex>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo} />
    </Flex>
  );
  /*   const user = document.getElementsById("user");
    localStorage.setItem("memoria", user);
    console.log(user); */
};
/* } */
export default Login;