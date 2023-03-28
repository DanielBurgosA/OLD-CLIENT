import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Center,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addseeLaterItem } from "../../Redux/Slicers/projectSlicer";

export default function ProjectCard(props) {
  const dispatch = useDispatch();
  const { name, abstrac, image, location, id, user, title } = props.project;
  const navigate = useNavigate();
  const LogInStatus = useSelector((state) => state.login.status);
  const clickHandlerDonate = (e) => {
    if (LogInStatus) {
      navigate("/pagos");
    } else {
      navigate("/login");
    }
  };

  const clickHandlerSeeLater = (e) => {
    dispatch(addseeLaterItem(e.target.value));
  };

  return (
    <div>
      <Card
        maxW="md"
        maxWidth="300px"
        maxHeight="450px"
        minWidth="300px"
        minHeight="450px"
      >
        <CardHeader maxHeight="80px">
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Link to={`/user/${user}`}>
                <Avatar name={user} src="https://bit.ly/sage-adebayo" />
              </Link>
              <Box>
                <Text>{name}</Text>
                <Text>{location}</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <Link to={`/projects/${id}`} key={id}>
          <CardBody maxHeight="80px">
            <Text>{abstrac}</Text>
          </CardBody>
          <Center>
            <Image
              objectFit="cover"
              src={image}
              alt={name}
              margin="5px"
              maxHeight="200px"
              minHeight="200px"
            />
          </Center>
        </Link>
        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          maxHeight="50px"
          sx={{
            "& > button": {
              minW: "50px",
            },
          }}
          margin="5px"
        >
          <Button flex="1" variant="ghost" onClick={clickHandlerDonate}>
            Donar
          </Button>

          <Button
            flex="1"
            variant="ghost"
            type="submit"
            value={id}
            onClick={clickHandlerSeeLater}
          >
            See later
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
