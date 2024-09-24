import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createKika = async (data, userId) => {
  return prisma.kika.create({
    data: {
      ...data,
      updatedBy: { connect: { id: userId } },
    },
  });
};

const getKikas = async () => {
  return prisma.kika.findMany();
};

const getKikaById = async (id) => {
  return prisma.kika.findUnique({ where: { id } });
};

const updateKika = async (id, data, userId) => {
  return prisma.kika.update({
    where: { id },
    data: {
      ...data,
      updatedBy: { connect: { id: userId } },
      lastUpdated: new Date(),
    },
  });
};

const deleteKika = async (id) => {
  return prisma.kika.delete({ where: { id } });
};

const addEditorToKika = async (kikaId, userId) => {
  return prisma.kika.update({
    where: { id: kikaId },
    data: {
      editors: { connect: { id: userId } },
    },
  });
};

const addModeratorToKika = async (kikaId, userId) => {
  return prisma.kika.update({
    where: { id: kikaId },
    data: {
      moderators: { connect: { id: userId } },
    },
  });
};

export default {
  createKika,
  getKikas,
  getKikaById,
  updateKika,
  deleteKika,
  addEditorToKika,
  addModeratorToKika,
};
