// const express = require('express');
// const router = express.Router();
// const { verifyToken } = require('../middleware/auth.middleware');
// const { allowRoles } = require('../middleware/role.middleware');

// router.get('/private', verifyToken, (req, res) => {
//   res.json({ message: 'You are authenticated!', user: req.user });
// });

// router.get('/admin-only', verifyToken, allowRoles(1), (req, res) => {
//   res.json({ message: 'Welcome Admin 👑', user: req.user });
// });

// module.exports = (app) => {
//   app.use('/api/protected', router);
// };













const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth.middleware');
const { allowRoles } = require('../middleware/role.middleware');

/**
 * @swagger
 * tags:
 *   name: Protected
 *   description: Routes that require authentication
 */

/**
 * @swagger
 * /api/protected/private:
 *   get:
 *     summary: Private route (any logged-in user)
 *     tags: [Protected]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Authenticated user access
 *       401:
 *         description: Missing or invalid token
 */
router.get('/private', verifyToken, (req, res) => {
  res.json({ message: 'You are authenticated!', user: req.user });
});

/**
 * @swagger
 * /api/protected/admin-only:
 *   get:
 *     summary: Admin-only route
 *     tags: [Protected]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin access granted
 *       403:
 *         description: Access denied
 */
router.get('/admin-only', verifyToken, allowRoles(1), (req, res) => {
  res.json({ message: 'Welcome Admin 👑', user: req.user });
});

module.exports = (app) => {
  app.use('/api/protected', router);
};
