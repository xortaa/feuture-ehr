import { Schema, model, models } from "mongoose";

const TestResultSchema = new Schema({
  testName: {
    type: String,
  },
  result: {
    type: String,
  },
});

const LabSchema = new Schema({
  results: [TestResultSchema],
  date: { 
    type: Date, 
  },
});

const Lab = models.Lab || model("Lab", LabSchema);

export default Lab;
