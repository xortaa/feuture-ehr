"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import axios from "axios";

function AllergenTable({ allergens, onDelete }) {
  const router = useRouter();

  const handleDelete = (id) => {
    axios.delete(`/api/allergen/${id}`).then((res) => {
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
              <Th>Allergen</Th>
              <Th>Reaction</Th>
              <Th>Severity</Th>
              <Th>Onset</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allergens &&
              allergens.map((allergen, index) => (
                <Tr key={index}>
                  <Td>{allergen.allergenName}</Td>
                  <Td>{allergen.reaction}</Td>
                  <Td>{allergen.severity}</Td>
                  <Td>{allergen && allergen.onset && allergen.onset.split("T")[0]}</Td>
                  <Td>
                    <EditIcon
                      onClick={() => router.push(`/profile/edit/allergen/${allergen._id}`)}
                      boxSize={5}
                      mx={1}
                      cursor="pointer"
                    />
                    <DeleteIcon onClick={() => handleDelete(allergen._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AllergenTable;
