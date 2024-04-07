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
              <Th>Subjective</Th>
              <Th>Objective</Th>
              <Th>Deciding Triggers</Th>
            </Tr>
          </Thead>
          <Tbody>
            {assessments &&
              assessments.map((assessment, index) => (
                <Tr key={index}>
                  <Td>{assessment.subjective}</Td>
                  <Td>{assessment.objective}</Td>
                  <Td>{assessment.decidingTrigger}</Td>
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
