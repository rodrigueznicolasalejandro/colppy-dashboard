import express from "express";
import cors from "cors";

import generateMetrics from "./utils/generateMetrics.js";
import generateKpis from "./utils/generateKpis.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/metrics", (req, res) => {
  const metricsArray = generateMetrics(20);
  res.json(metricsArray);
});

app.get("/kpis", (req, res) => {
  const kpis = generateKpis();
  res.json({ kpis });
});

app.listen(4000, () =>
  console.log("Mock API running on http://localhost:4000")
);

