import React from "react";
import { Tabs, TabList, Tab, Button } from "@chakra-ui/react";
import style from "./Pagination.module.css";

export default function Pagination({
  projectsPerPage,
  projects,
  page,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(projects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <Tabs variant="unstyled" align="center">
        <TabList>
          {currentPage > 1 && (
            <button onClick={() => page(currentPage - 1)}>Back</button>
          )}
          {pageNumbers &&
            pageNumbers.map((num) => {
              return (
                <Tab
                  key={num}
                  onClick={() => page(num)}
                  className={currentPage === num && style.Buttons}
                >
                  <p>{num}</p>
                </Tab>
              );
            })}
          {currentPage < pageNumbers[pageNumbers.length - 1] && (
            <button onClick={() => page(currentPage + 1)}>Next</button>
          )}
        </TabList>
      </Tabs>
    </div>
  );
}
