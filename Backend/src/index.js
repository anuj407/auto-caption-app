import express from "express";
import cors from "cors";
import mediaRoutes from "./routes/media.routes.js";
import path from "path";

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// ✅ serve uploaded files
app.use("/uploads", express.static(path.resolve("uploads")));

app.use("/api/media", mediaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
