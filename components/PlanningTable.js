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
              <Th>Relieve Pain</Th>
              <Th>Infection Prevention</Th>
              <Th>Treatment</Th>
              <Th>Cure</Th>
              <Th>Promote</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {plannings &&
              plannings.map((planning, index) => (
                <Tr key={index}>
                  <Td>{planning.relievePain}</Td>
                  <Td>{planning.infectionPrevention}</Td>
                  <Td>{planning.treatment}</Td>
                  <Td>{planning.cure}</Td>
                  <Td>{planning.promote}</Td>
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
