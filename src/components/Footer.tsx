import * as React from 'react'
import { ReactNode } from 'react';
import { Img } from '@chakra-ui/image';
import { BsGithub } from 'react-icons/bs'
import {
  Button,
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';


const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
   
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW="7xl" paddingTop="5rem" px='5'>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'start'}>
            <ListHeader>Links</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'start'}>
            <ListHeader>Community</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>

          <Stack align={'start'}>
            <ListHeader>Analytics</ListHeader>
            <Link href={'https://app.splitbee.io/public/kryptokrona.org'}><Img src="https://chakra-templates.dev/_next/image?url=https%3A%2F%2Fsplitbee.io%2Fsplitbee-badge.svg&w=256&q=75"/></Link>
          </Stack>

          <Stack align={'start'}>
            <ListHeader>Edit Page</ListHeader>
            <Link href="https://github.com/kryptokrona"><Button colorScheme="purple"><BsGithub size="1.2rem"/><Text padding="3">Github</Text></Button></Link>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        marginTop="2rem"
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'7xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ sm: 'center' }}>
          <Text>© 2021 Kryptokrona</Text>
          <Stack direction={'row'} spacing={1}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/kryptokrona'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'TGithub'} href={'https://github.com/kryptokrona'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Discord'} href={'https://chat.kryptokrona.se'}>
              <FaDiscord />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}