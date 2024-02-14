import { Schema, model, models } from "mongoose";

const socialHxSchema = new Schema({
  occupation: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  livingSituation: {
    type: String,
  },
  educationalBackground: {
    type: String,
  },
  financialStatus: {
    type: String,
  },
  substanceUse: {
    type: String,
  },
  dietAndExercise: {
    type: String,
  },
  culturalAndReligiousBackground: {
    type: String,
  },
  hobbiesAndInterests: {
    type: String,
  },
});

const socialHx = models.socialHx || model("socialHx", socialHxSchema);

export default socialHx;
