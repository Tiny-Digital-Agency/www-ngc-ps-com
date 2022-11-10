import { Flex, VStack, Box, useBreakpointValue, Link } from "@chakra-ui/react";

const Cards = [
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Product Solutions",
    url: "asd",
    id: 1,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Product Solutions",
    url: "asdf",
    id: 2,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Product Solutions",
    url: "asdfg",
    id: 3,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Product Solutions",
    url: "asdfgh",
    id: 4,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Product Solutions",
    url: "asdfghj",
    id: 5,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Product Solutions",
    url: "asdfghjk",
    id: 6,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Product Solutions",
    url: "asdfghjkl",
    id: 7,
  },
];

export default function CardsSection() {
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
          justify={"space-evenly"}
          my="50px"
        >
          {Cards.map((card) => (
            <Link
              key={card.id}
              href={`/${card.url}`}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              w={{ sm: "320px", base: "250px" }}
              h={{ sm: "320px", base: "250px" }}
              my="25px"
              mx={{ base: "5px" }}
              backgroundImage={card.imageUrl}
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
              _hover={{
                textDecoration: "none",
              }}
            >
              <Box
                mt="1"
                color="#fff"
                fontSize={32}
                fontWeight="bold"
                textAlign={"center"}
                borderBottom={"4px solid transparent"}
                _hover={{
                  borderBottom: "4px solid #ef483e",
                }}
              >
                {card.title}
              </Box>
            </Link>
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
}
