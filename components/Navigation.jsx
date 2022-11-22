import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.TopNavSlice} TopNavSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TopNavSlice>} TopNavProps
 * @param { TopNavProps }
 */

import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
export function Navigation({ navigation, settings }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>

      <Flex pt="2px" pb="10px" bg={'#4c4f51'} alignItems={'center'} justifyContent={'end'}
        flexDirection={{ base: "column", md: "row" }}>
        <Box>
          {navigation?.data?.slices.map((slice) => {
            return (
              <Flex key={slice.id} >

                <Breadcrumb
                  fontSize={'16px'}
                  color={'#fff'}
                  as={'nav'}>
                  {slice.items.length > 0 && (
                    <BreadcrumbItem
                      flexDirection={{ base: "column", sm: "row" }}
                      pb={{base:"5px", sm:"unset"}}
                      >
                      {slice.items.map((item, i) => {
                        return (
                          <PrismicLink field={item.contactlink} key={i}>
                            <Box className="item">
                              {i != 0 && <Text as="span" color="#ef483e" px="2"  display={{base:"none", sm:"unset"}}>/</Text>}
                              <PrismicText field={item.contact_details} />
                            </Box>
                          </PrismicLink>
                        )
                      })
                      }
                    </BreadcrumbItem>
                  )}

                </Breadcrumb>

              </Flex>
            )
          })}
        </Box>
        <Box>
          {navigation?.data?.slices.map((slice) => {
            return (
              <Flex key={slice.id}>

                <Breadcrumb
                  fontSize={'16px'}
                  color={'#000'}
                  as={'nav'}
                  >
                  {slice.items.length == 3 && (
                    <BreadcrumbItem >
                      <Button bg={'#ff4438'} ml={'20px'} mr={'20px'} color={'#fff'} borderRadius={'0'}>
                        <PrismicLink document={slice.primary.button_link}>
                          <PrismicText field={slice.primary.button_text} />
                        </PrismicLink>
                      </Button>
                    </BreadcrumbItem>
                  )}

                </Breadcrumb>
              </Flex>
            )
          })}
        </Box>
      </Flex>



      <Box bg={'#2c2e35'} px={6}>
        <Flex justifyContent="space-between" alignItems="center">
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} >
            <Flex justifyContent={'end'}>
              <Box
                h={{
                  base: '25%',
                  md: '100%',
                  sm: '50%'
                }}
                w={{
                  base: '25%',
                  md: '100%',
                  sm: '50%'
                }}>
                <PrismicLink href="/">
                  {prismicH.isFilled.image(settings?.data?.logo) && (
                    <PrismicNextImage field={settings.data.logo} />
                  )}
                </PrismicLink>
              </Box>
            </Flex>
          </HStack>
          <Box
            alignItems={'center'}
            display={{ base: 'none', md: 'flex' }}
            color="#fff">
            {/* Renders top-level links. */}
            {navigation?.data.slices.map((slice, i) => {
              return (
                <Menu key={slice.id}>
                  <PrismicLink field={slice.primary.link}>
                    <MenuButton className="item">
                      {i != 1 && <Text as="span" color="#ef483e" px="2">/</Text>}
                      <PrismicText field={slice.primary.name} />
                    </MenuButton>
                  </PrismicLink>
                  {/* Renders child links, if present. */}
                  {slice.items.length > 0 && (
                    <MenuList color="#000">
                      {slice.items.map((item, i) => {
                        return (
                          <MenuItem key={i}>
                            <PrismicLink field={item.link} >
                              <PrismicText field={item.name} />
                            </PrismicLink>
                          </MenuItem>
                        )
                      })}
                    </MenuList>

                  )}
                </Menu>
              )
            })}

          </Box>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} color="#fff">
            <Stack as={'nav'} spacing={4}>
              {navigation?.data.slices.map((slice) => {
                return (
                  <Menu key={slice.id}>
                    <MenuButton >
                      <PrismicLink field={slice.primary.link}>
                        <Box>
                          <PrismicText field={slice.primary.name} />
                        </Box>
                      </PrismicLink>

                    </MenuButton>
                    {/* Renders child links, if present. */}
                    {slice.items.length > 0 && (
                      <MenuList color="#000">
                        {slice.items.map((item, i) => {
                          return (
                            <MenuItem key={i}>
                              <PrismicLink field={item.link} >
                                <PrismicText field={item.name} />
                              </PrismicLink>
                            </MenuItem>
                          )
                        })}
                      </MenuList>

                    )}
                  </Menu>
                )
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}