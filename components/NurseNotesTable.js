"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import axios from "axios";

function NurseNotesTable({ nurseNotess, onDelete }) {
  const router = useRouter();

  const handleDelete = (id) => {
    axios.delete(`/api/nurseNotes/${id}`).then((res) => {
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
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Nurse Notes</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {nurseNotess &&
              nurseNotess.map((nurseNotes, index) => (
                <Tr>
                  <Td>{nurseNotes && nurseNotes.date && nurseNotes.date.split("T")[0]}</Td>
                  <Td>{nurseNotes.time}</Td>
                  <Td>{nurseNotes.nurseNotes}</Td>
                  <Td>
                    <EditIcon
                      onClick={() => router.push(`/profile/edit/nurseNotes/${nurseNotes._id}`)}
                      boxSize={5}
                      mx={1}
                      cursor="pointer"
                    />
                    <DeleteIcon onClick={() => handleDelete(nurseNotes._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default NurseNotesTable;

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
