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
import { comicDetail, listComicCharacters } from "../../api";
import { CharactersResponse, ComicDetailResponse } from "../../types";
import { useStore } from "../../zustand";
import Loader from "../Loader";

export default function ComicsDetail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery<ComicDetailResponse>(
    ["comics", id],
    comicDetail
  );
  const { data: chractersData, isLoading: chractersLoading } =
    useQuery<CharactersResponse>(["comicsCharacters", id], listComicCharacters);
  const characters = chractersData?.data.results;
  const result = data?.data.results[0];
  const { setPath } = useStore();

  useEffect(() => {
    setPath("comics");
  }, [setPath]);

  return isLoading || chractersLoading ? (
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
        <Link to={"/comics"}>
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
            Back to Series
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
        h={"90vh"}
        bgColor={"#000000"}
        opacity={"0.9"}
        p={"0% 10%"}
      >
        <HStack w={"100%"} alignItems={"flex-start"} gap={12} py={12}>
          <Image
            w={"28%"}
            h={"540"}
            src={result?.thumbnail.path + "." + result?.thumbnail.extension}
          />
          <VStack w={"100%"} alignItems={"flex-start"} color={"white"}>
            <Heading as={"h1"} size={"lg"} mb={2}>
              {result?.title}
            </Heading>

            <Heading as={"h2"} size={"md"}>
              Published:
              <Box my={1} fontSize={"sm"}>
                <Text as={"span"} fontWeight={500}>
                  {result?.modified.toString().split("T")[0]}
                </Text>
              </Box>
            </Heading>

            <Grid w={"100%"} gridTemplateColumns={"1fr 1fr"} gap={"5"} py={"3"}>
              {result?.creators.items.map((item) => {
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
                    {item.role}:
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

            <Box w={"50%"}>
              <Box my={1} fontSize={"sm"}>
                <Text as={"span"} fontWeight={500} noOfLines={5}>
                  {result?.description}
                </Text>
              </Box>
            </Box>
          </VStack>
          {Number(characters?.length) > 0 && (
            <Grid gridTemplateColumns={"repeat(4, 1fr)"} gap={3}>
              {chractersData?.data.results.map((item) => {
                return (
                  <VStack
                    w={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={3}
                    py={2}
                  >
                    <Image
                      w={"80px"}
                      h={"80px"}
                      borderRadius={"full"}
                      src={item.thumbnail.path + "." + item.thumbnail.extension}
                    />
                    <Heading
                      as={"h2"}
                      size={"xs"}
                      noOfLines={1}
                      color={"white"}
                    >
                      {item.name}
                    </Heading>
                  </VStack>
                );
              })}
            </Grid>
          )}
        </HStack>
      </Box>
    </Box>
  );
}
