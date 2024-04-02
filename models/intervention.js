import { Schema, model, models } from "mongoose";

const InterventionSchema = new Schema({
  intervention: {
    type: String,
  },
});

const Intervention = models.Intervention || model("Intervention", InterventionSchema);

export default Intervention;
