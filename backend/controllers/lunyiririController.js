import { createLunyiriri as _createLunyiriri, getNnyiriri as _getNnyiriri, getLunyiririById as _getLunyiririById, updateLunyiriri as _updateLunyiriri, deleteLunyiriri as _deleteLunyiriri, addEditorToLunyiriri as _addEditorToLunyiriri, addModeratorToLunyiriri as _addModeratorToLunyiriri } from '../services/nnyiririervice';

const createLunyiriri = async (req, res) => {
  try {
    const lunyiriri = await _createLunyiriri(req.body, req.user.id);
    res.status(201).json(lunyiriri);
  } catch (error) {
    res.status(500).json({ message: 'Error creating lunyiriri', error });
  }
};

const getNnyiriri = async (req, res) => {
  try {
    const nnyiriri = await _getNnyiriri();
    res.json(nnyiriri);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching nnyiriri', error });
  }
};

const getLunyiririById = async (req, res) => {
  try {
    const lunyiriri = await _getLunyiririById(Number(req.params.id));
    if (lunyiriri) {
      res.json(lunyiriri);
    } else {
      res.status(404).json({ message: 'Lunyiriri not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lunyiriri', error });
  }
};

const updateLunyiriri = async (req, res) => {
  try {
    const lunyiriri = await _updateLunyiriri(Number(req.params.id), req.body, req.user.id);
    res.json(lunyiriri);
  } catch (error) {
    res.status(500).json({ message: 'Error updating lunyiriri', error });
  }
};

const deleteLunyiriri = async (req, res) => {
  try {
    await _deleteLunyiriri(Number(req.params.id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting lunyiriri', error });
  }
};

const addEditorToLunyiriri = async (req, res) => {
  try {
    const lunyiriri = await _addEditorToLunyiriri(Number(req.params.id), Number(req.body.userId));
    res.json(lunyiriri);
  } catch (error) {
    res.status(500).json({ message: 'Error adding editor to lunyiriri', error });
  }
};

const addModeratorToLunyiriri = async (req, res) => {
  try {
    const lunyiriri = await _addModeratorToLunyiriri(Number(req.params.id), Number(req.body.userId));
    res.json(lunyiriri);
  } catch (error) {
    res.status(500).json({ message: 'Error adding moderator to lunyiriri', error });
  }
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
