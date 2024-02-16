"use client";

import { Stack, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import DemographicTable from "./DemographicTable";
import AllergenTable from "./AllergenTable";
import FamilyHxTable from "./FamilyHxTable";

function ProfilePreview({ id }) {
  const [record, setRecord] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/patient/${id}`);
      setRecord(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Stack spacing={3}>
          <Heading as="h4" size="md">
            Demographic
          </Heading>
          <DemographicTable record={record} />

          <Heading as="h4" size="md">
            Allergen
          </Heading>
          {record.allergen.map((allergen, index) => {
            return <AllergenTable key={index} allergen={allergen} />;
          })}

          <Heading as="h4" size="md">
            FamilyHx
          </Heading>
          {record.familyHx.map((familyHx, index) => {
            return <FamilyHxTable key={index} familyHx={familyHx} />;
          })}
        </Stack>
      )}
    </div>
  );
}
export default ProfilePreview;

//  <Td>Age</Td>
//               <Td>Dob</Td>
//               <Td>Address</Td>
//               <Td>Religion</Td>
//               <Td>Etdnicity</Td>
//               <Td>Occupation</Th>
//               <Th>Marital Status</Th>
//               <Th>Spouse Name</Th>
//               <Th>Number Of Children</Th>
//               <Th>Emergency Contact Name</Th>
//               <Th>Emergency Contact Relationship</Th>
//               <Th>Emergency Contact Number</Th>
