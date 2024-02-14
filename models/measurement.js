import { Schema, model, models } from "mongoose";

const MeasurementSchema = new Schema({
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  bmi: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Measurement = models.Measurement || model("Measurement", MeasurementSchema);

export default Measurement;
