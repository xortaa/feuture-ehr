"use client";

import AllergenForm from "@/components/AllergenForm";
import DemographicForm from "@/components/DemographicForm";
import FamilyHxForm from "@/components/FamilyHxForm";
import ImmunizationForm from "@/components/ImmunizationForm";
import HPIForm from "@/components/HPIForm";
import LabForm from "@/components/LabForm";
import MeasurementForm from "@/components/MeasurementForm";
import MedicationForm from "@/components/MedicationForm";
import SocialHxForm from "@/components/SocialHxForm";
import VitalSignsForm from "@/components/VitalSignsForm";

import DemographicTable from "@/components/DemographicTable";
import AllergenTable from "@/components/AllergenTable";
import FamilyHxTable from "@/components/FamilyHxTable";

import { Tabs, TabList, Tab, TabPanels, TabPanel, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import AllergenPreview from "@/components/AllergenPreview";
import FamilyHxPreview from "@/components/FamilyHxPreview";
import HPIPreview from "@/components/HPIPreview";
import ImmunizationPreview from "@/components/ImmunizationPreview";
import LabPreview from "@/components/LabPreview";
import MeasurementPreview from "@/components/MeasurementPreview";
import MedicationPreview from "@/components/MedicationPreview";
import SocialHxPreview from "@/components/SocialHxPreview";
import VitalSignsPreview from "@/components/VitalSignsPreview";

function ProfilePage({ params }) {
  const [record, setRecord] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/patient/${params.id}`);
      setRecord(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div style={{ margin: "30px 60px" }}>
      <Tabs colorScheme="green" isFitted variant="enclosed">
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Allergen</Tab>
          <Tab>FamilyHx</Tab>
          <Tab>HPI</Tab>
          <Tab>Immunization</Tab>
          <Tab>Lab</Tab>
          <Tab>Measurements</Tab>
          <Tab>Medications</Tab>
          <Tab>SocialHx</Tab>
          <Tab>Vitals</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack spacing={3}>
              <Flex justifyContent="flex-end" mb={3}>
                <Link href="/">
                  <Button colorScheme="green">Back To Records</Button>
                </Link>
              </Flex>
              {loading ? <p>Loading...</p> : <DemographicTable record={record} />}
            </Stack>
          </TabPanel>
          <TabPanel>
            {record && record.allergen && <AllergenPreview allergen={record.allergen} id={params.id} />}
          </TabPanel>
          <TabPanel>
            {record && record.familyHx && <FamilyHxPreview familyHx={record.familyHx} id={params.id} />}
          </TabPanel>
          <TabPanel>{record && record.hpi && <HPIPreview hpi={record.hpi} id={params.id} />}</TabPanel>
          <TabPanel>
            {record && record.immunization && <ImmunizationPreview immunization={record.immunization} id={params.id} />}
          </TabPanel>
          <TabPanel>{record && record.lab && <LabPreview lab={record.lab} id={params.id} />}</TabPanel>
          <TabPanel>
            {record && record.measurement && <MeasurementPreview measurement={record.measurement} id={params.id} />}
          </TabPanel>
          <TabPanel>
            {record && record.medication && <MedicationPreview medication={record.medication} id={params.id} />}
          </TabPanel>
          <TabPanel>
            {record && record.socialHx && <SocialHxPreview socialHx={record.socialHx} id={params.id} />}
          </TabPanel>
          <TabPanel>
            {record && record.vitalSign && <VitalSignsPreview vitalSign={record.vitalSign} id={params.id} />}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
export default ProfilePage;
