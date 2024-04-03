"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import DiagnosisModal from "./DiagnosisModal";

function DiagnosisTable({ setDiagnoses, diagnoses, onDelete }) {
  const handleDelete = (id) => {
    axios.delete(`/api/diagnosis/${id}`).then((res) => {
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
              <Th>Impaired Skin Integrity</Th>
              <Th>Pain</Th>
              <Th>Risk for Infection</Th>
              <Th>Other Diagnoses</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {diagnoses &&
              diagnoses.map((diagnosis, index) => (
                <Tr key={index}>
                  <Td>{diagnosis.impairedSkinIntegrity}</Td>
                  <Td>{diagnosis.pain}</Td>
                  <Td>{diagnosis.riskForInfection}</Td>
                  <Td>{diagnosis.otherDiagnoses}</Td>
                  <Td>
                    <DiagnosisModal diagnosis={diagnosis} setDiagnoses={setDiagnoses} />
                    <DeleteIcon onClick={() => handleDelete(diagnosis._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default DiagnosisTable;
