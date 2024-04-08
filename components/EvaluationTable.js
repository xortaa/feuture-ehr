"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import EvaluationModal from "./EvaluationModal";

function EvaluationTable({ setEvaluations, evaluations, onDelete }) {
  const handleDelete = (id) => {
    axios.delete(`/api/evaluation/${id}`).then((res) => {
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
              <Th>MET</Th>
              <Th>UNMET</Th>
              <Th>Deciding Triggers</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {evaluations &&
              evaluations.map((evaluation, index) => (
                <Tr key={index}>
                  <Td>{evaluation.met}</Td>
                  <Td>{evaluation.unmet}</Td>
                  <Td>{evaluation.decidingTriggers}</Td>
                  <Td>
                    <EvaluationModal evaluation={evaluation} setEvaluations={setEvaluations} />
                    <DeleteIcon onClick={() => handleDelete(evaluation._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default EvaluationTable;
