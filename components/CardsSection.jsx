import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Box,
  useBreakpointValue,
  extendTheme,
} from "@chakra-ui/react";

const Cards = [
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Product Solutions",
    id: 1,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Product Solutions",
    id: 2,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Product Solutions",
    id: 3,
  },
  {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Product Solutions",
    id: 4,
  },
];

export default function CardsSection() {
  return (
    <Flex w={"full"} h={"100vh"}>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        direction="row"
      >
        <Flex
          w={"6xl"}
          flexWrap="wrap"
          direction="row"
          gap="30px"
          justify={"flex-start"}
        >
          {Cards.map((card) => (
            <Box
              display="flex"
              alignItems="center"
              backgroundImage={card.imageUrl}
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
              w="320px"
              h="320px"
              key={card.id}
            >
              <Box
                mt="1"
                color="#fff"
                fontSize={32}
                fontWeight="bold"
                textAlign={"center"}
                p="15px"
                _hover={{
                  textDecoration: "underline",
                  textDecorationColor: "#ef483e",
                }}
              >
                {card.title}
              </Box>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
}
