import {
  Flex,
  VStack,
  Box,
  useBreakpointValue,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";

const Grid = [
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    url: "asd",
    linkList: ["First", "Second", "Third"],
    id: 1,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    url: "asdf",
    linkList: ["First", "Second", "Third"],
    id: 2,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    url: "asdfg",
    linkList: ["First", "Second", "Third"],
    id: 3,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    url: "asdfgh",
    linkList: ["First", "Second", "Third"],
    id: 4,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    url: "asdfghj",
    linkList: ["First", "Second", "Third"],
    id: 5,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    linkList: ["First", "Second", "Third"],
    url: "asdfghjk",
    id: 6,
  },
  {
    imageAlt: "Rear view of modern home with pool",
    linkList: ["First", "Second", "Third"],
    url: "asdfghjkl",
    id: 7,
  },
];

export default function GridSection() {
  return (
    <Flex w={"full"}>
      <VStack
        w="full"
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        direction="row"
      >
        <Flex
          w={{ xl: "80em", base: "full" }}
          flexWrap="wrap"
          direction="row"
          justify={"center"}
          my="50px"
        >
          {Grid.map((grid) => (
            <Link
              key={grid.id}
              href={`${grid.imageUrl}`}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              flexDirection={"column"}
              w={{ sm: "45%", md: "50%", lg: "32%", base: "250px" }}
              h="auto"
              pt={{ base: "0", sm: "25px" }}
              px={{ base: "0", sm: "40px" }}
              pb={{ base: "35px", sm: "10px" }}
              my="25px"
              borderLeft={{ base: "none", sm: "solid 1px gray" }}
              borderBottom={{ base: "solid 1px gray", sm: "none" }}
              _hover={{
                textDecoration: "none",
              }}
            >
              {grid.imageUrl ? <Image src={`${grid.imageUrl}`} /> : ""}

              <Box
                mt="10px"
                color="#626669"
                fontSize={18}
                fontWeight="bold"
                textAlign={"center"}
              >
                <Flex flexDirection={"column"}>
                  {/* {grid.linkList.map((type, index) => (
                    <Link
                      href={`/${type}`}
                      key={index}
                      _hover={{
                        color: "#ef483e",
                      }}
                    >
                      {type}
                    </Link>
                  ))} */}
                </Flex>
              </Box>
            </Link>
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
}
