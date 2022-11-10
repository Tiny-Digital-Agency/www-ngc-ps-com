import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  UnorderedList,
  Image,
  ListItem,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  };
});

export default function GridListWithHeading() {
  return (
    <Box p={6} bg={'#e5e1dd'}>
      <Stack spacing={6} as={Container} maxW={'100vh'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>About Us</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          NGC Product Solutions is the legacy of E & D Pipe and Process Equipment – a 2006 acquisition created from the need for high quality, rapid response, and custom solutions – including onsite installation – for engineering firms, construction companies, and process facilities in the Canadian marketplace.
        </Text>
        <Text color={'gray.600'} fontSize={'xl'}>
          NGC Product Solutions makes, distributes, innovates, and creates the next generation products and solutions for the most challenging environments in construction, process, and fluid handling applications while adhering to the highest quality design standards. “We provide the solutions for all your corrosion and vibration challenges.” NGC’s capabilities, with the support from our vendors, include engineering and design, as well as product solution supply, fabrication and on-site installation.          </Text>
      </Stack>
      <Container maxW={'100vh'} mt={10}>
        <Heading fontSize={'3xl'}>NGC Advantage:</Heading>
        <UnorderedList mt={5} ml={10}>
        </UnorderedList>
        <Box display={'block'}>
          <Flex justifyContent={'space-between'} textAlign={"center"} mt={10} spacing={6}>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}