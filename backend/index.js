require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:8080",
    process.env.FRONTEND_URL
  ].filter(Boolean),
  methods: ["GET", "POST"],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", require("./routes/contact"));
app.use("/api/quote", require("./routes/quote"));

app.get("/health", (_, res) => res.json({ status: "ok", timestamp: new Date().toISOString() }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Jigisha Group API running on http://localhost:${PORT}`);
});
