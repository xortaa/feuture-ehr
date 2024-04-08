import { Schema, model, models } from "mongoose";

const EvaluationSchema = new Schema({
  met: {
    type: String,
  },
  unmet: {
    type: String,
  },
  decidingTriggers: {
    type: String,
  },
});

const Evaluation = models.Evaluation || model("Evaluation", EvaluationSchema);

export default Evaluation;

// EVALUATION
// • MET 
// • UNMET
// • Deciding Triggers
