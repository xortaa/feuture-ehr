import { Schema, model, models } from "mongoose";

const DiagnosisSchema = new Schema({
  nursingDiagnosis: {
    type: String,
  },
  decidingTriggers: {
    type: String,
  },
});

const Diagnosis = models.Diagnosis || model("Diagnosis", DiagnosisSchema);

export default Diagnosis;