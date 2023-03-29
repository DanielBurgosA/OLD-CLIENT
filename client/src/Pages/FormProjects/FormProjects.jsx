import { useDispatch, useSelector } from "react-redux";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Container,
  VStack,
  Textarea,
  Center,
  Heading,
  Select,
} from "@chakra-ui/react";
import { projectSchema } from "./Errors";
import { postProject } from "../../Redux/Slicers/projectSlicer";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function FormProjects() {
  const navigate = useNavigate();

  const[img, setImg] = useState("");

  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dipomzedf",
      uploadPreset: "linkingfuture"
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setImg(result.info.secure_url)
        console.log("Done! Here is the image info: ", result.info);
      }
    }
  );
  const widgetOpen = () => {
    myWidget.open()
  }


  const users = useSelector((state) => state.user.users);
  const LogInStatus = useSelector((state) => state.login.status);
  console.log("login del create", LogInStatus);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(projectSchema),
  });
  const [err, SetErr] = useState("");

  const Submit = (data) => {
    //if (LogInStatus){
      data.image=img;
      dispatch(postProject(data))
      console.log(data);
      alert("se creo proyecto")
      navigate("/projects");
    //}else{
     // SetErr("debes loguearte")
    //}
    
    // console.log(data)
  };


  if (LogInStatus) {
    return (
      <Container mt="100px" mb="100px">
        <Heading>Create a Project</Heading>
        <form onSubmit={handleSubmit(Submit)}>
          <VStack spacing="24px">
            <FormControl isInvalid={errors.name ? true : false}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter the porject's name"
                {...register("name")}
              />
              {!errors.name ? null : (
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              )}
            </FormControl>

            {/* <FormControl isInvalid={errors.image ? true : false}>
              <FormLabel>Image</FormLabel>
              <Input
                type="text"
                placeholder="Enter a url of your location"
                {...register("image")}
              />
              {!errors.name ? null : (
                <FormErrorMessage>{errors.image?.message}</FormErrorMessage>
              )}
            </FormControl> */}

            <FormControl isInvalid={errors.location ? true : false}>
              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                placeholder="Share your project's address"
                {...register("location")}
              />
              {!errors.name ? null : (
                <FormErrorMessage>{errors.location?.message}</FormErrorMessage>
              )}
            </FormControl>

            {/* <Select placeholder="select a user" {...register("user")}>
            {users?.map(user => {
              return <option value={user.id} >{user.name}</option>
            })}
          </Select> */}

            <FormControl isInvalid={errors.description ? true : false}>
              <FormLabel>Description</FormLabel>
              <Textarea
                resize="vertical"
                h="200px"
                placeholder="Share your story"
                {...register("description")}
              />
              {!errors.name ? null : (
                <FormErrorMessage>
                  {errors.description?.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <Button type="submit" colorScheme="blue">
              {" "}
              send{" "}
            </Button>
          </VStack>
        </form>
        <button onClick={widgetOpen}>Imagen</button>
        {err ? <span>debes loguearte</span> : null}
      </Container>
    );
  } else {
   return (<Navigate to="/login" />);
  }
}

//Solo el achivo index de Pages recibe este export
