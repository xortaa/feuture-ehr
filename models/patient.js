import { Schema, model, models } from "mongoose";

const PatientSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
  },
  religion: {
    type: String,
  },
  ethnicity: {
    type: String,
  },
  occupation: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  spouseName: {
    type: String,
  },
  numberOfChildren: {
    type: Number,
  },
  emergencyContactName: {
    type: String,
  },
  emergencyContactRelationship: {
    type: String,
  },
  emergencyContactNumber: {
    type: String,
  },
  allergens: {
    type: [Schema.Types.ObjectId],
    ref: "Allergen",
  },
  familyHx: {
    type: [Schema.Types.ObjectId],
    ref: "FamilyHx",
  },
  hpi: {
    type: Schema.Types.ObjectId,
    ref: "HPI",
  },
  immunization: {
    type: [Schema.Types.ObjectId],
    ref: "Immunization",
  },
  lab: {
    type: [Schema.Types.ObjectId],
    ref: "Lab",
  },
  measurements: { 
    type: [Schema.Types.ObjectId],
    ref: "Measurements" 
  },
  medication: {
    type: [Schema.Types.ObjectId],
    ref: "Medication",
  },
  socialHx: {
    type: Schema.Types.ObjectId,
    ref: "SocialHx",
  },
  vitalSigns: {
    type: [Schema.Types.ObjectId],
    ref: "VitalSign",
  },
});

const Patient = models.Patient || model("Patient", PatientSchema);

export default Patient;
