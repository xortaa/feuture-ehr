import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Stack,
  Input,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import axios from "axios";

const DiagnosisModal = ({ diagnosis, setDiagnoses }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      impairedSkinIntegrity: diagnosis.impairedSkinIntegrity,
      pain: diagnosis.pain,
      riskForInfection: diagnosis.riskForInfection,
      otherDiagnoses: diagnosis.otherDiagnoses,
    },
  });

  const onSubmit = (data) => {
    onClose();
    axios.patch(`/api/diagnosis/${diagnosis._id}`, data).then((res) => {
      setDiagnoses((prev) => {
        return prev.map((item) => (item._id === diagnosis._id ? res.data : item));
      });
    });
  };
  return (
    <>
      <EditIcon boxSize={5} mx={1} cursor="pointer" onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Diagnosis</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3} p={4} boxShadow="md" bg="white" borderRadius="md">
                <FormControl>
                  <FormLabel>impairedSkinIntegrity</FormLabel>
                  <Select size="sm" variant="outline" {...register("impairedSkinIntegrity")}>
                    <option value="None">None</option>
                    <option value="Mild">Mild</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Severe">Severe</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Pain</FormLabel>
                  <Select size="sm" variant="outline" {...register("pain")}>
                    <option value="None">None</option>
                    <option value="Mild">Mild</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Severe">Severe</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Risk for Infection</FormLabel>
                  <Select size="sm" variant="outline" {...register("riskForInfection")}>
                    <option value="None">None</option>
                    <option value="Mild">Mild</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Severe">Severe</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Other Diagnoses</FormLabel>
                  <Input size="sm" variant="outline" {...register("otherDiagnoses")} />
                </FormControl>
                <Button w={150} colorScheme="green" variant="solid" type="submit">
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default DiagnosisModal;
