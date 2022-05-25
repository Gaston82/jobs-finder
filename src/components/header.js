import {
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Flex
        minWidth="max-content"
        alignItems="center"
        justifyContent="center"
        gap="2"
        h="20"
        backgroundColor="white"
      >
        <Container>
          <HStack spacing="18px">
            <Link to={"/home"}>
              <Heading size="md" color="blue.400">
                Jobs Finder App
              </Heading>
            </Link>
            <Text>Buscar empleo</Text>
            <Text>Buscar empresa</Text>
            <Text>Salario</Text>
          </HStack>
        </Container>

        <Container>
          <ButtonGroup gap="2" pt="2">
            <Link to={"/profile"}>
              <Button size="sm" colorScheme="blue" variant="outline">
                MY APPLICATIONS
              </Button>
            </Link>
            <Button size="sm" colorScheme="blue">
              ACCESO CANDIDATOS
            </Button>
          </ButtonGroup>
        </Container>
      </Flex>
    </>
  );
}
