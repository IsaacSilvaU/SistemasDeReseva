import { Image } from "@chakra-ui/react";
import { React, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  Button,
  HStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export let Login = () => {
  const { toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("gray.300", "gray.700");

  return (
    <Flex height="70vh" justifyContent="center" alignItems="center">
      <Box maxW="xs" bg={backgroundColor} p={6} borderRadius="md">
        <Heading size="lg" mb={3}>
          Log In
        </Heading>
        <Input
          /* onChange= {localStorage.setItem("memoria", user)} */
          placeholder="User"
          variant="filled"
          mb={3}
          type="text"
          autoComplete="off"
          id="user"
        />
        <Input
          placeholder="Password"
          variant="filled"
          mb={6}
          type="password"
          autoComplete="off"
        />
        <HStack spacing="10" variant="outline" justify="center">
          <Button colorScheme="blue" type="submit">
            <Link to="/formulario">Login</Link>
          </Button>
          <Button colorScheme="blue" type="submit">
            Dark Mode
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
  const user = document.getElementsById("user");
  localStorage.setItem("memoria", user);
  console.log(user);
};
