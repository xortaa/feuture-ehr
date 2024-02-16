import { Schema, model, models } from "mongoose";

const IntakeOutputSchema = new Schema({
  intakeTime: {
    type: String,
  },
  intakeType: {
    type: String,
  },
  intakeAmount: {
    type: String,
  },
  outputTime: {
    type: String,
  },
  outputType: {
    type: String,
  },
  outputAmount: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const IntakeOutput = models.IntakeOutput || model("IntakeOutput", IntakeOutputSchema);

export default IntakeOutput;
