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
/**
 * @typedef {import("@prismicio/client").Content.VerticalNavigationSlice} VerticalNavigationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VerticalNavigationSlice>} VerticalNavigationProps
 * @param { VerticalNavigationProps }
 */
const VerticalNavigation = ({ slice }) => (
  <section>
    <Flex justifyContent={"center"} bg={"#e5e1dd"}>
      <Tabs defaultIndex={0}  >
        <Flex justifyContent={"space-between"} display={{ base: "block", sm: "block", md: "flex", xl: "flex" }}>
          <Box width={{ base: "100%", sm: "400px" }} bg="#e5e1dd">
            <Flex justifyContent={"center"}>
              <TabList display={"block"} >
                {
                  slice?.items?.map((item, i) =>
                    <Tab key={i} maxW="100%" w={{ base: "250px", sm: "300px" }} bg={"#ef483e"} margin={5} color={"#fff"} fontSize="14px"
                      _focus={{
                        bg: '#4d8b3f',
                        transform: 'scale(0.98)',
                        borderColor: '#bec3c9',
                        color: '#fff'
                      }}>
                      <Box>
                        {item.navlist}
                      </Box>
                    </Tab>
                  )
                }
              </TabList>
            </Flex>
          </Box>
          <Box
            width={{
              base: "100%",
              sm: "500px"
            }}
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
    </Flex>
  </section>
)

export default VerticalNavigation