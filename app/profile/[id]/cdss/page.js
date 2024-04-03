"use client";

import { Tabs, TabList, Tab, TabPanels, TabPanel, Button, Flex, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import CdssPreview from "@/components/CdssPreview";
import { useRouter } from "next/navigation";
import MeasureDefinitionsPreview from "@/components/MeasureDefinitionsPreview";

const measureDefinitions = [
  {
    measure_label: "Medication Adherence Rate",
    measure_name: "Percentage of Medication Adherence",
    measure_numerator:
      "Number of patients in the denominator who have adhered to their prescribed medication regimen at least 80% of the time over the last 12 months, up to and including the last day of the reporting period",
    measure_denominator:
      "Number of unique patients with a chronic condition requiring medication management who were seen in the reporting period",
    cdss: "Yes",
    associated_order_set: "None",
  },
  {
    measure_label: "Diabetes Control Rate",
    measure_name: "Proportion of Patients with Controlled Diabetes",
    measure_numerator:
      "Number of patients in the denominator whose HbA1c levels are below 7% at least once in the last 12 months, up to and including the last day of the reporting period",
    measure_denominator:
      "Number of unique patients diagnosed with diabetes mellitus who received care in the reporting period",
    cdss: "Yes",
    associated_order_set: "Diabetes Management Protocol",
  },
  {
    measure_label: "Hypertension Management Rate",
    measure_name: "Percentage of Patients with Controlled Hypertension",
    measure_numerator:
      "Number of patients in the denominator whose blood pressure readings are consistently below 140/90 mmHg at least once in the last 12 months, up to and including the last day of the reporting period",
    measure_denominator:
      "Number of unique patients diagnosed with hypertension who received care in the reporting period",
    cdss: "Yes",
    associated_order_set: "Hypertension Treatment Guidelines",
  },
  {
    measure_label: "Preventive Screening Compliance",
    measure_name: "Rate of Preventive Screening Compliance",
    measure_numerator:
      "Number of patients in the denominator who underwent recommended preventive screenings (e.g., mammograms, colonoscopies, vaccinations) according to established guidelines during the reporting period",
    measure_denominator:
      "Number of eligible patients for each type of preventive screening identified based on age, gender, and risk factors",
    cdss: "Yes",
    associated_order_set: "Preventive Screening Protocol",
  },
  {
    measure_label: "Depression Screening Rate",
    measure_name: "Percentage of Patients Screened for Depression",
    measure_numerator:
      "Number of patients in the denominator who completed a validated depression screening tool (e.g., PHQ-9) at least once in the last 12 months, up to and including the last day of the reporting period",
    measure_denominator:
      "Number of unique patients eligible for depression screening based on age, gender, and clinical history",
    cdss: "Yes",
    associated_order_set: "Depression Screening Protocol",
  },
  {
    measure_label: "Vaccination Coverage Rate",
    measure_name: "Percentage of Vaccination Coverage",
    measure_numerator:
      "Number of patients in the denominator who have received all recommended vaccinations according to age and medical history, up to and including the last day of the reporting period",
    measure_denominator:
      "Number of eligible patients for each type of vaccination based on age, medical history, and vaccination schedule",
    cdss: "Yes",
    associated_order_set: "Vaccination Schedule Protocol",
  },
  {
    measure_label: "Fall Risk Assessment Completion Rate",
    measure_name: "Percentage of Fall Risk Assessments Completed",
    measure_numerator:
      "Number of patients in the denominator who underwent fall risk assessments using standardized tools (e.g., Morse Fall Scale, Timed Up and Go Test) at least once in the last 12 months, up to and including the last day of the reporting period",
    measure_denominator:
      "Number of eligible patients for fall risk assessments based on age, mobility status, and clinical history",
    cdss: "Yes",
    associated_order_set: "Fall Prevention Protocol",
  },
  {
    measure_label: "Antibiotic Stewardship Compliance",
    measure_name: "Rate of Antibiotic Stewardship Compliance",
    measure_numerator:
      "Number of patients in the denominator who received antibiotics according to established guidelines for appropriate antibiotic use (e.g., duration, indication, selection) during the reporting period",
    measure_denominator: "Number of patients prescribed antibiotics for acute infections or prophylaxis",
    cdss: "Yes",
    associated_order_set: "Antibiotic Stewardship Guidelines",
  },
  {
    measure_label: "Chronic Disease Management Follow-Up Rate",
    measure_name: "Percentage of Chronic Disease Management Follow-Up",
    measure_numerator:
      "Number of patients in the denominator who attended scheduled follow-up visits for chronic disease management at least once in the last 12 months, up to and including the last day of the reporting period",
    measure_denominator:
      "Number of unique patients with chronic diseases (e.g., diabetes, hypertension, asthma) who received care in the reporting period",
    cdss: "Yes",
    associated_order_set: "Chronic Disease Management Protocol",
  },
  {
    measure_label: "Cancer Screening Rate",
    measure_name: "Percentage of Patients Screened for Cancer",
    measure_numerator:
      "Number of patients in the denominator who underwent recommended cancer screenings (e.g., mammograms, colonoscopies, Pap smears) according to established guidelines during the reporting period",
    measure_denominator:
      "Number of eligible patients for each type of cancer screening identified based on age, gender, family history, and risk factors",
    cdss: "Yes",
    associated_order_set: "Cancer Screening Protocol",
  },
  {
    measure_label: "Nutritional Counseling Rate",
    measure_name: "Percentage of Patients Receiving Nutritional Counseling",
    measure_numerator:
      "Number of patients in the denominator who received nutritional counseling or education sessions from qualified healthcare providers at least once in the last 12 months, up to and including the last day of the reporting period",
    measure_denominator:
      "Number of unique patients with nutrition-related conditions or risk factors (e.g., obesity, diabetes, cardiovascular diseases) who received care in the reporting period",
    cdss: "Yes",
    associated_order_set: "Nutritional Counseling Protocol",
  },
  {
    measure_label: "Influenza Vaccination Rate",
    measure_name: "Percentage of Influenza Vaccination Coverage",
    measure_numerator:
      "Number of patients in the denominator who received influenza vaccination during the influenza season, up to and including the last day of the reporting period",
    measure_denominator:
      "Number of eligible patients for influenza vaccination based on age, medical history, and influenza vaccination recommendations",
    cdss: "Yes",
    associated_order_set: "Influenza Vaccination Protocol",
  },
  {
    measure_label: "Patient Education Completion Rate",
    measure_name: "Percentage of Patient Education Completion",
    measure_numerator:
      "Number of patients in the denominator who completed prescribed patient education modules or sessions aimed at improving self-management skills, health literacy, or treatment adherence, up to and including the last day of the reporting period",
    measure_denominator:
      "Number of patients prescribed patient education interventions based on clinical indications, disease severity, or risk factors",
    cdss: "Yes",
    associated_order_set: "Patient Education Curriculum",
  },
];

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
            CDSS Alerts
          </Tab>
          <Tab borderRadius="md" _selected={{ color: "white", bg: "green.600" }}>
            Measure Definitions
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{record && record.cdss && <CdssPreview cdss={record.cdss} id={params.id} />}</TabPanel>
          <TabPanel>
            {measureDefinitions && <MeasureDefinitionsPreview measureDefinitions={measureDefinitions} id={params.id} />}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
export default ProfileCDSSPage;
