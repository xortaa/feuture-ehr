import { Schema, model, models } from "mongoose";

const PatientSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  birthdate: {
    type: Date,
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
  address: {
    type: String,
  },
  dateOfAdmission: {
    type: Date,
  },
  roomNumber: {
    type: String,
  },
  bedNumber: { 
    type: String,
  },
  chiefComplaint: {
    type: String,
  },
  admittingDiagnosis: {
    type: String,
  },
  otherDiagnoses: {
    type: String,
  },
  allergies: {
    type: String,
  },
  reactionToAllergies: {
    type: String,
  },
  emergencyContactName: {
    type: String,
  },
  emergencyContactRelationship: {
    type: String,
  },
  emergencyContactAddress: {
    type: String,
  },
  emergencyContactPhone: {
    type: String,
  },
});

const Patient = models.Patient || model("Patient", PatientSchema);

export default Patient;
