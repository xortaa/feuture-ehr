import { Schema, model, models } from "mongoose";

const CdssSchema = new Schema({
  alert: {
    type: String,
  },
});

const Cdss = models.Cdss || model("Cdss", CdssSchema);

export default Cdss;
