import { Link, useLocation } from "react-router-dom";

import { Box, Flex, Grid, GridItem, Spacer, Button } from "@chakra-ui/react";
import ToggleColorMode from "../../modeColor/toggleColorMode";
import image from "../../Utils/image/2.jpg";
import style from "./NavBar.module.css";
import { useSelector } from "react-redux";
import LogOutButton from "../logOutButton/LogOutButton";

export default function NavBar() {
  const location = useLocation();

  const LogInStatus = useSelector((state) => state.login.status);
  console.log(LogInStatus);

  return (
    <div className={style.navBar}>
      <Grid templateColumns="repeat(12, 1fr)" gap={2}>
        <GridItem as="aside" colSpan={3} p="40px">
          <a href="/home">
            <img src={image} width="70" height="70" />
          </a>
        </GridItem>

        <GridItem colSpan={9} p="20px">
          <GridItem mt="10px" mb="50px">
            <Flex alignItems="center">
              <Spacer></Spacer>

              {LogInStatus && <LogOutButton className={style.underline}/>}

              {!LogInStatus &&<a href="/create-user">
                <Button colorScheme="teal" variant="outline" marginRight="1rem">
                  Sign Up
                </Button>
              </a>
              }

              {!LogInStatus &&<a href="/login">
                <Button colorScheme="teal" variant="solid" marginRight="1rem">
                  Sign In
                </Button>
              </a>}

              <ToggleColorMode />
            </Flex>
          </GridItem>

          <GridItem>
            <Flex justify="space-around">
              {location.pathname !== "/home" && (
                <Link to={"/home"}>
                  <span className={style.underline}>HOME</span>{" "}
                </Link>
              )}

              {location.pathname !== "/projects" && (
                <Link to={"/projects"}>
                  {" "}
                  <span className={style.underline}>Projects</span>{" "}
                </Link>
              )}
              {location.pathname !== "/create" && (
                <Link to={"/create"}>
                  {" "}
                  <span className={style.underline}>Create Project</span>{" "}
                </Link>
              )}
              {location.pathname !== "/home/aboutUs" && (
                <Link to={"/home/aboutUs"}>
                  {" "}
                  <span className={style.underline}>About Us</span>{" "}
                </Link>
              )}
            </Flex>
          </GridItem>
        </GridItem>
      </Grid>
    </div>
  );
}
