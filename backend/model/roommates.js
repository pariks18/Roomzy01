import mongoose from "mongoose";

const roommateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: { type: String, required: true },   // <-- ADDED PASSWORD FIELD
  
  location: { type: String, required: true },
  rent: { type: String, required: true },
  place: { type: String, required: true },

  choosingFactor: { type: String },
  dailyRoutine: { type: String },
  socialActivity: { type: String },
  expenseSharing: { type: String },
  dealBreakerQuality: { type: String },
  hobbiesImportance: { type: String },
});

export default mongoose.model("Roommate", roommateSchema);