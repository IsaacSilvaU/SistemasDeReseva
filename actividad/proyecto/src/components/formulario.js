import React from "react";
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
  Button,
  HStack,
  useColorMode,
  useColorModeValue,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

var us = localStorage.getItem("memoria");
console.log(us);

export const Formulario = () => {
  const { toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("blue.200", "blue.700");
  const backgroundColor2 = useColorModeValue("blue.300", "blue.800");


  return (
    <Container maxW="container.xl">
      <Center h="100px" color="white" height="20vh">
        <Heading size="lg" mb={3} margin-left="100px">
          Bienvenido {us}
        </Heading>
      </Center>
      <Flex height="50vh" justifyContent="center" alignItems="center">
        <Box maxW="100vh" bg={backgroundColor} p={6} borderRadius="md">
          <Heading size="lg" mb={3}>
            Nombre
          </Heading>
          <Input
            placeholder="Nombre"
            variant="filled"
            mb={3}
            type="text"
            autoComplete="off"
            id="nombre"
          />
          <Heading size="lg" mb={3}>
            Apellidos
          </Heading>
          <Input
            placeholder="Apellidos"
            variant="filled"
            mb={3}
            type="text"
            autoComplete="off"
          />
          <Heading size="lg" mb={3}>
            Número de contacto
          </Heading>
          <Input
            placeholder="#"
            variant="filled"
            mb={3}
            type="text"
            autoComplete="off"
          />
          <Heading size="lg" mb={3}>
            Correo electrónico
          </Heading>
          <Input
            placeholder="@"
            variant="filled"
            mb={3}
            type="text"
            autoComplete="off"
          />
          <Button colorScheme="blue">
            Registrar
          </Button>
        </Box>

        <Box maxW="100vh" bg={backgroundColor2} p={6} borderRadius="md">
          <Heading size="lg" mb={3}>
            Tipo de Habitación
          </Heading>
          <UnorderedList spacing={3}>
            <ListItem>
              <Checkbox defaultIsChecked>Habitación Individual</Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox defaultIsChecked>Habitación Doble</Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox defaultIsChecked>Habitación Triple</Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox defaultIsChecked>Habitación Cuádruple</Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox defaultIsChecked>Suite</Checkbox>
            </ListItem>
          </UnorderedList>

          <Heading size="lg" mb={3} marginTop="5">
            Servicio de alimentación
          </Heading>
          <UnorderedList spacing={3}>
            <ListItem>
              <Checkbox defaultIsChecked>Desayuno</Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox defaultIsChecked>Almuerzo</Checkbox>
            </ListItem>
            <ListItem>
              <Checkbox defaultIsChecked>Cena</Checkbox>
            </ListItem>
          </UnorderedList>
          <Button
            marginTop="5"
            colorScheme="blue"
            variant="outline"
            justify="center"
            marginRight="60%"
            onClick="regresar"
          >
            <Link to="/login">Cancelar</Link>
          </Button>
        </Box>
      </Flex>
      {/*       <HStack spacing="10" variant="outline" justify="center">
        <Button colorScheme="blue">Registrar</Button>
        <Button colorScheme="blue">Cancelar</Button>
        <Button colorScheme="blue" onClick={toggleColorMode}>
          Dark Mode
        </Button>
      </HStack> */}
    </Container>
  );
};
