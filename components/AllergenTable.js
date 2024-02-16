import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

function AllergenTable({ allergens }) {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Allergen</Th>
            <Th>Reaction</Th>
            <Th>Severity</Th>
            <Th>Onset</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allergens && allergens.map((allergen, index) => (
            <Tr key={index}>
              <Td>{allergen.allergenName}</Td>
              <Td>{allergen.reaction}</Td>
              <Td>{allergen.severity}</Td>
              <Td>{allergen && allergen.onset && allergen.onset.split("T")[0]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default AllergenTable;