// import {
//   Box,
//   Flex,
//   HStack,
//   Link,
//   IconButton,
//   useDisclosure,
//   useColorModeValue,
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   Image,
//   Stack,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Links = [
//   {
//     title: 'HOME',
//     id: 1
//   },
//   {
//     title: 'PRODUCTS',
//     id: 2
//   },
//   {
//     title: 'INDUCTRIES',
//     id: 3
//   },
//   {
//     title: 'RESOURCES',
//     id: 4
//   }
// ];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

// export default function Simple() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Box bg={'#2c2e35'} px={6}>
//         <Flex h={{ base: '20', md: '40', sm: '20' }} alignItems={'center'} justifyContent={'space-between'}>
//           <IconButton
//             size={'md'}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={'Open Menu'}
//             display={{ md: 'none' }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <HStack spacing={8} alignItems={'center'} >
//             <Flex justifyContent={'end'}>
//               <Box
//                 h={{
//                   base: '25%',
//                   md: '100%',
//                   sm: '50%'
//                 }}
//                 w={{
//                   base: '25%',
//                   md: '100%',
//                   sm: '50%'
//                 }}>
//                 <Image src='/NGC-logo.webp' alt='ngc-logo' />
//               </Box>
//             </Flex>
//           </HStack>
//           <Flex alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
//             <Breadcrumb
//               fontSize={'16px'}
//               color={'#fff'}
//               as={'nav'}
//               spacing={6}
//             >
//               {Links.map((link) => (
//                 <BreadcrumbItem key={link.id}>
//                   <BreadcrumbLink>{link.title}</BreadcrumbLink>
//                 </BreadcrumbItem>
//               ))}
//             </Breadcrumb>
//           </Flex>
//           {isOpen ? (
//             <Box pb={4} display={{ md: 'none' }}>
//               <Stack as={'nav'} spacing={4}>
//                 {Links.map((link) => (
//                   <NavLink key={link.id}>{link.title}</NavLink>
//                 ))}
//               </Stack>
//             </Box>
//           ) : null}
//         </Flex>
//       </Box>
//     </>
//   );
// }
