const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      roleId: user.roleId,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, roleId } = req.body;

    console.log("📥 Received body:", req.body);

    const existingUser = await db.User.findOne({ where: { email } });
    if (existingUser) {
      console.log("⚠️ User already exists");
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("🔐 Password hashed");

    const user = await db.User.create({
      name,
      email,
      password: hashedPassword,
      roleId,
    });

    console.log("✅ User created with ID:", user.id);

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('❌ Register Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("🔐 Login attempt for:", email);

    const user = await db.User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user);

    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error('❌ Login Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
