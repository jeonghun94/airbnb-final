import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { listCharacters, listComics } from "../../api";

export default function Characters() {
  const { data, isLoading } = useQuery(["comics"], listCharacters);
  console.log(data);
  return (
    <Box p={"2% 20%"}>
      <Grid gridTemplateColumns={"repeat(5, 1fr)"} gap={6}>
        {data?.data.results.map((character: any) => (
          <Box key={character.id}>
            <Link to={`/characters/${character.id}`}>
              <Image
                width={210}
                height={280}
                src={
                  character.thumbnail.path + "." + character.thumbnail.extension
                }
                alt={character.id}
              />
              <Heading size={"md"}>{character.name}</Heading>
            </Link>
          </Box>
        ))}
        {/* <h1>{data?.data.results.length}</h1> */}
      </Grid>
    </Box>
  );
}
