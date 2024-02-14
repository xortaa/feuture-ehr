import { Schema, model, models } from "mongoose";

const SocialHxSchema = new Schema({
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

const SocialHx = models.SocialHx || model("SocialHx", SocialHxSchema);

export default SocialHx;
