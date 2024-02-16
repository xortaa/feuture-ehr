import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

function HPITable({ hpis }) {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Chief Complaint</Th>
            <Td>Duration</Td>
            <Td>Severity</Td>
            <Td>Onset</Td>
            <Td>Associated Symptoms</Td>
            <Td>Current Medications</Td>
          </Tr>
        </Thead>
        <Tbody>
          {hpis &&
            hpis.map((hpi, index) => (
              <Tr>
                <Td>{hpi.chiefComplaint}</Td>
                <Td>{hpi.duration}</Td>
                <Td>{hpi.severity}</Td>
                <Td>{hpi && hpi.onset && hpi.onset.split("T")[0]}</Td>
                <Td>{hpi.associatedSymptoms}</Td>
                <Td>{hpi.currentMedications}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default HPITable;

// "_id": "65ccf779517265b9bbffc45a",
//         "chiefComplaint": "Severe headache",
//         "duration": "2 days",
//         "severity": "High",
//         "onset": "2022-12-01T00:00:00.000Z",
//         "associatedSymptoms": "Nausea, blurred vision",
//         "currentMedications": "Ibuprofen",
//         "__v": 0
