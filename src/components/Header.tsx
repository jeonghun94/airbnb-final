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
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { listComics } from "../api";
import logo from "../logo.png";

export default function Header() {
  const { data, isLoading } = useQuery(["comics"], listComics);
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
            <Popover trigger="hover" closeOnBlur>
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
                outline={"none"}
                height={"450px"}
                w={{ base: "500px", lg: "1800px" }}
              >
                <PopoverBody>
                  <VStack justifyContent={"center"}>
                    <Heading color={"black"} fontSize={"3xl"} my={"10"}>
                      Marvel Comics
                    </Heading>
                    <HStack>
                      {[0, 1, 2, 3, 4, 5].map((item, index) => {
                        return (
                          <Box key={item}>
                            <Image
                              width={130}
                              height={200}
                              src={
                                data?.data.results[index].thumbnail.path +
                                "." +
                                data?.data.results[index].thumbnail.extension
                              }
                              alt={data?.data.results[index].title}
                              boxShadow={"xl"}
                              mb={"5"}
                            />
                            <Heading size={"2xs"} noOfLines={0}>
                              {data?.data.results[index].title}
                            </Heading>
                          </Box>
                        );
                      })}
                    </HStack>
                  </VStack>
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
