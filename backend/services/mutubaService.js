import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createMutuba = async (data, userId) => {
  return prisma.mutuba.create({
    data: {
      ...data,
      updatedBy: { connect: { id: userId } },
    },
  });
};

const getMituba = async () => {
  return prisma.mutuba.findMany();
};

const getMutubaById = async (id) => {
  return prisma.mutuba.findUnique({ where: { id } });
};

const updateMutuba = async (id, data, userId) => {
  return prisma.mutuba.update({
    where: { id },
    data: {
      ...data,
      updatedBy: { connect: { id: userId } },
      lastUpdated: new Date(),
    },
  });
};

const deleteMutuba = async (id) => {
  return prisma.mutuba.delete({ where: { id } });
};

const addEditorToMutuba = async (mutubaId, userId) => {
  return prisma.mutuba.update({
    where: { id: mutubaId },
    data: {
      editors: { connect: { id: userId } },
    },
  });
};

const addModeratorToMutuba = async (mutubaId, userId) => {
  return prisma.mutuba.update({
    where: { id: mutubaId },
    data: {
      moderators: { connect: { id: userId } },
    },
  });
};

export default {
  createMutuba,
  getMituba,
  getMutubaById,
  updateMutuba,
  deleteMutuba,
  addEditorToMutuba,
  addModeratorToMutuba,
};
