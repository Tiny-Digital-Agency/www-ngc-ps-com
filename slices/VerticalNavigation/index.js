import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Box,
  Flex,
  Button,
  Text,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'

const VerticalNavigation = ({ slice }) => (
  <section>
    <Flex justifyContent={"center"} bg={"#e5e1dd"}>
      <Tabs defaultIndex={0} w={{ base: "100%", lg: "80%" }} m="auto" >
        <Flex display="flex" direction={{ base: "column", lg: "row" }} justifyContent={"center"} w={{ base: "100%", lg: "80%" }} margin={"auto"}>
          <Box width={{ base: "100%", lg: "45%" }} bg="#e5e1dd">
            <TabList display={"block"} >
              {
                slice?.items?.map((item, i) =>
                  <Tab key={i}
                    maxW="100%"
                    w={{ base: "60%", lg: "60%" }}
                    bg={"#ef483e"}
                    margin="15px auto"
                    p="5px 0"
                    color={"#fff"}
                    fontSize="14px"
                    _focus={{
                      bg: '#4d8b3f',
                      transform: 'scale(0.98)',
                      borderColor: '#bec3c9',
                      color: '#fff'
                    }}>
                    <Box display="flex" direction="row" alignItems="center">
                      {item.navlist}
                      <ChevronRightIcon />
                    </Box>
                  </Tab>
                )
              }
            </TabList>
          </Box>
          <Box width={{ base: "100%", lg: "55%" }}
            bg="#fff"
            pt="10px"
            lineHeight="2"
          >
            <Box color="#4d8b3f" fontWeight={600} ml="40px" mt="20px" fontSize={18}>
              <PrismicRichText field={slice.primary.titlerightcontent} />
            </Box>
            <TabPanels >
              <TabPanels>
                {
                  slice?.items?.map((item, i) =>
                    <TabPanel
                      ml="25px"
                      color="#585c5e"
                      fontSize={20}
                      fontWeight={400} className="resource-link">
                      <PrismicRichText field={item.navcontent} />
                    </TabPanel>
                  )
                }
              </TabPanels>
            </TabPanels>
          </Box>
        </Flex>
      </Tabs>
    </Flex >
  </section >
)

export default VerticalNavigation