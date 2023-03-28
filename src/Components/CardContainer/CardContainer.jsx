import ProjectCard from "../ProjectCard/ProjectCard";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function CardContainer({ currentProjects }) {
  // const [selected, setSelected] = useState(() => {
  //   const dataOnLocal = localStorage.getItem("porjectsSelected");
  //   const initValue = JSON.parse(dataOnLocal);
  //   return initValue || [];
  // })

  // useEffect(() => {
  //   localStorage.setItem("projects", JSON.stringify(selected));
  // }, [selected])

  const onClickHandlerSeeLater = (event) => {
    //setSelected([...selected, event. ])
    console.log(event.target.value);
  };

  return (
    <div
      display="flex"
      justify-content="center"
      width="100%"
      align-items="center"
    >
      <SimpleGrid templateColumns="repeat(3, 1fr)" spacing="40px">
        {currentProjects.map((project) => {
          return (
            <Box key={project.id}>
              <ProjectCard
                project={project}
                onClickHandlerSeeLater={onClickHandlerSeeLater}
                key={project.id}
              />
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
}
