import { createKika as _createKika, getKikas as _getKikas, getKikaById as _getKikaById, updateKika as _updateKika, deleteKika as _deleteKika, addEditorToKika as _addEditorToKika, addModeratorToKika as _addModeratorToKika } from '../services/kikaService';

const createKika = async (req, res) => {
  try {
    const kika = await _createKika(req.body, req.user.id);
    res.status(201).json(kika);
  } catch (error) {
    res.status(500).json({ message: 'Error creating kika', error });
  }
};

const getKikas = async (req, res) => {
  try {
    const kikas = await _getKikas();
    res.json(kikas);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching kikas', error });
  }
};

const getKikaById = async (req, res) => {
  try {
    const kika = await _getKikaById(Number(req.params.id));
    if (kika) {
      res.json(kika);
    } else {
      res.status(404).json({ message: 'Kika not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching kika', error });
  }
};

const updateKika = async (req, res) => {
  try {
    const kika = await _updateKika(Number(req.params.id), req.body, req.user.id);
    res.json(kika);
  } catch (error) {
    res.status(500).json({ message: 'Error updating kika', error });
  }
};

const deleteKika = async (req, res) => {
  try {
    await _deleteKika(Number(req.params.id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting kika', error });
  }
};

const addEditorToKika = async (req, res) => {
  try {
    const kika = await _addEditorToKika(Number(req.params.id), Number(req.body.userId));
    res.json(kika);
  } catch (error) {
    res.status(500).json({ message: 'Error adding editor to kika', error });
  }
};

const addModeratorToKika = async (req, res) => {
  try {
    const kika = await _addModeratorToKika(Number(req.params.id), Number(req.body.userId));
    res.json(kika);
  } catch (error) {
    res.status(500).json({ message: 'Error adding moderator to kika', error });
  }
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
