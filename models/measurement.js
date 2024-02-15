import { Schema, model, models } from "mongoose";

const MeasurementSchema = new Schema({
  height: {
    type: String,
  },
  weight: {
    type: String,
  },
  bmi: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Measurement = models.Measurement || model("Measurement", MeasurementSchema);

export default Measurement;
