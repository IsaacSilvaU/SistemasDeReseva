import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/layout";
import { useState } from "react";
import { nanoid } from "nanoid";

export function AddTodo({ addTodo }) {

    const toast = useToast()

  function handleSubmit(e) {
    e.preventDefault();
    /* console.log("123"); */
    console.log(content);

    if (!content) {
        toast({
          title: "No hay contenido",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
        return
    }

    const todo = {
        id: nanoid(),
        body: content,
    };
    /* console.log(todo) */
    addTodo(todo);
    setContent('');
  }

  const [content, setContent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Ingresa Dato"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="blue" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
