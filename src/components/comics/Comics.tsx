import { Box, Button, Grid, Heading, Image, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useStore } from "../../zustand";
import { listComics } from "../../api";
import { useEffect } from "react";
import Loader from "../Loader";
import { ComicsResponse } from "../../types";

export default function Comics() {
  const { data, isLoading } = useQuery<ComicsResponse>(["comics"], listComics);
  const { setPath } = useStore();

  useEffect(() => {
    setPath("comics");
  }, [setPath]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <VStack>
        <Box width="100%" height={"auto"} position={"relative"}>
          <Image
            width={"100%"}
            height={600}
            src={"https://cdn.marvel.com/content/1x/bp_0224_com_mas_dsk_01.jpg"}
          />

          <VStack
            position={"absolute"}
            top={"23%"}
            left={"18%"}
            width={"30%"}
            justifyContent={"flex-start"}
            // transform={translate}
          >
            <Image
              ml={"-45%"}
              src="https://cdn.marvel.com/content/1x/blackpanther_lob_log_eye_01.png"
            />

            <Box placeSelf={"flex-start"} fontSize={"5xl"}>
              <Heading color="#FFFFFF">New Details Revealed</Heading>
            </Box>

            <Box placeSelf={"flex-start"}>
              <Heading fontSize={"sm"} color="#FFFFFF">
                Writer Eve L. Ewing teases the new look for T'Challa on 'The
                TODAY Show'
              </Heading>
            </Box>

            <Box display={"flex"} placeSelf={"flex-start"} gap={5}>
              <Button
                px={10}
                py={6}
                mt={5}
                color={"#FFFFFF"}
                bgColor={"#EC1C23"}
                borderRadius={"0px"}
              >
                Watch Now!
              </Button>
            </Box>
          </VStack>
        </Box>
      </VStack>
      <Box p={"2% 17%"} backgroundColor={"white"}>
        <Heading as={"h1"} size={"lg"} mb={10}>
          FEBRUARY 22: NEW RELEASES
        </Heading>

        <Grid gridTemplateColumns={"repeat(5, 1fr)"} gap={6}>
          {data?.data.results.map((comic: any) => (
            <Box key={comic.id} role={"group"}>
              <Link to={`/comics/${comic.id}`}>
                <Image
                  width={300}
                  height={320}
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt={comic.title}
                  boxShadow={"3xl"}
                  _hover={{
                    cursor: "pointer",
                    transform: "translateY(-0.5rem)",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
                <VStack mt={7} alignItems={"flex-start"}>
                  <Heading
                    size={"xs"}
                    h={33}
                    noOfLines={2}
                    _groupHover={{
                      color: "red.500",
                    }}
                  >
                    {comic.title}
                  </Heading>
                </VStack>
              </Link>
            </Box>
          ))}
        </Grid>
      </Box>
    </>
  );
}
