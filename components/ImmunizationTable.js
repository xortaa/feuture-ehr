"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import axios from "axios";

function ImmunizationTable({ immunizations }) {
  const router = useRouter();

  const handleDelete = (id) => {
    axios.delete(`/api/immunization/${id}`).then((res) => {
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
              <Th>Immunization Name</Th>
              <Th>Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {immunizations &&
              immunizations.map((immunization, index) => (
                <Tr>
                  <Td>{immunization.name}</Td>
                  <Td>{immunization && immunization.date && immunization.date.split("T")[0]}</Td>
                  <Td>
                    <EditIcon
                      onClick={() => router.push(`/profile/edit/immunization/${immunization._id}`)}
                      boxSize={5}
                      mx={1}
                      cursor="pointer"
                    />
                    <DeleteIcon onClick={() => handleDelete(immunization._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default ImmunizationTable;

// [
//   {
//     _id: "65ccf7c1517265b9bbffc45d",
//     name: "Hepatitis B",
//     date: "2022-01-01T00:00:00.000Z",
//     __v: 0,
//   },
// ];
