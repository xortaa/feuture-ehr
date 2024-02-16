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
import VitalSignsForm from "@/components/VitalSignForm";

import DemographicTable from "@/components/DemographicTable";
import AllergenTable from "@/components/AllergenTable";
import FamilyHxTable from "@/components/FamilyHxTable";

import { Tabs, TabList, Tab, TabPanels, TabPanel, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
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
import VitalSignsPreview from "@/components/VitalSignPreview";
import IntakeOutputPreview from "@/components/IntakeOutputPreview";
import { useRouter } from "next/navigation";

function ProfilePage({ params }) {
  const [record, setRecord] = useState([]);
  const [loading, setLoading] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/patient/${params.id}`);
      setRecord(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleDelete = () => {
    axios.delete(`/api/patient/${params.id}`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        router.push("/");
      }
    });
  };

  const handleRedirectHome = () => {
    router.push("/");
  };

  const handleRedirectEdit = () => {
    router.push(`/profile/edit/patient/${params.id}`);
  };

  return (
    <div style={{ margin: "30px 60px" }}>
      <Flex mb={3} justifyContent={"flex-end"} gap={3}>
        <Button colorScheme="green" size="sm" variant="outline" onClick={handleRedirectHome}>
          Back To Patient Records
        </Button>
        <Button colorScheme="yellow" size="sm" variant="outline" onClick={handleRedirectEdit}>
          Edit Patient
        </Button>
        <Button colorScheme="red" size="sm" variant="outline" onClick={handleDelete}>
          Delete Patient
        </Button>
      </Flex>
      <Tabs colorScheme="green" isFitted variant="enclosed">
        <TabList
          overflowX="scroll"
          overflowY="hidden"
          sx={{
            scrollbarWidth: "none",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Tab flexShrink={0}>Profile</Tab>
          <Tab flexShrink={0}>Allergen</Tab>
          <Tab flexShrink={0}>FamilyHx</Tab>
          <Tab flexShrink={0}>HPI</Tab>
          <Tab flexShrink={0}>Immunization</Tab>
          <Tab flexShrink={0}>Lab</Tab>
          <Tab flexShrink={0}>Measurements</Tab>
          <Tab flexShrink={0}>Medications</Tab>
          <Tab flexShrink={0}>SocialHx</Tab>
          <Tab flexShrink={0}>Vitals</Tab>
          <Tab flexShrink={0}>Intake/Output</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack spacing={3}>{loading ? <p>Loading...</p> : <DemographicTable record={record} />}</Stack>
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
          <TabPanel>
            {record && record.intakeOutput && <IntakeOutputPreview intakeOutput={record.intakeOutput} id={params.id} />}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
export default ProfilePage;
