import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

function ImmunizationTable({ immunizations }) {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Immunization Name</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {immunizations &&
            immunizations.map((immunization, index) => (
              <Tr>
                <Td>{immunization.name}</Td>
                <Td>{immunization && immunization.date && immunization.date.split("T")[0]}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
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
