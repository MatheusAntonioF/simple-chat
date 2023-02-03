import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Center,
  Heading,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md">Simple chat</Heading>

        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar
                  size="sm"
                  src="https://avatars.dicebear.com/api/male/username.svg"
                />
              </MenuButton>
              <MenuList alignItems="center">
                <br />
                <Center>
                  <Avatar
                    size="2xl"
                    src="https://avatars.dicebear.com/api/male/username.svg"
                  />
                </Center>

                <MenuDivider />
                <MenuItem>
                  <Link as={RouterLink} w="full" to="/me">
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
