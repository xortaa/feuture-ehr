import { Schema, model, models } from "mongoose";

const socialHxSchema = new Schema({
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
  Patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
});

const socialHx = models.socialHx || model("socialHx", socialHxSchema);

export default socialHx;
