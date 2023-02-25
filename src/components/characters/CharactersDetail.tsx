import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { characterDetail } from "../../api";

export default function CharactersDetail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["comics", id], characterDetail);
  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <Box p={"2% 20%"}>
      <Grid gridTemplateColumns={"repeat(5, 1fr)"} gap={6}>
        {data?.data.results.map((character: any) => (
          <Box key={character.id}>
            <Image
              width={210}
              height={280}
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt={character.id}
            />
            <Heading size={"md"}>{character.name}</Heading>
            <Heading size={"md"}>{character.description}</Heading>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
