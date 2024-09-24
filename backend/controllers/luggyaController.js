import { createLuggya as _createLuggya, getMpya as _getMpya, getLuggyaById as _getLuggyaById, updateLuggya as _updateLuggya, deleteLuggya as _deleteLuggya, addEditorToLuggya as _addEditorToLuggya, addModeratorToLuggya as _addModeratorToLuggya } from '../services/mpyaervice';

const createLuggya = async (req, res) => {
  try {
    const luggya = await _createLuggya(req.body, req.user.id);
    res.status(201).json(luggya);
  } catch (error) {
    res.status(500).json({ message: 'Error creating luggya', error });
  }
};

const getMpya = async (req, res) => {
  try {
    const mpya = await _getMpya();
    res.json(mpya);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mpya', error });
  }
};

const getLuggyaById = async (req, res) => {
  try {
    const luggya = await _getLuggyaById(Number(req.params.id));
    if (luggya) {
      res.json(luggya);
    } else {
      res.status(404).json({ message: 'Luggya not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching luggya', error });
  }
};

const updateLuggya = async (req, res) => {
  try {
    const luggya = await _updateLuggya(Number(req.params.id), req.body, req.user.id);
    res.json(luggya);
  } catch (error) {
    res.status(500).json({ message: 'Error updating luggya', error });
  }
};

const deleteLuggya = async (req, res) => {
  try {
    await _deleteLuggya(Number(req.params.id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting luggya', error });
  }
};

const addEditorToLuggya = async (req, res) => {
  try {
    const luggya = await _addEditorToLuggya(Number(req.params.id), Number(req.body.userId));
    res.json(luggya);
  } catch (error) {
    res.status(500).json({ message: 'Error adding editor to luggya', error });
  }
};

const addModeratorToLuggya = async (req, res) => {
  try {
    const luggya = await _addModeratorToLuggya(Number(req.params.id), Number(req.body.userId));
    res.json(luggya);
  } catch (error) {
    res.status(500).json({ message: 'Error adding moderator to luggya', error });
  }
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
