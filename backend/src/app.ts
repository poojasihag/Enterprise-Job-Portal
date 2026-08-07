import express from "express";
import router from "./routes/index.ts";
// import cors from "cors";
// import helmet from "helmet";
// import morgan from "morgan";



const app = express();

app.use(express.json());
// app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));

app.use("/api", router);

export default app;