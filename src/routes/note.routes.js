// const express = require('express');
// const router = express.Router();
// const noteController = require('../controllers/note.controller');
// const authenticate = require('../middleware/auth');

// // ✅ Create a new note
// router.post('/api/notes', authenticate, noteController.createNote);

// // ✅ Get all notes for logged-in user
// router.get('/api/notes', authenticate, noteController.getAllNotes);

// // ✅ Get a single note by ID
// router.get('/api/notes/:id', authenticate, noteController.getNoteById);

// // ✅ Update a note
// router.put('/api/notes/:id', authenticate, noteController.updateNote);

// // ✅ Delete a note
// router.delete('/api/notes/:id', authenticate, noteController.deleteNote);

// module.exports = router;


const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');
const { verifyToken } = require('../middleware/auth.middleware');

/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: API for managing notes
 */

/**
 * @swagger
 * /api/notes:
 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Note created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
router.post('/api/notes', verifyToken, noteController.createNote);

/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Get all notes of the logged-in user
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of notes
 *       401:
 *         description: Unauthorized
 */
router.get('/api/notes', verifyToken, noteController.getAllNotes);

/**
 * @swagger
 * /api/notes/{id}:
 *   get:
 *     summary: Get a single note by ID
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Note ID
 *     responses:
 *       200:
 *         description: Note found
 *       404:
 *         description: Note not found
 *       401:
 *         description: Unauthorized
 */
router.get('/api/notes/:id', verifyToken, noteController.getNoteById);

/**
 * @swagger
 * /api/notes/{id}:
 *   put:
 *     summary: Update a note
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Note ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Note updated
 *       404:
 *         description: Note not found
 *       401:
 *         description: Unauthorized
 */
router.put('/api/notes/:id', verifyToken, noteController.updateNote);

/**
 * @swagger
 * /api/notes/{id}:
 *   delete:
 *     summary: Delete a note
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Note ID
 *     responses:
 *       200:
 *         description: Note deleted
 *       404:
 *         description: Note not found
 *       401:
 *         description: Unauthorized
 */
router.delete('/api/notes/:id', verifyToken, noteController.deleteNote);

// module.exports = router;

module.exports = (app) => {
  app.use('/', router);
};

