const UsersController = require('../controllers/UsersController');

module.exports = app => {
    app.get('/', UsersController.getUsers);
    app.post('/new', UsersController.createUser);
    app.put('/update/user/:id', UsersController.updateUser);
    app.delete('/delete/user/:id', UsersController.deleteUser);
};