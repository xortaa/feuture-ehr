"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import AssessmentModal from "./AssessmentModal";

function AssessmentTable({ setAssessments, assessments, onDelete }) {
  const handleDelete = (id) => {
    axios.delete(`/api/assessment/${id}`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        onDelete(id);
      }
    });
  };
  return (
    <Box boxShadow="base" _hover={{ boxShadow: "lg" }} borderRadius="md" p={2} bgColor="white">
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Method</Th>
              <Th>Location</Th>
              <Th>Damage Caused</Th>
              <Th>Type of Injury</Th>
              <Th>Location of Injury</Th>
              <Th>Size of Injury</Th>
              <Th>Degree of Injury</Th>
              <Th>Color of Injury</Th>
              <Th>Drainage</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {assessments &&
              assessments.map((assessment, index) => (
                <Tr key={index}>
                  <Td>{assessment.method}</Td>
                  <Td>{assessment.location}</Td>
                  <Td>{assessment.damageCaused}</Td>
                  <Td>{assessment.typeOfInjury}</Td>
                  <Td>{assessment.locationOfInjury}</Td>
                  <Td>{assessment.sizeOfInjury}</Td>
                  <Td>{assessment.degreeOfInjury}</Td>
                  <Td>{assessment.colorOfInjury}</Td>
                  <Td>{assessment.drainage}</Td>
                  <Td>
                    <AssessmentModal assessment={assessment} setAssessments={setAssessments} />
                    <DeleteIcon onClick={() => handleDelete(assessment._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AssessmentTable;
