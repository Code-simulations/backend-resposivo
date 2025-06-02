import express from "express";
import cors from "cors";
import morgan from "morgan";
import ENV from "./shader/config/env";
import userRouter from "./users/interface/router/userRouter";
import authRouter from "./auth/interface/routers/auth.route";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(userRouter);
app.use(authRouter);

app.listen(ENV.PORT, () => {
  console.log();
  console.log(`servidor ejecutado en http://localhost:${ENV.PORT}`);
  console.log();
});
