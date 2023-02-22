import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { listComics } from "../../api";

export default function Comics() {
  const { data, isLoading } = useQuery(["comics"], listComics);
  console.log(data);
  return (
    <Box p={"2% 20%"}>
      <Grid gridTemplateColumns={"repeat(5, 1fr)"} gap={6}>
        {data?.data.results.map((comic: any) => (
          <Box key={comic.id}>
            <Link to={`/comics/${comic.id}`}>
              <Image
                width={210}
                height={280}
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                alt={comic.title}
              />
              <Heading size={"md"}>{comic.title}</Heading>
            </Link>
          </Box>
        ))}
        {/* <h1>{data?.data.results.length}</h1> */}
      </Grid>
    </Box>
  );
}
