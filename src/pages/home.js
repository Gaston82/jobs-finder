import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Input,
  Select,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Job from "../components/job";

export default function Home() {
  const [jobs, setJobs] = useState([
    {
      id: "1",
      title: "Junior Fullstack Developer",
      company: "The Valley Talent",
      city: "Madrid",
      remote: true,
      description:
        "Nuestro cliente, es una agencia de medios que ofrece una respuesta integrada a problemas de comunicación. Cuenta con servicios de investigación, estrategia, planificación, compra online y offline, modelización, respuesta directa, innovación e integración de contenidos.",
      contract: "indefinido",
      salary: "30.000€",
    },
    {
      id: "2",
      title: "Junior Fullstack Developer",
      company: "The Valley Talent",
      city: "Madrid",
      remote: true,
      description:
        "Nuestro cliente, es una agencia de medios que ofrece una respuesta integrada a problemas de comunicación. Cuenta con servicios de investigación, estrategia, planificación, compra online y offline, modelización, respuesta directa, innovación e integración de contenidos.",
      contract: "indefinido",
      salary: "30.000€",
    },
    {
      id: "3",
      title: "Desarrollador senior Javascript / Java",
      company: "Pariver",
      city: "Zaragoza",
      remote: true,
      description:
        "Nuestro cliente, es una agencia de medios que ofrece una respuesta integrada a problemas de comunicación. Cuenta con servicios de investigación, estrategia, planificación, compra online y offline, modelización, respuesta directa, innovación e integración de contenidos.",
      contract: "indefinido",
      salary: "30.000€",
    },
    {
      id: "4",
      title: "PROGRAMADOR FRONTEND JAVASCRIPT - JUNIOR",
      company: "SIPAY PLUS, S.L.",
      city: "Madrid",
      remote: true,
      description:
        "Sipay está buscando incorporar a nuestra empresa un Programador Web, con conocimientos en JavaScript, cuyo objetivo será colaborar en el desarrollo de proyectos de innovación desde cero en la parte de Frontend con la tecnología base HTML5/CSS3 y la extensión de proyectos ya existentes.",
      contract: "indefinido",
      salary: "30.000€",
    },
  ]);

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
            <Heading size="md">Jobs Finder App</Heading>
            <Text>Buscar empleo</Text>
            <Text>Buscar empresa</Text>
            <Text>Salario</Text>
          </HStack>
        </Container>

        <Container>
          <ButtonGroup gap="2" pt="2">
            <Button size="sm" colorScheme="blue" variant="outline">
              ACCESO EMPRESAS
            </Button>
            <Button size="sm" colorScheme="blue">
              ACCESO CANDIDATOS
            </Button>
          </ButtonGroup>
        </Container>
      </Flex>
      <Center>
        <HStack
          p="10"
          mt="6rem"
          backgroundColor="blue.400"
          w="920px"
          borderRadius="4"
        >
          <Input
            backgroundColor="white"
            placeholder="Puesto, empresa o palabra clave"
          ></Input>
          <Select placeholder="Toda España" backgroundColor="white">
            <option value="option1">Barcelona</option>
            <option value="option2">Madrid</option>
            <option value="option3">Sevilla</option>
          </Select>{" "}
          <Button width="200px" colorScheme="red">
            Buscar
          </Button>
        </HStack>
      </Center>

      <Center>
        <Box
          style={{
            backgroundColor: "#F2F2F2",
            paddingLeft: "10em",
            marginTop: "2em",
            paddingTop: "2em",
            height: "100vh",
          }}
        >
          {jobs.map((job) => (
            <Job
              key={job.id}
              id={job.id}
              title={job.title}
              company={job.company}
              city={job.city}
              description={job.description}
              salary={job.salary}
            />
          ))}
        </Box>
      </Center>
    </>
  );
}
