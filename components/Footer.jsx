import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import {
    Box,
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    HStack,
    Text
} from '@chakra-ui/react';

export function Footer({ footer, settings }) {
    return (
        <Box>
            <Box bg={'#000'} px={6}>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection={{ base: "column", md: "row" }}
                >
                    <HStack spacing={8} alignItems={'center'} >
                        <Flex justifyContent={'end'}>
                            <Box
                                h="100%"
                                w="100%">
                                <PrismicLink href="/">
                                    {prismicH.isFilled.image(settings?.data?.logo) && (
                                        <PrismicNextImage field={settings.data.logo} />
                                    )}
                                </PrismicLink>
                            </Box>
                        </Flex>
                    </HStack>
                    <Flex pt="2px" pb="10px" bg={'#000'} alignItems={'center'} justifyContent={'center'}>
                        <Box>
                            <Box>
                                {footer?.data?.slices.map((slice) => {
                                    return (
                                        <Flex key={slice.id} justifyContent="center">
                                            <Box
                                                fontSize={'16px'}
                                                color={'#fff'}
                                                as={'nav'}
                                                _active={{
                                                    color: "#000"
                                                }}
                                            >
                                                {slice.items.length == 3 && (
                                                    <Flex justifyContent="center" textAlign="center">
                                                        <PrismicText field={slice.primary.address} />
                                                    </Flex>
                                                )}
                                            </Box>
                                        </Flex>
                                    )
                                })}
                            </Box>
                            {footer?.data?.slices.map((slice) => {
                                return (
                                    <Flex key={slice.id} justifyContent="center">
                                        <Breadcrumb
                                            fontSize={'16px'}
                                            color={'#fff'}
                                            as={'nav'}
                                        >
                                            {slice.items.length > 0 && (
                                                <BreadcrumbItem
                                                    flexDirection={{ base: "column", xl: "row" }}
                                                >
                                                    {slice.items.map((item, i) => {
                                                        return (
                                                            <PrismicLink field={item.contactlink} key={i}>
                                                                <Box className="item">
                                                                    {i != 0 && <Text as="span" color="#ef483e" px="2" display={{ base: "none", xl: "unset" }}>/</Text>}
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
                    </Flex>
                    <Flex
                        color={'#48823b'}
                        alignItems={'end'}
                        justifyContent="end"
                        display={{ base: 'none', md: 'unset' }}
                        flexDirection="column"
                        fontWeight={"500"}
                    >
                        {/* Renders top-level links. */}
                        {footer?.data.slices.map((slice, i) => {
                            return (
                                <Flex key={slice.id}
                                    flexDirection="column"
                                    color={'#48823b'}>
                                    <PrismicLink field={slice.primary.link}>
                                        <Flex className="item" color={"#48823b"}>
                                            <PrismicText field={slice.primary.name} />
                                        </Flex>
                                    </PrismicLink>
                                </Flex>
                            )
                        })}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}