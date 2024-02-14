import { Schema, model, models } from "mongoose";

const VitalSignSchema = new Schema({
  date: {
    type: Date,
  },
  temp: {
    type: Number,
  },
  pulse: {
    type: Number,
  },
  bp: {
    type: String,
  },
  position: {
    type: String,
  },
  respirations: {
    type: Number,
  },
  spo2: {
    type: Number,
  },
  oxygenSource: {
    type: String,
  },
});

const VitalSign = models.VitalSign || model("VitalSign", VitalSignSchema);

export default VitalSign;
