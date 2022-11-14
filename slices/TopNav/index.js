import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
/**
 * @typedef {import("@prismicio/client").Content.TopNavSlice} TopNavSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TopNavSlice>} TopNavProps
 * @param { TopNavProps }
 */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Flex,
  Button,
} from '@chakra-ui/react'
const TopNav = ({ slice }) => (
  <section>
    <Flex h={16} bg={'#4c4f51'} alignItems={'center'} justifyContent={'end'}>
      <Breadcrumb
        fontSize={'16px'}
        color={'#fff'}
        as={'nav'}
        spacing={6}>
        <BreadcrumbItem >
          {
            slice?.items?.map((item, i) =>
              <PrismicLink field={item.link} key={i}>
            <Box 
            _before={{
              content: `"/"`,
              padding: '0 10px',
              color: '#ef483e'
            }}>{item.contact_details}
            </Box>
              </PrismicLink>

            )
          }
        </BreadcrumbItem>
      </Breadcrumb>
      <Button bg={'#ff4438'} ml={'20px'} mr={'20px'} color={'#fff'} borderRadius={'0'}>
        <PrismicLink document={slice.primary.button}>Contact</PrismicLink>
      </Button>
    </Flex>
  </section>
)

export default TopNav

