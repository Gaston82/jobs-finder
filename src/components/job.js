import { Badge, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authProvider";
import apply, { unapply } from "../services/userServices";

export default function Job({
  title,
  company,
  country,
  province,
  description,
  id,
  salary,
  applicants,
  categories,
}) {
  const { auth } = useContext(AuthContext);

  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      backgroundColor="white"
      maxWidth="600px"
      borderRadius="2"
      mb="2"
    >
      <Heading fontSize="xl">{title}</Heading>
      <Heading fontSize="xl" color="blue.400">
        {company}
      </Heading>
      <Flex>
        <Text mt={4}>{country}-</Text>
        <Text mt={4}>{province}</Text>
      </Flex>
      <Link to={`detail/${id}`}>
        <Text mt={4}>{description}</Text>
        {categories.map((tag, index) => (
          <Badge
            variant="subtle"
            colorScheme="green"
            key={index}
            marginRight="5"
            p="1"
            borderRadius="2xl"
          >
            {tag}
          </Badge>
        ))}
        <Text mt={4}>Salary: {salary}€</Text>
        <Text mt={4} paddingRight="15px">
          {applicants.length}personas inscritas
        </Text>
      </Link>
      <Flex justifyContent="space-between">
        {applicants.some((applicant) => applicant.id === auth.user.id) ? (
          <Button
            backgroundColor="red.400"
            onClick={() => unapply(id, auth.user)}
          >
            Unapply
          </Button>
        ) : (
          <Button
            backgroundColor="blue.400"
            onClick={() => apply(id, auth.user)}
          >
            Apply
          </Button>
        )}
      </Flex>
    </Box>
  );
}
