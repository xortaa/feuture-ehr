"use client";

import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import axios from "axios";

function MeasurementTable({ measurements, onDelete }) {
  const router = useRouter();

  const handleDelete = (id) => {
    axios.delete(`/api/measurement/${id}`).then((res) => {
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
              <Th>Height</Th>
              <Th>Weight</Th>
              <Th>BMI</Th>
              <Th>date</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {measurements &&
              measurements.map((measurement, index) => (
                <Tr key={index}>
                  <Td>{measurement.height}</Td>
                  <Td>{measurement.weight}</Td>
                  <Td>{measurement.bmi}</Td>
                  <Td>{measurement && measurement.date && measurement.date.split("T")[0]}</Td>
                  <Td>
                    <EditIcon
                      onClick={() => router.push(`/profile/edit/measurement/${measurement._id}`)}
                      boxSize={5}
                      mx={1}
                      cursor="pointer"
                    />
                    <DeleteIcon onClick={() => handleDelete(measurement._id)} boxSize={5} mx={1} cursor="pointer" />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default MeasurementTable;

//  {
//         "_id": "65ccf876517265b9bbffc465",
//         "height": "180",
//         "weight": "75",
//         "bmi": "23.15",
//         "date": "2022-01-01T00:00:00.000Z",
//         "__v": 0
//     },
