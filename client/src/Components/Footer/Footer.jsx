import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import image from "../../Utils/image/3.jpg";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <div>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
            spacing={8}
          >
            <Stack spacing={6}>
              <Box>
                <img src={image} width="100" height="100" />
              </Box>
              <Text fontSize={"sm"}>
                © Dirección Nacional de Relaciones con Organizaciones de la
                Sociedad
              </Text>
              <Stack direction={"row"} spacing={6}>
                <SocialButton>
                  <Link
                    label={"facebook"}
                    href="https://www.facebook.com/profile.php?id=100089881240949&is_tour_dismissed=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    isExternal
                  >
                    <FaFacebook />
                  </Link>
                </SocialButton>
                <SocialButton>
                  <Link
                    label={"YouTube"}
                    href="https://www.youtube.com/@linkingfuture/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    isExternal
                  >
                    <FaYoutube />
                  </Link>
                </SocialButton>
                <SocialButton>
                  <Link
                    label={"Instagram"}
                    href="https://www.instagram.com/futurelinking19/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    isExternal
                  >
                    <FaInstagram />
                  </Link>
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link href={"#"}>About us</Link>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Contact us</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Testimonials</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Legal</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Satus</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={"row"}>
                <Input
                  placeholder={"Your email address"}
                  bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300",
                  }}
                />
                <IconButton
                  bg={useColorModeValue("green.400", "green.800")}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: "green.600",
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  );
}
