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
          <ListItem>ABSA certified manufacturer</ListItem>
          <ListItem>Reduce downtime</ListItem>
          <ListItem>Increase system life cycle</ListItem>
          <ListItem>Increase speed of delivery</ListItem>
          <ListItem>Maximize safety and protection</ListItem>
          <ListItem>Minimize the environmental footprint</ListItem>
          <ListItem>Our service continues long after the sales cycle ends</ListItem>
        </UnorderedList>
        <Box display={'block'}>
          <Flex justifyContent={'space-between'} textAlign={"center"} mt={10} spacing={6}>
            <figure>
              <Image
                src="/responsive.png"
                alt=""
                width={150}
                height={150}
              />
              <figcaption>Responsive</figcaption>
            </figure>
            <figure>
              <Image
                src="/best-document.png"
                alt=""
                width={150}
                height={150}
              />
              <figcaption>Best Documentation</figcaption>
            </figure>
            <figure>
              <Image
                src="/deliver.png"
                alt=""
                width={150}
                height={150}
              />
              <figcaption>Empowered to Deliver</figcaption>
            </figure>
            <figure>
              <Image
                src="/success.png"
                alt=""
                width={150}
                height={150}
              />
              <figcaption>Sets You Up for Success</figcaption>
            </figure>
            <figure>
              <Image
                src="/service.png"
                alt=""
                width={150}
                height={150}
              />
              <figcaption>Service Oriented</figcaption>
            </figure>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}