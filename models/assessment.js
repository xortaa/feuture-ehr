import { Schema, model, models } from "mongoose";

const AssessmentSchema = new Schema({
  subjective: {
    type: String,
  },
  objective: {
    type: String,
  },
  decidingTrigger: {
    type: String,
  },
});

const Assessment = models.Assessment || model("Assessment", AssessmentSchema);

export default Assessment;