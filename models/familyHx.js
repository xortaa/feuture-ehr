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
    type: String,
  },
  relatedDiseases: {
    type: String,
  },
});

const FamilyHx = models.FamilyHx || model("FamilyHx", FamilyHxSchema);

export default FamilyHx;
