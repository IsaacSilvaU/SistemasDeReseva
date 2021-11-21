import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/react";
import { HStack, Spacer } from "@chakra-ui/layout";
import { useState } from "react";
import { nanoid } from "nanoid";
import {
  Heading,
  FormControl,
  FormLabel,
  VStack,
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export function AddForm({ addTodo }) {
  const backgroundColor = useColorModeValue("gray.300", "gray.700");

  const toast = useToast();

  function handleSubmit(e, f) {
    e.preventDefault();
    /* console.log("123"); */
    console.log(content);
    console.log(content2);
    console.log("hola");

    if (!content && !content2) {
      toast({
        title: "No hay contenido",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: [content, content2],
    };
    console.log(todo);
    addTodo(todo);
    setContent("");
    setContent2("");
  }

  const [content, setContent] = useState("");
  const [content2, setContent2] = useState("");

  return (
    <Flex height="70vh" justifyContent="center" alignItems="center">
      <Box maxW="50vw" bg={backgroundColor} p={6} borderRadius="md">
        <VStack p={4}>
          <Heading>Login</Heading>
        </VStack>
        <form onSubmit={handleSubmit}>
          <FormControl
            id="username"
            spacing="10"
            variant="outline"
            justify="center"
          >
            <VStack mt="8" spacing="5" variant="outline" justify="center">
              <FormLabel>Nombre de usuario</FormLabel>
              <Input
                name="username"
                variant="filled"
                placeholder="Username"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />

              <FormLabel>Contraseña</FormLabel>
              <Input
                name="password"
                variant="filled"
                placeholder="Password"
                value={content2}
                onChange={(f) => setContent2(f.target.value)}
              />

              <Button colorScheme="blue" px="2" type="submit">
                Iniciar Sesión
              </Button>
            </VStack>
          </FormControl>
        </form>
      </Box>
    </Flex>
  );
}

export default AddForm;
