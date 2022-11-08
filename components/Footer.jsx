import {
    Box,
    Container,
    Stack,
    Text,
    Flex,
    Image,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Link,

} from '@chakra-ui/react';

const Links = ['HOME', 'PRODUCTS', 'INDUSTRIES', 'RESOURCES', 'PRIVACY', 'CONTACT', 'UPTIME'];
const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}

        _hover={{
            textDecoration: 'none',
            bg: '#ef483e',
        }}
        href={'#'}>
        {children}
    </Link>
);
const Logo = () => {
    return (
        <Flex justifyContent={'center'}>
            <Box h={{ base: '25%', md: '100%', sm: '50%' }} w={{ base: '25%', md: '100%', sm: '50%' }}>
                <Image src='/NGC-logo.webp' alt='ngc-logo' />
            </Box>
        </Flex>
    );
};

export default function SmallWithLogoLeft() {
    return (
        <Box
            bg={'#000000'}
            color={'#fff'}>
            <Container
                as={Stack}
                maxW={'10xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Logo />
                <Box display="block" justify-content="center">
                    <Text textAlign={"center"}>3160 118 Avenue SE, Calgary, Alberta Canada T2Z 3X1</Text>
                    <Breadcrumb color={'#fff'}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='tel:(403) 295-3114'>Main: (403) 295-3114</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='tel:(888) 770-8899'>Toll Free: (888) 770-8899</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='mailto:sales@ngc-ps.com'>sales@ngc-ps.com</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Box>
                <Box color={'#48823b'}>
                    {Links.map((link) => (
                        <Stack display={'block'} listStyleType={"none"} key={link} >
                            <NavLink color={"#48823b"}>{link}</NavLink>
                        </Stack>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}