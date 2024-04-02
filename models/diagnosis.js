import { Schema, model, models } from "mongoose";

const DiagnosisSchema = new Schema({
  impairedSkinIntegrity: {
    type: String,
    enum: ["Yes", "No", "Mild", "Moderate", "Severe"],
  },
  pain: {
    type: String,
    enum: ["Yes", "No", "Mild", "Moderate", "Severe"],
  },
  riskForInfection: {
    type: String,
    enum: ["Yes", "No", "Low", "Moderate", "High"],
  },
  otherDiagnoses: {
    type: String,
  },
});

const Diagnosis = models.Diagnosis || model("Diagnosis", DiagnosisSchema);

export default Diagnosis;

// For the Diagnosis section, you can structure it as follows:

// Impaired Skin Integrity:

// Checkbox or dropdown menu with options (e.g., Yes/No, Mild/Moderate/Severe)
// Pain:

// Checkbox or dropdown menu with options (e.g., Yes/No, Mild/Moderate/Severe)
// Risk for Infection:

// Checkbox or dropdown menu with options (e.g., Yes/No, Low/Moderate/High)
// Other Diagnoses:

// Text input field for any additional diagnoses or notes
// This structure allows for the assessment of common diagnoses related to skin injuries and provides flexibility for including any other relevant diagnoses or notes. Adjustments can be made based on specific requirements or additional diagnoses needed for the assessment.
