import {
  Box,
  Center,
  Image,
  Heading,
} from "@chakra-ui/react";

export function Inicio() {
  return (
    <Box p={4}>
      <Center h="100px" color="white" height="20vh">
        <Heading size="lg" mb={3} margin-left="100px">
          Bienvenidos al Hotel Ada Suite
        </Heading>
      </Center>
      <Box boxSize="sm" width="40vw" padding-left="100vw">
        <Image
          justifyContent="Center"
          src="./ada2.png"
          alt="Logo Adad Suite"
        />
      </Box>
    </Box>
  );
}

export default Inicio;
