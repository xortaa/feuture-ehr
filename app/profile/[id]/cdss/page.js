"use client";

import { Tabs, TabList, Tab, TabPanels, TabPanel, Button, Flex, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import AssessmentPreview from "@/components/AssessmentPreview";
import PlanningPreview from "@/components/PlanningPreview";
import InterventionPreview from "@/components/InterventionPreview";
import ImmunizationPreview from "@/components/ImmunizationPreview";
import { useRouter } from "next/navigation";
import DiagnosisPreview from "@/components/DiagnosisPreview";
import EvaluationPreview from "@/components/EvaluationPreview";

function ProfileCDSSPage({ params }) {
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

  const handleRedirectToPatient = () => {
    router.push(`/profile/${params.id}`);
  };

  return (
    <div style={{ margin: "30px 60px" }} className="bg">
      <Flex justifyContent={"space-between"}>
        <Button colorScheme="green" size="sm" variant="outline" onClick={handleRedirectToPatient}>
          Back To Patient
        </Button>
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
            Assessment
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Diagnosis
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Planning
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Intervention
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Evaluation
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {record && record.assessment && <AssessmentPreview assessment={record.assessment} id={params.id} />}
          </TabPanel>
          <TabPanel>
            {record && record.diagnosis && <DiagnosisPreview diagnosis={record.diagnosis} id={params.id} />}
          </TabPanel>
          <TabPanel>
            {record && record.planning && <PlanningPreview planning={record.planning} id={params.id} />}
          </TabPanel>
          <TabPanel>
            {record && record.hpi && <InterventionPreview intervention={record.intervention} id={params.id} />}
          </TabPanel>
          <TabPanel>
            {record && record.immunization && <EvaluationPreview evaluation={record.evaluation} id={params.id} />}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
export default ProfileCDSSPage;
