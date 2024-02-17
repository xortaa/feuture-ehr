import { Schema, model, models } from "mongoose";

const NurseNotesSchema = new Schema({
  date: {
    type: String,
  },
  time: {
    type: String,
  },
  nurseNotes: {
    type: String,
  },
});

const NurseNotes = models.NurseNotes || model("NurseNotes", NurseNotesSchema);

export default NurseNotes;
