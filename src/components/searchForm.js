import { Button, Center, HStack, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

export default function SearchForm() {
  const [keyword, setKeyword] = useState("");

  return (
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
  );
}
