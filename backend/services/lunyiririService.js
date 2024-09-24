import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createLunyiriri = async (data, userId) => {
  return prisma.lunyiriri.create({
    data: {
      ...data,
      updatedBy: { connect: { id: userId } },
    },
  });
};

const getNnyiriri = async () => {
  return prisma.lunyiriri.findMany();
};

const getLunyiririById = async (id) => {
  return prisma.lunyiriri.findUnique({ where: { id } });
};

const updateLunyiriri = async (id, data, userId) => {
  return prisma.lunyiriri.update({
    where: { id },
    data: {
      ...data,
      updatedBy: { connect: { id: userId } },
      lastUpdated: new Date(),
    },
  });
};

const deleteLunyiriri = async (id) => {
  return prisma.lunyiriri.delete({ where: { id } });
};

const addEditorToLunyiriri = async (lunyiririId, userId) => {
  return prisma.lunyiriri.update({
    where: { id: lunyiririId },
    data: {
      editors: { connect: { id: userId } },
    },
  });
};

const addModeratorToLunyiriri = async (lunyiririId, userId) => {
  return prisma.lunyiriri.update({
    where: { id: lunyiririId },
    data: {
      moderators: { connect: { id: userId } },
    },
  });
};

export default {
  createLunyiriri,
  getNnyiriri,
  getLunyiririById,
  updateLunyiriri,
  deleteLunyiriri,
  addEditorToLunyiriri,
  addModeratorToLunyiriri,
};
