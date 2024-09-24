import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createLuggya = async (data, userId) => {
  return prisma.luggya.create({
    data: {
      ...data,
      updatedBy: { connect: { id: userId } },
    },
  });
};

const getMpya = async () => {
  return prisma.luggya.findMany();
};

const getLuggyaById = async (id) => {
  return prisma.luggya.findUnique({ where: { id } });
};

const updateLuggya = async (id, data, userId) => {
  return prisma.luggya.update({
    where: { id },
    data: {
      ...data,
      updatedBy: { connect: { id: userId } },
      lastUpdated: new Date(),
    },
  });
};

const deleteLuggya = async (id) => {
  return prisma.luggya.delete({ where: { id } });
};

const addEditorToLuggya = async (luggyaId, userId) => {
  return prisma.luggya.update({
    where: { id: luggyaId },
    data: {
      editors: { connect: { id: userId } },
    },
  });
};

const addModeratorToLuggya = async (luggyaId, userId) => {
  return prisma.luggya.update({
    where: { id: luggyaId },
    data: {
      moderators: { connect: { id: userId } },
    },
  });
};

export default {
  createLuggya,
  getMpya,
  getLuggyaById,
  updateLuggya,
  deleteLuggya,
  addEditorToLuggya,
  addModeratorToLuggya,
};
