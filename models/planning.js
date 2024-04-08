import { Schema, model, models } from "mongoose";

const PlanningSchema = new Schema({
  shortTermGoal: {
    type: String,
  },
  longTermGoal: {
    type: String,
  },
  cognitiveObjectives: {
    type: String,
  },
  psychomotorObjectives: {
    type: String,
  },
  affectiveObjectives: {
    type: String,
  },
  decidingTriggers: { 
    type: String,
  },
});

const Planning = models.Planning || model("Planning", PlanningSchema);

export default Planning;

// For the Planning section, you can structure it as follows:

// Short Term Goals:
// 1. Relieve Pain:
//    - Action plan (e.g., administer pain medication, apply topical analgesics, use cold compress, etc.)

// 2. Infection Prevention:
//    - Action plan (e.g., clean and dress wounds appropriately, administer prophylactic antibiotics if necessary, educate patient on proper wound care, etc.)

// Long Term Goals:
// 1. Treatment:
//    - Action plan (e.g., wound debridement, suturing, surgical intervention, etc. based on specific injury)

// 2. Cure:
//    - Action plan (e.g., monitor healing progress, adjust treatment plan as necessary, continue follow-up care, etc.)

// 3. Promote [redacted]:
//    - Action plan (specific actions tailored to promoting the desired outcome, depending on what "redacted" refers to)

// This structure provides clear goals and action plans for both short-term relief and long-term treatment and cure, as well as promoting the desired outcome. Adjustments can be made based on the specific needs and circumstances of the patient's injury and condition.
