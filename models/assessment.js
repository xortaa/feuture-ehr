import { Schema, model, models } from "mongoose";

const AssessmentSchema = new Schema({
  method: {
    type: String,
  },
  location: {
    type: String,
  },
  damageCaused: {
    type: String,
  },
  typeOfInjury: {
    type: String,
  },
  locationOfInjury: {
    type: String,
  },
  sizeOfInjury: {
    type: String,
  },
  degreeOfInjury: {
    type: String,
    enum: ["Mild", "Moderate", "Severe"],
  },
  colorOfInjury: {
    type: String,
  },
  drainage: {
    type: String,
    enum: ["None", "Serous", "Purulent"],
  },
});

const Assessment = models.Assessment || model("Assessment", AssessmentSchema);

export default Assessment;

// Sure, here's a text representation of the form structure you can use for the assessments tab:

// 1. Method/Cause of Injury:
//    - Text input field

// 2. Location:
//    - Text input field

// 3. Damage Caused:
//    - Text input field

// 4. Type of Injury:
//    - Dropdown menu with options (e.g., laceration, abrasion, burn, etc.)

// 5. Location of Injury:
//    - Text input field or dropdown menu with body parts

// 6. Size of Injury:
//    - Text input field (e.g., length x width in cm)

// 7. Degree of Injury:
//    - Dropdown menu with options (e.g., mild, moderate, severe)

// 8. Color of Injury:
//    - Text input field or color picker

// 9. Drainage:
//    - Text input field or dropdown menu with options (e.g., none, serous, purulent)

// This structure covers all the elements mentioned in the list provided by the client. Depending on your specific requirements, you might need to adjust or expand this structure.
