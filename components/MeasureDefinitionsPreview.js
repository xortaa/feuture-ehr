"use client";

import { useState } from "react";
import { Stack, Input, Button, Select, FormControl, FormLabel, Heading } from "@chakra-ui/react";
import MeasureDefinitionsTable from "./MeasureDefinitionsTable";

function MeasureDefinitionsPreview({ measureDefinitions, id }) {
  const [measureDefinitionss, setMeasureDefinitionss] = useState(measureDefinitions);

  return (
    <Stack spacing={3}>
      <Heading as="h4" size="md">
        Measure Definitions
      </Heading>
      <MeasureDefinitionsTable measureDefinitionss={measureDefinitionss} />;
    </Stack>
  );
}
export default MeasureDefinitionsPreview;
