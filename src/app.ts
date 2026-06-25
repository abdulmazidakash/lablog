import express from "express";
import cors from "cors";
import routes from "./routes";
import globalErrorHandler from "./utils/globalErrorHandler";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", routes);

app.use(globalErrorHandler);

export default app;