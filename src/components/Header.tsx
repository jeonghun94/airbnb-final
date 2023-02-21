import {
  Box,
  Heading,
  HStack,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export default function Header() {
  return (
    <Box
      bg="gray.100"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w={"100%"}
      bgColor={"#1C1C1C"}
      fontSize={"xs"}
    >
      <VStack justifyContent={"center"} width={"100%"} spacing={0}>
        <HStack
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          borderBottom="1px solid #333"
        >
          <Link to="/">
            <Image width={130} height={53} src={logo} alt={"logo"} />
          </Link>
        </HStack>
        <HStack
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          height={"40px"}
          spacing={"10"}
        >
          <Link to="/">
            <Heading size={"2xs"} color="#666" _hover={{ color: "#FFFFFF" }}>
              HOME
            </Heading>
          </Link>
          <Link to="/">
            <Popover>
              <PopoverTrigger>
                <Heading
                  size={"2xs"}
                  color="#666"
                  _hover={{ color: "#FFFFFF" }}
                >
                  COMICS
                </Heading>
              </PopoverTrigger>
              <PopoverContent
                mt={"5px"}
                borderColor={"black"}
                borderWidth={"0"}
                borderRadius={"0"}
                // width={"100%"}
                outline={"none"}
                height={"480px"}
                minW={{ base: "100%", lg: "max-content" }}
              >
                <PopoverBody
                  bgColor={"red.300"}
                  minW={{ base: "100%", lg: "max-content" }}
                >
                  <Heading>sdsds</Heading>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Link>
          <Link to="/">
            <Heading size={"2xs"} color="#666" _hover={{ color: "#FFFFFF" }}>
              CHARACTERS
            </Heading>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
