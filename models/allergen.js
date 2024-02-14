import { Schema, model, models } from "mongoose";

const AllergenSchema = new Schema({
  allergenName: {
    type: String,
  },
  reaction: {
    type: String,
  },
  severity: {
    type: String,
  },
  onset: {
    type: Date,
  },
});

const Allergen = models.Allergen || model("Allergen", AllergenSchema);

export default Allergen;
