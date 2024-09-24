import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createSsiga = async (data, userId) => {
  return prisma.ssiga.create({
    data: {
      ...data,
      updatedBy: { connect: { id: userId } },
    },
  });
};

const getMasiga = async () => {
  return prisma.ssiga.findMany();
};

const getSsigaById = async (id) => {
  return prisma.ssiga.findUnique({ where: { id } });
};

const updateSsiga = async (id, data, userId) => {
  return prisma.ssiga.update({
    where: { id },
    data: {
      ...data,
      updatedBy: { connect: { id: userId } },
      lastUpdated: new Date(),
    },
  });
};

const deleteSsiga = async (id) => {
  return prisma.ssiga.delete({ where: { id } });
};

const addEditorToSsiga = async (ssigaId, userId) => {
  return prisma.ssiga.update({
    where: { id: ssigaId },
    data: {
      editors: { connect: { id: userId } },
    },
  });
};

const addModeratorToSsiga = async (ssigaId, userId) => {
  return prisma.ssiga.update({
    where: { id: ssigaId },
    data: {
      moderators: { connect: { id: userId } },
    },
  });
};

export default {
  createSsiga,
  getMasiga,
  getSsigaById,
  updateSsiga,
  deleteSsiga,
  addEditorToSsiga,
  addModeratorToSsiga,
};
