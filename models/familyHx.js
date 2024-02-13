import { Schema, model, models } from "mongoose";

const FamilyHxSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  relationship: {
    type: String,
  },
  age: {
    type: Number,
  },
  relatedDiseases: {
    type: String,
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
});

const FamilyHx = models.FamilyHx || model("FamilyHx", FamilyHxSchema);

export default FamilyHx;
