import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

function MedicationTable({ medications }) {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Dose</Th>
            <Th>Frequency</Th>
            <Th>Route</Th>
            <Th>Start Date</Th>
            <Th>End Date</Th>
            <Th>Purpose</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {medications &&
            medications.map((medication, index) => (
              <Tr key={index}>
                <Td>{medication.name}</Td>
                <Td>{medication.dose}</Td>
                <Td>{medication.frequency}</Td>
                <Td>{medication.route}</Td>
                <Td>{medication && medication.startDate && medication.startDate.split("T")[0]}</Td>
                <Td>{medication && medication.endDate && medication.endDate.split("T")[0]}</Td>
                <Td>{medication.purpose}</Td>
                <Td>{medication.status}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
export default MedicationTable;

// {
//         "_id": "65ccf916517265b9bbffc468",
//         "name": "Ibuprofen",
//         "dose": "200mg",
//         "frequency": "Every 6 hours",
//         "route": "Oral",
//         "startDate": "2022-01-01T00:00:00.000Z",
//         "endDate": "2022-01-07T00:00:00.000Z",
//         "purpose": "Pain relief",
//         "status": "Completed",
//         "__v": 0
//     },
