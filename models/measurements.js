import { Schema, model, models } from "mongoose";

const MeasurementsSchema = new Schema({
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  bmi: {
    type: Number,
  },
  Patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
});

const Measurements = models.Measurements || model("Measurements", MeasurementsSchema);

export default Measurements;
