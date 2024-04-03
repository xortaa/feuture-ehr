"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import InterventionModal from "./InterventionModal";

function InterventionTable({ setInterventions, interventions, onDelete }) {
  const handleDelete = (id) => {
    axios.delete(`/api/intervention/${id}`).then((res) => {
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
              <Th>Intervention</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {interventions &&
              interventions.map((intervention, index) => (
                <Tr key={index}>
                  <Td>{intervention.intervention}</Td>
                  <Td>
                    <InterventionModal intervention={intervention} setInterventions={setInterventions} />
                    <DeleteIcon onClick={() => handleDelete(intervention._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default InterventionTable;
