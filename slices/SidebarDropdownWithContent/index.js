import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {
  Stack,
  Flex,
  Link,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  Center,
  border,
  Text
} from "@chakra-ui/react";

const SidebarDropdownWithContent = ({ slice }) => (
  <>
    <Center
      w={"full"}
    >
      <Tabs orientation="vertical" w={"60%"} direction="row">
        <TabList p="40px 0 30px 0" w={"71%"} backgroundColor={"#4d8b3f"} borderRight={"3px solid #ef483e;"}>
          {slice?.items?.map((item, i) =>
            <Tab textColor={"#fff"}
              w={"fit-content"}
              ml="30px"
              mb="5px"
              p="0"
              fontSize={"20px"}
              borderBottom={"2px solid #4d8b3f"}
              _selected={{
                borderBottom: "2px solid #ef483e"
              }}
              _active={{
                background: "#4d8b3f"
              }}
            >
              {item.turnintomenu ?
                <Tabs>
                  <TabList>
                    <Tab>
                      <PrismicRichText field={item.title} />
                    </Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <PrismicRichText field={item.titlemenu} />
                    </TabPanel>
                  </TabPanels>
                </Tabs>
                : <PrismicRichText field={item.title} />
              }
            </Tab>
          )}
        </TabList>


        <TabPanels p="25px 0 30px 0" backgroundColor={"#e5e1dd"}>
          {slice?.items?.map((item, i) => <TabPanel ml="60px">
            <Text color="#4d8b3f" size="18px" fontWeight="bold">PRODUCT SOLUTIONS</Text>
            <PrismicRichText field={item.content} />
          </TabPanel>
          )}
        </TabPanels>

      </Tabs>
    </Center>
  </>

)

export default SidebarDropdownWithContent