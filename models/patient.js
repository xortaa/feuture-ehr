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
});

const Patient = models.Patient || model("Patient", PatientSchema);

export default Patient;
