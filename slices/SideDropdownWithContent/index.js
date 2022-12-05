import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  GridItem,
  Flex
} from "@chakra-ui/react";

const SideDropdownWithContent = ({ slice }) => (
  <section>
    <Box padding="0" w="100%">
      <Tabs
        w={{ base: "full", lg: "62em", xl: "65em" }}
        m="auto">
        <>
          <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(7, 1fr)' }} templateRows={{ base: 'repeat(2, 1fr)', lg: "none" }}>
            <GridItem w='100%' colSpan={{ base: "1", lg: "3" }} color="#fff">
              <TabList
                display="flex"
                flexDirection="column"
                p="50px 35px"
                w='100%'
                bgColor="#4d8b3f"
                borderRight={{ base: "none", lg: "3px solid #ef483e" }}
              >
                {
                  slice?.items?.map((item, i) =>
                    <>
                      {item.nest ?
                        <>
                          <Box fontSize="20px">
                            <PrismicRichText field={item.parent_menu_items} />
                          </Box>
                          <Tab w="fit-content"
                            ml="30px"
                            mb="5px"
                            p="0"
                            fontSize="20px"
                            borderBottom="2px solid #4d8b3f"
                            _selected={{
                              borderBottom: "2px solid #ef483e"
                            }}
                            _active={{
                              background: "#4d8b3f"
                            }}>
                            <PrismicRichText field={item.parent_menu_items_content} />
                          </Tab>
                        </>
                        :
                        <>
                          <Tab w="fit-content"
                            ml="0"
                            mb="5px"
                            p="0"
                            fontSize="20px"
                            borderBottom="2px solid #4d8b3f"
                            _selected={{
                              borderBottom: "2px solid #ef483e"
                            }}
                            _active={{
                              background: "#4d8b3f"
                            }}>
                            <PrismicRichText field={item.parent_menu_items_content} />
                          </Tab>
                        </>
                      }
                    </>
                  )
                }
              </TabList>
            </GridItem>

            <GridItem w='100%' bgColor="#e5e1dd" colSpan={{ base: "1", lg: "4" }} >
              <Box
                m="50px 35px 0"
                color="#4d8b3f"
                fontSize="18px"
                fontWeight="700"
              >
                PRODUCT SOLUTIONS
              </Box>
              <TabPanels>
                {
                  slice?.items?.map((item, i) =>
                    <TabPanel p="0">
                      <Tabs display="flex" flexDirection="row">
                        <TabList
                          display="flex"
                          flexDirection="column"
                          w="100%"
                          h="100%"
                          m="0 19px 0"
                        >
                          <Tab borderColor={"#e5e1dd !important"}>
                            <Flex
                              w="100%"
                              color="#585c5e"
                              alignItems="flex-start"
                              _hover={{
                                color: "#ef483e",
                              }}>
                              <PrismicRichText field={item.child_menu_items} />
                            </Flex>
                          </Tab>
                        </TabList>
                      </Tabs>
                    </TabPanel>
                  )
                }
              </TabPanels>
            </GridItem>
          </Grid>
        </>
      </Tabs>
    </Box>
  </section >
)

export default SideDropdownWithContent