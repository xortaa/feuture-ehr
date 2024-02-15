import { Schema, model, models } from "mongoose";

const VitalSignSchema = new Schema({
  date: {
    type: Date,
  },
  temp: {
    type: String,
  },
  pulse: {
    type: String,
  },
  bp: {
    type: String,
  },
  position: {
    type: String,
  },
  respirations: {
    type: String,
  },
  spo2: {
    type: String,
  },
  oxygenSource: {
    type: String,
  },
});

const VitalSign = models.VitalSign || model("VitalSign", VitalSignSchema);

export default VitalSign;
