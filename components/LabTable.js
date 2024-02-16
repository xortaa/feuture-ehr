"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import axios from "axios";

function LabTable({ labs, onDelete }) {
   const router = useRouter();

   const handleDelete = (id) => {
     axios.delete(`/api/lab/${id}`).then((res) => {
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
              <Th>Test Name</Th>
              <Th>Result</Th>
              <Th>Date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {labs &&
              labs.map((lab, labIndex) =>
                lab.results.map((result, resultIndex) => (
                  <Tr key={`${labIndex}-${resultIndex}`}>
                    <Td>{result.testName}</Td>
                    <Td>{result.result}</Td>
                    <Td>{lab.date && lab.date.split("T")[0]}</Td>
                    <Td>
                      <EditIcon
                        onClick={() => router.push(`/profile/edit/lab/${lab._id}`)}
                        boxSize={5}
                        mx={1}
                        cursor="pointer"
                      />
                      <DeleteIcon onClick={() => handleDelete(lab._id)} boxSize={5} mx={1} cursor="pointer" />
                    </Td>
                  </Tr>
                ))
              )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default LabTable;
