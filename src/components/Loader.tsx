import { HStack, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <HStack
      w={"100%"}
      h={"100vh"}
      justifyContent={"center"}
      bgColor={"#000000"}
      opacity={0.8}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </HStack>
  );
};

export default Loader;
