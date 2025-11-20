import express from "express";
import Roommate from "../model/roommates.js";
import bcrypt from "bcryptjs";   // ✔ FIXED import

const router = express.Router();

// GET all roommates
router.get("/", async (req, res) => {
  try {
    console.log("Fetching roommates");
    const roommates = await Roommate.find();
    res.json(roommates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/profile/:email", async (req, res) => {
  try {
    const user = await Roommate.findOne({ email: req.params.email }).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt for:", email);

    const user = await Roommate.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    // ✔ FIXED bcrypt compare
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    res.json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
      },
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});


// REGISTER route
router.post("/register", async (req, res) => {
  try {
    console.log("REGISTER BODY --->", req.body);

    const {
      name,
      email,
      password,
      confirmPassword,
      location,
      rent,
      place,
      choosingFactor,
      dailyRoutine,
      socialActivity,
      expenseSharing,
      dealBreakerQuality,
      hobbiesImportance,
    } = req.body;

    // password match check
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // email already exists?
    const existingUser = await Roommate.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // ✔ FIXED bcrypt hash
    const hashedPassword = await bcrypt.hash(password, 10);

    // save user
    const newRoommate = new Roommate({
      name,
      email,
      password: hashedPassword,
      location,
      rent,
      place,
      choosingFactor,
      dailyRoutine,
      socialActivity,
      expenseSharing,
      dealBreakerQuality,
      hobbiesImportance,
    });

    await newRoommate.save();

    res.json({ message: "Registered successfully!" });

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});


// DELETE route
router.delete("/:id", async (req, res) => {
  try {
    await Roommate.findByIdAndDelete(req.params.id);
    res.json({ message: "Roommate deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;