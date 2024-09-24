import { PrismaClient } from '@prisma/client';
import { hash, compare } from 'bcrypt';

const prisma = new PrismaClient();

const createUser = async (username, password, role) => {
  const hashedPassword = await hash(password, 10);
  return prisma.user.create({
    data: {
      username,
      password: hashedPassword,
      role,
    },
  });
};

const getUserByUsername = async (username) => {
  return prisma.user.findUnique({ where: { username } });
};

const validatePassword = async (user, password) => {
  return compare(password, user.password);
};

const getUserById = async (id) => {
  return prisma.user.findUnique({ where: { id } });
};

const updateUserRole = async (id, role) => {
  return prisma.user.update({
    where: { id },
    data: { role },
  });
};

export default {
  createUser,
  getUserByUsername,
  validatePassword,
  getUserById,
  updateUserRole,
};
