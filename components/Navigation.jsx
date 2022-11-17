import { PrismicLink, PrismicText } from '@prismicio/react'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Stack,
} from '@chakra-ui/react';
export function Navigation({ navigation }) {
  return (
    <Box>
    
      <Box>
      
        {/* Renders top-level links. */}
        {navigation?.data.slices.map((slice) => {
          return (
            <Box key={slice.id}>
              <PrismicLink field={slice.primary.link}>
                <PrismicText field={slice.primary.name} />
              </PrismicLink>

              {/* Renders child links, if present. */}
              {slice.items.length > 0 && (
                <Box>
                  {slice.items.map((item, i) => {
                    return (
                      <Box key={i}>
                        <PrismicLink field={item.link}>
                          <PrismicText field={item.name} />
                        </PrismicLink>
                      </Box>
                    )
                  })}
                </Box>
              )}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}