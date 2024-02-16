"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import axios from "axios";

function MedicationTable({ medications, onDelete }) {
   const router = useRouter();

   const handleDelete = (id) => {
     axios.delete(`/api/medication/${id}`).then((res) => {
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
              <Th>Dose</Th>
              <Th>Frequency</Th>
              <Th>Route</Th>
              <Th>Start Date</Th>
              <Th>End Date</Th>
              <Th>Purpose</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
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
                   <Td>
                    <EditIcon
                      onClick={() => router.push(`/profile/edit/medication/${medication._id}`)}
                      boxSize={5}
                      mx={1}
                      cursor="pointer"
                    />
                    <DeleteIcon onClick={() => handleDelete(medication._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
   
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
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
