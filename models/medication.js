import { Schema, model, models } from "mongoose";

const MedicationSchema = new Schema({
  name: {
    type: String,
  },
  dose: {
    type: String,
  },
  frequency: {
    type: String,
  },
  route: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  purpose: {
    type: String,
  },
  status: {
    type: String,
  },
});

const Medication = models.Medication || model("Medication", MedicationSchema);

export default Medication;
