import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import axios from "axios";

function HPITable({ hpis, onDelete }) {
  const router = useRouter();

  const handleDelete = (id) => {
    axios.delete(`/api/hpi/${id}`).then((res) => {
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
              <Td>Chief Complaint</Td>
              <Td>Duration</Td>
              <Td>Severity</Td>
              <Td>Onset</Td>
              <Td>Associated Symptoms</Td>
              <Td>Current Medications</Td>
              <Td>Actions</Td>
            </Tr>
          </Thead>
          <Tbody>
            {hpis &&
              hpis.map((hpi, index) => (
                <Tr key={index}>
                  <Td>{hpi.chiefComplaint}</Td>
                  <Td>{hpi.duration}</Td>
                  <Td>{hpi.severity}</Td>
                  <Td>{hpi && hpi.onset && hpi.onset.split("T")[0]}</Td>
                  <Td>{hpi.associatedSymptoms}</Td>
                  <Td>{hpi.currentMedications}</Td>
                  <Td>
                    <EditIcon
                      onClick={() => router.push(`/profile/edit/hpi/${hpi._id}`)}
                      boxSize={5}
                      mx={1}
                      cursor="pointer"
                    />
                    <DeleteIcon onClick={() => handleDelete(hpi._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
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
