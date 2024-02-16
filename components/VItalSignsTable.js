import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

function VItalSignsTable({ vitalSigns }) {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Temp</Th>
            <Th>Pulse</Th>
            <Th>BP</Th>
            <Th>Position</Th>
            <Th>Respirations</Th>
            <Th>Spo2</Th>
            <Th>Oxygen Source</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {vitalSigns &&
            vitalSigns.map((vitalSign, index) => (
              <Tr key={index}>
                <Td>{vitalSign.temp}</Td>
                <Td>{vitalSign.pulse}</Td>
                <Td>{vitalSign.bp}</Td>
                <Td>{vitalSign.position}</Td>
                <Td>{vitalSign.respirations}</Td>
                <Td>{vitalSign.spo2}</Td>
                <Td>{vitalSign.oxygenSource}</Td>
                <Td>{vitalSign && vitalSign.date && vitalSign.date.split("T")[0]}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
export default VItalSignsTable;

// {
//         "_id": "65ccf96f517265b9bbffc46e",
//         "date": "2022-01-01T00:00:00.000Z",
//         "temp": "36.6",
//         "pulse": "72",
//         "bp": "120/80",
//         "position": "Sitting",
//         "respirations": "16",
//         "spo2": "98",
//         "oxygenSource": "Room air",
//         "__v": 0
//     },
