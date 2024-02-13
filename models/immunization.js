import { Schema, model, models } from "mongoose";

const ImmunizationSchema = new Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
});

const Immunization = models.Immunization || model("Immunization", ImmunizationSchema);

export default Immunization;
