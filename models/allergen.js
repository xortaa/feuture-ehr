import { Schema, model, models } from "mongoose";

const AllergenSchema = new Schema({
  allergenName: {
    type: String,
  },
  reaction: {
    type: String,
  },
  severity: {
    type: Number,
  },
  Onset: {
    type: Date,
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
});

const Allergen = models.Allergen || model("Allergen", AllergenSchema);

export default Allergen;
