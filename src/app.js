require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');
const setupSwaggerDocs = require('./config/swagger.config');


// ✅ Middleware first
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Mount routes
require('./routes/auth.routes')(app);
require('./routes/protected.routes')(app);
require('./routes/note.routes')(app);


// ✅ Mount notes route (new line)
app.use(require('./routes/note.routes')); // 👈 auto mounts /api/notes

// ✅ Swagger setup
setupSwaggerDocs(app);

// ✅ Health check
app.get('/', (req, res) => {
  res.send('User Management API working');
});

// ✅ Sync DB and insert default role
const PORT = process.env.PORT || 8000;

db.sequelize.sync({ alter: true }).then(() => {
  db.Role.findOrCreate({
    where: { name: 'Admin' } // 👈 roleId = 1
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
