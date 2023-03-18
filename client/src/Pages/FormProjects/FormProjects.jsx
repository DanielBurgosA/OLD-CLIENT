import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Button, Input, Container, VStack, Textarea, Center } from "@chakra-ui/react";
import { projectSchema } from "./Errors";
import { useDispatch } from "react-redux";
import { postProject } from "../../Redux/Slicers/projectSlicer";

export default function FormProjects() {
  
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(projectSchema)
  });

  const Submit = (data) => {
    dispatch(postProject(data))
  }


  return (
    <Container>
      <form onSubmit={handleSubmit(Submit)}>
        <VStack spacing="24px">
          <FormControl isInvalid={errors.name ? true : false}>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Enter the porject's name" {...register('name')} />
            {!errors.name ? null :<FormErrorMessage>{errors.name?.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={errors.title ? true : false}>
            <FormLabel>Title</FormLabel>
            <Input type='text' placeholder="Enter a title you want the contributors see" {...register('title')} />
            {!errors.name ? null :<FormErrorMessage>{errors.title?.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={errors.image? true : false}>
            <FormLabel>Image</FormLabel>
            <Input type='text' placeholder="Enter a url of your location" {...register('image')} />
            {!errors.name ? null :<FormErrorMessage>{errors.image?.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={errors.location? true : false}>
            <FormLabel>Location</FormLabel>
            <Input type='text' placeholder="Share your project's address" {...register('location')} />
            {!errors.name ? null :<FormErrorMessage>{errors.location?.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={errors.description? true : false}>
            <FormLabel>Description</FormLabel>
            <Textarea resize="vertical" h="200px" placeholder="Share your story" {...register('description')} />
            {!errors.name ? null :<FormErrorMessage>{errors.description?.message}</FormErrorMessage>}
          </FormControl>

          <Button type="submit" colorScheme="blue"> send </Button>
        </VStack>

      </form>
    </Container>

  )
}

//Solo el achivo index de Pages recibe este export
