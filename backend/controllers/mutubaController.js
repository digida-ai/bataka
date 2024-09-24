import { createMutuba as _createMutuba, getMituba as _getMituba, getMutubaById as _getMutubaById, updateMutuba as _updateMutuba, deleteMutuba as _deleteMutuba, addEditorToMutuba as _addEditorToMutuba, addModeratorToMutuba as _addModeratorToMutuba } from '../services/mitubaervice';

const createMutuba = async (req, res) => {
  try {
    const mutuba = await _createMutuba(req.body, req.user.id);
    res.status(201).json(mutuba);
  } catch (error) {
    res.status(500).json({ message: 'Error creating mutuba', error });
  }
};

const getMituba = async (req, res) => {
  try {
    const mituba = await _getMituba();
    res.json(mituba);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mituba', error });
  }
};

const getMutubaById = async (req, res) => {
  try {
    const mutuba = await _getMutubaById(Number(req.params.id));
    if (mutuba) {
      res.json(mutuba);
    } else {
      res.status(404).json({ message: 'Mutuba not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mutuba', error });
  }
};

const updateMutuba = async (req, res) => {
  try {
    const mutuba = await _updateMutuba(Number(req.params.id), req.body, req.user.id);
    res.json(mutuba);
  } catch (error) {
    res.status(500).json({ message: 'Error updating mutuba', error });
  }
};

const deleteMutuba = async (req, res) => {
  try {
    await _deleteMutuba(Number(req.params.id));
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting mutuba', error });
  }
};

const addEditorToMutuba = async (req, res) => {
  try {
    const mutuba = await _addEditorToMutuba(Number(req.params.id), Number(req.body.userId));
    res.json(mutuba);
  } catch (error) {
    res.status(500).json({ message: 'Error adding editor to mutuba', error });
  }
};

const addModeratorToMutuba = async (req, res) => {
  try {
    const mutuba = await _addModeratorToMutuba(Number(req.params.id), Number(req.body.userId));
    res.json(mutuba);
  } catch (error) {
    res.status(500).json({ message: 'Error adding moderator to mutuba', error });
  }
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
