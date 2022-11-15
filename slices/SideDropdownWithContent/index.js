import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

/**
 * @typedef {import("@prismicio/client").Content.SideDropdownWithContentSlice} SideDropdownWithContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SideDropdownWithContentSlice>} SideDropdownWithContentProps
 * @param { SideDropdownWithContentProps }
 */
const SideDropdownWithContent = ({ slice }) => (
  <section>
    <Box padding={0} w="100%">
      <Tabs display="flex" w="70%" m="auto">
        <>
          <TabList
            display="flex"
            flexDirection={"column"}
            bgColor={"#4d8b3f"}
          >
            {
              slice?.items?.map((item, i) =>
                <Tab w={"fit-content"}
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
                  }}><PrismicRichText field={item.parent_menu_items} />
                </Tab>
              )
            }
          </TabList>

          <TabPanels>
            <TabPanel
              p="0"
            >
              <Tabs display={"flex"} flexDirection={"row"}>
                <TabList
                  display={"flex"}
                  flexDirection={"column"}
                  bgColor={"#4d8b3f"}
                  borderRight={"3px solid #ef483e"}
                >
                  {
                    slice?.items?.map((item, i) =>
                      <Tab>
                        <PrismicRichText field={item.parent_menu_items_content} />
                      </Tab>
                    )
                  }
                </TabList>

                <TabPanels bgColor={"#e5e1dd"}>
                  {
                    slice?.items?.map((item, i) =>
                      <TabPanel>
                        <PrismicRichText field={item.child_menu_items} />
                      </TabPanel>
                    )
                  }
                </TabPanels>
              </Tabs>
            </TabPanel>

            <TabPanel>normal</TabPanel>
          </TabPanels></>
      </Tabs>
    </Box>
    <style jsx>{`
        // section {
        //   max-width: 600px;
        //   margin: 4em auto;
        //   text-align: center;
        // }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section >
)

export default SideDropdownWithContent