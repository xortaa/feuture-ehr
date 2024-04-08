"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import PlanningModal from "./PlanningModal";

function PlanningTable({ setPlannings, plannings, onDelete }) {
  const handleDelete = (id) => {
    axios.delete(`/api/planning/${id}`).then((res) => {
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
              <Th>Short Term Goal</Th>
              <Th>Long Term Goal</Th>
              <Th>Cognitive Objectives</Th>
              <Th>Psychomotor Objectives</Th>
              <Th>Affective Objectives</Th>
              <Th>Deciding Triggers</Th>
            </Tr>
          </Thead>
          <Tbody>
            {plannings &&
              plannings.map((planning, index) => (
                <Tr key={index}>
                  <Td>{planning.shortTermGoal}</Td>
                  <Td>{planning.longTermGoal}</Td>
                  <Td>{planning.cognitiveObjectives}</Td>
                  <Td>{planning.psychomotorObjectives}</Td>
                  <Td>{planning.affectiveObjectives}</Td>
                  <Td>{planning.decidingTriggers}</Td>
                  <Td>
                    <PlanningModal planning={planning} setPlannings={setPlannings} />
                    <DeleteIcon onClick={() => handleDelete(planning._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PlanningTable;
