import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Job({ title, company, city, description, id, salary }) {
  return (
    <Link to={`detail/:${id}`}>
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        backgroundColor="white"
        width="920px"
        borderRadius="2"
        mb="2"
      >
        <Heading fontSize="xl">{title}</Heading>
        <Heading fontSize="xl" color="blue.400">
          {company}
        </Heading>
        <Text mt={4}>{city}</Text>
        <Text mt={4}>{description}</Text>
        <Text mt={4}>{salary}</Text>
      </Box>
      {/* <article
          style={{
            border: "solid 1px black",
            marginBottom: "10px",
            width: "900px",
            backgroundColor: "white",
            padding: "1em",
            borderRadius: "5px",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>{title}</h3>
          <p style={{ color: "blue 500" }}>{company}</p>
          <span>{city}</span>
          <p>{description}</p>
        </article> */}
    </Link>
  );
}
