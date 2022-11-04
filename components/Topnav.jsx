import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Button,
  } from '@chakra-ui/react'
const Topnav = () => {
    return ( 
        <Flex h={16} bg={'#4c4f51'} alignItems={'center'} justifyContent={'end'}>
            <Breadcrumb color={'#fff'}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Email: ngcsales@ngc-ps.com</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Main: (403) 295-3114</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Toll Free: (888) 770-8899</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Button bg={'#ff4438'} ml={'20px'} mr={'20px'} color={'#fff'} borderRadius={'0'}>CONTACT</Button>
        </Flex>
     );
}
 
export default Topnav;