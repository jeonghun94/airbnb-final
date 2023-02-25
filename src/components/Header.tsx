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
import { useStore } from "../zustand";
import { Helmet } from "react-helmet";
export default function Header() {
  const { path, setPath } = useStore();
  const comicsHeaderData = [
    {
      title: "Immoral X-Men (2023) #1",
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/9/10/63f4ea07d070e/portrait_uncanny.jpg",
      year: "2023",
    },
    {
      title: "Betsy Braddock: Captain Britain (2023) #1",
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/c/c0/63f4ea1fdd964/portrait_uncanny.jpg",
      year: "2023",
    },
    {
      title: "Deadpool (2022) #4",
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/9/60/63f4ea133ee92/portrait_uncanny.jpg",
      year: "2023",
    },
    {
      title: "Thor (2020) #31",
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/c/e0/63f4e9c2b5ef5/portrait_uncanny.jpg",
      year: "2023",
    },
    {
      title: "Tiger Division (2022) #4",
      src: "https://cdn.marvel.com/u/prod/marvel/i/mg/a/80/63f4e9c2969cf/portrait_uncanny.jpg",
      year: "2023",
    },
  ];

  const charactersHeaderData = [
    {
      name: "ANT - MAN",
      src: "https://cdn.marvel.com/content/1x/010ant_ons_crd_05.jpg",
    },
    {
      name: "Kang the Conqueror",
      src: "https://cdn.marvel.com/content/1x/301kng_com_crd_01.jpg",
    },
    {
      name: "Cassie Lang",
      src: "https://cdn.marvel.com/content/1x/317scl_ons_crd_02.jpg",
    },
    {
      name: "M.O.D.O.K.",
      src: "https://cdn.marvel.com/content/1x/267mdk_com_crd_01_0.jpg",
    },
    {
      name: "THE WASP",
      src: "https://cdn.marvel.com/content/1x/321whv_ons_crd_02.jpg",
    },
    // {
    //   name: "THE WASP",
    //   src: "https://cdn.marvel.com/content/1x/041wjd_com_crd_01.jpg",
    // },
  ];

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
      <Helmet>
        <title>Marvel</title>
        <link
          rel="icon"
          href="https://www.marvel.com/static/favicon/favicon-16x16.png"
        />
        {/* https://www.marvel.com/static/favicon/favicon-16x16.png */}
      </Helmet>
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
            <Heading
              size={"2xs"}
              marginLeft={"10"}
              color={path === "/" ? "#FFFFFF" : "#666"}
              _hover={{ color: "#FFFFFF" }}
            >
              HOME
            </Heading>
          </Link>

          <Popover trigger="hover">
            <PopoverTrigger>
              <Heading
                size={"2xs"}
                color={path === "comics" ? "#FFFFFF" : "#666"}
                _hover={{ color: "#FFFFFF" }}
              >
                <Link to="/comics">COMICS</Link>
              </Heading>
            </PopoverTrigger>
            <PopoverContent
              mt={"5px"}
              borderColor={"black"}
              borderWidth={"0"}
              borderRadius={"0"}
              outline={"none"}
              height={"480px"}
              w={{ base: "500px", lg: "1800px" }}
            >
              <PopoverBody onClick={() => setPath("comics")}>
                <Link to="/comics">
                  <VStack justifyContent={"center"}>
                    <Heading color={"black"} fontSize={"3xl"} my={5}>
                      LATEST COMICS
                    </Heading>
                    <HStack>
                      {comicsHeaderData.map((item, index) => {
                        return (
                          <Box
                            key={index}
                            display={"flex"}
                            flexDirection={"column"}
                            width={190}
                            h={"auto"}
                            role="group"
                          >
                            <Image
                              width={180}
                              height={270}
                              src={item.src}
                              alt={item.title}
                              boxShadow={"xl"}
                              mb={"5"}
                              _hover={{
                                cursor: "pointer",
                                transform: "translateY(-0.5rem)",
                                transition: "all 0.3s ease-in-out",
                              }}
                            />
                            <Heading
                              size={"xs"}
                              h={33}
                              noOfLines={2}
                              _groupHover={{
                                color: "red.500",
                              }}
                            >
                              {item.title}
                            </Heading>
                            <Heading size={"2xs"} color={"gray.500"}>
                              {item.year}
                            </Heading>
                          </Box>
                        );
                      })}
                    </HStack>
                  </VStack>
                </Link>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" closeOnBlur>
            <PopoverTrigger>
              <Heading
                size={"2xs"}
                color={path === "characters" ? "#FFFFFF" : "#666"}
                _hover={{ color: "#FFFFFF" }}
              >
                <Link to="/characters">CHARACTERS</Link>
              </Heading>
            </PopoverTrigger>
            <PopoverContent
              mt={"5px"}
              borderColor={"black"}
              borderWidth={"0"}
              borderRadius={"0"}
              outline={"none"}
              height={"500px"}
              w={{ base: "500px", lg: "1800px" }}
            >
              <PopoverBody>
                <Link to="/characters">
                  <VStack justifyContent={"center"}>
                    <Heading color={"black"} fontSize={"3xl"} my={5}>
                      Trending in the universe
                    </Heading>
                    <HStack gap={3}>
                      {charactersHeaderData.map((item, index) => {
                        return (
                          <VStack
                            key={index}
                            width={150}
                            height={380}
                            role="group"
                            overflow={"hidden"}
                            // backgroundColor={"black"}
                          >
                            <Image
                              width={"100%"}
                              height={"100%"}
                              src={item.src}
                              alt={item.name}
                              _hover={{
                                cursor: "pointer",
                                transform: "scale(1.02)",
                                transition: "all 0.3s ease-in-out",
                              }}
                              borderBottom={"5px solid #ED1C24"}
                              marginBottom={"-10px"}
                            />
                            <Box
                              width={"100%"}
                              height={"100%"}
                              backgroundColor={"black"}
                              p={3}
                              _groupHover={{
                                backgroundColor: "#ED1C24",
                              }}
                            >
                              <Heading
                                size={"sm"}
                                color={"white"}
                                noOfLines={2}
                              >
                                {item.name}
                              </Heading>
                            </Box>
                          </VStack>
                        );
                      })}
                    </HStack>
                  </VStack>
                </Link>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
      </VStack>
    </Box>
  );
}
