import { Box, Heading, list, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { characterDetail, comicDetail, listComicCharacters } from "../../api";

export default function ComicsDetail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["comics", id], comicDetail);
  const { data: comic } = useQuery(["comics", id], listComicCharacters);

  console.log(data);
  return (
    <Box>
      <Heading>{data?.data.results[0].title}</Heading>
      <Text>{data?.data.results[0].description}</Text>
      {/* <Text>
        {comic?.data.results[0].map((character: any) => (
          <li>{character.name}</li>
        ))}
      </Text> */}
    </Box>
  );
}
