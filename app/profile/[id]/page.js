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

  const handleRedirectCDSS = () => {
    router.push(`/profile/${params.id}/cdss`);
  };
  const handleRedirectWith = () => {
    router.push(`/profile/${params.id}/with`);
  };

  return (
    <div style={{ margin: "30px 60px" }} className="bg">
      <Flex justifyContent={"space-between"}>
        <Flex mb={3} justifyContent={"flex-end"} gap={3}>
          <Button colorScheme="green" size="sm" variant="outline" onClick={handleRedirectCDSS}>
            CDSS
          </Button>
          <Button colorScheme="green" size="sm" variant="outline" onClick={handleRedirectWith}>
            Patient with Diabetes Mellitus type II
          </Button>
        </Flex>
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
      </Flex>
      <Tabs size="sm" colorScheme="green" isFitted variant="unstyled">
        <TabList>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Profile
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Allergen
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            FamilyHx
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            HPI
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Immunization
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Lab
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Measurements
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Medications
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            SocialHx
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Vitals
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Intake/Output
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Notes
          </Tab>
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
