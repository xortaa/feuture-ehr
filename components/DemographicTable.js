import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

function DemographicTable({ record }) {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Td>
              {record.firstName} {record.lastName}
            </Td>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>Age</Th>
            <Td>{record.age}</Td>
          </Tr>
          <Tr>
            <Th>Dob</Th>
            <Td>{record && record.dob && record.dob.split("T")[0]}</Td>
          </Tr>
          <Tr>
            <Th>Address</Th>
            <Td>{record.address}</Td>
          </Tr>
          <Tr>
            <Th>Religion</Th>
            <Td>{record.religion}</Td>
          </Tr>
          <Tr>
            <Th>Ethnicity</Th>
            <Td>{record.ethnicity}</Td>
          </Tr>
          <Tr>
            <Th>Occupation</Th>
            <Td>{record.occupation}</Td>
          </Tr>
          <Tr>
            <Th>Marital Status</Th>
            <Td>{record.maritalStatus}</Td>
          </Tr>
          <Tr>
            <Th>Spouse Name</Th>
            <Td>{record.spouseName}</Td>
          </Tr>
          <Tr>
            <Th>Number of Children</Th>
            <Td>{record.numberOfChildren}</Td>
          </Tr>
          <Tr>
            <Th>Emergency Contact Name</Th>
            <Td>
              {record.emergencyContactFirstName} {record.emergencyContactLastName}
            </Td>
          </Tr>
          <Tr>
            <Th>Emergency Contact Relationship</Th>
            <Td>{record.emergencyContactRelationship}</Td>
          </Tr>
          <Tr>
            <Th>Emergency Contact Number</Th>
            <Td>{record.emergencyContactNumber}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
export default DemographicTable;
