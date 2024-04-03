"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
import CdssModal from "./CdssModal";

function CdssTable({ setCdsss, cdsss, onDelete }) {
  const handleDelete = (id) => {
    axios.delete(`/api/cdss/${id}`).then((res) => {
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
              <Th>CDSS Alert</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cdsss &&
              cdsss.map((cdss, index) => (
                <Tr key={index}>
                  <Td>{cdss.alert}</Td>
                  <Td>
                    <CdssModal cdss={cdss} setCdsss={setCdsss} />
                    <DeleteIcon onClick={() => handleDelete(cdss._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CdssTable;
