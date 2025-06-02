import * as dotenv from "dotenv";
import type Env from "../types/type.env";
dotenv.config();

const ENV: Env = {
  PORT: Number(process.env.PORT) || 3000,
};
export default ENV;
