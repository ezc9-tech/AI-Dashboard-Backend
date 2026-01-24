import { prisma } from "../../config/db";
import { comparePassword, hashPassword } from "../../utils/hash";
import { signToken } from "../../utils/jwt";

export const registerUser = async (
  email: string,
  password: string,
  name?: string
) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  return user;
};

export const loginUser = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        throw new Error("User does not exist at this email");
    }

    const correctPassword = await comparePassword(password, user.password);
    
    if (!correctPassword) {
        throw new Error("Invalid Password");
    }

    const token = await signToken({userId: user.id, role: user.role});

    return {token, user}

}
