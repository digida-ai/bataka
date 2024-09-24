const express = require('express');
const authController = require('../controllers/authController');
const kikaController = require('../controllers/kikaController');
const mutubaController = require('../controllers/mutubaController');
const ssigaController = require('../controllers/ssigaController');
const lunyiririController = require('../controllers/lunyiririController');
const luggyaController = require('../controllers/luggyaController');
const enjuController = require('../controllers/enjuController');
const { authenticateJWT, authorizeRole } = require('../middleware/auth');
const { Role } = require('../types');

const router = express.Router();

// Auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Kika routes
router.post('/kikas', authenticateJWT, authorizeRole([Role.ADMIN, Role.KIKAEDITOR]), kikaController.createKika);
router.get('/kikas', authenticateJWT, kikaController.getKikas);
router.get('/kikas/:id', authenticateJWT, kikaController.getKikaById);
router.put('/kikas/:id', authenticateJWT, authorizeRole([Role.ADMIN, Role.KIKAEDITOR]), kikaController.updateKika);
router.delete('/kikas/:id', authenticateJWT, authorizeRole([Role.ADMIN]), kikaController.deleteKika);
router.post('/kikas/:id/editors', authenticateJWT, authorizeRole([Role.ADMIN, Role.KIKAMOD]), kikaController.addEditorToKika);
router.post('/kikas/:id/moderators', authenticateJWT, authorizeRole([Role.ADMIN]), kikaController.addModeratorToKika);

// Add similar routes for Mutuba, Ssiga, Lunyiriri, Luggya, and Enju

//Mutuba Routes
router.post('/mituba', authenticateJWT, authorizeRole([Role.ADMIN, Role.MUTUBAEDITOR]), mutubaController.createMutuba);
router.get('/mituba', authenticateJWT, mutubaController.getMituba);
router.get('/mituba/:id', authenticateJWT, mutubaController.getMutubaById);
router.put('/mituba/:id', authenticateJWT, authorizeRole([Role.ADMIN, Role.MUTUBAEDITOR]), mutubaController.updateMutuba);
router.delete('/mituba/:id', authenticateJWT, authorizeRole([Role.ADMIN]), mutubaController.deleteMutuba);
router.post('/mituba/:id/editors', authenticateJWT, authorizeRole([Role.ADMIN, Role.MUTUBAMOD]), mutubaController.addEditorToMutuba);
router.post('/mituba/:id/moderators', authenticateJWT, authorizeRole([Role.ADMIN]), mutubaController.addModeratorToMutuba);

//Ssiga Routes
router.post('/masiga', authenticateJWT, authorizeRole([Role.ADMIN, Role.SSIGAEDITOR]), ssigaController.createSsiga);
router.get('/masiga', authenticateJWT, ssigaController.getMasiga);
router.get('/masiga/:id', authenticateJWT, ssigaController.getSsigaById);
router.put('/masiga/:id', authenticateJWT, authorizeRole([Role.ADMIN, Role.SSIGAEDITOR]), ssigaController.updateSsiga);
router.delete('/masiga/:id', authenticateJWT, authorizeRole([Role.ADMIN]), ssigaController.deleteSsiga);
router.post('/masiga/:id/editors', authenticateJWT, authorizeRole([Role.ADMIN, Role.SSIGAMOD]), ssigaController.addEditorToSsiga);

//Lunyiriri Routes
router.post('/nnyiriri', authenticateJWT, authorizeRole([Role.ADMIN, Role.LUNYIRIRIEDITOR]), lunyiririController.createLunyiriri);
router.get('/nnyiriri', authenticateJWT, lunyiririController.getNnyiriri);
router.get('/nnyiriri/:id', authenticateJWT, lunyiririController.getLunyiririById);
router.put('/nnyiriri/:id', authenticateJWT, authorizeRole([Role.ADMIN, Role.LUNYIRIRIEDITOR]), lunyiririController.updateLunyiriri);
router.delete('/nnyiriri/:id', authenticateJWT, authorizeRole([Role.ADMIN]), lunyiririController.deleteLunyiriri);
router.post('/nnyiriri/:id/editors', authenticateJWT, authorizeRole([Role.ADMIN, Role.LUNYIRIRIMOD]), lunyiririController.addEditorToLunyiriri);

//Luggya Routes
router.post('/mpya', authenticateJWT, authorizeRole([Role.ADMIN, Role.LUGGYAEDITOR]), luggyaController.createLuggya);
router.get('/mpya', authenticateJWT, luggyaController.getMpya);
router.get('/mpya/:id', authenticateJWT, luggyaController.getLuggyaById);
router.put('/mpya/:id', authenticateJWT, authorizeRole([Role.ADMIN, Role.LUGGYAEDITOR]), luggyaController.updateLuggya);

//Enju Routes
router.post('/mayumba', authenticateJWT, authorizeRole([Role.ADMIN, Role.ENJUEDITOR]), enjuController.createEnju);
router.get('/mayumba', authenticateJWT, enjuController.getMayumba);
router.get('/mayumba/:id', authenticateJWT, enjuController.getEnjuById);
router.put('/mayumba/:id', authenticateJWT, authorizeRole([Role.ADMIN, Role.ENJUEDITOR]), enjuController.updateEnju);

module.exports = router;
