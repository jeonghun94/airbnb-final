import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../zustand";

export default function Home() {
  const { setPath } = useStore();

  useEffect(() => {
    setPath("/");
  }, [setPath]);

  return (
    <Box w={"100%"}>
      <HStack
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        height={"38px"}
        borderBottom="1px solid #333"
        spacing={"10"}
        bgColor={"#151515"}
      >
        <Box display={"flex"} alignItems={"center"} gap={3}>
          <Link
            to={
              "https://www.disneyplus.com/movies/black-panther-wakanda-forever/7MAONYZ92wDT?cid=DTCI-Synergy-Marvel-Site-Acquisition-Library-US-Marvel-BlackPantherWakandaForever-EN-NavPipe-Marvel_NavPipe_BlackPantherWakandaForever-NA"
            }
          >
            <Heading fontSize={"xs"} color="#FFFFFF">
              STREAM BLACK PANTHER: WAKANDA FOREVER EXCLUSIVELY ON
            </Heading>
          </Link>
          <Image
            width={55}
            height={"10"}
            position="relative"
            src="https://cdn.marvel.com/content/2x/disneybtn_asset2x_6.png"
          />
        </Box>
      </HStack>

      <VStack>
        <Box width="100%" height={"auto"} position={"relative"}>
          <Image
            width={"100%"}
            height={635}
            src={
              "https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_mas_dsk_03.jpg"
            }
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
              src="https://cdn.marvel.com/content/1x/antman_lob_log_eye_01_1.png"
            />

            <Box placeSelf={"flex-start"} fontSize={"5xl"}>
              <Heading color="#FFFFFF">NOW PLAYING</Heading>
            </Box>

            <Box placeSelf={"flex-start"}>
              <Heading fontSize={"sm"} color="#FFFFFF">
                The next quantum-sized chapter of the MCU is now playing in
                theaters!
              </Heading>
            </Box>

            <Box display={"flex"} placeSelf={"flex-start"} gap={5}>
              <Link
                to={
                  "https://www.fandango.com/ant-man-and-the-wasp-quantumania-2023-228957/movie-overview"
                }
              >
                <Button
                  px={10}
                  py={6}
                  mt={5}
                  color={"#FFFFFF"}
                  bgColor={"#EC1C23"}
                  borderRadius={"0px"}
                >
                  Get Tickets
                </Button>
              </Link>
              <Link
                to={
                  "https://www.marvel.com/movies/ant-man-and-the-wasp-quantumania"
                }
              >
                <Button
                  px={10}
                  py={6}
                  mt={5}
                  color={"#FFFFFF"}
                  bgColor={"#EC1C23"}
                  borderRadius={"0px"}
                >
                  Learn More
                </Button>
              </Link>
            </Box>
          </VStack>
        </Box>

        <Box
          display={"flex"}
          justifyContent="center"
          position={"relative"}
          top={"-100px"}
          height={"auto"}
          // border={"1px solid #333"}
          zIndex={10}
        >
          <Grid
            bgColor="white"
            width={"60%"}
            height={"auto"}
            gridTemplateColumns={"repeat(4, 1fr)"}
            boxShadow="sm"
            borderRadius={"1px"}
            gap={5}
            p={5}
          >
            <VStack>
              <Image
                width={"100%"}
                height={150}
                src={"https://cdn.marvel.com/content/1x/scott_and_cassie.png"}
              />
              <Heading
                fontSize={"sm"}
                placeSelf={"flex-start"}
                textAlign={"left"}
                color={"gray.600"}
              >
                Movies
              </Heading>
              <Heading fontSize={"sm"}>
                ‘Ant-Man and The Wasp: Quantumania’ — Scott and Cassie’s
                Evolving Father-Daughter-Hero Relationship
              </Heading>
            </VStack>{" "}
            <VStack>
              <Image
                width={"100%"}
                height={150}
                src={"https://cdn.marvel.com/content/1x/hank.png"}
              />
              <Heading
                fontSize={"sm"}
                placeSelf={"flex-start"}
                textAlign={"left"}
                color={"gray.600"}
              >
                Movies
              </Heading>
              <Heading fontSize={"sm"}>
                'Ant-Man and The Wasp: Quantumania' — Unpacking Hank Pym’s Ant
                Obsession
              </Heading>
            </VStack>{" "}
            <VStack>
              <Image
                width={"100%"}
                height={150}
                src={"https://cdn.marvel.com/content/1x/ant-man_4.png"}
              />
              <Heading
                fontSize={"sm"}
                placeSelf={"flex-start"}
                textAlign={"left"}
                color={"gray.600"}
              >
                Movies
              </Heading>
              <Heading fontSize={"sm"}>
                ‘Ant-Man and The Wasp: Quantumania’: Paul Rudd, Evangeline
                Lilly, and Peyton Reed on the Franchise’s MCU Legacy
              </Heading>
            </VStack>{" "}
            <VStack>
              <Image
                width={"100%"}
                height={150}
                src={"https://cdn.marvel.com/content/1x/ant-man_3.png"}
              />
              <Heading
                fontSize={"sm"}
                placeSelf={"flex-start"}
                textAlign={"left"}
                color={"gray.600"}
              >
                GEAR
              </Heading>
              <Heading fontSize={"sm"}>
                Marvel Must Haves: Shop ‘Ant-Man and The Wasp: Quantumania’
              </Heading>
            </VStack>
          </Grid>
        </Box>
      </VStack>

      <HStack>
        <Box width="100%" height={"auto"} position={"relative"}>
          <Image
            width={"100%"}
            height={635}
            src={
              "https://cdn.marvel.com/content/1x/legends_0216_com_mas_dsk_01.jpg"
            }
          />

          <VStack
            position={"absolute"}
            top={"23%"}
            left={"18%"}
            width={"30%"}
            // transform={translate}
          >
            <Image
              ml={"-45%"}
              src="https://cdn.marvel.com/content/1x/marvellegends-log_eye-900x500.png"
            />

            <Box placeSelf={"flex-start"} fontSize={"5xl"}>
              <Heading color="#FFFFFF">Ant-Man Episodes Available Now</Heading>
            </Box>
            <Box placeSelf={"flex-start"}>
              <Heading fontSize={"sm"} color="#FFFFFF">
                Get to know Ant-Man, The Wasp, Hank Pym and Janet Van Dyne ahead
                of seeing 'Ant-Man and The Wasp: Quantumania.'
              </Heading>
            </Box>

            <Box placeSelf={"flex-start"}>
              <Link
                to={
                  "https://www.marvel.com/movies/ant-man-and-the-wasp-quantumania"
                }
              >
                <Button
                  px={10}
                  py={6}
                  mt={5}
                  color={"#FFFFFF"}
                  bgColor={"#EC1C23"}
                  borderRadius={"0px"}
                >
                  Watch Now
                </Button>
              </Link>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
}
