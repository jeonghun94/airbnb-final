import { Box, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { comicDetail } from "../../api";

export default function ComicsDetail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["comics", id], comicDetail);

  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
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
