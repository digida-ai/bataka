import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createEnju = async (data, userId) => {
  return prisma.enju.create({
    data: {
      ...data,
      updatedBy: { connect: { id: userId } },
    },
  });
};

const getMayumba = async () => {
  return prisma.enju.findMany();
};

const getEnjuById = async (id) => {
  return prisma.enju.findUnique({ where: { id } });
};

const updateEnju = async (id, data, userId) => {
  return prisma.enju.update({
    where: { id },
    data: {
      ...data,
      updatedBy: { connect: { id: userId } },
      lastUpdated: new Date(),
    },
  });
};

const deleteEnju = async (id) => {
  return prisma.enju.delete({ where: { id } });
};

const addEditorToEnju = async (enjuId, userId) => {
  return prisma.enju.update({
    where: { id: enjuId },
    data: {
      editors: { connect: { id: userId } },
    },
  });
};

const addModeratorToEnju = async (enjuId, userId) => {
  return prisma.enju.update({
    where: { id: enjuId },
    data: {
      moderators: { connect: { id: userId } },
    },
  });
};

export default {
  createEnju,
  getMayumba,
  getEnjuById,
  updateEnju,
  deleteEnju,
  addEditorToEnju,
  addModeratorToEnju,
};
