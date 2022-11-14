import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image

} from '@chakra-ui/react';
/**
 * @typedef {import("@prismicio/client").Content.VerticalNavigationSlice} VerticalNavigationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VerticalNavigationSlice>} VerticalNavigationProps
 * @param { VerticalNavigationProps }
 */
const VerticalNavigation = ({ slice }) => (
  <section>
    <Tabs>
      <TabList>

      </TabList>

      <TabPanels>
        <TabPanel>
          {
            slice?.items?.map((item, i) =>
              <PrismicRichText field={item.navcontent} />
            )
          }
        </TabPanel>
      </TabPanels>
    </Tabs>


    <Tabs defaultIndex={1}>
  <TabPanels>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://www.freepnglogos.com/uploads/naruto-png/image-kunai-naruto-fictional-battle-omniverse-23.png'
      />
    </TabPanel>
    <TabPanel>
      <Image
        boxSize='200px'
        fit='cover'
        src='https://images5.alphacoders.com/810/thumbbig-810547.webp'
      />
    </TabPanel>
  </TabPanels>
  <TabList>
      {
        slice?.items?.map((item, i) =>
    <Tab key={i}>
            <span>{item.navlist}</span>
        </Tab>
          )
        }
    <Tab>Sasuke</Tab>
  </TabList>
</Tabs>

  </section>
)

export default VerticalNavigation