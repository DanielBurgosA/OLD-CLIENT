import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Menu,
  Icon,
  Box,
  Flex,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";

import { Link, useLocation } from "react-router-dom";
import ToggleColorMode from "../../modeColor/toggleColorMode";
export default function HamburgerMenu() {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const btnRef = React.useRef();
  const location = useLocation();
  return (
    <div>
      <Flex justifyContent="flex-end" alignItems="center">
        <Box display={{ base: "block", md: "none" }}>
          <Button onClick={onToggle}>
            <Icon as={HamburgerIcon} />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menú</DrawerHeader>

              <DrawerBody>
                <Box display={{ base: "block", md: "none" }}>
                  <Menu display={{ base: "block", md: "block" }}>
                    <div>
                      {location.pathname !== "/home" && (
                        <Link to={"/home"}>
                          <Button
                            colorScheme="teal"
                            variant="ghost"
                            marginRight="1rem"
                          >
                            HOME
                          </Button>
                        </Link>
                      )}
                    </div>
                    <div>
                      {location.pathname !== "/projects" && (
                        <Link to={"/projects"}>
                          <Button
                            colorScheme="teal"
                            variant="ghost"
                            marginRight="1rem"
                          >
                            Projects
                          </Button>
                        </Link>
                      )}
                    </div>
                    <div>
                      {location.pathname !== "/create" && (
                        <Link to={"/create"}>
                          <Button
                            colorScheme="teal"
                            variant="ghost"
                            marginRight="1rem"
                          >
                            Create Project
                          </Button>
                        </Link>
                      )}
                    </div>
                    <div>
                      {location.pathname !== "/home/aboutUs" && (
                        <Link to={"/home/aboutUs"}>
                          <Button
                            colorScheme="teal"
                            variant="ghost"
                            marginRight="1rem"
                          >
                            About Us
                          </Button>
                        </Link>
                      )}
                    </div>
                  </Menu>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </div>
  );
}
