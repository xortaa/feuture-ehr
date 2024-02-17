"use client";

import DemographicTable from "@/components/DemographicTable";

import { Tabs, TabList, Tab, TabPanels, TabPanel, Button, Flex, Stack } from "@chakra-ui/react";
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
import NurseNotesPreview from "@/components/NurseNotesPreview";
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
    <div style={{ margin: "30px 60px" }} className="bg">
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
          xs={{
            scrollbarWidth: "30px",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
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
          <Tab>Intake/Output</Tab>
          <Tab>Nurse Notes</Tab>
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
          <TabPanel>
            {record && record.nurseNotes && <NurseNotesPreview nurseNotes={record.nurseNotes} id={params.id} />}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
export default ProfilePage;
