import { Schema, model, models } from "mongoose";

const InterventionSchema = new Schema({
  dependentFacilitative: {
    type: String,
  },
  independentSupplemental: {
    type: String,
  },
  collaborativeDevelopmental: {
    type: String,
  },
  decidingTriggers: {
    type: String,
  },
});

const Intervention = models.Intervention || model("Intervention", InterventionSchema);

export default Intervention;

// INTERVENTION
// • Dependent-Facilitative
// • Independent-Supplemental 
// • Collaborative-Developmental 
// • Deciding Triggers 
