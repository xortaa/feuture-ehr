import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import axios from "axios";

function FamilyHxTable({ familyHxs, onDelete }) {
  const router = useRouter();

  const handleDelete = (id) => {
    axios.delete(`/api/familyHx/${id}`).then((res) => {
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
              <Th>Name</Th>
              <Th>Relationship</Th>
              <Th>Age</Th>
              <Th>Related Diseases</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {familyHxs &&
              familyHxs.map((familyHx, index) => (
                <Tr>
                  <Td>
                    {familyHx.firstName} {familyHx.lastName}
                  </Td>
                  <Td>{familyHx.relationship}</Td>
                  <Td>{familyHx.age}</Td>
                  <Td>{familyHx.relatedDiseases}</Td>
                  <Td>
                    <EditIcon
                      onClick={() => router.push(`/profile/edit/familyHx/${familyHx._id}`)}
                      boxSize={5}
                      mx={1}
                      cursor="pointer"
                    />
                    <DeleteIcon onClick={() => handleDelete(familyHx._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default FamilyHxTable;
