const { getUsers } = require('../controllers/userController');
router.get('/', getUsers);
