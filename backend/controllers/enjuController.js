import { createEnju as _createEnju, getMayumba as _getMayumba, getEnjuById as _getEnjuById, updateEnju as _updateEnju, deleteEnju as _deleteEnju, addEditorToEnju as _addEditorToEnju, addModeratorToEnju as _addModeratorToEnju } from '../services/mayumbaervice';

const createEnju = async (req, res) => {
  try {
    const enju = await _createEnju(req.body, req.user.id);
    res.status(201).json(enju);
  } catch (error) {
    res.status(500).json({ message: 'Error creating enju', error });
  }
};

const getMayumba = async (req, res) => {
  try {
    const mayumba = await _getMayumba();
    res.json(mayumba);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mayumba', error });
  }
};

const getEnjuById = async (req, res) => {
  try {
    const enju = await _getEnjuById(Number(req.params.id));
    if (enju) {
      res.json(enju);
    } else {
      res.status(404).json({ message: 'Enju not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enju', error });
  }
};

const updateEnju = async (req, res) => {
  try {
    const enju = await _updateEnju(Number(req.params.id), req.body, req.user.id);
    res.json(enju);
  } catch (error) {
    res.status(500).json({ message: 'Error updating enju', error });
  }
};

const deleteEnju = async (req, res) => {
  try {
    await _deleteEnju(Number(req.params.id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting enju', error });
  }
};

const addEditorToEnju = async (req, res) => {
  try {
    const enju = await _addEditorToEnju(Number(req.params.id), Number(req.body.userId));
    res.json(enju);
  } catch (error) {
    res.status(500).json({ message: 'Error adding editor to enju', error });
  }
};

const addModeratorToEnju = async (req, res) => {
  try {
    const enju = await _addModeratorToEnju(Number(req.params.id), Number(req.body.userId));
    res.json(enju);
  } catch (error) {
    res.status(500).json({ message: 'Error adding moderator to enju', error });
  }
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
