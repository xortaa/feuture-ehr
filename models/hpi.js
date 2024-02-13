import { Schema, model, models } from "mongoose";

const HPISchema = new Schema({
  chiefComplaint: {
    type: String,
  },
  duration: {
    type: String,
  },
  severity: {
    type: String,
  },
  onset: {
    type: Date,
  },
  associatedSymptoms: {
    type: String,
  },
  currentMedications: {
    type: String,
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
});

const HPI = models.HPI || model("HPI", HPISchema);

export default HPI;
