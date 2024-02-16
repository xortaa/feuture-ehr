"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import axios from "axios";

function IntakeOutputTable({ intakeOutputs, onDelete }) {
  const router = useRouter();

  const handleDelete = (id) => {
    axios.delete(`/api/intakeOutput/${id}`).then((res) => {
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
              <Th>Intake Time</Th>
              <Th>Type of Intake</Th>
              <Th>Intake Amount</Th>
              <Th>Output Time</Th>
              <Th>Type of Output</Th>
              <Th>Output Amount</Th>
              <Th>Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {intakeOutputs &&
              intakeOutputs.map((intakeOutput, index) => (
                <Tr key={index}>
                  <Td>{intakeOutput.intakeTime}</Td>
                  <Td>{intakeOutput.intakeType}</Td>
                  <Td>{intakeOutput.intakeAmount}</Td>
                  <Td>{intakeOutput.outputTime}</Td>
                  <Td>{intakeOutput.outputType}</Td>
                  <Td>{intakeOutput.outputAmount}</Td>
                  <Td>{intakeOutput && intakeOutput.date && intakeOutput.date.split("T")[0]}</Td>
                  <Td>
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <EditIcon
                        onClick={() => router.push(`/profile/edit/intakeOutput/${intakeOutput._id}`)}
                        boxSize={5}
                        mx={1}
                        cursor="pointer"
                      />
                      <DeleteIcon onClick={() => handleDelete(intakeOutput._id)} boxSize={5} mx={1} cursor="pointer" />
                    </Box>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default IntakeOutputTable;
