import { AtSignIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <Center h="100vh">
      <Stack boxShadow="md" bg="whiteAlpha.900" p="15" rounded="md">
        <Heading as="h1" textAlign="center" color="blue.400">
          Log in
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Please log in with the data you enter during registration.
        </Text>
        <FormControl isRequired>
          <Stack my="4" spacing="6">
            <FormLabel htmlFor="email">Email adress</FormLabel>
            <Input name="email" type="email" />
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input name="password" type="password" />
            <Button size="lg" colorScheme="blue" type="submit">
              Login
            </Button>
          </Stack>
        </FormControl>
        <Stack justify="center" color="gray.600" spacing="3">
          <Text as="div" textAlign="center">
            <span>Dont have an account?</span>
            <Button colorScheme="purple" variant="link">
              Sign up
            </Button>
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
}
