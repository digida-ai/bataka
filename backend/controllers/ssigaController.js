import { createSsiga as _createSsiga, getMasiga as _getMasiga, getSsigaById as _getSsigaById, updateSsiga as _updateSsiga, deleteSsiga as _deleteSsiga, addEditorToSsiga as _addEditorToSsiga, addModeratorToSsiga as _addModeratorToSsiga } from '../services/masigaervice';

const createSsiga = async (req, res) => {
  try {
    const ssiga = await _createSsiga(req.body, req.user.id);
    res.status(201).json(ssiga);
  } catch (error) {
    res.status(500).json({ message: 'Error creating ssiga', error });
  }
};

const getMasiga = async (req, res) => {
  try {
    const masiga = await _getMasiga();
    res.json(masiga);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching masiga', error });
  }
};

const getSsigaById = async (req, res) => {
  try {
    const ssiga = await _getSsigaById(Number(req.params.id));
    if (ssiga) {
      res.json(ssiga);
    } else {
      res.status(404).json({ message: 'Ssiga not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ssiga', error });
  }
};

const updateSsiga = async (req, res) => {
  try {
    const ssiga = await _updateSsiga(Number(req.params.id), req.body, req.user.id);
    res.json(ssiga);
  } catch (error) {
    res.status(500).json({ message: 'Error updating ssiga', error });
  }
};

const deleteSsiga = async (req, res) => {
  try {
    await _deleteSsiga(Number(req.params.id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting ssiga', error });
  }
};

const addEditorToSsiga = async (req, res) => {
  try {
    const ssiga = await _addEditorToSsiga(Number(req.params.id), Number(req.body.userId));
    res.json(ssiga);
  } catch (error) {
    res.status(500).json({ message: 'Error adding editor to ssiga', error });
  }
};

const addModeratorToSsiga = async (req, res) => {
  try {
    const ssiga = await _addModeratorToSsiga(Number(req.params.id), Number(req.body.userId));
    res.json(ssiga);
  } catch (error) {
    res.status(500).json({ message: 'Error adding moderator to ssiga', error });
  }
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
