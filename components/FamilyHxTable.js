import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

function FamilyHxTable({ familyHxs }) {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Relationship</Th>
            <Th>Age</Th>
            <Th>Related Diseases</Th>
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
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
export default FamilyHxTable;
