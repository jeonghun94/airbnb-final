import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { characterDetail } from "../../api";
import { CharacterDetailResponse } from "../../types";
import { useStore } from "../../zustand";
import Loader from "../Loader";

export default function CharactersDetail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery<CharacterDetailResponse>(
    ["comics", id],
    characterDetail
  );
  const result = data?.data.results[0];
  const { setPath } = useStore();

  useEffect(() => {
    setPath("characters");
  }, [setPath]);

  return isLoading ? (
    <Loader />
  ) : (
    <Box position={"relative"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        backgroundColor={"#151515"}
        gap={3}
        h={10}
        px={"18%"}
      >
        <Link to={"/characters"}>
          <Text
            fontSize={"xs"}
            fontWeight={"bold"}
            color={"white"}
            display={"flex"}
            alignItems={"center"}
            gap={3}
          >
            <Text as={"span"} fontSize={"md"} color={"red.500"}>
              ←
            </Text>{" "}
            Back to Characters
          </Text>
        </Link>
      </Box>
      <Image
        w={"100%"}
        h={"90vh"}
        src={result?.thumbnail.path + "." + result?.thumbnail.extension}
      />

      <Box
        display={"flex"}
        position={"absolute"}
        top={"10"}
        w={"100%"}
        minH={"90vh"}
        height={"auto"}
        bgColor={"#000000"}
        opacity={"0.9"}
        p={"0% 17%"}
      >
        <HStack w={"100%"} alignItems={"flex-start"} gap={12} py={12}>
          <Image
            w={"28%"}
            h={"540"}
            src={result?.thumbnail.path + "." + result?.thumbnail.extension}
          />
          <VStack w={"100%"} alignItems={"flex-start"} color={"white"}>
            <Heading as={"h1"} size={"lg"} mb={2}>
              {result?.name}
            </Heading>

            <Heading as={"h2"} size={"md"}>
              Modified:
              <Box my={1} fontSize={"sm"}>
                <Text as={"span"} fontWeight={500}>
                  {result?.modified.toString().split("T")[0]}
                </Text>
              </Box>
            </Heading>

            <Grid w={"100%"} gridTemplateColumns={"1fr 1fr"} gap={"5"} py={"3"}>
              {result?.events.items.map((item) => {
                return (
                  <Heading
                    as={"h2"}
                    size={"md"}
                    css={{
                      "&:first-letter": {
                        textTransform: "uppercase",
                      },
                    }}
                  >
                    <Box my={1} fontSize={"sm"}>
                      <Text
                        as={"span"}
                        fontWeight={500}
                        css={{
                          "&:first-letter": {
                            textTransform: "uppercase",
                          },
                        }}
                      >
                        {item.name}
                      </Text>
                    </Box>
                  </Heading>
                );
              })}
            </Grid>

            <Grid
              w={"100%"}
              gridTemplateColumns={"1fr 1fr"}
              gap={"14"}
              py={"3"}
              mt={"-20"}
            >
              {Number(result?.comics.items.length) > 0 && (
                <Box>
                  <Heading
                    as={"h2"}
                    size={"md"}
                    css={{
                      "&:first-letter": {
                        textTransform: "uppercase",
                      },
                    }}
                  >
                    comics:
                    {result?.comics.items.map((item) => {
                      return (
                        <Box my={1} fontSize={"sm"}>
                          <Text
                            as={"span"}
                            fontWeight={500}
                            css={{
                              "&:first-letter": {
                                textTransform: "uppercase",
                              },
                            }}
                          >
                            {item.name}
                          </Text>
                        </Box>
                      );
                    })}
                  </Heading>
                </Box>
              )}

              {Number(result?.series.items.length) > 0 && (
                <Box>
                  <Heading
                    as={"h2"}
                    size={"md"}
                    css={{
                      "&:first-letter": {
                        textTransform: "uppercase",
                      },
                    }}
                  >
                    series:
                    {result?.series.items.map((item) => {
                      return (
                        <Box my={1} fontSize={"sm"}>
                          <Text
                            as={"span"}
                            fontWeight={500}
                            css={{
                              "&:first-letter": {
                                textTransform: "uppercase",
                              },
                            }}
                          >
                            {item.name}
                          </Text>
                        </Box>
                      );
                    })}
                  </Heading>
                </Box>
              )}
            </Grid>

            <Box w={"50%"}>
              <Box my={1} fontSize={"sm"}>
                <Text as={"span"} fontWeight={500} noOfLines={5}>
                  {result?.description}
                </Text>
              </Box>
            </Box>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}
