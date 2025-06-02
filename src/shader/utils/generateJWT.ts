import Jwt from "jsonwebtoken";

export const generateJWT = (id: number) => {
  const payload = { idUser: id };
  const token = Jwt.sign(payload, "MySecretKey", { expiresIn: "4h" });
  return token;
};
