import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

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
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
export function Navigation({ navigation, settings }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex
        pt="2px"
        pb="10px"
        bg={"#4c4f51"}
        alignItems={"center"}
        justifyContent={"end"}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box>
          {navigation?.data?.slices.map((slice) => {
            return (
              <Flex key={slice.id}>
                <Breadcrumb fontSize={"16px"} color={"#fff"} as={"nav"}>
                  {slice.items.length > 0 && (
                    <BreadcrumbItem
                      flexDirection={{ base: "column", sm: "row" }}
                      pb={{ base: "5px", sm: "unset" }}
                    >
                      {slice.items.map((item, i) => {
                        return (
                          <PrismicLink field={item.contactlink} key={i}>
                            <Box className="item">
                              {i != 0 && (
                                <Text
                                  as="span"
                                  color="#ef483e"
                                  px="2"
                                  display={{ base: "none", sm: "unset" }}
                                >
                                  /
                                </Text>
                              )}
                              <PrismicText field={item.contact_details} />
                            </Box>
                          </PrismicLink>
                        );
                      })}
                    </BreadcrumbItem>
                  )}
                </Breadcrumb>
              </Flex>
            );
          })}
        </Box>
        <Box>
          {navigation?.data?.slices.map((slice) => {
            return (
              <Flex key={slice.id}>
                <Breadcrumb fontSize={"16px"} color={"#000"} as={"nav"}>
                  {slice.items.length == 3 && (
                    <BreadcrumbItem>
                      <Button
                        bg={"#ff4438"}
                        ml={"20px"}
                        mr={"20px"}
                        color={"#fff"}
                        borderRadius={"0"}
                      >
                        <PrismicLink document={slice.primary.button_link}>
                          <PrismicText field={slice.primary.button_text} />
                        </PrismicLink>
                      </Button>
                    </BreadcrumbItem>
                  )}
                </Breadcrumb>
              </Flex>
            );
          })}
        </Box>
      </Flex>

      <Box bg={"#2c2e35"} px={6} py="15px">
        <Flex
          justifyContent="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          alignItems="center"
          h={{ base: "180px", md: "90px", lg: "auto" }}
        >
          <Box
            display={{ base: "flex", md: "none" }}
            w="full"
            justifyContent={{ base: "flex-end", md: "center" }}
          >
            <IconButton
              display={{ md: "none" }}
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              backgroundColor="#5c5c5c"
              onClick={isOpen ? onClose : onOpen}
            />
          </Box>

          <HStack spacing={8} alignItems={"center"}>
            <Flex
              justifyContent={{ base: "center", md: "flex-start", lg: "end" }}
            >
              <Box
                h={{ base: "100%", md: "60%", lg: "100%" }}
                w={{ base: "100%", md: "60%", lg: "100%" }}
              >
                <PrismicLink href="/">
                  {prismicH.isFilled.image(settings?.data?.logo) && (
                    <PrismicNextImage field={settings.data.logo} />
                  )}
                </PrismicLink>
              </Box>
            </Flex>
          </HStack>
          <Box
            alignItems={"center"}
            display={{ base: "none", md: "flex" }}
            color="#fff"
          >
            {/* Renders top-level links. */}
            {navigation?.data.slices.map((slice, i) => {
              return (
                <Menu key={slice.id}>
                  <PrismicLink field={slice.primary.link}>
                    <MenuButton className="item">
                      {i != 1 && (
                        <Text as="span" color="#ef483e" px="2">
                          /
                        </Text>
                      )}

                      <PrismicText field={slice.primary.name} />
                    </MenuButton>
                  </PrismicLink>

                  {/* Renders child links, if present. */}
                  {slice.items.length > 0 && (
                    <MenuList color="#000" textTransform="uppercase">
                      {slice.items.map((item, i) => {
                        return (
                          <MenuItem key={i}>
                            <PrismicLink field={item.link}>
                              <PrismicText field={item.name} />
                            </PrismicLink>
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  )}
                </Menu>
              );
            })}
          </Box>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} color="#fff">
            <Stack as={"nav"} spacing={4} className="menu-items-holder">
              {navigation?.data.slices.map((slice) => {
                return (
                  <Menu key={slice.id}>
                    <MenuButton>
                      <Box className="custom-menu-item">
                        <PrismicLink field={slice.primary.link}>
                          {/* <Box w="fit-content"> */}
                          <PrismicText field={slice.primary.name} />
                          {/* </Box> */}
                        </PrismicLink>
                      </Box>
                    </MenuButton>
                    {/* Renders child links, if present. */}
                    {slice.items.length > 0 && (
                      <MenuList color="#000">
                        {slice.items.map((item, i) => {
                          return (
                            <MenuItem key={i}>
                              <PrismicLink field={item.link}>
                                <PrismicText field={item.name} />
                              </PrismicLink>
                            </MenuItem>
                          );
                        })}
                      </MenuList>
                    )}
                  </Menu>
                );
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
