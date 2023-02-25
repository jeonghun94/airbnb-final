import { Box, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { listCharacters } from "../../api";
import { useStore } from "../../zustand";

export default function Characters() {
  const { data, isLoading } = useQuery(["comics"], listCharacters);
  const { setPath } = useStore();

  useEffect(() => {
    setPath("characters");
  }, []);

  const charactersHeaderData = [
    {
      name: "ANT - MAN",
      src: "https://cdn.marvel.com/content/1x/010ant_ons_crd_05.jpg",
    },
    {
      name: "THE WASP",
      src: "https://cdn.marvel.com/content/1x/321whv_ons_crd_02.jpg",
    },
    {
      name: "Cassie Lang",
      src: "https://cdn.marvel.com/content/1x/317scl_ons_crd_02.jpg",
    },
    {
      name: "Kang the Conqueror",
      src: "https://cdn.marvel.com/content/1x/301kng_ons_crd_01.jpg",
    },

    {
      name: "Hank Pym",
      src: "https://cdn.marvel.com/content/1x/157hap_ons_crd_02.jpg",
    },
    {
      name: "Janet Van Dyne",
      src: "https://cdn.marvel.com/content/1x/041wjd_ons_crd_02.jpg",
    },
  ];

  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <>
      <Box width="100%" height={"auto"} position={"relative"}>
        <Image
          width={"100%"}
          height={450}
          src={
            "https://cdn.marvel.com/content/1x/characters_art_mas_dsk_01.jpg"
          }
        />

        <VStack
          position={"absolute"}
          top={"0%"}
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box fontSize={"5xl"}>
            <Heading color="#FFFFFF">MARVEL CHARACTERS</Heading>
          </Box>

          <Box>
            <Heading fontSize={"sm"} color="#FFFFFF">
              Get hooked on a hearty helping of heroes and villains from the
              humble House of Ideas!
            </Heading>
          </Box>
        </VStack>
      </Box>

      <Box p={"2% 20%"}>
        <Heading as={"h1"} size={"lg"} mb={10}>
          FEATURED CHARACTERS
        </Heading>

        <Grid gridTemplateColumns={"repeat(6, 1fr)"} gap={3}>
          {charactersHeaderData.map((item: any, index) => {
            return (
              <VStack
                key={index}
                width={180}
                height={380}
                role="group"
                overflow={"hidden"}
              >
                <Image
                  width={"100%"}
                  height={"175px"}
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
                  height={"175px"}
                  backgroundColor={"black"}
                  p={3}
                  _groupHover={{
                    backgroundColor: "#ED1C24",
                  }}
                >
                  <Heading size={"sm"} color={"white"} noOfLines={2}>
                    {item.name}
                  </Heading>
                </Box>
              </VStack>
            );
          })}
        </Grid>

        <Heading as={"h1"} size={"lg"} mb={10}>
          MARVEL CHARACTERS LIST
        </Heading>

        <Grid gridTemplateColumns={"repeat(6, 1fr)"} gap={3}>
          {data?.data.results.map((item: any, index) => {
            return (
              <Link to={`/characters/${item.id}`}>
                <VStack
                  key={index}
                  width={180}
                  height={380}
                  role="group"
                  overflow={"hidden"}
                >
                  <Image
                    width={"100%"}
                    height={"175px"}
                    src={item.thumbnail.path + "." + item.thumbnail.extension}
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
                    height={"175px"}
                    backgroundColor={"black"}
                    p={3}
                    _groupHover={{
                      backgroundColor: "#ED1C24",
                    }}
                  >
                    <Heading size={"sm"} color={"white"} noOfLines={2}>
                      {item.name}
                    </Heading>
                  </Box>
                </VStack>
              </Link>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
