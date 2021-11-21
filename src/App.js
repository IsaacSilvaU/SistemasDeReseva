import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Inicio } from "./components/inicio";
import { Login } from "./components/login";
import { Login2 } from "./components/login2";
import { Login3 } from "./components/Login3";
import { Formulario } from "./components/formulario";
import { Formulario2 } from "./components/formulario2";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton size={"md"} display={{ md: "none" }} />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/inicio">Inicio</Link>
            </Box>
            <Box>
              <Link to="/login2">Login</Link>
            </Box>
            <Box>
              <Link to="/formulario2">Formulario</Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            ></HStack>
          </HStack>
        </Flex>
      </Box>
      <Switch>
        <Route path={"/inicio"}>
          <Inicio />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/login2">
          <Login2 />
        </Route>
        <Route path="/formulario2">
          <Formulario />
        </Route>
        {/*           <Route path="/">
                <Home />
              </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
