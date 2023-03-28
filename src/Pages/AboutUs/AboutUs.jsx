import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Image,
  Center,
  Heading,
  Container,
  Text,
  Flex,
  VStack,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link as LinkReact } from "react-router-dom";
import initImage from "../../Utils/pexels-quang-nguyen-vinh-2163950.jpg";
import fowardImage from "../../Utils/pexels-sathyaprabha-rakkimuthu-2315614.jpg";
import style from "../../Components/NavBar/NavBar.module.css";

export default function AboutUs() {
  return (
    <>
      <Box width="100%">
        <Image
          objectFit="fit"
          w="40%"
          height="20rem"
          float="right"
          marginLeft="3rem"
          marginRight="3rem"
          marginTop="5rem"
          borderRadius="15px"
          src={initImage}
        ></Image>
      </Box>

      <Container maxW="70%" mb="30px">
        <Heading my="30px" color="blue.300">
          Who we are?
        </Heading>
        <Text textAlign="justify">
          We are a non-profit NGO (Non-Governmental Organization) that is
          focuses on solving social, environmental and economic problems that
          They affect certain communities and vulnerable groups. We help
          Communities for a better future, our main objective improve the
          quality of life of people living in a a certain area.To achieve this,
          we work in various areas, such as education, health, nutrition,
          housing, access to drinking water, the environment, among others. We
          focus in providing quality education to children and youth in
          communities marginal, providing them with the necessary tools so that
          they can get ahead and have better employment opportunities in the
          future.
        </Text>
      </Container>

      <Flex w="100%" justify="space-around" mt="100px">
        <Box w="35%">
          <Image
            objectFit="none"
            w="100%"
            height="20rem"
            src={fowardImage}
            borderRadius="10%"
          ></Image>
        </Box>

        <Box w="35%">
          <Heading as="h4" alignContent="left" color="blue.300">
            We connect people for a better future
          </Heading>
          <Text w="100%" textAlign="justify">
            Our NGO focuses on improving the health and nutrition of people in
            different communities by providing healthy food and training on
            proper hygienic practices. In addition, we also work on
            environmental issues, helping communities adopt sustainable
            practices to protect natural resources and reduce their
            environmental impact. We also focus on issues of gender, human
            rights, social justice and other issues related to community
            well-being. In short, we help communities for a better future, we
            are focused on a wide variety of issues. However, our desire is to
            improve people's lives and build a more just and sustainable future.
            "JOIN UP"!!
          </Text>
        </Box>

        <Box w="20%">
          <Heading as="h4" alignContent="left" color="blue.300">
            Let know us
          </Heading>

          <VStack spacing="30px" maxW="100%" alignContent={"left"}>
            <Box w="100%">
              <Link as={LinkReact} to="/home" color={"blue.700"}>
                <span className={style.underline}>
                  <p>To home</p>
                </span>{" "}
                <ArrowForwardIcon mx="10px" />
              </Link>
            </Box>

            <Box w="100%">
              <Link as={LinkReact} to="/projects" color={"blue.700"}>
                <span className={style.underline}>
                  <p>To projects</p>
                </span>{" "}
                <ArrowForwardIcon mx="10px" />
              </Link>
            </Box>

            <Box w="100%" color={"blue.600"}>
              <Link as={LinkReact} to="/login" color={"blue.700"}>
                <span className={style.underline}>
                  <p>To Log in</p>
                </span>{" "}
                <ArrowForwardIcon mx="10px" />
              </Link>
            </Box>

            <Box w="100%">
              <Link as={LinkReact} to="/create" color={"blue.700"}>
                <span className={style.underline}>
                  <p>to Create yur own project</p>
                </span>
                <ArrowForwardIcon mx="10px" />
              </Link>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </>
  );
}

//Solo el achivo index de Pages recibe este export
