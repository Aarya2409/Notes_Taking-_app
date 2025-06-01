const db = require("../models");
const Note = db.Note;

// ✅ Create a new note
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id; // from authenticated token

    const newNote = await Note.create({ title, content, userId });
    res.status(201).json({ message: "Note created", note: newNote });
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Get all notes for logged-in user
exports.getAllNotes = async (req, res) => {
  try {
    const userId = req.user.id;

    const notes = await Note.findAll({ where: { userId } });
    res.json({ notes });
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Get a single note by ID
exports.getNoteById = async (req, res) => {
  try {
    const userId = req.user.id;
    const noteId = req.params.id;

    const note = await Note.findOne({ where: { id: noteId, userId } });
    if (!note) return res.status(404).json({ message: "Note not found" });

    res.json({ note });
  } catch (error) {
    console.error("Error fetching note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Update a note
exports.updateNote = async (req, res) => {
  try {
    const userId = req.user.id;
    const noteId = req.params.id;
    const { title, content } = req.body;

    const note = await Note.findOne({ where: { id: noteId, userId } });
    if (!note) return res.status(404).json({ message: "Note not found" });

    note.title = title || note.title;
    note.content = content || note.content;
    await note.save();

    res.json({ message: "Note updated", note });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const userId = req.user.id;
    const noteId = req.params.id;

    const note = await Note.findOne({ where: { id: noteId, userId } });
    if (!note) return res.status(404).json({ message: "Note not found" });

    await note.destroy();
    res.json({ message: "Note deleted" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
