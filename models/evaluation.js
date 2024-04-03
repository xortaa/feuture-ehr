import { Schema, model, models } from "mongoose";

const EvaluationSchema = new Schema({
  followUpDate: {
    type: Date,
  },
  followUpTreatment: {
    type: Boolean,
  },
  findings: {
    type: String,
  },
});

const Evaluation = models.Evaluation || model("Evaluation", EvaluationSchema);

export default Evaluation;
