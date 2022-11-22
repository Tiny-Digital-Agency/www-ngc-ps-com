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
    Breadcrumb,
    BreadcrumbItem,
    Button,
    HStack,
    Text
} from '@chakra-ui/react';

export function Footer({ navigation, settings }) {
    return (
        <Box>
            <Box bg={'#2c2e35'} px={6}>
                <Flex justifyContent="space-between" alignItems="center">
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
                    <Flex pt="2px" pb="10px" bg={'#2c2e35'} alignItems={'center'} justifyContent={'end'}>
                        <Box>
                            <Box>
                                {navigation?.data?.slices.map((slice) => {
                                    return (
                                        <Flex key={slice.id} justifyContent="center">
                                            <Box
                                                fontSize={'16px'}
                                                color={'#fff'}
                                                as={'nav'}>
                                                {slice.items.length == 3 && (
                                                    <Box>
                                                        <PrismicText field={slice.primary.address} />
                                                    </Box>
                                                )}
                                            </Box>
                                        </Flex>
                                    )
                                })}
                            </Box>
                            {navigation?.data?.slices.map((slice) => {
                                return (
                                    <Flex key={slice.id}>

                                        <Breadcrumb
                                            fontSize={'16px'}
                                            color={'#fff'}
                                            as={'nav'}>

                                            {slice.items.length > 0 && (

                                                <BreadcrumbItem>
                                                    {slice.items.map((item, i) => {
                                                        return (
                                                            <PrismicLink field={item.contactlink} key={i}>
                                                                <Box className="item">
                                                                    {i != 0 && <Text as="span" color="#ef483e" px="2">/</Text>}
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
                        display={{ base: 'none', md: 'flex' }}
                        flexDirection="column"
                        fontWeight={"500"}
                    >
                        {/* Renders top-level links. */}
                        {navigation?.data.slices.map((slice, i) => {
                            return (
                                <Flex key={slice.id}
                                    flexDirection="column"
                                    color={'#48823b'}
                                >
                                    <PrismicLink field={slice.primary.link}>
                                        <Flex className="item" color={"#48823b"}>

                                            <PrismicText field={slice.primary.name} />
                                        </Flex>
                                    </PrismicLink>
                                    {/* Renders child links, if present. */}
                                </Flex>
                            )
                        })}

                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}