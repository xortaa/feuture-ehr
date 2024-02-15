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
    type: String,
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
  phoneNumber: { 
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
    type: String,
  },
  emergencyContactFirstName: {
    type: String,
  },
  emergencyContactLastName: {
    type: String,
  },
  emergencyContactRelationship: {
    type: String,
  },
  emergencyContactNumber: {
    type: String,
  },
  allergen: {
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
  measurement: { 
    type: [Schema.Types.ObjectId],
    ref: "Measurement" 
  },
  medication: {
    type: [Schema.Types.ObjectId],
    ref: "Medication",
  },
  socialHx: {
    type: Schema.Types.ObjectId,
    ref: "SocialHx",
  },
  vitalSign: {
    type: [Schema.Types.ObjectId],
    ref: "VitalSign",
  },
});

const Patient = models.Patient || model("Patient", PatientSchema);

export default Patient;
